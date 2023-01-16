import { useEffect, useState } from "react";
import "../../pages/ShoppingCart/ShoppingCart.scss";
import Btn from "../../components/Btn/Btn";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const [subTotal, setSubTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")); // load localStorage if exists
    if (shoppingCart !== null) {
      setCartItems(shoppingCart);
    }
  }, []);

  useEffect(() => {
    console.log("cart update", cartItems);

    setQuantity(cartItems.length);
    // console.log(quantity)

    console.log("cartItems", cartItems);
    const total = cartItems
      .map((item) => {
        return item.price * item.quantity;
      })
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    console.log("total", total);

    setSubTotal(total);
  }, [cartItems, quantity]);

  const handleNavigateToShippingDetails = () => {
    navigate("/shipping-details");
  };
  const handleNavigateToProducts = () => {
    navigate("/products");
  };

  console.log(subTotal);
  return (
    <>
      <Header />
      <div className="shopping-cart">
        <div className="shopping-cart__container">
          {cartItems.map((item) => {
            console.log("item", item);
            return (
              <div>
                <h4 className="shopping-cart__title">{item.product_name}</h4>
                <img
                  src={`http://localhost:8080/${item.image}`}
                  alt="img"
                  className="shopping-cart__img"
                />
                <div className="shopping-cart__details">
                  <p>{item.description}</p>
                  <div className="shopping-cart__inputs">
                    <p className="shopping-cart__p">Price:</p>
                    <p className="shopping-cart__p">${item.price}</p>
                    <p className="shopping-cart__p">Color:</p>
                    <p className="shopping-cart__p">{item.color}</p>
                    <p className="shopping-cart__p">Quantity:</p>
                    <p className="shopping-cart__p">{item.quantity}</p>
                    <p className="shopping-cart__p">Size:</p>
                    <p className="shopping-cart__p">{item.size}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="containerTwo">
          <h5 className="containerTwo__p">Coupons/ Discount Code</h5>
          <div className="containerTwo__coupon">
            <input type="radio" />
            <label>Apply coupon/ discount</label>
            {/* <input type="text" /> */}
            {/* <Btn className='btn_add' text='Add'/> */}
          </div>
          <h5 className="containerTwo__p">Price Details</h5>
          <div lassName="containerTwo__price">
            <div className="containerTwo__total">
              <p>Price</p>
              <p>{subTotal}</p>
            </div>
            <div className="containerTwo__discount">
              <p>Discount</p>
              <p>-$</p>
            </div>
            <div className="containerTwo__Coupon">
              <p>Coupon</p>
              <p>-$</p>
            </div>
            <div className="containerTwo__final-price">
              <p>Total</p>
              <p>{subTotal}</p>
            </div>
            <Btn
              className="btn_next btn"
              onClick={() => {
                handleNavigateToShippingDetails();
              }}
              type="button"
              text="Checkout"
            />

            <Btn
              className="btn_back"
              onClick={() => handleNavigateToProducts()}
              type="button"
              text="Back"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
