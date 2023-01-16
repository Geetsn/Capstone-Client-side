import '../../pages/ProductsEdit/ProductsEdit.scss';
import axios from "axios";
import { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import Btn from '../../components/Btn/Btn';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';

function ProductsEdit () {
  const [productName, setProductName] = useState('')
  // const [userId, setUserId] = useState("ac436c9a-b031-4758-bae5-1aa0800dad14");
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const navigate = useNavigate('');

  const {id}= useParams();

  // const handleNavigateToProducts = () => {
  //   navigate('/products');
    
  // }

  const URL = process.env.REACT_APP_SERVER_URL || '';
  const handleNavigateToProducts = () => {
    navigate('/products'); 
  }
  
  const item = {
    product_name: productName,
    description: description,
    category: category,
    quantity: quantity,
    color: color,
    size: size,
    price: price,
    // user_id: userId,
  }

  useEffect(() =>{
    axios
      .get(`${URL}/products/${id}`)
      .then(response => {
        setProductName(response.data[0].product_name);
        setDescription(response.data[0].description);
        setCategory(response.data[0].category);
        setColor(response.data[0].color);
        setSize(response.data[0].size);
        setPrice(response.data[0].price);
        setQuantity(response.data[0].quantity)
      })
  },[id])
  

  const handleOnUpdateProduct = (details) =>{

    axios
    .put(`${URL}/products/${id}`, item)
    .then((response) => {
      navigate(`/products/`);
      console.log(response.data)
    }).catch(
      err =>{
        console.log(`error in updating the product ${err}`)
      }
    )
  }

  return(
    <>
    <Header />
    <div>
    <form className='shipping-details' 
    onSubmit={e => {
      e.preventDefault();
      handleOnUpdateProduct(item)
    }}>
          <div className='shipping-details__container'>
            <h3 className='shipping-details__header'>Edit Product</h3>
            {/* <div className='shipping-details__inputs'> */}
            {/* </div> */}
            <div className='shipping-details__address'>
              <input className='shipping-details__address-input' type="text" placeholder='Name' 
              onChange = {(e) => setProductName(e.target.value)}
              value={productName}
              />
              <input className='shipping-details__address-input' type="text"  placeholder='Description' 
              onChange = {(e) => 
                setDescription(e.target.value)
              }
              value={description}
              />
              <input className='shipping-details__address-input' type="text" placeholder='Category'
              onChange = {(e) => setCategory(e.target.value)}
              value = {category}
              />
              <input className='shipping-details__address-input' type="text" placeholder='Color'
              onChange = {(e) => setColor(e.target.value)}
              value = {color}
              />
              <input className='shipping-details__address-input' type="text" placeholder='Size'
              onChange = {(e) => setSize(e.target.value)}
              value = {size}
              />
              <input className='shipping-details__address-input' type="text" placeholder='Price'
              onChange = {(e) => setPrice(e.target.value)}
              value = {price}
              />
              <input className='shipping-details__address-input' type="text" placeholder='Quantity'
              onChange = {(e) => setQuantity(e.target.value)}
              value = {quantity}
              />
            </div> 
          
            <Btn className='btn_edit'  
             type="submit" 
            text='EDIT'
            />
          </div>
      </form>
    </div>
    </>
  )
}

export default ProductsEdit;