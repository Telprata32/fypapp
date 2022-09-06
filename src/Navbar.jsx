import { Navbar, Nav, Image } from "react-bootstrap";
import profpic from "./Images/istockphoto-1270067126-612x612.jpg";
import logo from "./Images/appLogo.svg";
import cart from "./Images/shopping-cart.svg";

function NavBar() {
  return (
    <Navbar
      className="px-4 py-2 fixed-top mb-5"
      style={{ backgroundColor: "#FFEFDD" }}
    >
      <Navbar.Brand className="py-0 me-auto logo">
        <img src={logo} />
      </Navbar.Brand>

      <Nav className="me-3 ">
        <Image
          className="my-auto"
          src={cart}
          style={{ width: "80%", height: "80%" }}
        />
      </Nav>
      <Nav style={{ backgroundImage: `url(${profpic})` }}></Nav>
    </Navbar>
  );
}

export default NavBar;
