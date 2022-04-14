import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Success = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    // Si no existe el user auth en el localstorage, mandamos el objeto userInfo y se almacena en un endpoint para usuarios no registrados
    if (!user) {
      axios
        .post(
          "http://elvestidordejulietta.test/api/v1/orders/unregistered",
          userInfo
        )
        .then((res) => {
          console.log(res.data);
          localStorage.removeItem("userInfo");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    }
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
