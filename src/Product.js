import React from 'react';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
  const { id, title, category, price, description, image, rating, anotherField } = props;

  return (
    <div className="card-container">
      <Card className="card" style={{ width: '18rem', padding: "2rem", margin: "1rem" }}>
        <Card.Img variant="top" src={image}/>
        <Card.Body>
            <Card.Subtitle>{id}</Card.Subtitle>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Category: {category}</Card.Text>
          <Card.Text>Price: {price}</Card.Text>
          <Card.Text>Rating: {rating.rate}</Card.Text>
          <Card.Text>Field: {anotherField}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;