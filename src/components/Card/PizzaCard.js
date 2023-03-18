import { Modal } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Action/cartActions";

const PizzaCard = ({ product }) => {
  const history = useHistory();
  const [pizzaVarient, setPizzaVarient] = useState("small");
  const [sauceVarient, setSauceVarient] = useState("tomatoSauce");
  const [cheeseVarient, setCheeseVarient] = useState("mozzarella");
  const [vegVarient, setVegVarient] = useState("");
  const [meatVarient, setMeatVarient] = useState("bacon");
  const [quantity, setQuantity] = useState(1);

  console.log(pizzaVarient);
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(
      addToCart(
        product,
        quantity,
        pizzaVarient,
        sauceVarient,
        cheeseVarient,
        meatVarient
      )
    );
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row">
      <Card className="pizza-card p-1 m-3">
        <Card.Title>{product.name}</Card.Title>
        <Card.Img
          variant="top"
          className="card-image"
          src={product.image}
          onClick={handleShow}
          style={{ height: "18rem" }}
        />
        <Card.Body>
          {/* ====================================================== */}
          <div className="flex-container">
            <div className="w-100 m-1">
              Varients
              <select
                className="form-control m-1"
                value={pizzaVarient}
                onChange={(e) => {
                  setPizzaVarient(e.target.value);
                }}
              >
                {product.varients.map((varient) => (
                  <option key={varient} value={varient}>
                    {varient}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-100 m-1">
              Quantity
              <select
                className="Quantity form-control m-1"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
                {[...Array(10).keys()].map((arr, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* ====================================================== */}
          <div className="flex-container m-1">
            <div className="w-100 m-1">
              Add Sauce
              <select
                className=" form-control m-1"
                value={sauceVarient}
                onChange={(e) => {
                  setSauceVarient(e.target.value);
                }}
              >
                {product.sauceVarient.map((sauce) => (
                  <option key={sauce} value={sauce}>
                    {sauce}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-100 m-1">
              Add Cheese
              <select
                className=" form-control m-1"
                value={cheeseVarient}
                onChange={(e) => {
                  setCheeseVarient(e.target.value);
                }}
              >
                {product.cheeseVarient.map((cheese) => (
                  <option key={cheese} value={cheese}>
                    {cheese}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* ====================================================== */}
          <div className="flex-container m-1">
            <div className="w-100 m-1">
              Add Meat
              <select
                className=" form-control m-1"
                value={meatVarient}
                onChange={(e) => {
                  setMeatVarient(e.target.value);
                }}
              >
                {product.meatVarient.map((meat) => (
                  <option key={meat} value={meat}>
                    {meat}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-100 m-1">
              Add Veggies
              <select
                className=" form-control m-1"
                value={vegVarient}
                onChange={(e) => {
                  setVegVarient(e.target.value);
                }}
              >
                {product.vegVarient.map((veg) => (
                  <option key={veg} value={veg}>
                    {veg}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* <<<<<<<<<<<<<<<<<<<PRICE>>>>>>>>>>>>>>>>> */}
          <div className="flex-container m-1">
            <div className="w-100">
              <h5>
                Price :{" "}
                {(product.base[0][pizzaVarient] +
                  product.sauce[0][sauceVarient] +
                  product.cheese[0][cheeseVarient] +
                  product.meat[0][meatVarient]) *
                  quantity}{" "}
                Rs/-
              </h5>
            </div>
          </div>
          {/* <<<<<<<<<<<<<<<<<<<ADD TO CART>>>>>>>>>>>>>>>>> */}
          <div className="flex-container m-1">
            <div className="w-100">
              <button className=" card_btn" onClick={() => addCart()}>
                Add to Cart
              </button>
            </div>
            {/* <div className="w-100">
              <button
                className="m-1 card_btn"
                onClick={() => {
                  history.push(`/addtocart`);
                }}
              >
                Buy Now
              </button>
            </div> */}
          </div>

        </Card.Body>
      </Card>


{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="flex-container">
              <div className="w-100 ">
                <img
                  className="image-fluid img-model"
                  style={{ height: "20rem", width: "20rem" }}
                  src={product.image}
                  alt="pizza"
                ></img>
              </div>
            </div>
          </Modal.Body>
          <p style={{ width: "90%", marginLeft: "0.5rem" }}>
            {product.description}
          </p>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default PizzaCard;
