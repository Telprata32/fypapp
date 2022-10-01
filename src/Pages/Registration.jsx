import shopimg from "../Images/Shopping_edited.jpg";
import logo from "../Images/appLogo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Button,
  Col,
  Form,
  Image,
  Stack,
} from "react-bootstrap";
import "../App.css";
import {
  ACCOUNTS_ABI,
  ACCOUNTS_ADDRESS,
} from "../Contracts Configs/accounts_config.js";
import Web3 from "web3";

function Registration() {
  let navigate = useNavigate();
  let [userEm, setEmail] = useState(""); // state for the storing the user account's email
  let [userPass, setPass] = useState(""); // state for the storing the user account's password

  function handleSubmit(email, pass) {
    // Firstly load the web3 function to load the blockchain
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const accContract = Web3.eth.Contract(ACCOUNTS_ABI, ACCOUNTS_ADDRESS);

    // Now register the accounts into the blockchain using the smart contract's methods

    // Finally nagvigate to the home page
    navigate("/Home");
  }

  const loadBlockChain = async () => {};

  return (
    <Container
      fluid
      className="vh-100"
      style={{
        backgroundImage: `url(${shopimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "600px",
      }}
    >
      <Row className="h-100 py-4">
        <Col
          xs="4"
          className="mx-auto pt-4 px-4 pb-4"
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
          }}
        >
          <div className="text-center img-container logo">
            <Image src={logo} />
          </div>
          <Form
            style={{ display: "inlineBlock" }}
            className="h-76 mt-2 pt-5 px-5"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Re-enter Password" />
            </Form.Group>
            <Stack
              gap="2"
              className="pt-4 mt-5 w-100 float-end align-bottom hstack gap-2"
              direction="horizontal"
            >
              <Button className="float-start btn-danger">
                Forgot Password
              </Button>
              <Button
                className="ms-auto btn-color-orange"
                onClick={handleSubmit}
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#FEB272" }}
              >
                Register
              </Button>
            </Stack>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Registration;
