import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { LockOpenOutlined, Policy, Settings } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import adminHeader from "../../services/admin-header";
import toast, { Toaster } from "react-hot-toast";

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;

const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 2rem;
  color: #727272;
  margin-left: 15px;
`;

const TitleSmall = styled.h2`
  font-family: "Urbanist", sans-serif;
  font-size: 1rem;
  color: #727272;
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  gap: 25px;
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
  width: 50%;
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

const ChangePasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 250px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 0 0 25px;
`;
const CreateAdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 25px 0 0 25px;
`;

const Options = () => {
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminConfirmPassword, setAdminConfirmPassword] = useState("");

  const admin = JSON.parse(sessionStorage.getItem("admin"));

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    console.log(newPassword, confirmPassword);

    if (newPassword !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }
    if (!newPassword || !confirmPassword) {
      toast.error("Por favor llena todos los campos");
      return;
    }

    try {
      const response = await axios.post(
        "http://167.99.221.113/api/v1/admin/password",
        {
          id: admin?.admin?.id,
          password: newPassword,
        },
        {
          headers: adminHeader(),
        }
      );
      console.log(response);

      if (response.status === 204) {
        toast.success("Contraseña cambiada correctamente");
        setNewPassword(null);
        setConfirmPassword(null);
      } else {
        toast.error("La contraseña que introdujiste no es correcta");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAdminCreation = async (e) => {
    e.preventDefault();

    console.log(adminEmail, adminPassword, adminConfirmPassword);

    if (adminPassword !== adminConfirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }
    if (!adminPassword || !adminConfirmPassword || !adminEmail) {
      toast.error("Por favor llena todos los campos");
      return;
    }

    try {
      const response = await axios.post(
        "http://167.99.221.113/api/v1/admin/create",
        {
          email: adminEmail,
          password: adminPassword,
        },
        {
          headers: adminHeader(),
        }
      );
      console.log(response);

      if (response.status === 201) {
        toast.success("Nuevo administrador añadido con éxito");
        setAdminPassword(null);
        setAdminConfirmPassword(null);
        setAdminEmail(null);
      } else {
        toast.error(
          "Ha habido algún problema creando el administrador. ¿Estás seguro que no existe ese correo?"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(admin);

  return (
    <MainContainer>
      <Toaster />
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <Title>
          <Settings /> OPCIONES
        </Title>
        <ChangePasswordContainer>
          <TitleSmall>
            {" "}
            <LockOpenOutlined /> Cambiar contraseña
          </TitleSmall>
          <Form onSubmit={handlePasswordChange}>
            <Input
              type="password"
              placeholder="Nueva contraseña"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirmar contraseña"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit">Cambiar contraseña</Button>
          </Form>
        </ChangePasswordContainer>
        <CreateAdminContainer>
          <TitleSmall>
            {" "}
            <Policy /> Añadir administrador
          </TitleSmall>
          <Form onSubmit={handleAdminCreation}>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setAdminEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setAdminPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirmar contraseña"
              onChange={(e) => setAdminConfirmPassword(e.target.value)}
            />
            <Button type="submit">Añadir administrador</Button>
          </Form>
        </CreateAdminContainer>
      </DashBoardContainer>
    </MainContainer>
  );
};

export default Options;
