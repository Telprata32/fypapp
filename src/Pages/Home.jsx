import shopimg from "../Images/Shopping_edited.jpg";
import logo from "../Images/appLogo.svg";
import profpic from "../Images/istockphoto-1270067126-612x612.jpg";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Button,
  Col,
  Form,
  Image,
  Stack,
} from "react-bootstrap";
import "../App.css";

function Home() {
  return (
    <Container fluid className="px-0 mx-0">
      <Navbar
        className="px-4 py-1"
        style={{ backgroundColor: "#FFEFDD" }}
        expand="lg"
      >
        <Navbar.Brand className="py-0 me-auto">
          <img src={logo} />
        </Navbar.Brand>
        <Nav style={{ backgroundImage: `url(${profpic})` }}></Nav>
      </Navbar>
    </Container>
  );
}

export default Home;
