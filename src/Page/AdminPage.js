import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Base from './Base';
import BaseAdmin from './BaseAdmin';

function AdminPage() {

  const history=useHistory()

  const [stock,setStock]=useState()

 

  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[originalQuantity,setOriginalQuantity]=useState(0);

  console.log(originalQuantity)
  console.log(stock)

   const[quantity,setQuantity]=useState();
  
 const handleQuantity=(idx,quantity)=>{
  const sum=parseInt(stock[idx].stockAvailable)+ parseInt(quantity)
 
  setOriginalQuantity(sum)
  
 }


  useEffect(() => {
    
    if(!localStorage.getItem("email-admin")&&!localStorage.getItem("password-admin")){
      history.replace("/")
    }

    const getData = async () => {
      const response = await fetch("https://webcode-2-backend.vercel.app/webcode/stock", {
        method: "GET",
      });
      const data = await response.json();
      setStock(data)
      console.log(data)
    };

    getData();
  }, []);

 
  return (

    
    <BaseAdmin>


      <div className="row justify-content-center">
        {stock &&
          stock.map((stock,idx) => (
            <div
              className="col-md-3 col-sm-6 m-3"
              key={stock._id}
              style={{ margin: "3rem" }}
            >
           <div className="row">   
      <Card className="pizza-card p-1 m-3">
        <Card.Title>{stock.itemName}</Card.Title>
        <Card.Img
          variant="top"
          className="card-image"
          src={stock.image}
          onClick={handleShow}
          style={{ height: "18rem" }}
        />
       
        <Card.Body>
          <Card>{stock.stockAvailable}</Card>
          </Card.Body>

          <div className="flex-container">
            <div className="w-100 m-1">
              
            <div>
            <label htmlFor='refill'>Re-fill
              </label>
              <input type="Number" id="refill" name="points" min="0" max="50"
              onChange={(e)=>{setQuantity(e.target.value)}}
              value={quantity}></input>
</div>
            </div>
            <div className="w-100 m-1">
              
            <button className=" card_btn" onClick={()=>handleQuantity(idx)}>
                Update
              </button>
            </div>
          </div>

      </Card>
      </div>
           </div>
          ))}
      </div>
   

    
    </BaseAdmin>
 

  )
}

export default AdminPage