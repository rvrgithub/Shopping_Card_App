import React from "react";
import * as types from "../Context/actionType"
import { Link } from "react-router-dom";
import "./styles.css"
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../Context/Context";
import { AiFillDelete } from "react-icons/ai";
export const Header = () => {
  const {
    state: { cart },
    dispatch
  } = CartState();
  return (

    <Navbar bg="dark" variant="dark" className="nav sticky-nav" >
      <Container >
        <Navbar.Brand>
          <Link to="/">Shopping Card</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="enter any value"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav > 
          <Dropdown alignRight style={{ marginLeft:20}}
          >
            <Dropdown.Toggle variant="success"  style={{  marginLeft:210}}>
              <FaShoppingCart color="white" bg="white" fontSize="23px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 , marginRight:400}}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type:types.REMOVE_FROM_CART,
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10}}>Cart is Empty </span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        {/* <Link to="/login" >Login</Link>
        <Link to="/signup">Signup</Link> */}
      </Container>
    </Navbar>
  );
};
