import { Row, Col, Container, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import Web3 from "web3";
import {
  ACCOUNTS_ABI,
  ACCOUNTS_ADDRESS,
} from "../Contracts Configs/accounts_config.js";
import futsal from "../Images/futsal.png";
import fashion from "../Images/fashion2015.jpg";
import babyprod from "../Images/babyprod.jpg";
import toys from "../Images/toys.jpg";
import idImg from "../Images/home.jpeg";
import phone from "../Images/phone.jpeg";

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
  const [indexes, setInds] = useState([]); // Array of indexes stored here for reference when finalising all items in cart
  const [prodArr, setArr] = useState([]); // Array to hold all the products being sold by current account's store
  const [acontract, setContract] = useState({}); //State for storing the Merchant related blockchain smart contract
  const [total, setTotal] = useState(0); // Stores the total of the entire cart

  // Function to load the blockchain
  const loadBlockChain = async () => {
    // Firstly load the web3 function to load the blockchain
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const accContract = new web3.eth.Contract(ACCOUNTS_ABI, ACCOUNTS_ADDRESS); //create an instance of the Merchant smart contract
    setContract(accContract);
  };

  // Function to get the purchases for respective account
  const getPurchases = async () => {
    // First get the count of purchases
    const count = await acontract.methods.purchCount().call();

    //Declare temporary array for storing into "indexes" array state
    let indArr = [];
    // Declare temporary array for storing the purchases to be listed
    let prodArr = [];
    // Declare a temporary variable to store the added total of the items
    let tempTotal = 0;

    // Iterate though all the purchases to see which belongs to the account and which has not yet been paid
    for (let i = 1; i <= count; i++) {
      const tempPurch = await acontract.methods.purchases(i).call();
      if (tempPurch.email === cookie.Email && tempPurch.isPaid) {
        // First push purchases and their indexes/id number into a temporary array
        indArr.push(i);
        prodArr.push(tempPurch);

        // Calculate the total using after combining the whole number and the floating point number
        const totString = tempPurch.total + "." + tempPurch.totFloat; // store the combined string of the whole number and the floating number
        const total = parseFloat(totString); // convert the conbined string into a floating number

        //Calculate the total price
        tempTotal = tempTotal + total;
      }
    }

    //Finally store the arrays to the states
    setArr(prodArr);
    setInds(indArr);
    setTotal(tempTotal.toFixed(2)); // Remember that because of this, the "total" state is a string,so to use it in calculation remember to parseFloat
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
                <Button>Review</Button>
              </Col>
            </Row>
          );
        })}
      </Container>
    </Container>
  );
}

export default Purchases;
