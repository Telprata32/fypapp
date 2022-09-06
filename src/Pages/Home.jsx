import logo from "../Images/appLogo.svg";
import profpic from "../Images/istockphoto-1270067126-612x612.jpg";
import prod1 from "../Images/Prod1.jpg";
import prod2 from "../Images/Prod2.jpg";
import prod3 from "../Images/Prod3.png";
import phone from "../Images/phone.jpeg";
import futsal from "../Images/futsal.png";
import fashion from "../Images/fashion2015.jpg";
import babyprod from "../Images/babyprod.jpg";
import idImg from "../Images/home.jpeg";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Row,
  Col,
  Nav,
  Carousel,
  Card,
  Button,
  Container,
} from "react-bootstrap";
import "../App.css";

function Home() {
  let navigate = useNavigate();

  return (
    <Container fluid className="px-0 mx-0">
      <Container className="pt-5">
        <Carousel className="mx-1 mt-5 pt-5 mb-3">
          <Carousel.Item>
            <img className="d-block w-100" src={prod1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={prod2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={prod3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Row style={{ marginTop: "70px", paddingInline: "115px" }}>
        <Col>
          <Card
            style={{ width: "18rem", cursor: "pointer" }}
            onClick={() => navigate("/toyshobbies")}
          >
            <Card.Img variant="top" src={phone} />
            <Card.Body>
              <Card.Title>🎮 Toys and Hobbies</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={fashion} />
            <Card.Body>
              <Card.Title>👗 Fashion</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={idImg} />
            <Card.Body>
              <Card.Title>🛋️ Home Appliances</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={phone} />
            <Card.Body>
              <Card.Title>📱 Electronics</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "70px", paddingInline: "115px" }}>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={futsal}
              style={{ backgroundColor: "#f0f0f0" }}
            />
            <Card.Body>
              <Card.Title>🏐 Fitness</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={babyprod} />
            <Card.Body>
              <Card.Title>🍼 Maternity</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem", display: "none" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem", display: "none" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
