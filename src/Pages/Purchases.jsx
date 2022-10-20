import { Row, Col, Container, Button, Modal, Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useState, useEffect, useRef } from "react";
import Web3 from "web3";
import {
  ACCOUNTS_ABI,
  ACCOUNTS_ADDRESS,
} from "../Contracts Configs/accounts_config.js";
import futsal from "../Images/futsal.png";
import fashion from "../Images/fashion2015.jpg";
import {
  MERCHANT_ABI,
  MERCHANT_ADDRESS,
} from "../Contracts Configs/merchant_config.js";
import babyprod from "../Images/babyprod.jpg";
import toys from "../Images/toys.jpg";
import idImg from "../Images/home.jpeg";
import phone from "../Images/phone.jpeg";
import { execPath } from "process";

function ChooseImg(props) {
  switch (props.category) {
    case "Toys and Hobbies":
      return <img style={{ height: "74px", width: "114px" }} src={toys} />;
      break;
    case "Fashion":
      return <img style={{ height: "74px", width: "114px" }} src={fashion} />;
      break;
    case "Home Appliances":
      return <img style={{ height: "74px", width: "114px" }} src={idImg} />;
      break;
    case "Electronics":
      return <img style={{ height: "74px", width: "114px" }} src={phone} />;
      break;
    case "Fitness":
      return <img style={{ height: "74px", width: "114px" }} src={futsal} />;
      break;
    case "Maternity":
      return <img style={{ height: "74px", width: "114px" }} src={babyprod} />;
      break;
  }
}

function Purchases() {
  // Get relevant cookies first
  const [cookie] = useCookies(["Email"]);
  // Declare states here
  const [prodArr, setArr] = useState([]); // Array to hold all the products being sold by current account's store
  const [mcontract, setMerchContract] = useState({}); // Store instance of the Merchant smart contract
  const [acontract, setContract] = useState({}); //State for storing the Merchant related blockchain smart contract
  const [modalShow, setModalShow] = useState(false); // Stores the state of the modal being shown or not, state will trigger modal on or off
  const [blcAcc, setAccount] = useState(""); // State for storing the account address of the blockchain account in the blockchain network
  const revRef = useRef(""); // Use Reference to point to this input field as the review that will be submitted to the addReview function

  //Prepared a modal render function: modal is to allow user to enter their review upon clicking the review button
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {console.log(props.prodid)}
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add a Review
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows="10"
                type="text"
                placeholder="Type in review"
                ref={revRef}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={props.onHide}
            style={{ backgroundColor: "red", borderColor: "red" }}
          >
            Close
          </Button>
          <Button
            style={{ backgroundColor: "#fd9843", borderColor: "#fd9843" }}
            onClick={() => {
              addReview(props.prodid, revRef.current.value);
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // Function to load the blockchain
  const loadBlockChain = async () => {
    // Firstly load the web3 function to load the blockchain
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const accounts = await web3.eth.getAccounts();
    const accContract = new web3.eth.Contract(ACCOUNTS_ABI, ACCOUNTS_ADDRESS); //create an instance of the Merchant smart contract
    setContract(accContract);
    const merchContract = new web3.eth.Contract(MERCHANT_ABI, MERCHANT_ADDRESS);
    setMerchContract(merchContract);
    setAccount(accounts[0]);
  };

  // Function to get the purchases for respective account
  const getPurchases = async () => {
    // First get the count of purchases
    const count = await acontract.methods.purchCount().call();

    // Declare temporary array for storing the purchases to be listed
    let prodArr = [];

    // Iterate though all the purchases to see which belongs to the account and which has not yet been paid
    for (let i = 1; i <= count; i++) {
      const tempPurch = await acontract.methods.purchases(i).call();
      if (tempPurch.email === cookie.Email && tempPurch.isPaid) {
        // First push purchases and their indexes/id number into a temporary array
        prodArr.push(tempPurch);
      }
    }

    //Finally store the arrays to the states
    setArr(prodArr);
  };

  // Function to add review to purchased product
  const addReview = async (prodId, Review) => {
    mcontract.methods.addReview(prodId, Review).send({ from: blcAcc });
  };

  useEffect(() => {
    loadBlockChain();
  }, []);

  useEffect(() => {
    getPurchases();
  }, [acontract]);

  return (
    <Container className="cart">
      <Container className="cart-header">
        <Row className="firstrow">
          <Col></Col>
          <Col>Product</Col>
          <Col>Unit Price</Col>
          <Col>QTY</Col>
          <Col>Total</Col>
          <Col></Col>
        </Row>
      </Container>
      <Container className="cart-body overflow-scroll">
        {prodArr.map((item) => {
          return (
            <Row>
              <Col>
                <ChooseImg category={item.category} />
              </Col>
              <Col>{item.prodName}</Col>
              <Col>
                RM{item.price}.{item.prFloat}
              </Col>
              <Col>{item.quantity} </Col>
              <Col>
                RM{item.total}.{item.totFloat}
              </Col>
              <Col>
                <Button onClick={() => setModalShow(true)}>Review</Button>
              </Col>
              <MyVerticallyCenteredModal
                prodid={item.prodId}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Row>
          );
        })}
      </Container>
    </Container>
  );
}

export default Purchases;
