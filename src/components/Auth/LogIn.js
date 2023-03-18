import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from "yup";
import { useFormik } from "formik";
import AuthNavBar from "./NavAuth";
import { useState } from "react";

const emailValidation = yup.object({
  email: yup.string().required("Enter a Email"),
  password: yup.string().required("Enter Password"),
});

const LogInPage = ({user,setUser}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const history = useHistory();
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: emailValidation,
      onSubmit: (email) => {
        logInFunc(email);
      },
    });

  const logInFunc = async (email) => {
    try {
      const response = await fetch("https://webcode-2-backend.vercel.app/webcode/login", {
        method: "POST",
        body: JSON.stringify(email),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.message === "logged in successfully") {
        setUser(data.user)
        console.log(data.user.firstname)
        localStorage.setItem("email",data.user.email);
        localStorage.setItem("password",data.user.password);
        localStorage.setItem("name",data.user.firstname);
        history.push("/main");
      } else if(data.message === "invalid credentials password"){
        setShowPassword(true);
      } else if(data.message === "invalid credentials email"){
        setShowEmail(true);
      }
    } catch (error) {
      console.log("User LogIn Error : ", error);
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
        <div>
          <h3 className="title">
            Guvi Pizza Corner{" "}
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

      <div>
        <div>
        <h2 className="signIn-title">User SignIn Page</h2>
          <form onSubmit={handleSubmit} className="form">
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
                placeholder="Password"
                className="input"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              ></input>
            </div>
            {errors.password && touched.password ? (
              <h6 style={{ color: "red" }}>{errors.password}</h6>
            ) : (
              ""
            )}
            {showEmail?(
              <h6 style={{ color: "red" }}>
                Entered Email Is not available, please Signup before login
              </h6>
            ) : (
              ""
            )}
            {showPassword ? (
              <h6 style={{ color: "red" }}>
                Password is incorrect
              </h6>
            ) : (
              ""
            )}

            <div className="flex-container">
              <div className="w-100 m-1">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="remember_check"
                ></input>
                <label for="remember" className="remember_label">
                  Remember password
                </label>
              </div>
              <div className="w-100 m-1">
                <button type="" className="login-btn ">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <p
            className="forget-password"
            onClick={() => history.push("/forgetPassword/user")}
          >
            Forget Password
          </p>
        </div>
        <p>
          This site is protected by reCAPTCHA and the Google
          <span>
            <a
              href="https://policies.google.com/privacy"
              target={"_blank"}
              rel={"noreferrer"}
            >
              Privacy Policy
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
        <div className="footer_Newuser"></div>
      </div>
    </div>
  );
};

export default LogInPage;
