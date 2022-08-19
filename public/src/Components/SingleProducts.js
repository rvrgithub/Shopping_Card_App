import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Rating } from './Rating'

export const SingleProducts = ({pro}) => {
    // let arr= [0,3,5,6];
let rate =Math.floor(Math.random()*6)
  return (
    <div>
        <Card> 
        <Card.Img variant ="top" src={pro.image} alt={pro.name}></Card.Img>
        <Card.Body >
            <Card.Title>{pro.name}</Card.Title>
            <Card.Subtitle style={{paddingBottom:10}}>
                <span>{pro.price.split(".")[0]}</span>
                {pro.fastDelevery ? (
                    <div>Fast Delvery</div>
                ) :(
                    <div>4 Days Delevery</div>
                )}
                <Rating rating={rate}></Rating>
            </Card.Subtitle>
            <Button variant="danger">Remove from cart</Button>
            <Button  
            disabled={rate===2 || rate===5}
          > {rate===2 || rate===5 ? "Out To stock" :"Add to cart"}</Button>
        </Card.Body>
        </Card>
       
    </div>
  )
}
