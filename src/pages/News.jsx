import React from 'react'
import { Button, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import Details from './Details';

const News = () => {
  const news = useSelector((state) => state);
    
  return (
    <div>
      <LinkContainer to="/">
        <Button>Back</Button>
      </LinkContainer>
      <h1 className="text-center my-5"> </h1>
      <Row>
        {news.map((i) => (
          <Details desc={i.desc} title={i.title} key={i.id} />
        ))}
      </Row>
    </div>
  );
}

export default News