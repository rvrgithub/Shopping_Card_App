import React from 'react'
import { Link } from 'react-router-dom'
import {Badge, Container ,Dropdown,FormControl,Nav,Navbar} from "react-bootstrap"
import {FaShoppingCart} from "react-icons/fa"
export const Header = () => {
  return (
   <Navbar bg="dark" variant="dark" style={{height:80}}>
    <Container>
        <Navbar.Brand>
            <Link to="/header">Shopping Card</Link>
        </Navbar.Brand>
        <Navbar.Text clasName="search">
            <FormControl style={{width:500}} placeholder="enter any value"
                calssName="m-auto"
            />
        </Navbar.Text>
        <Nav>
    <Dropdown alignRight>
      <Dropdown.Toggle variant="success">
   <FaShoppingCart color="white" backgroundColor="white" fontSize="23px"/>
   <Badge >{10}</Badge>
   </Dropdown.Toggle>

      <Dropdown.Menu style={{minWidth:370}}>
      <span style={{padding:10}}>Cart is Empty </span>
      </Dropdown.Menu>
    </Dropdown>
</Nav>
<Link to="/login">Login</Link>
<Link to="/signup">Signup</Link>

    </Container>
   </Navbar>
  )
}
