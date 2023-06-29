import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from 'react-router-dom';





const Details = () => {
 const blogdata = useSelector(p=>p)
  const { id } = useParams();
  const details = blogdata.find((p) => p.id.toString() === id.toString());

    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []); 
  return (
    

    <div>
      {details=== undefined ? <h1>Sorry!</h1> : <div><h1>{details.header}</h1></div>}
      <Card className="my-5" data-aos="zoom-in">
        <Card.Header as="h5">Details</Card.Header>
        <Card.Body>
          <Card.Title>{details.title}</Card.Title>
          <Card.Text>{details.desc}</Card.Text>
          <Card.Text>{details.desc}</Card.Text>

          <LinkContainer to="/">
            <Button variant="primary">Back</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details