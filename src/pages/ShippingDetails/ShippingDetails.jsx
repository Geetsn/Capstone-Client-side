import '../../pages/ShippingDetails/ShippingDetails.scss';
import Btn from '../../components/Btn/Btn';

function ShippingDetails () {
  return( 
    <div className='shipping-detail__page'>
      <form className='shipping-details'>
          <div className='shipping-details__container'>
            <h3 className='shipping-details__header'>Shipping Details</h3>
            <div className='shipping-details__inputs'>
              <input className='shipping-details__input' type="text" placeholder='Name' />
              <input className='shipping-details__input' type="text"  placeholder='Last Name'/>
            </div>
            <div className='shipping-details__address'>
              <input className='shipping-details__address-input' type="text" placeholder='Address 1'/>
              <input className='shipping-details__address-input' type="text" placeholder='Address 2'/>
              {/* <input className='shipping-details__address-input' type="text" placeholder='Country'/> */}
            <select className='shipping-details__address-input'>
              <option value="">Country</option>
              <option value="1">Canada</option>
              <option value="2">Australia</option>
              <option value="3">USA</option>
              <option value="4">UK</option>
            </select>
            </div> 
            <div className='shipping-details__inputs'>
              <input className='shipping-details__input' type="text" placeholder='Phone' />
              {/* <input className='shipping-details__input' type="text"  placeholder='City'/> */}
              <select className='shipping-details__input'>
              <option value="">City</option>
              <option value="1">Vancouver</option>
              <option value="2">Toronto</option>
              <option value="3">Calgary</option>
              <option value="4">Winnipeg</option>
            </select>
              {/* <input className='shipping-details__input' type="text" placeholder='State/Province' /> */}
            <select className='shipping-details__input'>
              <option value="">State/Province</option>
              <option value="1">British Columbia</option>
              <option value="2">Ontario</option>
              <option value="3">Alberta</option>
              <option value="4">Manitoba</option>
            </select>
              <input className='shipping-details__input' type="text"  placeholder='Zip/Postal Code'/>
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
        <div lassName='shipping-details__price'>
          <div className='shipping-details__total'>
            <p>Total</p>
            <p>$100</p>
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
            <p>$100</p>
          </div>
          <Btn className='btn_next btn'  text='Next'/>
          <Btn className='btn_back' text='Back'/>
        </div>


      </div>
    </div>
  )
}

export default ShippingDetails;