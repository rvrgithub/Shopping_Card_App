import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Rating } from "./Rating";
import "./styles.css";
export const Filters = () => {
  const [rate, setRate] = useState(2);
  return (
    <div className="filters">
      <span className="title">Flters Products</span>
      <span>
        <Form.Check
          inline
          type="radio"
          name="group1"
          id={`inline-1`}
          label="Acending"
        />
      </span>
      <span>
        <Form.Check
          inline
          type="radio"
          name="group1"
          label="Descending"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          type="checkbox"
          name="group1"
          label="Include Out of Stock"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          type="checkbox"
          name="group1"
          label="Fast Delevery Only"
          id={`inline-4`}
        />
      </span>
      <span>
        <lable style={{ paddingRight: 10 }}>Rating</lable>
        <Rating
          rating={rate}
          onClick={(i) => setRate(i+1)}
          style={{ cursor: "pointer" }}
        ></Rating>
      </span>
      <Button variant="light" type="submit">
        Clear Filter
      </Button>
    </div>
  );
};
