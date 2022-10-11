import { Row, Container, Card, Col, Button } from "react-bootstrap";
import "../App.css";
import iphone from "../Images/Iphone.jpg";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Web3 from "web3";
import { useEffect, useState } from "react";
import {
  MERCHANT_ABI,
  MERCHANT_ADDRESS,
} from "../Contracts Configs/merchant_config.js";

function Thobbies() {
  let navigate = useNavigate(); // Navigate to any page

  // Get relevant cookies
  const [cookie, setCookie] = useCookies(["Category"]);

  // Declare states here to be used
  const [mcontract, setMerchContract] = useState({}); // Store instance of the Merchant smart contract
  const [prodArray, setArray] = useState([]); // Store array of products related to category obtained from cookie

  // Function for loading blockchain
  const loadBlockChain = async () => {
    // Firstly load the web3 function to load the blockchain
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const merchContract = new web3.eth.Contract(MERCHANT_ABI, MERCHANT_ADDRESS);
    setMerchContract(merchContract);
  };

  // Function to get the list of products filtered by the category in the cookie
  const getProducts = async (category) => {
    // Declare a temp array to store the products
    let tempArray = [];

    //Iterate through every product and check if the category matches one set in the cookie
    //First get the number of products there are
    const count = await mcontract.methods.prodCount().call();
    for (let i = 1; i <= count; i++) {
      const tempProd = await mcontract.methods.products(i).call();
      if (tempProd.category === cookie.Category) {
        tempArray.push(tempProd);
      }
    }

    // now save the array to teh state array
    setArray(tempArray);
  };

  useEffect(() => {
    loadBlockChain();
    getProducts();
  });

  return (
    <Container
      className="tHobbies px-0"
      style={{ marginTop: "157px", marginInline: "120px" }}
    >
      <Row>
        {prodArray.map((item) => {
          return (
            <Col className="mt-4" lg={3}>
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title className="text-capitalize">
                    {item.prodName}
                  </Card.Title>
                  <Card.Subtitle style={{ color: "#fd9843" }}>
                    RM {item.price}
                  </Card.Subtitle>
                  <Card.Text className="text-muted">{item.storeName}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Thobbies;
