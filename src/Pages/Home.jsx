import shopimg from "../Images/Shopping_edited.jpg";
import logo from "../Images/appLogo.svg";
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
    <Container className="px-0 mx-0 flex">
      <Navbar style={{ backgroundColor: "#FFEFDD" }} expand="lg">
        <Container>
          <Navbar.Brand>
            <Image src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Home;
