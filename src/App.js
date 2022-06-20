import shopimg from "./Images/Shopping_edited.jpg";
import logo from "./Images/App Logo.png";
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

function App() {
  return (
    <Container
      style={{
        backgroundImage: `url(${shopimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "600px",
      }}
    >
      <Row className="h-100 py-4">
        <Col
          md="4"
          className="mx-auto"
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
          }}
        >
          <div className="text-center">
            <Image src={logo} />
          </div>
          <Form className="h-100 pt-5 px-2">
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Stack gap="2" className="float-end" direction="horizontal">
              <Button>Forgot Password</Button>
              <Button
                className="float-start ms-auto"
                variant="primary"
                type="submit"
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
