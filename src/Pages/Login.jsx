import shopimg from "../Images/Shopping_edited.jpg";
import logo from "../Images/appLogo.svg";
import { Link, useNavigate } from "react-router-dom";
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
import { useCookies } from "react-cookie";

function Login() {
  //States for use throughout this page
  const [contract, setContract] = useState({}); //State for storing the blockchain smart contract
  const [usMail, setMail] = useState(""); // State to store the email entered by the user
  const [userPass, setPass] = useState(""); // state for the storing user account's password
  const [isValid, setValid] = useState(true); // Boolean to check if the credentials entered by user are valid

  // function to navigate to pages on command
  let navigate = useNavigate();

  // Function to save cookies to be used across
  const [cookies, setCookie] = useCookies(["Email"]);

  function chgSession(newMail) {
    setCookie("Email", newMail, { path: "/" });
  }

  // Load the block chain before using it
  const loadBlockChain = async () => {
    // Firstly load the web3 function to load the blockchain
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const accContract = new web3.eth.Contract(ACCOUNTS_ABI, ACCOUNTS_ADDRESS);
    setContract(accContract);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Get the count of accounts available first
    const aCount = await contract.methods.acCount().call();

    for (let i = 1; i <= aCount; i++) {
      const tmAcc = await contract.methods.accounts(i).call();
      if (tmAcc.email === usMail && tmAcc.psWord === userPass) {
        chgSession(usMail);
        navigate("/Home");
      }
    }
    setValid(false);
  };

  const chgMail = (event) => {
    setMail(event.currentTarget.value);
  };

  const chgPass = (event) => {
    setPass(event.currentTarget.value);
  };

  useEffect(() => {
    loadBlockChain();
  });

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
            onSubmit={handleSubmit}
            style={{ display: "inlineBlock" }}
            className="h-76 mt-2 pt-5 px-5"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={usMail}
                onChange={chgMail}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={userPass}
                onChange={chgPass}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <div>
              If you don't have an account, click{" "}
              <Link to="/registration">here</Link>
            </div>
            {!isValid && (
              <span style={{ color: "red" }}>
                {" "}
                The email and password entered are incorrect ! Please try again
              </span>
            )}
            <Stack
              gap="2"
              className="pt-4 mt-3 w-100 float-end align-bottom hstack gap-2"
              direction="horizontal"
            >
              <Button className="float-start btn-danger">
                Forgot Password
              </Button>
              <Button
                className="ms-auto btn-color-orange"
                variant="primary"
                onClick={handleSubmit}
                type="submit"
                style={{ backgroundColor: "#FEB272", borderColor: "#FEB272" }}
              >
                Login
              </Button>
            </Stack>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
