import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Starwars from "../assets/images/hero/starwars.jpg";
import Hulk from "../assets/images/hero/HULK.jpg";
import Spiderman from "../assets/images/hero/spiderman.jpg";
import Venom from "../assets/images/hero/venom.jpg";
import Avenger from "../assets/images/hero/AVENGER.jpg";
import Flash from "../assets/images/hero/flash.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-left text-white mb-3 kategori" id="superhero">
          <span>SUPERHERO MOVIES</span>
        </h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={Starwars} alt="Topgun Movie" className="images" />
              <div className="bg-dark text-white">
                <div className="p-2 m-1">
                  <Card.Title className="text-center justify-content-center">
                    STARWARS
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Duration: 131 Min.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={Hulk} alt="Rednotice Movie" className="images" />
              <div className="bg-dark text-white">
                <div className="p-2 m-1">
                  <Card.Title className="text-center justify-content-center">
                    HULK
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Duration: 116 Min.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={Spiderman} alt="Topgun Movie" className="images" />
              <div className="bg-dark text-white">
                <div className="p-2 m-1">
                  <Card.Title className="text-center justify-content-center">
                    SPIDERMAN
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Duration: 128 Min.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={Venom} alt="Toronto Movie" className="images" />
              <div className="bg-dark text-white">
                <div className="p-2 m-1">
                  <Card.Title className="text-center justify-content-center">
                    VENOM
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Duration: 107 Min.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={Flash} alt="Grayman Movie" className="images" />
              <div className="bg-dark text-white">
                <div className="p-2 m-1">
                  <Card.Title className="text-center justify-content-center">
                    FLASH
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Duration: 128 Min.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={Avenger}
                alt="Stranger Things Movie"
                className="images"
              />
              <div className="bg-dark text-white">
                <div className="p-2 m-1">
                  <Card.Title className="text-center justify-content-center">
                    AVENGER
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Duration: 122 Min.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
