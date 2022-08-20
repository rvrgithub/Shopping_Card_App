import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as types from "../Context/actionType";
import { CartState } from "../Context/Context";
import { Rating } from "./Rating";
import "./styles.css";
export const Filters = () => {
  // const [rate, setRate] = useState(2);
  const { filterState :{sort, byStock, byFastDelivery, byRating}, filterDispatch} = CartState();
  console.log(
    sort,
    byStock,
    byFastDelivery,
    byRating
  );
  return (
    <div className="filters">
      <span className="title">Flters Products</span>
      <span  style={{ cursor: "pointer" }} >
        <Form.Check
          inline
          type="radio"
          name="group1"
          id={`inline-1`}
          label="Acending"
          onChange={()=>{
            filterDispatch({
              type:types.SORT_BY_PRICE,
              payload:"lowToHight"
            })
          }}
          checked={sort === "lowToHight" ? true:false}
        />
      </span>
      <span   style={{ cursor: "pointer" }}>
        <Form.Check 
          inline
          type="radio"
          name="group1"
          label="Descending"
          id={`inline-2`}
          onChange={()=>{
            filterDispatch({
              type:types.SORT_BY_PRICE,
              payload:"hightToLow"
            })
          }}
          checked={sort === "hightToLow" ? true:false}
        />
      </span>
      <span>
        <Form.Check
          inline
          type="checkbox"
          name="group1"
          label="Include Out of Stock"
          id={`inline-3`}
          onChange={()=>{
            filterDispatch({
              type:types.FILTER_BY_STOCK,
            })
          }}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          type="checkbox"
          name="group1"
          label="Fast Delevery Only"
          id={`inline-4`}
          onChange={()=>{
            filterDispatch({
              type:types.FILTER_BY_STOCK,
            })
          }}
          checked={byStock}
        />
      </span>
      <span>
        <lable style={{ paddingRight: 10 }}>Rating</lable>
        <Rating
          rating={byRating}
          onClick={
            (i) =>
              filterDispatch({
                type: types.FILTER_BY_RATING,
                payload: i + 1,
              })
            //  setRate(i+1)
          }
          style={{ cursor: "pointer" }}
        ></Rating>
      </span>
      <Button variant="light" type="submit" 
      onClick={()=> filterDispatch({
        type:types.CLEAR_FILTER,
      })}
      >
        Clear Filter
      </Button>
    </div>
  );
};
