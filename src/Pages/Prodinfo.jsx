import "../App.css";
import phone from "../Images/phone.jpeg";
import { Col, Row, Container, Button } from "react-bootstrap";
import InputSpinner from "react-bootstrap-input-spinner";
import stricon from "../Images/store-icon.svg";
import profpic from "../Images/istockphoto-1270067126-612x612.jpg";
import futsal from "../Images/futsal.png";
import fashion from "../Images/fashion2015.jpg";
import babyprod from "../Images/babyprod.jpg";
import toys from "../Images/toys.jpg";
import idImg from "../Images/home.jpeg";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Web3 from "web3";
import {
  MERCHANT_ABI,
  MERCHANT_ADDRESS,
} from "../Contracts Configs/merchant_config.js";
import {
  ACCOUNTS_ABI,
  ACCOUNTS_ADDRESS,
} from "../Contracts Configs/accounts_config.js";

// Function to decide the picture based on the category of the product
function ChooseImg(props) {
  switch (props.category) {
    case "Toys and Hobbies":
      return (
        <img
          style={{ overflow: "hidden" }}
          className="h-100 img-fluid mx-auto d-block"
          src={toys}
        />
      );
      break;
    case "Fashion":
      return (
        <img
          style={{ overflow: "hidden" }}
          className="h-100 img-fluid mx-auto d-block"
          src={fashion}
        />
      );
      break;
    case "Home Appliances":
      return (
        <img
          style={{ overflow: "hidden" }}
          className="h-100 img-fluid mx-auto d-block"
          src={idImg}
        />
      );
      break;
    case "Electronics":
      return (
        <img
          style={{ overflow: "hidden" }}
          className="h-100 img-fluid mx-auto d-block"
          src={phone}
        />
      );
      break;
    case "Fitness":
      return (
        <img
          style={{ overflow: "hidden" }}
          className="h-100 img-fluid mx-auto d-block"
          src={futsal}
        />
      );
      break;
    case "Maternity":
      return (
        <img
          style={{ overflow: "hidden" }}
          className="h-100 img-fluid mx-auto d-block"
          src={babyprod}
        />
      );
      break;
  }
}

function Prodinfo() {
  // Declare the cookies necessary to use for this page
  const [cookie] = useCookies(["Prodselect", "Email"]); // "Prodselect": Holds the product name of the selected product as reference here
  // Declare states here to be used
  const [mcontract, setMerchContract] = useState({}); // Store instance of the Merchant smart contract
  const [acontract, setaContract] = useState({}); // Store instance of the Accounts smart contract
  const [product, setProduct] = useState({}); // Store the info of the product in this state
  const [quantity, setQuant] = useState(0); // Stores the quantity of the product being purchased by the customer
  const [blcAcc, setAccount] = useState(""); // State for storing the account address of the blockchain account in the blockchain network

  // load the blockchain first
  const loadBlockChain = async () => {
    // Firstly load the web3 function to load the blockchain
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const accounts = await web3.eth.getAccounts();
    const merchContract = new web3.eth.Contract(MERCHANT_ABI, MERCHANT_ADDRESS);
    setMerchContract(merchContract);
    const accContract = new web3.eth.Contract(ACCOUNTS_ABI, ACCOUNTS_ADDRESS);
    setaContract(accContract);
    setAccount(accounts[0]);
  };

  // Get the respective product's info from the blockchain
  const getProduct = async () => {
    // First get the count of the number of products in the blockchain
    const count = await mcontract.methods.prodCount().call();

    // Iterate through every product and retrieve the product selected (by matching the product name with the cookie)
    for (let i = 1; i <= count; i++) {
      const tempProd = await mcontract.methods.products(i).call();
      if (tempProd.prodName === cookie.Prodselect) {
        setProduct(tempProd); //Save the product to the state
        break;
      }
    }
  };

  // Purchase product and add it to the account's cart
  const buyProduct = async () => {
    //save the purchase of the product to the blockchain
    acontract.methods
      .buyProduct(product.prodName, product.price, quantity, cookie.Email)
      .send({ from: blcAcc });
  };

  useEffect(() => {
    loadBlockChain();
    getProduct();
  });

  return (
    <Container
      className="prodinfo"
      style={{ marginTop: "157px", marginInline: "120px" }}
    >
      <Row>
        <Col style={{ height: "371px" }}>
          <ChooseImg category={product.category} />
        </Col>
        <Col className="ms-5">
          <h1 className="text-capitalize">{product.prodName}</h1>
          <h1 style={{ color: "#FD9843" }}>
            RM {product.price}.{product.prFloat}
          </h1>
          <Row className="mt-3">
            <Col style={{ display: "flex", alignItems: "center" }} lg="2">
              <span style={{ fontSize: "19px" }} className="align-middle">
                Quantity
              </span>
            </Col>
            <Col lg="3">
              <InputSpinner
                onChange={(event) => {
                  setQuant(event);
                }}
                type={"int"}
                precision={0}
                max={product.stock}
                min={0}
                step={1}
              />
            </Col>
            <Col
              style={{ lineHeight: "38px", fontSize: "14px" }}
              className="text-muted"
            >
              {product.stock} in stock
            </Col>
          </Row>

          <Row style={{ marginTop: "90px" }}>
            <Col>
              <Button
                onClick={buyProduct}
                style={{
                  width: "213px",
                  backgroundColor: "#FD9843",
                  borderColor: "#FD9843",
                }}
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg="1">
              <Button
                style={{
                  width: "38px",
                  backgroundColor: "#FD9843",
                  borderColor: "#FD9843",
                }}
              >
                <img style={{ width: "16px" }} src={stricon} />
              </Button>
            </Col>
            <Col style={{ display: "flex" }} lg="3">
              <span
                style={{ display: "flex", alignSelf: "flex-end" }}
                className="fs-5"
              >
                {product.storeName}
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ marginTop: "61px" }}>
        <Col>
          <h4>Product Description</h4>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p className="ps-3 pt-2 pb-5" style={{ border: "solid grey 1.5px" }}>
            {product.desc}
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h4>Reviews</h4>
        </Col>
      </Row>

      {/*  This part is for the review section */}
      <Row className="mt-4">
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Prodinfo;
