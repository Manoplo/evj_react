import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
import authHeader from "../services/auth-header";
import toast, { Toaster } from "react-hot-toast";
import { ArrowBackIosOutlined, Save } from "@material-ui/icons";

const FormWrapper = styled.div`
  width: 70%;

  ${mobile({
    width: "100%",
  })}
`;

const Label = styled.label``;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 50px;
  ${mobile({
    flexDirection: "column",
    gap: "20px",
  })}
`;

const FormContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 15px;
  ${mobile({
    width: "100%",
  })}
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid lightpink;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid lightpink;
  background-color: white;
  cursor: pointer;
  max-width: 40%;
  min-width: 40%;
  font-weight: 700;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  &:hover {
    background-color: lightpink;
    color: white;
  }
`;

const Error = styled.div`
  color: tomato;
  font-size: 12px;
  margin-bottom: 5px;
  display: block;
  font-family: "Urbanist", sans-serif;
  font-style: italic;
`;

const EditProfile = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [errors, setErrors] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  useEffect(() => {
    setUserInfo(user.user);
    console.log(userInfo);
  }, [user]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `http://elvestidordejulietta.test/api/v1/details/${user.user.id}`,
          {
            headers: authHeader(),
          }
        );
        setUserDetails(response.data);
        console.log(userDetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, []);

  // Check mobile

  useEffect(() => {
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 600;
      if (ismobile !== isMobile) {
        setIsMobile(ismobile);
      }
    });
  }, [isMobile]);

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      userInfo.name &&
      userInfo.lastname &&
      userInfo.email &&
      userDetails.town &&
      userDetails.cp &&
      userDetails.phone &&
      userDetails.address &&
      userDetails.province &&
      /\S+@\S+\.\S+/.test(userInfo.email) &&
      /^\d{9}$/.test(userDetails.phone) &&
      /^\d{5}$/.test(userDetails.cp)
    ) {
      try {
        const data = {
          user: userInfo,
          details: userDetails,
        };
        const response = await axios.post(
          "http://elvestidordejulietta.test/api/v1/details/",
          data,
          {
            headers: authHeader(),
          }
        );
        toast.success(
          "Datos actualizados con éxito. Algunos cambios aparecerán una vez salgas y vuelvas a iniciar sesión.",

          {
            duration: 6000,
            style: {
              border: "1px solid lightpink",
              padding: "16px",
              color: "black",
              fontFamily: "Urbanist",
            },
            iconTheme: {
              primary: "lightpink",
              secondary: "#FFFAEE",
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
        toast.error(
          "Ha habido un problema al actualizar los datos. Inténtalo de nuevo más tarde",

          {
            duration: 6000,
            style: {
              border: "1px solid lightpink",
              padding: "16px",
              color: "black",
              fontFamily: "Urbanist",
            },
            iconTheme: {
              primary: "lightpink",
              secondary: "#FFFAEE",
            },
          }
        );
      }
    } else {
      setErrors({
        name: !userInfo.name ? "El nombre es obligatorio" : null,
        lastname: !userInfo.lastname ? "El apellido es obligatorio" : null,
        email: !userInfo.email ? "El email es obligatorio" : null,
        invalidEmail: !/\S+@\S+\.\S+/.test(userInfo.email)
          ? "El email es inválido"
          : null,
        town: !userDetails.town ? "El municipio es obligatorio" : null,
        cp: !userDetails.cp ? "El código postal es obligatorio" : null,
        invalidCp: !/^\d{5}$/.test(userDetails.cp)
          ? "El código postal debe contener 5 cifras"
          : null,
        phone: !userDetails.phone ? "El teléfono es obligatorio" : null,
        invalidPhone: !/^\d{9}$/.test(userDetails.phone)
          ? "El teléfono es inválido"
          : null,
        address: !userDetails.address ? "La dirección es obligatoria" : null,
        province: !userDetails.province ? "La provincia es obligatoria" : null,
      });
    }
  };

  return (
    <>
      <h1>Edita tu información de envío:</h1>
      <FormWrapper>
        <Toaster />
        <Form onSubmit={handleSubmit}>
          <FormContainer>
            <Label>Nombre:</Label>
            <Input
              type="text"
              value={userInfo.name || ""}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
            />
            {errors.name && <Error>{errors.name}</Error>}
            <Label>Apellido:</Label>
            <Input
              type="text"
              value={userInfo.lastname || ""}
              onChange={(e) =>
                setUserInfo({ ...userInfo, lastname: e.target.value })
              }
            />
            {errors.lastname && <Error>{errors.lastname}</Error>}
            <Label>Correo:</Label>
            <Input
              type="email"
              value={userInfo.email || ""}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
            {errors.email && <Error>{errors.email}</Error>}
            {!errors.email && errors.invalidEmail && (
              <Error>{errors.invalidEmail}</Error>
            )}
            <Label>Teléfono:</Label>
            <Input
              type="text"
              value={userDetails.phone || ""}
              onChange={(e) =>
                setUserDetails({ ...userDetails, phone: e.target.value })
              }
            />
            {errors.phone && <Error>{errors.phone}</Error>}
            {!errors.phone && errors.invalidPhone && (
              <Error>{errors.invalidPhone}</Error>
            )}
            {!isMobile && (
              <ButtonsContainer>
                <Button type="submit">
                  <Save />
                  Guardar
                </Button>
                <Button onClick={() => props.closeEdit(false)}>
                  <ArrowBackIosOutlined />
                  Volver
                </Button>
              </ButtonsContainer>
            )}
          </FormContainer>
          <FormContainer>
            <Label>Dirección:</Label>
            <Input
              type="text"
              value={userDetails.address || ""}
              onChange={(e) =>
                setUserDetails({ ...userDetails, address: e.target.value })
              }
            />
            {errors.address && <Error>{errors.address}</Error>}
            <Label>Código Postal:</Label>
            <Input
              type="text"
              value={userDetails.cp || ""}
              onChange={(e) =>
                setUserDetails({ ...userDetails, cp: e.target.value })
              }
            />
            {errors.cp && <Error>{errors.cp}</Error>}
            {!errors.cp && errors.invalidCp && (
              <Error>{errors.invalidCp}</Error>
            )}
            <Label>Ciudad:</Label>
            <Input
              type="text"
              value={userDetails.town || ""}
              onChange={(e) =>
                setUserDetails({ ...userDetails, town: e.target.value })
              }
            />
            {errors.town && <Error>{errors.town}</Error>}
            <Label>Provincia:</Label>
            <Input
              type="text"
              value={userDetails.province || ""}
              onChange={(e) =>
                setUserDetails({ ...userDetails, province: e.target.value })
              }
            />
            {errors.province && <Error>{errors.province}</Error>}
            {isMobile && (
              <ButtonsContainer>
                <Button type="submit">
                  <Save />
                  Guardar
                </Button>
                <Button onClick={() => props.closeEdit(false)}>
                  <ArrowBackIosOutlined />
                  Volver
                </Button>
              </ButtonsContainer>
            )}
          </FormContainer>
        </Form>
      </FormWrapper>
    </>
  );
};

export default EditProfile;
