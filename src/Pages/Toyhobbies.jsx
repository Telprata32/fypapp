import { Row, Container, Card, Col } from "react-bootstrap";
import "../App.css";
import iphone from "../Images/Iphone.jpg";
import { useNavigate } from "react-router-dom";

function Thobbies() {
  let navigate = useNavigate();

  return (
    <Container
      className="tHobbies px-0"
      style={{ marginTop: "157px", marginInline: "120px" }}
    >
      <Row className="mb-5">
        <Col className="px-5" xl={3} md={3}>
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/prodinfo")}
          >
            <Card.Img src={iphone} />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-5" xl={3} md={3}>
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/prodinfo")}
          >
            <Card.Img src={iphone} />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-5" xl={3} md={3}>
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/prodinfo")}
          >
            <Card.Img src={iphone} />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-5" xl={3} md={3}>
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/prodinfo")}
          >
            <Card.Img src={iphone} />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="px-5" xl={3} md={3}>
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/prodinfo")}
          >
            <Card.Img src={iphone} />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-5" xl={3} md={3}>
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/prodinfo")}
          >
            <Card.Img src={iphone} />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-5" xl={3} md={3}>
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/prodinfo")}
          >
            <Card.Img src={iphone} />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-5" xl={3} md={3}>
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/prodinfo")}
          >
            <Card.Img src={iphone} />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="px-5" xl={3} md={3}>
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/prodinfo")}
          >
            <Card.Img src={iphone} />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-5" xl={3} md={3}>
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/prodinfo")}
          >
            <Card.Img src={iphone} />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-5" xl={3} md={3}>
          <Card>
            <Card.Img src={iphone} />
            <Card.Body>
              <Card.Title>Iphone X Pro</Card.Title>
              <Card.Subtitle className="my-2">RM 1500.00</Card.Subtitle>
              <Card.Text className="text-muted">IF Techshop</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-5" xl={3} md={3}>
          <Card>
            <Card.Img src={iphone} />
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

export default Thobbies;
