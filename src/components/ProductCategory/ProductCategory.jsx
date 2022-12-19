import {useNavigate} from 'react-router-dom';
import '../../components/ProductCategory/ProductCategory.scss';

function ProductCategory(){

  const navigate = useNavigate();


  return(
    <div className='productCat'>
      <div className='productCat-details'>
        {/* <label>Women</label> */}
          <select className='productCat-womenOption' onChange={(e)=>{
            console.log(e.target.value);
            navigate(`/products/${e.target.value}`);
          }}>
            <option value="women">Women</option>
            <option value="shirts">Shirts</option>
            <option value="sweaters">Sweaters</option>
            <option value="coats">Coats</option>
            <option value="dresses">Dresses</option>
          </select>
        {/* <label>Men</label> */}
          <select className='productCat-menOption'>
            <option value="">Men</option>
            <option value="1">Shirts</option>
            <option value="2">Sweaters</option>
            <option value="3">Coats</option>
            <option value="4">Jackets</option>
          </select>
        {/* <label>Kids</label> */}
          <select className='productCat-kidOption'>
            <option value="">Kids</option>
            <option value="1">Shirts</option>
            <option value="2">Sweaters</option>
            <option value="3">Coats</option>
            <option value="4">Dresses</option>
          </select>
      </div>

      <div className='productCat-searchbar'>
        <input className='productCat-search__input' type="text" placeholder='Search' />
      </div>
    </div>
  )
}

export default ProductCategory;