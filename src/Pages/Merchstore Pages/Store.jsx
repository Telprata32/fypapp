import { Row, Col, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Web3 from "web3";
import {
  MERCHANT_ABI,
  MERCHANT_ADDRESS,
} from "../../Contracts Configs/merchant_config.js";
import storepic from "../../Images/hobby-shop-interior.jpg";
import { useCookies } from "react-cookie";
import { useOutletContext } from "react-router-dom";

function Store() {
  //Declare states
  const [mcontract, setContract] = useState({}); //State for storing the blockchain smart contract
  const [cookies, setCookie] = useCookies(["Email"]); // State to save cookies to be used across pages
  const [blcAcc, setAccount] = useState(""); // State for storing the account address of the blockchain account in the blockchain network
  const [storename, setName] = useState(""); //State for storing the user entered store name
  const [location, setLocation] = useState(""); //State for storing the user entered location of the store

  // States inheritted from parent element via useOutletContext
  const [storeIsPressed, storePressed] = useOutletContext(); //state to keep track if the button at the bottom is pressed

  // Load the block chain before using it
  const loadBlockChain = async () => {
    // Firstly load the web3 function to load the blockchain
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const accounts = await web3.eth.getAccounts();
    const merchContract = new web3.eth.Contract(MERCHANT_ABI, MERCHANT_ADDRESS); //create an instance of the Merchant smart contract
    setContract(merchContract);
    setAccount(accounts[0]);
  };

  // Detect changes in the form and update the respective states
  const chgName = (event) => {
    setName(event.currentTarget.value);
  };

  const chgLocation = (event) => {
    setLocation(event.currentTarget.value);
  };

  // function to handle the form submit event
  const handlesubmit = () => {
    // update the account's store details in the blockchain with the new details
    mcontract.methods
      .setStore(cookies.Email, storename, location)
      .send({ from: blcAcc });

    // after everything is done, reset the storeIsPressed state to false
    storePressed(false);
  };

  // useEffect function loads the blockchain onto the website
  useEffect(() => {
    loadBlockChain();

    if (storeIsPressed) {
      handlesubmit();
    }
  });

  return (
    <Row className="mt-4 ms-3 storepage">
      <Col lg={2}>
        <Row className="justify-content-center">
          <img src={storepic} />
        </Row>
        <Row className="mt-3 justify-content-center">
          <Button>Change Photo</Button>
        </Row>
      </Col>
      <Col className="ps-5 ms-5 mt-3">
        <Form>
          <Row>
            <Col lg={3}>
              <Form.Label>Store Name</Form.Label>
            </Col>
            <Col lg={7}>
              <Form.Control onChange={chgName} type="text" value={storename} />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <Form.Label>Location</Form.Label>
            </Col>
            <Col lg={7}>
              <Form.Control
                onChange={chgLocation}
                type="text"
                value={location}
              />
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default Store;
