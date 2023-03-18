import React from "react";
import { Accordion } from "react-bootstrap";
import NavBar from "../components/NavBar";

function Base(props) {
  return (
    <div className="base-main">
      <NavBar 
      user={props.user}
      setuser={props.setuser}/>
      
      <div className="row">
       
          
       
        <div className="children ">{props.children}</div>
      </div>
    </div>
  );
}

export default Base;
