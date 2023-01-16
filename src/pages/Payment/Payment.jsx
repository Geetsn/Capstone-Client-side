import '../../pages/Payment/Payment.scss';
import Btn from '../../components/Btn/Btn';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';

function Payment(){
  const navigate = useNavigate()

  const [cardName, setCardName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [cvc, setCvc] = useState();
  const [subTotal, setSubTotal] = useState(0);

  const payment = {
    card_name: cardName,
    card_number: cardNumber,
    cvc: cvc,
    expiration_date: expirationDate,
  }

  const shoppingCart = JSON.parse(localStorage.getItem
    ('shoppingCart')); 

  useEffect(()=>{
    console.log("added payment", shoppingCart)  
  
    const total = shoppingCart.map(item =>{
      return  item.price * item.quantity
    }).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  
    console.log('total', total)
  
    setSubTotal(total);
  
    
  },[shoppingCart])

  const handleNavigateToOrderConfirmation = () => {
    //axios for add payment
    //axios for  add order, add orderproduct pod from local storage

    axios
    .post(`http://localhost:8080/payment` , payment)
    .then((res) => {
      
      
    })
    .catch((err)=>{
      console.log(err)
    })

    //retrieve order and order_product 
    navigate('/order-confirmation');
    
  }
  const handleNavigateToShippingDetails = () => {
    navigate('/shipping-details');
    
  }
  return( 
    <>
    <Header />
    <div className='payment-page'>
      <form className='payment-page__details'>
          <div className='payment-page__container'>
            <h3 className='payment-page__header'>Payment Method</h3>
            <div className='payment-page__radio-inputs'>
              <input type="radio" />
              <label className='payment-page__radio-label'>VISA</label>
              <input type="radio" />
              <label>MASTER CARD</label>
            </div> 
            <div className='payment-page__inputs'>
              <input className='payment-page__input-card' type="text" placeholder='Name on Card' 
               onChange = {(e) => 
                setCardName(e.target.value)
              }
              />
            </div>
            <div className='payment-page__inputs'>
              <input className='payment-page__input-card' type="text" placeholder='Card Number' 
               onChange = {(e) => 
                setCardNumber(e.target.value)
              }
              />
            </div>
            <div className='payment-page__inputs'>
              <input className='payment-page__input' type="text" placeholder='Expiry Date' 
               onChange = {(e) => 
                setExpirationDate(e.target.value)
              }
              />
              <input className='payment-page__input' type="text" placeholder='CVC' 
               onChange = {(e) => 
                setCvc(e.target.value)
              }
              />
            </div>
          </div> 
      </form>

      <div className='containerTwo'>
        <h5 className='containerTwo__p'>Coupons/ Discount Code</h5>
        <div className='containerTwo__coupon'>
          <input type="radio" />
          <label >Apply coupon/ discount</label>
          {/* <Btn className='btn_add' text='Add'/> */}
        </div>
        <h5 className='containerTwo__p'>Price Details</h5>
        <div lassName='containerTwo__price'>
          <div className='containerTwo__total'>
            <p>Price</p>
            <p>{subTotal}</p>
          </div>
          <div className='containerTwo__discount'> 
            <p>Discount</p>
            <p>-$</p>
          </div>
          <div className='containerTwo__Coupon'>
            <p>Coupon</p>
            <p>-$</p>
          </div>
          <div className='containerTwo__final-price'>
            <p>Total</p>
            <p>{subTotal}</p>
          </div>
          {/* <Btn className='btn_next btn'  onClick={() => handleNavigateToOrderConfirmation()} type="button" text='Order'/> */}
          <Btn 
              className='btn_next btn' 
              onClick={() => {
                  handleNavigateToOrderConfirmation()
                  localStorage.clear()
                }} 
            type="button" text='Order'/>
          <Btn className='btn_back' onClick={() => handleNavigateToShippingDetails()} type="button" text='Back'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Payment;