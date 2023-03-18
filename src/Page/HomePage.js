import React from "react";
import Base from "./Base";
import PizzaCard from "../components/Card/PizzaCard";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import reducerPizza from "../Reducer/cartReducers";
import { useHistory } from "react-router-dom";

function HomePage({user,setuser}) {
  const history=useHistory()
  const [product, setProduct] = useState();
  useEffect(() => {

    if(!localStorage.getItem("email")&&!localStorage.getItem("password")){
      history.replace("/")
    }
   

    const getData = async () => {
      try {
        const response = await fetch("https://webcode-2-backend.vercel.app/webcode/products", {
          method: "GET",
        });
        const pizza = await response.json();

        setProduct(pizza);
        console.log(pizza);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  return (
    <Base
    user={user}
    setuser={setuser}>
      <div className="row justify-content-center">
        {product &&
          product.map((prod) => (
            <div
              className="col-md-3 m-3 card-main"
              key={prod._id}
              
            >
              <PizzaCard product={prod} />
            </div>
          ))}
      </div>
    </Base>
  );
}

export default HomePage;
