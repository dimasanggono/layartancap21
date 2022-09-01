import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Landingpage.css";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center ">
        <Row>
          <Col>
            <div className="title">Watch Streaming Movie</div>
            <div className="title2">Anywhere Anytime</div>
            <div className="introbtn ">
              <Button href="#trending">Let'S Get Started</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
