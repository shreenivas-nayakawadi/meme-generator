import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MemeCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }} className="m-3 p-3">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button
          variant="primary"
          onClick={(e) => navigate(`/edit?url=${props.image}`)}
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
