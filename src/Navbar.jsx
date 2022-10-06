import { Navbar, Nav, Image, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import profpic from "./Images/istockphoto-1270067126-612x612.jpg";
import logo from "./Images/appLogo.svg";
import cart from "./Images/shopping-cart.svg";
import { useCookies } from "react-cookie";

function NavBar() {
  // Function to navigate to any page
  const Navigate = useNavigate();

  // Function to save cookies to be used across
  const [cookies, setCookie, removeCookie] = useCookies(["Email"]);

  return (
    <Navbar
      className="px-4 py-2 fixed-top mb-5"
      style={{ backgroundColor: "#FFEFDD" }}
    >
      <Navbar.Brand
        onClick={() => {
          Navigate("/home");
        }}
        className="py-0 me-auto logo"
      >
        <img src={logo} />
      </Navbar.Brand>

      <Nav className="me-3 ">
        <Image
          className="my-auto"
          src={cart}
          style={{ width: "80%", height: "80%" }}
        />
      </Nav>
      {/* <Nav style={{ backgroundImage: `url(${profpic})` }}></Nav> */}
      <Dropdown as={NavItem}>
        <Dropdown.Toggle
          style={{ backgroundImage: `url(${profpic})` }}
          as={NavLink}
        ></Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              Navigate("/merchant");
            }}
          >
            Merchant Store
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              removeCookie("Email");
              Navigate("/");
            }}
          >
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
}

export default NavBar;
