import shopimg from "./Images/Shopping_edited.jpg";
import logo from "./Images/appLogo.svg";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Modal,
  Button,
  Col,
  Form,
  Image,
  Stack,
} from "react-bootstrap";
import "./App.css";

// Import link to components for router

function App() {
  return (
    <Container
      fluid
      className="vh-100"
      style={{
        backgroundImage: `url(${shopimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "600px",
      }}
    >
      <Row className="h-100 py-4">
        <Col
          xs="4"
          className="mx-auto pt-5 px-4 pb-4"
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
          }}
        >
          <div className="text-center img-container">
            <Image src={logo} />
          </div>
          <Form
            style={{ display: "inlineBlock" }}
            className="h-76 mt-2 pt-5 px-5"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Row>
              If you don't have an account, click <Link>here</Link>
            </Row>
            <Stack
              gap="2"
              className="pt-4 mt-5 w-100 float-end align-bottom hstack gap-2"
              direction="horizontal"
            >
              <Button className="float-start btn-danger">
                Forgot Password
              </Button>
              <Button
                className="ms-auto btn-color-orange"
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#FEB272" }}
              >
                Submit
              </Button>
            </Stack>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
