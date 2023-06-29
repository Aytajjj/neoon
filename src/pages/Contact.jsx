import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";

const Contact = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>You can contact with us</ListGroup.Item>
        <ListGroup.Item action variant="secondary">
          <i class="fa-brands fa-linkedin"></i>
          Linkedin
        </ListGroup.Item>
        <ListGroup.Item action variant="success">
          <i class="fa-brands fa-whatsapp"></i>
          Whatsapp
        </ListGroup.Item>
        <ListGroup.Item action variant="danger">
          <i class="fa-brands fa- Pinterest"></i>
          Pinterst
        </ListGroup.Item>

        <ListGroup.Item action variant="info">
          <i class="fa-brands fa-facebook"></i>
          Facebook
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Gmail
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
          +123-88-956-000
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Contact