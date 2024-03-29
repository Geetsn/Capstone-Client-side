import "../../pages/Products/Products.scss";
import '../../pages/ProductDetails/ProductDetails';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Btn from '../../components/Btn/Btn'

const Products = () => {

  const URL = process.env.REACT_APP_SERVER_URL || '' ; 
  const [productDetails, setProductDetails] = useState([]);

  const navigate = useNavigate()
  const params = useParams();
  console.log(params);
  

  useEffect(() => {
    axios
      .get(`${URL}/products`)
      .then((response) => {
        console.log(response.data);
        setProductDetails(response.data);
      })
      .catch((err) => console.log(err));
  }, []); 

  useEffect(() => {
    console.log(productDetails);
  }, [productDetails]);

  const handleNavigateToProductsAdd = () => {
    navigate('/add-products');
    
  }

  return (
    <>
   <Header />
    <div className="products">
      <div className="products-btn"> 
        <Btn className='btn_add '  type="button" text='ADD' 
        onClick={() => 
        handleNavigateToProductsAdd()}/>
      </div>
      {productDetails.map(product=> 
        <div className="products-details">
        <Link className="products-link" to={`/product/${product.id}`} 
        >
        
            <h3 className="products-title">{product.product_name}</h3>
            <img className="products-image" src={`http://localhost:8080/${product.product_image}`} />
            <p className="products-description">{product.description}</p>
            <p className="products-price">${product.price}</p>
          </Link>
        </div>
        )} 
    </div>

    </>
  );
}
export default Products;




