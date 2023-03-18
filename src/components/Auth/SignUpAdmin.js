import React from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import AuthNavBar from "./NavAuth";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const signUpValidation = yup.object({
  firstname: yup.string().required("Enter Your First Name"),
  lastname: yup.string().required("Enter Your Last Name"),
  email: yup.string().required("Enter a Email"),
  password: yup.string().required("Enter Password"),
});

const SignUpPageAdmin = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const[logInButton,setLogInButton] = useState(false);
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
      validationSchema: signUpValidation,
      onSubmit: (user) => {
        addUser(user);
      },
    });

  const addUser = async (user) => {
    try {
      const response = await fetch("https://webcode-2-backend.vercel.app/webcode/admin/signUp", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.message === "Successfully signed up") {
        setLogInButton(true)
        

      } else if (data.message === "Email already exist") {
        setShow(true);
      } else {
      }
    } catch (error) {
      console.log("Admin LogIn Error : ", error);
    }
  };

  return (
    <div>
      <AuthNavBar />
      <div className="main-logo">
        <img
          className="pizza-logo-left"
          src="https://img.freepik.com/premium-vector/pizza-logo-template-design-pizza-shop_7894-454.jpg?w=740"
          alt="Pizza_logo"
        />
        <div className="name-title">
          <h3 className="title">
            Guvi Pizza Corner
            <img
              className="pizza-logo"
              src="https://static.vecteezy.com/system/resources/previews/001/208/696/original/chef-png.png"
              alt="Title-Logo"
            />
          </h3>
        </div>
        <img
          className="pizza-logo-right"
          src="https://irp.cdn-website.com/9608fb11/MOBILE/images/Hot-stuff-pizza.pngG8DB7EAjVUYpem2QUXqeCdfvqT8I16aJ"
          alt="Pizza_logo"
        />
      </div>

      <div className="Sign_up">
      <h2 className="signIn-title">Admin SignUp Page</h2>
        <h1 className="signIn-title-2">Register</h1>

        <form onSubmit={handleSubmit} className="form-signup">
        {logInButton?<div>
            <div> <Alert variant="success"  >
          Successfully SignedUp, Click Button to LogIn
        </Alert></div>
        <Button variant="danger" onClick={()=>{history.push("/adminSignIn")}}>Click to Login</Button>
          </div>:""}
          <div>
            <input
              className="input"
              placeholder="First Name"
              type="text"
              id="firstName"
              name="firstname"
              onChange={handleChange}
              value={values.firstname}
              onBlur={handleBlur}
            ></input>
          </div>
          {errors.firstname && touched.firstname ? (
            <h6 style={{ color: "red" }}>{errors.firstname}</h6>
          ) : (
            ""
          )}

          <div>
            <input
              className="input"
              placeholder="Last Name"
              type="text"
              id="lastName"
              name="lastname"
              onChange={handleChange}
              value={values.lastname}
              onBlur={handleBlur}
            ></input>
          </div>
          {errors.lastname && touched.lastname ? (
            <h6 style={{ color: "red" }}>{errors.lastname}</h6>
          ) : (
            ""
          )}

          <div>
            <input
              className="input"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            ></input>
          </div>
          {errors.email && touched.email ? (
            <h6 style={{ color: "red" }}>{errors.email}</h6>
          ) : (
            ""
          )}

          <div>
            <input
              className="input"
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            ></input>
          </div>
          {errors.password && touched.password ? (
            <h6 style={{ color: "red" }}>{errors.password}</h6>
          ) : (
            ""
          )}

          {show ? (
            <h6 style={{ color: "red" }}>
              You have Already Signedup, login to enter
            </h6>
          ) : (
            ""
          )}

         
          <div className="remember">
            <input type="checkbox" name="" id=" remember"></input>
            <label htmlFor="remember" className="remember_label">
              I accept the terms & conditions
            </label>
            <button type="submit" className="login-btn">
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="foot">
        <p>
          This site is protected by reCAPTCHA and the Google
          <span>
            <a
              href="https://policies.google.com/privacy"
              target={"_blank"}
              rel={"noreferrer"}
            >
              Privacy Policy{" "}
            </a>
          </span>
          and{" "}
          <span>
            <a
              href="https://policies.google.com/terms"
              target={"_blank"}
              rel={"noreferrer"}
            >
              Terms of Condition{" "}
            </a>
          </span>{" "}
          apply.
        </p>
        <hr></hr>
        <div className="footer_Newuser">
          <p>
            Already have an account?{" "}
            <p
              onClick={() => {
                history.push("/");
              }}
            >
              Sign in !{" "}
            </p>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageAdmin;
