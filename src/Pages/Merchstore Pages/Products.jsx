import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  MERCHANT_ABI,
  MERCHANT_ADDRESS,
} from "../../Contracts Configs/merchant_config.js";
import Web3 from "web3";

function Products() {
  // Load revelant cookies
  const [cookie] = useCookies(["Storename"]);

  // Declare states
  const [prodArr, setArr] = useState([]); // Array to hold all the products being sold by current account's store
  const [mcontract, setContract] = useState({}); //State for storing the Merchant related blockchain smart contract

  // Function to load the blockchain
  const loadBlockChain = async () => {
    // Firstly load the web3 function to load the blockchain
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const merchContract = new web3.eth.Contract(MERCHANT_ABI, MERCHANT_ADDRESS); //create an instance of the Merchant smart contract
    setContract(merchContract);
  };

  // Function to load the list of products for respective account/store
  const getProducts = async () => {
    // Get declare variables first
    const count = await mcontract.methods.prodCount().call();
    let prodArr = []; // Final array to be stored to the state variable "prodArr" using setArr

    //Iterate through the blockchain instances of products and check if they belong to current store/account
    for (let i = 1; i <= count; i++) {
      const tempProd = await mcontract.methods.products(i).call();
      if (tempProd.storeName === cookie.Storename) {
        prodArr.push(tempProd);
      }
    }

    // Now store to state array
    setArr(prodArr);
  };

  // UseEffect to run functions upon rendering page
  useEffect(() => {
    loadBlockChain();
    getProducts();
  });

  return (
    <Container style={{ height: "452px" }} className="prods overflow-scroll">
      <Row>
        {prodArr.map((item) => {
          return (
            <Col className="mt-4" lg={3}>
              <Card style={{ width: "12rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title className="text-capitalize">
                    {item.prodName}
                  </Card.Title>
                  <Card.Subtitle style={{ color: "#fd9843" }}>
                    RM {item.price}
                  </Card.Subtitle>
                  <Card.Text style={{ color: "#a6a4a4" }}>
                    {item.stock} in stock
                  </Card.Text>
                  <Button>Edit</Button>
                  <Button className="float-end">restock</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Products;
