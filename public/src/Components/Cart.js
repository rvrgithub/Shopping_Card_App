import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../Context/Context";
import "../Pages/style.css";
import { Rating } from "./Rating";
import "./styles.css";
import * as types from "../Context/actionType";
import { AiFillDelete } from "react-icons/ai";
export const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  // let rate = Math.floor(Math.random() * 6);
  // let arr = [];
  // for (let i = 1; i <= 5; i++) {
  //   arr.push(i);
  // }
  // let array =[1,2,3,4]
  // console.log("arr", arr);
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((pro) => (
            <ListGroup.Item key={pro.id}>
              <Row>
                <Col md={2}>
                  <Image src={pro.image} alt={pro.name} fluid rounded></Image>{" "}
                </Col>
                <Col md={2}>
                  <span>{pro.name}</span>
                </Col>
                <Col md={2}> ₹ {pro.price}</Col>
                <Col md={2}>
                  <Rating rating={pro.rating} />
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    value={pro.qty}
                    onChange={(e) =>
                      dispatch({
                        type: types.CHANGE_CART_QTY,
                        payload: {
                          id: pro.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                  {[...Array(5)].map((_,x)=>(
                    <option key={x+1}>{x+1}</option>
                  ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: types.REMOVE_FROM_CART,
                        payload: pro,
                      })
                    }
                  >
                    <AiFillDelete fontSize={"20px"} />
                  </Button>{" "}
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters add">
        <span className="title"> Subtotal {cart.length} items</span>
        <span className="text"> Total : ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          {" "}
          Proceed To Checkout
        </Button>
      </div>
    </div>
  );
};
