import styled from "styled-components";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { EmailOutlined, Loyalty, Send } from "@material-ui/icons";
import axios from "axios";
import adminHeader from "../../services/admin-header";
import toast, { Toaster } from "react-hot-toast";

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 90%;
  margin-left: 15px;
`;

const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 2rem;
  color: #727272;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 15px;
`;

const SubscriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 15px;
  box-shadow: 0px 0px 10px lightgray;
  border-radius: 5px;
  height: 400px;
  overflow: auto;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-left: 15px;
  box-shadow: 0px 0px 10px lightgray;
  border-radius: 5px;
  height: 400px;
`;

const Subscription = styled.div`
  padding: 10px;
  margin-left: 10px;
`;

const EmailTitle = styled.h2`
  color: #727272;
  font-size: 1.5rem;
  font-family: "Urbanist", sans-serif;
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-left: 15px;
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

const TextArea = styled.textarea`
  padding: 10px;
  border: none;
  border-bottom: 1px solid lightgray;
  resize: none;
  font-family: "Urbanist", sans-serif;

  &:focus {
    outline: 1px solid lightpink;
  }
`;

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cc, setCc] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(cc, body);

    if (cc === "" || body === "") {
      toast.error("Rellena todos los campos");
      return;
    }

    const data = {
      subject: cc,
      body: body,
    };

    try {
      setLoading(true);
      await axios.post(
        "http://elvestidordejulietta.test/api/v1/admin/newsletter/send",
        data,
        {
          headers: adminHeader(),
        }
      );
      setLoading(false);
      toast.success("NewsLetters enviadas correctamente");
      setCc("");
      setBody("");
    } catch (error) {}
  };

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const res = await axios.get(
          "http://elvestidordejulietta.test/api/v1/admin/newsletter",
          {
            headers: adminHeader(),
          }
        );
        console.log(res);
        setSubscriptions(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubscriptions();
  }, []);

  return (
    <MainContainer>
      <Toaster />
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <TitleContainer>
          <Title>
            {" "}
            <Loyalty /> SUBSCRIPCIONES
          </Title>
        </TitleContainer>
        <InnerContainer>
          <SubscriptionsContainer>
            {subscriptions.map((subscription) => (
              <Subscription key={subscription.id}>
                <h3>Email : {subscription.email}</h3>
                <span>
                  Fecha de subscripción:{" "}
                  {new Date(subscription.created_at).toLocaleDateString(
                    "es-ES"
                  )}
                </span>
              </Subscription>
            ))}
          </SubscriptionsContainer>
          <EmailContainer>
            <EmailTitle>
              {" "}
              <EmailOutlined /> Enviar email a todos los suscriptores
            </EmailTitle>
            <Form onSubmit={handleSubmit}>
              <Input
                placeholder="Asunto"
                onChange={(e) => setCc(e.target.value)}
                value={cc}
              />
              <TextArea
                placeholder="Mensaje"
                onChange={(e) => setBody(e.target.value)}
                value={body}
              />
              <Button type="submit">
                {" "}
                {loading
                  ? "ENVIANDO CORREOS, ESPERA..."
                  : "ENVIAR CORREOS"}{" "}
                <Send />
              </Button>
            </Form>
          </EmailContainer>
        </InnerContainer>
      </DashBoardContainer>
    </MainContainer>
  );
};

export default Subscriptions;
