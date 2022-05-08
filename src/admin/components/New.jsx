import axios from "axios";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Lottie from "lottie-react";
import { storage } from "../../services/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddBoxOutlined } from "@material-ui/icons";
import upload2 from "../../lotties/upload2.json";
import adminHeader from "../../services/admin-header";

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 15px;
`;

const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 2rem;
  color: #727272;
  display: flex;
  align-items: center;
  gap: 13px;
`;

const CreateProductContainer = styled.div`
  display: flex;
  width: 90%;
  height: 700px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-left: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
`;
const FormContainer = styled.div`
  flex: 2;
`;
const DropContainer = styled.div`
  width: 80%;
  height: 200px;
`;

const UploadText = styled.span``;

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const New = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category_id: "",
    info: "",
  });

  // Ref to the file input element
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    inputRef.current.click();
  };
  // Submit the form plus the file to firebase storage
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        console.log(error);
      }
    );
    uploadTask.then((snapshot) => {
      console.log(snapshot);
      getDownloadURL(storageRef)
        .then((url) => {
          setImageUrl(url);
          console.log(url);
        })
        .then(() => {
          axios
            .post(
              "http://elvestidordejulietta.test/api/v1/products",
              {
                ...product,
                image: imageUrl,
              },
              {
                headers: adminHeader(),
              }
            )
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        });
    });
  };

  const handleSubmitCheck = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <MainContainer>
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <TitleContainer>
          <Title>
            <AddBoxOutlined />
            CREAR UN NUEVO PRODUCTO
          </Title>
        </TitleContainer>
        <CreateProductContainer>
          <ImageContainer onClick={handleFileChange}>
            {file ? (
              <PreviewImg src={URL.createObjectURL(file)} />
            ) : (
              <DropContainer>
                <Lottie animationData={upload2} loop={true} />
                <UploadText>
                  Haz click aquí para cargar una imagen. ¡Recuerda! Para que
                  encaje correctamente con el diseño de la web, la imagen debe
                  tener un formato no apaisado.
                </UploadText>
              </DropContainer>
            )}
            <input
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              type="file"
              style={{ display: "none" }}
              ref={inputRef}
            />
          </ImageContainer>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nombre del artículo"
                name="name"
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Descripción del artículo"
                name="description"
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
              />
              <input
                type="number"
                step="any"
                placeholder="Precio del artículo"
                name="price"
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />

              <select
                onChange={(e) =>
                  setProduct({ ...product, category_id: e.target.value })
                }
              >
                <option value="">Selecciona una categoría</option>
                <option value="1">Vestidos</option>
                <option value="2">Camisetas</option>
                <option value="3">Pantalones</option>
                <option value="4">Faldas</option>
                <option value="5">Calzado</option>
                <option value="6">Accesorios</option>
              </select>
              <input
                type="text"
                placeholder="Información del artículo"
                name="info"
                onChange={(e) =>
                  setProduct({ ...product, info: e.target.value })
                }
              />

              <button type="submit">CREAR ARTÍCULO</button>
            </form>
          </FormContainer>
        </CreateProductContainer>
      </DashBoardContainer>
    </MainContainer>
  );
};

export default New;
