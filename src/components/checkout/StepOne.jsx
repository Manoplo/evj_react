import { ArrowForwardIosOutlined } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { stepTwo } from "../../app/slices/checkoutSlice";
import authHeader from "../../services/auth-header";

const Form = styled.form``;
const Input = styled.input`
  width: 96%;
  padding: 5px;
  margin-bottom: 5px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 16px;

  &:focus {
    border-bottom: 2px solid lightpink;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 10px;
  background-color: white;
  color: black;
  border: 1px solid lightpink;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    cursor: pointer;
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

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const InputField = styled.div`
  width: 45%;
`;

const InputCheckBox = styled.input``;

const CheckboxMessage = styled.span`
  font-size: 12px;
`;

const CheckboxContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StepOne = (props) => {
  /* const userData = JSON.parse(localStorage.getItem("user")) ?? null;
  console.log(userData); */

  const [user, setUser] = useState({});
  const [shipping, setShipping] = useState({});
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(true);
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.checkout);
  const auth = useSelector((state) => state.auth);
  console.log(userInfo);

  const handleOrderInformation = () => {
    if (
      user.name &&
      user.surname &&
      user.email &&
      shipping.town &&
      shipping.cp &&
      shipping.phone &&
      shipping.address &&
      shipping.province &&
      /\S+@\S+\.\S+/.test(user.email) &&
      /^\d{9}$/.test(shipping.phone) &&
      /^\d{5}$/.test(shipping.cp)
    ) {
      dispatch(stepTwo({ user, shipping }));
    } else {
      setErrors({
        name: !user.name ? "El nombre es obligatorio" : null,
        surname: !user.surname ? "El apellido es obligatorio" : null,
        email: !user.email ? "El email es obligatorio" : null,
        invalidEmail: !/\S+@\S+\.\S+/.test(user.email)
          ? "El email es inválido"
          : null,
        town: !shipping.town ? "El municipio es obligatorio" : null,
        cp: !shipping.cp ? "El código postal es obligatorio" : null,
        invalidCp: !/^\d{5}$/.test(shipping.cp)
          ? "El código postal debe contener 5 cifras"
          : null,
        phone: !shipping.phone ? "El teléfono es obligatorio" : null,
        invalidPhone: !/^\d{9}$/.test(shipping.phone)
          ? "El teléfono es inválido"
          : null,
        address: !shipping.address ? "La dirección es obligatoria" : null,
        province: !shipping.province ? "La provincia es obligatoria" : null,
      });
    }
  };

  const handleCheckBoxChange = async (e) => {
    setIsChecked(!isChecked);
    if (isChecked) {
      const response = await axios(
        `http://167.99.221.113/api/v1/details/all/${auth.user.user.id}`,
        {
          headers: authHeader(),
        }
      );
      setUser({
        name: response.data.user.name,
        surname: response.data.user.lastname,
        email: response.data.user.email,
      });
      setShipping({
        phone: response.data.details.phone,
        address: response.data.details.address,
        town: response.data.details.town,
        cp: response.data.details.cp,
        province: response.data.details.province,
      });
    } else {
      setUser({});
      setShipping({});
    }
  };

  useEffect(() => {
    // If user exists, api call to retrieve shipment info.
  }, []);

  return (
    <>
      <div>INTRODUCE TUS DATOS DE ENVÍO</div>
      <InputRow>
        <InputField>
          <Input
            type="text"
            placeholder="Nombre"
            value={user.name || ""}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
          {errors.name && <Error>{errors.name}</Error>}
        </InputField>
        <InputField>
          <Input
            type="text"
            placeholder="Apellidos"
            value={user.surname || ""}
            onChange={(e) => {
              setUser({ ...user, surname: e.target.value });
            }}
          />
          {errors.surname && <Error>{errors.surname}</Error>}
        </InputField>
      </InputRow>
      <InputRow>
        <InputField>
          <Input
            type="email"
            placeholder="Email"
            value={user.email || ""}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          {errors.email && <Error>{errors.email}</Error>}
          {!errors.email && errors.invalidEmail && (
            <Error>{errors.invalidEmail}</Error>
          )}
        </InputField>
        <InputField>
          <Input
            type="text"
            placeholder="Teléfono"
            value={shipping.phone || ""}
            onChange={(e) => {
              setShipping({ ...shipping, phone: e.target.value });
            }}
          />
          {errors.phone && <Error>{errors.phone}</Error>}
          {!errors.phone && errors.invalidPhone && (
            <Error>{errors.invalidPhone}</Error>
          )}
        </InputField>
      </InputRow>
      <InputRow>
        <InputField>
          <Input
            type="text"
            placeholder="Dirección"
            value={shipping.address || ""}
            onChange={(e) => {
              setShipping({ ...shipping, address: e.target.value });
            }}
          />
          {errors.address && <Error>{errors.address}</Error>}
        </InputField>
        <InputField>
          <Input
            type="text"
            placeholder="Código Postal"
            value={shipping.cp || ""}
            onChange={(e) => {
              setShipping({ ...shipping, cp: e.target.value });
            }}
          />
          {errors.cp && <Error>{errors.cp}</Error>}
          {!errors.cp && errors.invalidCp && <Error>{errors.invalidCp}</Error>}
        </InputField>
      </InputRow>
      <InputRow>
        <InputField>
          <Input
            type="text"
            placeholder="Localidad"
            value={shipping.town || ""}
            onChange={(e) => {
              setShipping({ ...shipping, town: e.target.value });
            }}
          />
          {errors.town && <Error>{errors.town}</Error>}
        </InputField>
        <InputField>
          <Input
            type="text"
            placeholder="Provincia"
            value={shipping.province || ""}
            onChange={(e) => {
              setShipping({ ...shipping, province: e.target.value });
            }}
          />
          {errors.province && <Error>{errors.province}</Error>}
        </InputField>
      </InputRow>
      <ButtonRow>
        {auth.isLoggedIn && (
          <>
            <CheckboxContainer>
              <InputCheckBox type="checkbox" onChange={handleCheckBoxChange} />
              <CheckboxMessage>USAR MIS DATOS DE ENVÍO.</CheckboxMessage>
            </CheckboxContainer>
          </>
        )}
        <Button onClick={handleOrderInformation}>
          SIGUIENTE <ArrowForwardIosOutlined />
        </Button>
      </ButtonRow>
    </>
  );
};

export default StepOne;
