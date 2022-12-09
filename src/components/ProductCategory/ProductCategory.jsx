import '../../components/ProductCategory/ProductCategory.scss';

function ProductCategory(){
  return(
    <div className='productCat'>
      <div className='productCat-details'>
        {/* <label>Women</label> */}
          <select className='productCat-womenOption'>
            <option value="">Women</option>
            <option value="1">Shirts</option>
            <option value="2">Sweaters</option>
            <option value="3">Coats</option>
            <option value="4">Dresses</option>
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