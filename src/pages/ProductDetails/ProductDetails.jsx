import '../../pages/ProductDetails/ProductDetails.scss';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Btn from '../../components/Btn/Btn';
import Header from '../../components/Header/Header';


const ProductDetails = (props) => {
  const [productDetails, setProductDetails] = useState({}); 
  // console.log('productDetails',productDetails)
  
  const {id} = useParams()
  
 
  // const [count, setCount] = useState(0);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(0)

  console.log('quantity',quantity);

  const newProduct = {
    product_name: productDetails.product_name,
    quantity: quantity,
    size: productDetails.size,
    price: productDetails.price,
    image: productDetails.product_image,
    color: productDetails.color
  }

 
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    // console.log(productDetails);

    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')); // load localStorage if exists
    if(shoppingCart === null){
      localStorage.setItem('shoppingCart', JSON.stringify([newProduct])); // if null create localStorage and add 1 object to an array
      //how to deconstruct useState variable to change qty and size same as pushing to the shoppingcart
    } else {
      shoppingCart.push(newProduct); // if not null push an object to the array
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart)); // save data back to localStorage
    }
    // console.log('shoppingCart',shoppingCart);

    // localStorage.setItem('shoppingCart', JSON.stringify([productDetails]));

    //useState Counter
    navigate('/shopping-cart');
    
    
  }
  const handleNavigateToWishlist = () => {
    
    const wishlist = JSON.parse(localStorage.getItem('wishlist')); // load localStorage if exists

    //useState to update counter on the wishlist 
    if(wishlist === null){
      localStorage.setItem('wishlist', JSON.stringify([newProduct])); // if null create localStorage and add 1 object to an array
      //how to deconstruct useState variable to change qty and size same as pushing to the shoppingcart
    } else {
      wishlist.push(newProduct); // if not null push an object to the array
      localStorage.setItem('wishlist', JSON.stringify(wishlist)); // save data back to localStorage
    }
    navigate('/shopping-cart');
    
  }

  const handleNavigateToProductsEdit = () =>{
    navigate('/edit-products')
  }

  useEffect(() => {
    axios
    .get(`http://localhost:8080/products/${id}`)
    .then((response) => {
      setProductDetails(response.data[0]);
      console.log(response)
    })
    .catch((err) => console.log(err));
}, []);


  return (
    <>
    <Header />
    {/* update it accordingly */}
    <div className='product-details'>
    <div className='product-details__container'>
       {/* <h3>{productDetails.product_name}</h3> */}
       <img src={`http://localhost:8080/${productDetails.product_image}`} />
       <p>{productDetails.description}</p>
       {/* <p>{productDetails.price}</p> */}
    </div>
     <div className='containerTwo'>
     <h5 className='containerTwo__p'>{productDetails.product_name}</h5>
     <div className='containerTwo__coupon'>
        <h5>Price: </h5>
        <p className='containerTwo__coupon-text'>${productDetails.price}</p>
     </div>
     <div className='containerTwo__coupon'>
        <h5>Color: </h5>
        <p className='containerTwo__coupon-text'>{productDetails.color}</p>
     </div>
     
     <div lassName='containerTwo__price'>
       
       <div className='containerTwo__discount'> 
        <h5>Size:</h5>
        {/* use useState to know size  */}
        <div className='containerTwo__discount-size'>
          <input type="radio" value={size} onChange={(event) => setSize(event.target.value)}/>
          <label >S</label>
          <input type="radio" />
          <label >M</label>
          <input type="radio" />
          <label >L</label>
        </div>
        {/* add quantity with useState */}
        <h5>Quantity:</h5>
        <select className='containerTwo-details__input'  value = {quantity}
            onChange = {(e) => setQuantity(e.target.value)}>
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
       </div>
      
       <Btn className='btn_next btn'  type="button" text='ADD TO CART' 
       onClick={() => 
        handleNavigateToCart()}/>
       <Btn className='btn_back' onClick={() => handleNavigateToWishlist()} type="button" text='WISHLIST'/>
       <Btn className='btn_edit'  type="button" text='EDIT' 
       onClick={() => 
        handleNavigateToProductsEdit()}
       />
     </div>
   </div>
   </div>
   </>
  );

}

export default ProductDetails;