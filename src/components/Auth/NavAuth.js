import React from 'react'
import { Badge, Button, Nav, Navbar } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function AuthNavBar() {
    const history=useHistory()
  return (
    <div className="nav-main">
    <Navbar className="navbar">
            
              <Navbar.Brand href="#home" > <h5
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
                <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link  onClick={() => history.push("/signup/user")}>SignUp</Nav.Link>
                <Nav.Link   onClick={() => history.push("/adminSignIn")} >Login as Admin</Nav.Link>
                <Nav.Link  onClick={() => history.push("/signup/admin")}>SignUp as Admin</Nav.Link>
              
              </Nav>
              <Nav >
    
             
    
              
    
              </Nav>
            
            <Nav style={{float:"right"}} className="justify-content-end">
              <button className="m-1" style={{color:"green"}}></button>
    
            </Nav>
          </Navbar>
    </div>
  )
}

export default AuthNavBar
