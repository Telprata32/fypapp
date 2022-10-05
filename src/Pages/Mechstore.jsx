import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import Store from "./Merchstore Pages/Store.jsx";
import Products from "./Merchstore Pages/Products.jsx";

function Merchstore() {
  return (
    <Container
      className="merch"
      style={{ marginTop: "157px", height: "452px" }}
    >
      <Row className="h-100">
        {/*  For this side navbar that will implement different css when one is active follow this: 
        https://stackoverflow.com/questions/60244592/how-do-you-set-an-active-class-in-react-and-css */}
        <Col className="me-5 px-0 text-center" lg={2}>
          <NavLink
            to="/merchant/store"
            activeClassName="selected"
            className="unselected"
          >
            Store
          </NavLink>
          <NavLink
            to="/merchant/products"
            activeClassName="selected"
            className="unselected"
          >
            Products
          </NavLink>
        </Col>
        <Col className="ms-5">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Merchstore;
