import React, { useEffect, useState } from "react";
import { Badge, Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function NavBar({user,setUser}) {
  const history = useHistory();
 
  const logOutMethod=()=>{
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("name");
    history.push("/")
  }
  const cartState = useSelector((state) => state.cartReducer);

  const [cart,serCart]=useState()

  useEffect(()=>{console.log("...NAvBArRendered")
  serCart(localStorage.getItem("cartItems"))
},[cartState])

  return (
    

<div className="nav-main">
<Navbar className="navbar">
        
          <Navbar.Brand  > <h5
          className="shopName"
          onClick={() => history.push("/main")}
        >
          Guvi Pizza Corner{" "}
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/208/696/original/chef-png.png"
            alt="name-logo"
            className="nav-img"
          ></img>
        </h5></Navbar.Brand>
          <Nav className="nav-item" >
            <Nav.Link  onClick={() => history.push("/main")}>Home</Nav.Link>
            <Nav.Link  onClick={()=>{logOutMethod()}}>LogOut</Nav.Link>
          
          </Nav>
          <Nav >

          <Button 
          variant="dark"
          style={{margin:"0.5rem",padding:"0.5rem 1rem"}}>
                User <Badge bg="secondary">{localStorage.getItem("name")?localStorage.getItem("name"):"User"}</Badge>
               <span className="visually-hidden">unread messages</span>
             </Button>

          <Button 
          variant="info" onClick={() => {
            serCart(localStorage.getItem("cartItems"))
            history.push("/cart")}}
          style={{margin:"0.5rem",padding:"0.5rem 1rem"}}>
                Cart <Badge bg="secondary">{cartState.cartItems.length}</Badge>
               <span className="visually-hidden">unread messages</span>
             </Button>

          </Nav>
        
        <Nav style={{float:"right"}} className="justify-content-end">
          <button className="m-1" style={{color:"green"}}></button>

        </Nav>
      </Navbar>
</div>
     
  
   
  );
}

export default NavBar;


