import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../Context/Context";
import { Rating } from "./Rating";
import "./styles.css";
import * as types from "../Context/actionType";
export const SingleProducts = ({ pro }) => {
  console.log("por.instock",pro.inStock)
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={pro.image} alt={pro.name}></Card.Img>
        <Card.Body>
          <Card.Title>{pro.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {pro.price.split(".")[0]}</span>
            {pro.fastDelevery ? (
              <div>Fast Delvery</div>
            ) : (
              <div>4 Days Delevery</div>
            )}
            <Rating rating={pro.rating}></Rating>
          </Card.Subtitle>

          {cart.some((e) => e.id === pro.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: types.REMOVE_FROM_CART,
                  payload: pro,
                });
              }}
              variant="danger"
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: types.ADD_TO_CART,
                  payload: pro,
                });
              }}
              disabled={pro.inStock === 2 || pro.inStock === 5}
            >
              {" "}
              {pro.inStock === 2 || pro.inStock === 5 ? "Out To stock" : "Add to cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
