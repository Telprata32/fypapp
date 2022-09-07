import { Row, Container, Card, Col } from "react-bootstrap";
import "../App.css";

function tHobbies() {
  return (
    <Container
      className="tHobbies px-0"
      style={{ marginTop: "157px", marginInline: "120px" }}
    >
      <Row>
        <Col className="px-5" xl={3}>
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-5" xl={3}>
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-5" xl={3}>
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-5" xl={3}>
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default tHobbies;
