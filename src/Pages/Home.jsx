import shopimg from "../Images/Shopping_edited.jpg";
import logo from "../Images/appLogo.svg";
import profpic from "../Images/istockphoto-1270067126-612x612.jpg";
import prod1 from "../Images/Prod1.jpg";
import prod2 from "../Images/Prod2.jpg";
import prod3 from "../Images/Prod3.png";
import { Link } from "react-router-dom";
import {
  Navbar,
  Row,
  Nav,
  Carousel,
  NavDropdown,
  Container,
} from "react-bootstrap";
import "../App.css";

function Home() {
  return (
    <Container fluid className="px-0 mx-0">
      <Navbar className="px-4 py-2" style={{ backgroundColor: "#FFEFDD" }}>
        <Navbar.Brand className="py-0 me-auto logo">
          <img src={logo} />
        </Navbar.Brand>
        <Nav style={{ backgroundImage: `url(${profpic})` }}></Nav>
      </Navbar>

      <Carousel className="mx-5 mt-5">
        <Carousel.Item>
          <img className="d-block w-100" src={prod1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={prod2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={prod3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Home;
