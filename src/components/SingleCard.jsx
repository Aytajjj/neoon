import { Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const SingleCard = ({ photo, title, desc ,id,col}) => {



    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  return (
    <Col sm={6} md={col}>
      <div className="card">
        <div className="card2">
          <Card className="card">
            <Card.Img variant="top" width={400} height={400} src={photo} />
            <Card.Body>
              <Card.Title className="title">{title}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <LinkContainer to={`/blogs/${id}`}>
                <Button className="me-5 " variant="info">
                  Read more
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Col>
  );
};

export default SingleCard;
