import { Row, Col, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Web3 from "web3";
import {
  MERCHANT_ABI,
  MERCHANT_ADDRESS,
} from "../../Contracts Configs/merchant_config.js";
import {
  ACCOUNTS_ABI,
  ACCOUNTS_ADDRESS,
} from "../../Contracts Configs/accounts_config.js";
import storepic from "../../Images/hobby-shop-interior.jpg";
import { useCookies } from "react-cookie";
import { useOutletContext } from "react-router-dom";

function Store() {
  // Handle the cookies
  const [cookies, setCookie] = useCookies(["Email", "Storename"]); // State to save cookies to be used across pages

  //Declare states
  const [mcontract, setContract] = useState({}); //State for storing the Merchant related blockchain smart contract
  const [acontract, setAccCont] = useState({}); //State for storing the Accoutns related blockchain smart contract
  const [blcAcc, setAccount] = useState(""); // State for storing the account address of the blockchain account in the blockchain network
  const [storename, setName] = useState(""); //State for storing the user entered store name
  const [location, setLocation] = useState(""); //State for storing the user entered location of the store
  const [thisAccount, setThisAccount] = useState({}); //Store current account's details
  const [merchId, setmId] = useState(0); // Stores the id of the current account store detail in the blockchain
  const [accId, setId] = useState(0); // Stores the id of the current account in the blockchain

  // States inheritted from parent element via useOutletContext
  const [storeIsPressed, storePressed] = useOutletContext(); //state to keep track if the button at the bottom is pressed

  // Load the block chain before using it
  const loadBlockChain = async () => {
    // Firstly load the web3 function to load the blockchain
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const accounts = await web3.eth.getAccounts();
    const merchContract = new web3.eth.Contract(MERCHANT_ABI, MERCHANT_ADDRESS); //create an instance of the Merchant smart contract
    setContract(merchContract);
    const accContract = new web3.eth.Contract(ACCOUNTS_ABI, ACCOUNTS_ADDRESS); // Create an instance of the Account smart contract
    setAccCont(accContract);
    setAccount(accounts[0]);

    // 1) get the count of how many user Accounts and Merchant stores exist in the smart contract
    const aCount = await accContract.methods.acCount().call();

    // declare the tempAcc variable before hand to be used here in this function
    let tempAcc = {};
    // Load the account's account details here and store them into the states
    for (let i = 1; i <= aCount; i++) {
      tempAcc = await accContract.methods.accounts(i).call();
      if (tempAcc.email === cookies.Email) {
        setThisAccount(tempAcc);
        setId(i);
        break;
      }
    }

    // declare the tempStore variable before hand to be used here in this function
    let tempStore = {};
    // Load the account's merchant store details here and store them into the states
    for (let i = 1; i <= aCount; i++) {
      tempStore = await merchContract.methods.Stores(i).call();
      if (tempStore.account === cookies.Email) {
        setmId(i);
        break;
      }
    }

    //Fetch the details of this current account's store if the account has a merchant store
    if (tempAcc.isMerchant) {
      setName(tempStore.name);
      setLocation(tempStore.location);
    }

    //Then save the current account's storename to cookie to be used for reference in the Addproduct page
    setCookie("Storename", tempStore.name, { path: "/" });
  };

  // Detect changes in the form and update the respective states
  const chgName = (event) => {
    setName(event.currentTarget.value);
  };

  const chgLocation = (event) => {
    setLocation(event.currentTarget.value);
  };

  // function to handle the form submit event
  const handlesubmit = async () => {
    // Check if the current account logged in has a merchant store or not (check if isMerchant is true)

    // If the isMerchant is false then create a new store record in the blockchain, if not just update it
    if (!thisAccount.isMerchant) {
      // create a new store record in the blockchain for the account
      mcontract.methods
        .createStore(cookies.Email, storename, location)
        .send({ from: blcAcc });

      // Set the isMerchant status to true for the account that submitted the form
      acontract.methods.setMerchant(accId).send({ from: blcAcc });

      //update the Storename cookie
      setCookie("Storename", storename, { path: "/" });
    } else {
      //Update the current account's store details
      mcontract.methods
        .editStore(merchId, storename, location)
        .send({ from: blcAcc });

      //update the Storename cookie
      setCookie("Storename", storename, { path: "/" });
    }

    // after everything is done, reset the storeIsPressed state to false
    storePressed(false);
  };

  // useEffect function loads the blockchain onto the website
  useEffect(() => {
    loadBlockChain();
  }, []);

  // Another useEffect to detect change in state due to button press
  useEffect(() => {
    if (storeIsPressed) {
      handlesubmit();
    }
  }, [storeIsPressed]);

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
