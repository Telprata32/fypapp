import "../App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Profile() {
  //Declare states
  const [storeIsPressed, storePressed] = useState(false); //state to keep track if the button at the bottom is pressed

  const location = useLocation();
  const navigate = useNavigate();

  const setStorePressed = () => {
    storePressed(true);
  };

  function Choosebttn(props) {
    if (props.name === "/profile/purchases") {
      return;
    } else {
      return (
        <Button onClick={setStorePressed} className="mt-4 normButt">
          Save
        </Button>
      );
    }
  }

  return (
    <Container
      className="merch"
      style={{ marginTop: "157px", height: "452px" }}
    >
      <Row className="h-100">
        {/*  For this side navbar that will implement different css when one is active follow this: 
        https://stackoverflow.com/questions/60244592/how-do-you-set-an-active-class-in-react-and-css */}
        <Col className="me-5 px-0 text-center sidebar" lg={2}>
          <NavLink
            to="/profile/details"
            activeClassName="selected"
            className="unselected"
          >
            Profile Info
          </NavLink>
          <NavLink
            to="/profile/purchases"
            activeClassName="selected"
            className="unselected"
          >
            Purchase History
          </NavLink>
        </Col>

        <Col className="ms-5 outerbox" lg={9}>
          <Outlet context={[storeIsPressed, storePressed]} />
        </Col>
      </Row>
      <Row className="d-grid justify-content-md-end">
        <Choosebttn name={location.pathname} />
      </Row>
    </Container>
  );
}

export default Profile;
