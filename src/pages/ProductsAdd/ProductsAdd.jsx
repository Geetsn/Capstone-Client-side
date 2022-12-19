import '../../pages/ProductsAdd/ProductsAdd.scss';
import axios from "axios";
import { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import Btn from '../../components/Btn/Btn';
import { useNavigate } from 'react-router-dom';

function ProductsAdd () {
  const [productName, setProductName] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const [color, setColor] = useState()
  const [size, setSize] = useState()
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState()
  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate('/products');
    
  }

  const item = {
    item_name: productName,
    description: description,
    category: category,
    quantity: quantity,
    color: color,
    size: size,
    price: price,
  }


  axios.post(`http://localhost:8080/add-products/`, item)
  .then((response) => {
    console.log(response.data);
    navigate('/add-products');
  })

  return(
    <>
    <Header />
    <div>
    <form className='shipping-details' >
          <div className='shipping-details__container'>
            <h3 className='shipping-details__header'>Add New Product</h3>
            {/* <div className='shipping-details__inputs'> */}
            {/* </div> */}
            <div className='shipping-details__address'>
              <input className='shipping-details__address-input' type="text" placeholder='Name' 
              onChange = {(e) => setProductName(e.target.value)}
              />
              <input className='shipping-details__address-input' type="text"  placeholder='Description' 
              onChange = {(e) => 
                setDescription(e.target.value)
              }
              />
              <input className='shipping-details__address-input' type="text" placeholder='Category'
              // value = {address}
              onChange = {(e) => setCategory(e.target.value)}
              />
              <input className='shipping-details__address-input' type="text" placeholder='Color'
              // value = {address}
              onChange = {(e) => setColor(e.target.value)}
              />
              <input className='shipping-details__address-input' type="text" placeholder='Size'
              // value = {address}
              onChange = {(e) => setSize(e.target.value)}
              />
              <input className='shipping-details__address-input' type="text" placeholder='Price'
              // value = {address}
              onChange = {(e) => setPrice(e.target.value)}
              />
              <input className='shipping-details__address-input' type="text" placeholder='Quantity'
              // value = {address}
              onChange = {(e) => setQuantity(e.target.value)}
              />
            </div> 
          
            <Btn className='btn_add'  
            onClick={() => handleNavigateToProducts()} type="button" 
            text='ADD'
            />
          </div>
      </form>
    </div>
    </>
  )
}

export default ProductsAdd;