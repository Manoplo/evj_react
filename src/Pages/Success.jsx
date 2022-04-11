import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <>
      <div>Compra realizada con éxito!</div>
      <p>
        Hemos mandado un mensaje a tu correo electrónico con los datos de la
        compra
      </p>
    </>
  );
};

export default Success;
