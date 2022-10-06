import "../App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function Merchstore() {
  const location = useLocation();

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

        <Col className="ms-5 outerbox">
          <Outlet />
        </Col>
      </Row>
      <Row className="d-grid justify-content-md-end">
        {location.pathname === "/merchant/store" ? (
          <Button className="mt-4 normButt">Save</Button>
        ) : (
          <Button className="mt-4 selectButt">+</Button>
        )}
      </Row>
    </Container>
  );
}

export default Merchstore;
