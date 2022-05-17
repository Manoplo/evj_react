import styled from "styled-components";
import { storage } from "../../services/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import adminHeader from "../../services/admin-header";

import { CheckCircle, CloudUpload, SaveOutlined } from "@material-ui/icons";
import { ClipLoader } from "react-spinners";

const FirstRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  /* border: 1px solid lightpink; */
  border-radius: 5px;
  width: 95%;
  height: 50vh;
  margin: 25px auto;
  gap: 10px;
`;

const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 2rem;
  color: #727272;
  margin-left: 40px;
`;

const Span = styled.span`
  font-family: "Urbanist", sans-serif;
  font-size: 12px;
  color: #727272;
  margin-left: 40px;
`;

const SliderContainer = styled.div`
  display: flex;
  flex: 1;

  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  justify-content: center;
  padding: 20px;
`;

const Image = styled.img`
  height: 100%;
  max-width: 80%;
  object-fit: cover;
`;

const FormContainer = styled.div`
  display: flex;
  width: 95%;
  margin: 20px auto;
`;

const Form = styled.form`
  display: flex;
  gap: 15px;
`;

const ButtonRow = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  justify-content: flex-start;
  margin-top: -20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 10px;
`;
const Button = styled.button`
  background: lightpink;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 5px;
  height: 50px;
  width: 40%;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background: lightcoral;
    color: white;
  }
`;

const Hr = styled.hr`
  border: 1px solid lighgray;
`;

const SliderRow = ({ id, title }) => {
  const [loading, setLoading] = useState(false);
  const [slider, setSlider] = useState(null);
  const [fetchedRow, setFetchedRow] = useState(null);
  const [firstSlider, setFirstSlider] = useState(null);
  const [firstSliderUrl, setFirstSliderUrl] = useState(null);
  const [secondSlider, setSecondSlider] = useState(null);
  const [secondSliderUrl, setSecondSliderUrl] = useState(null);
  const [thirdSlider, setThirdSlider] = useState(null);
  const [thirdSliderUrl, setThirdSliderUrl] = useState(null);
  const [selectValue, setSelectValue] = useState("");
  const [nameOfRow, setNameOfRow] = useState("");
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);

  const handleFirst = (e) => {
    inputRef.current.click();
  };

  const uploadFirst = (e) => {
    if (!firstSlider) {
      toast.error("Selecciona una imagen diferente");
      return;
    }

    setLoading(true);

    const storageRef = ref(storage, `sliders/${firstSlider.name}`);
    const uploadTask = uploadBytesResumable(storageRef, firstSlider);

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
          setFirstSliderUrl(url);
          setLoading(false);
          toast.success("Imagen cargada");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handleSecond = (e) => {
    secondInputRef.current.click();
  };

  const uploadSecond = (e) => {
    if (!secondSlider) {
      toast.error("Selecciona una imagen diferente");
      return;
    }

    setLoading(true);

    const storageRef = ref(storage, `sliders/${secondSlider.name}`);
    const uploadTask = uploadBytesResumable(storageRef, secondSlider);

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
          setSecondSliderUrl(url);
          setLoading(false);
          toast.success("Imagen cargada");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handleThird = (e) => {
    thirdInputRef.current.click();
  };

  const uploadThird = (e) => {
    if (!thirdSlider) {
      toast.error("Selecciona una imagen diferente");
      return;
    }

    setLoading(true);

    const storageRef = ref(storage, `sliders/${thirdSlider.name}`);
    const uploadTask = uploadBytesResumable(storageRef, thirdSlider);

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
          setThirdSliderUrl(url);
          setLoading(false);
          toast.success("Imagen cargada");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(selectValue, nameOfRow);

    if (!selectValue || !nameOfRow) {
      toast.error("Por favor, rellena todos os campos");
      return;
    }

    setSlider({
      id: id,
      title: nameOfRow,
      category: selectValue,
      first_image: firstSliderUrl,
      second_image: secondSliderUrl,
      third_image: thirdSliderUrl,
    });
  };

  useEffect(() => {
    if (slider) {
      setLoading(true);
      axios
        .post(
          "http://167.99.221.113/api/v1/admin/sliders",
          {
            ...slider,
          },
          {
            headers: adminHeader(),
          }
        )
        .then((res) => {
          console.log(res);
          setLoading(false);
          toast.success("Slider actualizado");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          toast.error("Error al actualizar el slider");
        });
    }
  }, [slider]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        "http://167.99.221.113/api/v1/admin/sliders/" + id
      );
      console.log(response);
      setFetchedRow(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Toaster />

      <Title>{title}</Title>
      <Span>
        Instrucciones: Para cambiar las imágenes, primero pincha sobre una de
        ellas y luego presiona el botón de "Cargar imagen" de las imagenes que
        desees cambiar. Cuando las imágenes estén guardadas, dale un nombre a la
        fila, elige un link y presiona el botón "GUARDAR TODO".
      </Span>
      <FirstRowContainer>
        <SliderContainer onClick={handleFirst}>
          <Image
            src={
              firstSlider
                ? URL.createObjectURL(firstSlider)
                : fetchedRow?.first_image
            }
          />

          <input
            ref={inputRef}
            onChange={(e) => setFirstSlider(e.target.files[0])}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
        </SliderContainer>

        <SliderContainer onClick={handleSecond}>
          <Image
            src={
              secondSlider
                ? URL.createObjectURL(secondSlider)
                : fetchedRow?.second_image
            }
          />
          <input
            ref={secondInputRef}
            onChange={(e) => setSecondSlider(e.target.files[0])}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
        </SliderContainer>
        <SliderContainer onClick={handleThird}>
          <Image
            src={
              thirdSlider
                ? URL.createObjectURL(thirdSlider)
                : fetchedRow?.third_image
            }
          />
          <input
            ref={thirdInputRef}
            onChange={(e) => setThirdSlider(e.target.files[0])}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
        </SliderContainer>
      </FirstRowContainer>
      <ButtonRow>
        <ButtonContainer>
          <Button onClick={uploadFirst}>
            {loading ? <ClipLoader /> : "Cargar primera imagen"}
            <CloudUpload />
          </Button>{" "}
          {firstSliderUrl && (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "green",
                gap: "5px",
              }}
            >
              Imagen cargada <CheckCircle />{" "}
            </span>
          )}
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={uploadSecond}>
            {loading ? <ClipLoader /> : "Cargar segunda imagen"}
            <CloudUpload />
          </Button>
          {secondSliderUrl && (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "green",
                gap: "5px",
              }}
            >
              Imagen cargada <CheckCircle />{" "}
            </span>
          )}
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={uploadThird}>
            {loading ? <ClipLoader /> : "Cargar tercera imagen"}
            <CloudUpload />
          </Button>
          {thirdSliderUrl && (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "green",
                gap: "5px",
              }}
            >
              Imagen cargada <CheckCircle />{" "}
            </span>
          )}
        </ButtonContainer>
      </ButtonRow>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de la fila"
            onChange={(e) => setNameOfRow(e.target.value)}
          />
          <select onChange={(e) => setSelectValue(e.target.value)}>
            <option selected={true} disabled="disabled">
              Elige link al clickar sobre las imágenes
            </option>
            <option value="vestidos">Vestidos</option>
            <option value="camisetas">Camisetas</option>
            <option value="pantalones">Pantalones</option>
            <option value="faldas">Faldas</option>
            <option value="calzado">Calzado</option>
            <option value="accesorios">Accesorios</option>
          </select>
          <Button type="submit">
            {loading ? "Guardando datos..." : "GUARDAR TODO"}
            <SaveOutlined />
          </Button>
        </Form>
      </FormContainer>
      <Hr />
    </>
  );
};

export default SliderRow;
