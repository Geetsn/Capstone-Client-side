import '../../pages/ShippingDetails/ShippingDetails.scss';
import axios from 'axios';
import Btn from '../../components/Btn/Btn';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';


function ShippingDetails () {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const [country, setCountry] = useState();
  const [postalCode, setPostalCode] = useState();
  const [subTotal, setSubTotal] = useState(0)
  const [cartItems, setCartItems] = useState([])


const shipping_details = {
  name: firstName,
  last_name: lastName,
  address: address,
  phone: phone,
  country: country,
  city: city,
  province: province,
  postal_code: postalCode

}

useEffect(()=>{
  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')); // load localStorage if exists
  if(shoppingCart !== null){
    setCartItems(shoppingCart)
  }
 },[]);
useEffect(()=>{
  console.log("cart update", cartItems)  

  const total = cartItems.map(item =>{
    return  item.price * item.quantity
  }).reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  console.log('total', total)

  setSubTotal(total);

  
},[cartItems])


console.log(shipping_details)
    const handleOnSubmit = (event) => {
    // event.preventDefault();
    // const handleNavigateToPayment = () => {
    //axios to update userinfo for shipping details
    console.log(shipping_details)
    axios
    .put(`http://localhost:8080/user/0612167c-2eef-4119-8e7c-ba34ee05db44` , shipping_details)
    .then((res) => {
      
      navigate('/payment');
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }
  const handleNavigateToShoppingCart = () => {
    navigate('/shopping-cart');
    
  }

  return( 
    <>
    <Header />
    <div className='shipping-detail__page'>
      <form className='shipping-details' onSubmit={(event) => handleOnSubmit(event)} >
          <div className='shipping-details__container'>
            <h3 className='shipping-details__header'>Shipping Details</h3>
            <div className='shipping-details__inputs'>
              <input className='shipping-details__input' type="text" placeholder='Name' 
              // value = {firstName}
              onChange = {(e) => setFirstName(e.target.value)}
              />
              <input className='shipping-details__input' type="text"  placeholder='Last Name' name='lastName'
              // value = {lastName}
              onChange = {(e) => 
                setLastName(e.target.value)
              }
              />
            </div>
            <div className='shipping-details__address'>
              <input className='shipping-details__address-input' type="text" placeholder='Address'
              // value = {address}
              onChange = {(e) => setAddress(e.target.value)}
              />
            <select className='shipping-details__address-input' value = {country}
              onChange = {(e) => setCountry(e.target.value)}>
              <option value="">Country</option>
              <option value="1">Canada</option>
              <option value="2">Australia</option>
              <option value="3">USA</option>
              <option value="4">UK</option>
              
            </select>
            </div> 
            <div className='shipping-details__inputs'>
              <input className='shipping-details__input' type="text" placeholder='Phone' 
                value = {phone}
                onChange = {(e) => setPhone(e.target.value)}
              />
              {/* <input className='shipping-details__input' type="text"  placeholder='City'/> */}
              <select className='shipping-details__input'  value = {city}
              onChange = {(e) => setCity(e.target.value)}>
              <option value="">City</option>
              <option value="1">Vancouver</option>
              <option value="2">Toronto</option>
              <option value="3">Calgary</option>
              <option value="4">Winnipeg</option>
             
            </select>
              {/* <input className='shipping-details__input' type="text" placeholder='State/Province' /> */}
            <select className='shipping-details__input'  value = {province}
              onChange = {(e) => setProvince(e.target.value)}>
              <option value="">State/Province</option>
              <option value="1">British Columbia</option>
              <option value="2">Ontario</option>
              <option value="3">Alberta</option>
              <option value="4">Manitoba</option>
             
            </select>
              <input className='shipping-details__input' type="text"  placeholder='Zip/Postal Code'
                // value = {postalCode}
                onChange = {(e) => setPostalCode(e.target.value)}
              />
            </div>
            <input className='shipping-details__text' type="radio"/>
            <label> Use this for payment</label>
          </div>
      </form>

      <div className='shipping-details__containerTwo'>
        <h5 className='shipping-details__p'>Coupons/ Discount Code</h5>
        <div className='shipping-details__coupon'>
          <input type="radio" />
          <label >Apply coupon/ discount</label>
          <Btn className='btn_add' text='Add'/>
        </div>
        <h5 className='shipping-details__p'>Price Details</h5>
        <div className='shipping-details__price'>
          <div className='shipping-details__total'>
            <p>Price</p>
            <p>{subTotal}</p>
          </div>
          <div className='shipping-details__discount'> 
            <p>Discount</p>
            <p>-$</p>
          </div>
          <div className='shipping-details__Coupon'>
            <p>Coupon</p>
            <p>-$</p>
          </div>
          <div className='shipping-details__final-price'>
            <p>Total</p>
            <p>{subTotal}</p>
          </div>
          <Btn className='btn_next btn' type="submit" text='Next' onClick={()=>handleOnSubmit()}/>
          <Btn className='btn_back' onClick={() => handleNavigateToShoppingCart()} type="button" text='Back'/>
        </div>


      </div>
    </div>
    </>
  )
}

export default ShippingDetails;