import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Base from "../../Page/Base";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";

function BuyPage() {
  const { id } = useParams;

  const [data, setData] = useState();

  useEffect(() => {
    const BuyPizza = async () => {
      try {
        const response = await fetch(`https://webcode-2-backend.vercel.app/products/${id}`, {
          method: "GET",
        });
        const pizza = await response.json();
        console.log(pizza);
        setData(pizza);
      } catch (error) {
        console.log(error);
      }
    };
    BuyPizza();
  }, []);

  return (
    <Base>
      {/* <div>
   
         <Card className="pizza-card">
         <Card.Img variant="top" src={data.image} />
         <Card.Body>
           <Card.Title>{data.title}</Card.Title>
       
           <Button variant="primary" >Buy</Button>
           <Button variant="primary">Add to Cart</Button>
         </Card.Body>
       </Card>
      
   
   </div> */}
    </Base>
  );
}

export default BuyPage;
