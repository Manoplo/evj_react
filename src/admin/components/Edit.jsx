import axios from "axios";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { storage } from "../../services/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditOutlined } from "@material-ui/icons";
import adminHeader from "../../services/admin-header";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";

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
  position: relative;
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
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const DropContainer = styled.div`
  width: 80%;
  height: 200px;
`;

const InputPrice = styled.input`
  width: 10%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid lightgray;

  &:focus {
    outline: none;
    border-bottom: 2px solid lightpink;
  }
`;
const InputName = styled.input`
  width: 30%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid lightgray;

  &:focus {
    outline: none;
    border-bottom: 2px solid lightpink;
  }
`;

const Select = styled.select`
  width: 30%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

const UploadText = styled.span``;

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid lightgray;

  &:focus {
    outline: none;
    border-bottom: 2px solid lightpink;
  }
`;

const Button = styled.button`
  background: lightpink;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 5px;
  height: 50px;
  width: 20%;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background: lightcoral;
    color: white;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  margin-top: 30px;
`;

const InfoText = styled.span`
  font-size: 12px;
  color: gray;
`;

const LoadingContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.5);
`;

const Edit = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  // Ref to the file input element
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    inputRef.current.click();
  };
  // Submit the form plus the file to firebase storage
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !product.name ||
      !product.description ||
      !product.price ||
      !product.category_id
    ) {
      toast.error("Por favor, rellena todos los campos");
      return;
    }

    if (!file) {
      const postProduct = async () => {
        try {
          const response = await axios.post(
            "http://elvestidordejulietta.test/api/v1/admin/products/update/" +
              productId,
            {
              ...product,
            },
            {
              headers: adminHeader(),
            }
          );
          console.log(response);
          setLoading(false);
          toast.success("Producto actualizado correctamente");
          setTimeout(() => {
            navigate("/admin/dashboard/products");
          }, 2000);
        } catch (error) {
          console.log(error);
          setLoading(false);
          toast.error("Error al actualizar el producto");
        }
      };

      setLoading(true);
      postProduct();
    } else {
      setLoading(true);

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
          .catch((error) => {
            console.log(error);
          });
      });
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://elvestidordejulietta.test/api/v1/admin/products/" + productId,
          {
            headers: adminHeader(),
          }
        );
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (!imageUrl) {
      return;
    }

    const postProduct = async () => {
      try {
        const response = await axios.post(
          "http://elvestidordejulietta.test/api/v1/admin/products/update/" +
            productId,
          {
            ...product,
            image: imageUrl,
          },
          {
            headers: adminHeader(),
          }
        );
        console.log(response);
        setLoading(false);
        toast.success("Producto actualizado correctamente");
        setTimeout(() => {
          navigate("/admin/dashboard/products");
        }, 2000);
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error("Error al actualizar el producto");
      }
    };

    postProduct();
  }, [imageUrl]);

  return (
    <MainContainer>
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <Toaster />
        <TitleContainer>
          <Title>
            <EditOutlined />
            EDITAR EL PRODUCTO
          </Title>
        </TitleContainer>

        {loading && (
          <LoadingContainer>
            <ClipLoader color="white" /> Subiendo producto...
          </LoadingContainer>
        )}
        <CreateProductContainer>
          <ImageContainer onClick={handleFileChange}>
            <PreviewImg
              src={file ? URL.createObjectURL(file) : product?.image}
            />

            <Input
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={inputRef}
            />
          </ImageContainer>
          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <InputName
                type="text"
                placeholder="Nombre del artículo"
                name="name"
                value={product?.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
              <Input
                type="text"
                placeholder="Descripción del artículo"
                name="description"
                value={product?.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
              />
              <InputPrice
                type="number"
                step="any"
                min={0}
                placeholder="Precio"
                name="price"
                value={product?.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />

              <Select
                onChange={(e) =>
                  setProduct({ ...product, category_id: e.target.value })
                }
              >
                <option selected={true} disabled="disabled">
                  Selecciona una categoría
                </option>
                <option value="1">Vestidos</option>
                <option value="2">Camisetas</option>
                <option value="3">Pantalones</option>
                <option value="4">Faldas</option>
                <option value="5">Calzado</option>
                <option value="6">Accesorios</option>
              </Select>
              <Input
                type="text"
                placeholder="Información del artículo"
                name="info"
                value={product?.info}
                onChange={(e) =>
                  setProduct({ ...product, info: e.target.value })
                }
              />

              <Button type="submit">
                EDITAR ARTÍCULO
                <EditOutlined />
              </Button>
            </Form>
            <InfoContainer>
              <InfoText>
                Recuerda: Todos los campos son <b> obligatorios </b>excepto el
                campo sobre información del artículo. El producto <u>debe</u>{" "}
                contener un formato válido en estos campos además de la imagen
                para completar la subida.
              </InfoText>
            </InfoContainer>
          </FormContainer>
        </CreateProductContainer>
      </DashBoardContainer>
    </MainContainer>
  );
};

export default Edit;
