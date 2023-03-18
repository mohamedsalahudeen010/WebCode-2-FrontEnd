import React from "react";
import { Accordion } from "react-bootstrap";
import NavAdminBar from "../components/Card/NavAdmin";

function BaseAdmin(props) {
  return (
    <div className="base-main">
    <NavAdminBar/>
      
      <div className="row">
        
        <div className="children ">{props.children}</div>
      </div>
    </div>
  );
}

export default BaseAdmin;
