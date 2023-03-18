import "./App.css";


import { Route, Switch } from "react-router-dom";

import LogInPage from "./components/Auth/LogIn";
import ForgetPageAdmin from "./components/Auth/Fadmin";
import ForgetPageUser from "./components/Auth/Fuser";
import AdminSignIn from "./components/Auth/adminSignIn";
import { createContext, useEffect } from "react";
import { useState } from "react";

import BuyPage from "./components/buy/buy";
import HomePage from "./Page/HomePage";
import CartPage from "./Page/CartPage";
import AdminPage from "./Page/AdminPage";
import SignUpPageUser from "./components/Auth/signUp";
import SignUpPageAdmin from "./components/Auth/SignUpAdmin";

export const userCTX=createContext(null);
function App() {
  const [product, setProduct] = useState();
  const [user,setUser]=useState()
  const [admin,setadmin]=useState()

 console.log(user)

  useEffect(() => {
    const getDate = async () => {
      const response = await fetch("https://webcode-2-backend.vercel.app/webcode/products", {
        method: "GET",
      });
      const pizza = await response.json();
      setProduct(pizza);
    };

    getDate();
  }, []);

  return (
    <div className="App">
      
      <Switch>
      <userCTX.Provider value={{user,setUser,admin,setadmin}}>
      
      
        <Route exact path="/">
          <LogInPage 
          user={user}
          setUser={setUser}>
          </LogInPage>
        </Route>

        <Route path="/adminSignIn">
          <AdminSignIn>
          </AdminSignIn>
        </Route>

        <Route path="/signup/user">
          <SignUpPageUser></SignUpPageUser>
        </Route>

        <Route path="/signup/admin">
          <SignUpPageAdmin></SignUpPageAdmin>
        </Route>

        

        <Route path="/forgetPassword/user">
          <ForgetPageUser></ForgetPageUser>
        </Route>

        <Route path="/forgetPassword/admin">
          <ForgetPageAdmin></ForgetPageAdmin>
        </Route>

        <Route path="/main">
          <HomePage
          user={user}
          setUser={setUser}></HomePage>
        </Route>

        <Route path="/cart">
          <CartPage></CartPage>
        </Route>
        <Route path="/BuyPizza/:id">
          <BuyPage></BuyPage>
        </Route>

        <Route path="/admin">
          <AdminPage>
          </AdminPage>

        </Route>
        </userCTX.Provider>
      </Switch>
     
    </div>
  );
}

export default App;
