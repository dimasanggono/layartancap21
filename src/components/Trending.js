import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Topgun from "../assets/images/Trending/topgun.jpg";
import Toronto from "../assets/images/Trending/toronto.jpg";
import Rednotice from "../assets/images/Trending/Rednotice.jpg";
import Grayman from "../assets/images/Trending/Grayman.jpg";
import Spiderhead from "../assets/images/Trending/SP9IDERHEAD.jpg";
import StrangerThing from "../assets/images/Trending/StrangerThing.jpg";
const Trending = () => {
  return (
    <div>
      <Container>
        <h1 className="text-left text-white mb-3 kategori" id="trending">
          <span>TRENDING MOVIES</span>
        </h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={Topgun} alt="Topgun Movie" className="images" />
              <div className="bg-dark text-white">
                <div className="p-2 m-1">
                  <Card.Title className="text-center justify-content-center">
                    TOPGUN MAVERICK
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
              <Image src={Rednotice} alt="Rednotice Movie" className="images" />
              <div className="bg-dark text-white">
                <div className="p-2 m-1">
                  <Card.Title className="text-center justify-content-center">
                    REDNOTICE
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
              <Image src={Toronto} alt="Topgun Movie" className="images" />
              <div className="bg-dark text-white">
                <div className="p-2 m-1">
                  <Card.Title className="text-center justify-content-center">
                    THE MAN FROM TORONTO
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
              <Image src={Spiderhead} alt="Toronto Movie" className="images" />
              <div className="bg-dark text-white">
                <div className="p-2 m-1">
                  <Card.Title className="text-center justify-content-center">
                    SPIDERHEAD
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
              <Image src={Grayman} alt="Grayman Movie" className="images" />
              <div className="bg-dark text-white">
                <div className="p-2 m-1">
                  <Card.Title className="text-center justify-content-center">
                    THE GRAYMAN
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
                src={StrangerThing}
                alt="Stranger Things Movie"
                className="images"
              />
              <div className="bg-dark text-white">
                <div className="p-2 m-1">
                  <Card.Title className="text-center justify-content-center">
                    JOKER
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

export default Trending;
