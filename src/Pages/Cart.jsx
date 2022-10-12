import { Row, Col, Container, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import Web3 from "web3";
import {
  ACCOUNTS_ABI,
  ACCOUNTS_ADDRESS,
} from "../Contracts Configs/accounts_config.js";

function Cart() {
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

    // Iterate though all the purchases to see which belongs to the account and which has not yet been paid
    for (let i = 1; i <= count; i++) {
      const tempPurch = await acontract.methods.purchases(i).call();
      if (tempPurch.email === cookie.Email && !tempPurch.isPaid) {
        indArr.push(i);
        prodArr.push(tempPurch);
        setTotal(total + parseInt(tempPurch.total));
      }
    }

    //Finally store the arrays to the states
    setArr(prodArr);
    setInds(indArr);
  };

  useEffect(() => {
    loadBlockChain();
  });

  useEffect(() => {
    getPurchases();
  }, []);

  return (
    <Container className="cart">
      <Container className="cart-header">
        <Row className="firstrow">
          <Col></Col>
          <Col>Product</Col>
          <Col>Unit Price</Col>
          <Col>QTY</Col>
          <Col>Total</Col>
        </Row>
      </Container>
      <Container className="cart-body overflow-scroll">
        {prodArr.map((item) => {
          return (
            <Row>
              <Col>
                <img style={{ height: "74px", width: "114px" }} />
              </Col>
              <Col>{item.prodName}</Col>
              <Col>{item.price}</Col>
              <Col>{item.quantity} </Col>
              <Col>{item.total}</Col>
            </Row>
          );
        })}
      </Container>
      <Row className="mt-4 me-4 float-end">
        <Col lg={8}>
          <Row>Total:</Row>
          <Row>RM {total}</Row>
        </Col>
        <Col lg={1}>
          <Button>Pay</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
