import React from 'react'
import { Filters } from '../Components/Filters';
import { SingleProducts } from '../Components/SingleProducts';
import { CartState } from '../Context/Context'
import "./style.css"
export const Home = () => {
  // state:{products} destructure one level
  const {state:{products},
  filterState :{sort, byStock, byFastDelivery, byRating}
} =CartState();
const updateDataProducts =()=>{
  let sortedProducts  =products;
  if(sort){
    sortedProducts = sortedProducts.sort((a,b)=> 
    sort === "lowToHight" ? a.price - b.price : b.price - a.price)
  }
  if(byStock === 2 || byStock ===5){
    sortedProducts =sortedProducts.filter((e)=>e.inStock)
  }
  if(byFastDelivery === 2 || byFastDelivery ===5){
    sortedProducts =sortedProducts.filter((e)=>e.byFastDelivery)
  }
if(byRating){
sortedProducts =  sortedProducts.filter((e)=>e.rating >= byRating)
}

  return sortedProducts
}

  console.log("state",products)
  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'> {
        updateDataProducts().map((pro)=>{
          return <SingleProducts pro={pro} key={pro.id}/>
        })
      }</div>
    </div>
  )
}
