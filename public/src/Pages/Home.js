import React from 'react'
import { Filters } from '../Components/Filters';
import { SingleProducts } from '../Components/SingleProducts';
import { CartState } from '../Context/Context'
import "./style.css"
export const Home = () => {
  // state:{products} destructure one level
  const {state:{products}} =CartState();
  console.log("state",products)
  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'> {
        products.map((pro)=>{
          return <SingleProducts pro={pro} key={pro.id}/>
        })
      }</div>
    </div>
  )
}
