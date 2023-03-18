import React, { useCallback, useEffect, useState } from "react";
import Base from "./Base";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Action/cartActions.js";

import PaymentPage from "./PaymentPage";
import { useHistory } from "react-router-dom";
function CartPage() {

  const history=useHistory()

  

  let cartData=localStorage.getItem(`cartItems`)
  const[cart,setCart]=useState(cartData)
  

  useEffect(()=>{
    console.log("Re-rendered")
    setCart( localStorage.removeItem(`cartItems`))
  },[cart])


  const deleteCart=useCallback((idx)=>{
    localStorage.removeItem(`cartItems`)
    setCart( localStorage.removeItem(`cartItems`))
    console.log(cart)
    console.log(`cartItems[${idx}]`)
    history.push("/main")
    
  },[cart])




  const removItemsFromCart=(idx)=>{

  }
  const cartCard = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  const cartItems = cartCard.cartItems;

  let totalAmount = cartItems.reduce((x, item) => x + item.totalPrice, 0);
  return (
    <Base>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 style={{ fontSize: "42", marginTop: "2rem" }}>My Cart</h1>

          {cartItems.map((item,idx) => (
            <div className="flex-container m-2" key={idx}>
              <div className="m-1 w-100" style={{ textAlign: "left" }}>
                <h4>{item.name}</h4>
                <h5>
                  Price:{item.pricePerProduct} * {item.quantity} ={" "}
                  {item.totalPrice}RS/-
                </h5>
                <h4 style={{ display: "inline-block" }}>Quantity : </h4>

                <h6 style={{ display: "inline-block" }}>
                  <i
                    class="fa fa-plus-square"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(
                          item,
                          item.quantity + 1,
                          item.pizzaVarient,
                          item.sauceVarient,
                          item.cheeseVarient,
                          item.meatVarient
                        )
                      );
                    }}
                  ></i>
                  <h4 style={{ display: "inline-block" }}>{item.quantity} </h4>
                  <i
                    class="fa fa-minus-square"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(
                          item,
                          item.quantity - 1,
                          item.pizzaVarient,
                          item.sauceVarient,
                          item.cheeseVarient,
                          item.meatVarient
                        )
                      );
                    }}
                  ></i>
                </h6>
                <hr></hr>
              </div>
              <div className="m-1 w-100">
                <img src={item.image} alt=""></img>
              </div>
              <div className=" m-1 w-100 mt-5">
                <h6>
                  {" "}
                  <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    onClick={() => {
                      deleteCart(idx);
                    }}
                  ></i>
                </h6>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <h2 className="mt-5">Total Amount : {totalAmount} Rs/-</h2>
          <PaymentPage totalAmount={totalAmount}/>
          <button className="btn-pay" style={{margin:"1rem"}} onClick={()=>{deleteCart()}}>Clear Cart</button>
     
             </div>
      </div>
    </Base>
  );
}

export default CartPage;
