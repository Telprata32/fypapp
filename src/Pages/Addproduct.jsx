import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Web3 from "web3";
import { useCookies } from "react-cookie";
import {
  MERCHANT_ABI,
  MERCHANT_ADDRESS,
} from "../Contracts Configs/merchant_config.js";
import { useEffect, useState } from "react";
import placeholder from "../Images/placeholder-image.png";

function Addproduct() {
  // Load cookies to get the Storename of the current account
  const [cookie] = useCookies(["Storename"]);

  // Declare states
  const [mcontract, setContract] = useState({}); //State for storing the Merchant related blockchain smart contract
  const [blcAcc, setAccount] = useState(""); // State for storing the account address of the blockchain account in the blockchain network
  // States for storing changes in the form inputs/contrals
  const [pname, setName] = useState(""); // Product name
  const [category, setCat] = useState("Toys and Hobbies"); // Product Category
  const [price, setPrice] = useState(0); // Product price
  const [stock, setStock] = useState(0); // Product stock
  const [description, setDesc] = useState(""); // Product description

  // Load the block chain before using it
  const loadBlockChain = async () => {
    // Firstly load the web3 function to load the blockchain
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const accounts = await web3.eth.getAccounts();
    const merchContract = new web3.eth.Contract(MERCHANT_ABI, MERCHANT_ADDRESS); //create an instance of the Merchant smart contract
    setContract(merchContract);
    setAccount(accounts[0]);
  };

  // Function to submit the form inputs to the blockchain
  const handleSubmit = async (event) => {
    event.preventDefault();

    const prArray = price.split("."); //This array is used to whole both the whole number and the floating number of the price

    mcontract.methods
      .addProduct(
        pname,
        category,
        prArray[0],
        prArray[1],
        stock,
        description,
        cookie.Storename
      )
      .send({ from: blcAcc });

    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };

  useEffect(() => {
    //Upon rendering page, load the blockchain
    loadBlockChain();
  });

  return (
    <Container
      className="addprod"
      style={{ width: "1081px", marginTop: "157px" }}
    >
      <Container className="box" style={{ height: "452px" }}>
        <Row>
          <Col lg={4}>
            <Row>
              <img
                style={{
                  height: "145px",
                  width: "165px",
                  border: "solid grey 1px",
                }}
                src={placeholder}
              />
            </Row>
            <Row>
              <Button style={{ width: "165px", borderRadius: "0px" }}>
                Add Photo
              </Button>
            </Row>
          </Col>
          <Col>
            <Form>
              <Row>
                <Col lg={4}>
                  <Form.Label>Product Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    onChange={(event) => {
                      setName(event.currentTarget.value);
                    }}
                    value={pname}
                    type="text"
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={4}>
                  <Form.Label>Category</Form.Label>
                </Col>
                <Col>
                  <Form.Select
                    onChange={(event) => {
                      setCat(event.currentTarget.value);
                    }}
                    value={category}
                  >
                    <option>Toys and Hobbies</option>
                    <option>Fashion</option>
                    <option>Home Appliances</option>
                    <option>Electronics</option>
                    <option>Fitness</option>
                    <option>Maternity</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={4}>
                  <Form.Label>Price</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    onChange={(event) => {
                      setPrice(event.currentTarget.value);
                    }}
                    value={price}
                    step="0.10"
                    type="number"
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={4}>
                  <Form.Label>Initial Stock</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    onChange={(event) => {
                      setStock(event.currentTarget.value);
                    }}
                    value={stock}
                    type="number"
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={4}>
                  <Form.Label>Description</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    onChange={(event) => {
                      setDesc(event.currentTarget.value);
                    }}
                    value={description}
                    as="textarea"
                    rows="6"
                    type="text"
                  />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Row className="mt-4 d-grid justify-content-md-end">
        <Col>
          <Button onClick={handleSubmit}>Save</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Addproduct;
