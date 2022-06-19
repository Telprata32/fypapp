import shopimg from "./Images/Shopping_edited.jpg";
import { Container, Row } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container style={{ backgroundImage: `url(${shopimg})` }}>
      <Row>
        <h1>Hello</h1>
      </Row>
      <Row>
        <h1>Try it now</h1>
      </Row>
    </Container>
  );
}

export default App;
