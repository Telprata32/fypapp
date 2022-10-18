import { Row, Container, Card, Col, Button } from "react-bootstrap";
import "../App.css";
import futsal from "../Images/futsal.png";
import fashion from "../Images/fashion2015.jpg";
import babyprod from "../Images/babyprod.jpg";
import toys from "../Images/toys.jpg";
import idImg from "../Images/home.jpeg";
import phone from "../Images/phone.jpeg";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Web3 from "web3";
import { useEffect, useState } from "react";
import {
  MERCHANT_ABI,
  MERCHANT_ADDRESS,
} from "../Contracts Configs/merchant_config.js";

// Function to decide the picture based on the category of the product
function ChooseImg(props) {
  switch (props.category) {
    case "Toys and Hobbies":
      return <Card.Img variant="top" src={toys} />;
      break;
    case "Fashion":
      return <Card.Img variant="top" src={fashion} />;
      break;
    case "Home Appliances":
      return <Card.Img variant="top" src={idImg} />;
      break;
    case "Electronics":
      return <Card.Img variant="top" src={phone} />;
      break;
    case "Fitness":
      return <Card.Img variant="top" src={futsal} />;
      break;
    case "Maternity":
      return <Card.Img variant="top" src={babyprod} />;
      break;
  }
}

function Thobbies() {
  let navigate = useNavigate(); // Navigate to any page

  // Get relevant cookies
  const [cookie, setCookie] = useCookies(["Category", "Prodselect"]); // Category is defined in the previous page when a specific category was selected which is used here as reference
  // The Prodselect cookie is used here to store the state of which product that was clicked on to be used in the "prodinfo" page by saving the name of the product

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
              <Card
                style={{ width: "16rem" }}
                onClick={() => {
                  setCookie("Prodselect", item.prodName, { path: "/" });
                  navigate("/prodinfo");
                }}
              >
                <ChooseImg category={item.category} />
                <Card.Body>
                  <Card.Title className="text-capitalize">
                    {item.prodName}
                  </Card.Title>
                  <Card.Subtitle style={{ color: "#fd9843" }}>
                    RM {item.price}.{item.prFloat}
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
