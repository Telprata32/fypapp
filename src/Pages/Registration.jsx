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

function Registration() {
  const navigate = useNavigate();
  const [contract, setContract] = useState({}); // State for storing the smart contract that is used for this page
  const [blcAcc, setAccount] = useState(""); // State for storing the account of the transaction owner in the blockchain
  const [userEm, setEmail] = useState(""); // state for the storing user account's email
  const [userPass, setPass] = useState(""); // state for the storing user account's password
  const [confPass, setCpass] = useState(""); // state for storing the confirmation password
  const [isExist, setExist] = useState(false); // state to keep track of whether an email entered by the user already exists
  const [isMatch, setMatch] = useState(true); // state to check if both confirmation password match the entered password

  const loadBlockChainData = async () => {
    // Firstly load the web3 function to load the blockchain
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const accounts = await web3.eth.getAccounts();
    const accContract = new web3.eth.Contract(ACCOUNTS_ABI, ACCOUNTS_ADDRESS);
    setContract(accContract);
    setAccount(accounts[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // First check if the email entered by the user already exists or not
    // 1) get the count of how many user Accounts exist in the smart contract
    console.log("before call");
    const aCount = await contract.methods.acCount().call();
    console.log("after call");

    // 2) Check if the password entered matches the confirmation password
    if (userPass !== confPass) {
      setMatch(false);
      setExist(false);
      return;
    } else {
      // 3) check through every record in the blockchain smart contract if the Email already exists
      for (let i = 1; i <= aCount; i++) {
        const tempAcc = await contract.methods.accounts(i).call();
        if (tempAcc.email === userEm) {
          setExist(true);
          setMatch(true);
          return;
        }
      }
    }

    // register the accounts into the blockchain using the smart contract's methods
    contract.methods.createAccount(userEm, userPass).send({ from: blcAcc });

    // Finally nagvigate to the home page
    navigate("/Home");
  };

  const chgEmail = (event) => {
    setEmail(event.currentTarget.value);
  };

  const chgPass = (event) => {
    setPass(event.currentTarget.value);
  };

  const chgConpass = (event) => {
    setCpass(event.currentTarget.value);
  };

  useEffect(() => {
    loadBlockChainData();
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
                onChange={chgEmail}
                type="email"
                placeholder="Enter email"
                value={userEm}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={chgPass}
                type="password"
                placeholder="Password"
                value={userPass}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={chgConpass}
                type="password"
                placeholder="Re-enter Password"
                value={confPass}
              />
            </Form.Group>
            <div>
              If you already have an account, login <Link to="/">here</Link>
            </div>
            {isExist && (
              <span style={{ color: "red" }}>
                The email address you've entered is already in use
              </span>
            )}

            {!isMatch && (
              <span style={{ color: "red" }}>
                The passwords you've entered do not match
              </span>
            )}
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
