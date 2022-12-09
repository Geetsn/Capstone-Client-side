import '../../pages/ShoppingCart/ShoppingCart.scss';
import imageThree from '../../assets/Image/sweater3.jpeg';
import Btn from '../../components/Btn/Btn';

function ShoppingCart (){
  return( 
    <div className='shopping-cart'>
     
          <div className='shopping-cart__container'>
            <img src={imageThree} alt="img" className='shopping-cart__img'/>
            <div className='shopping-cart__details'>
            <h4 className='shopping-cart__title'>Sweater</h4>
            <div className='shopping-cart__inputs'>
              <p className='shopping-cart__p'>Price:</p>
              <p>$20</p>
            </div>
            <div className='shopping-cart__address'>
            <select className='shopping-cart__address-input'>
              <option value="">SIZE</option>
              <option value="1">X-small</option>
              <option value="2">Small</option>
              <option value="3">Medium</option>
              <option value="4">Large</option>
            </select>
              <select className='shopping-cart__address-input'>
                <option value="">Qty</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              </div>
           </div>
          </div>
 

          <div className='containerTwo'>
        <h5 className='containerTwo__p'>Coupons/ Discount Code</h5>
        <div className='containerTwo__coupon'>
          <input type="radio" />
          <label >Apply coupon/ discount</label>
          <Btn className='btn_add' text='Add'/>
        </div>
        <h5 className='containerTwo__p'>Price Details</h5>
        <div lassName='containerTwo__price'>
          <div className='containerTwo__total'>
            <p>Total</p>
            <p>$100</p>
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
            <p>$100</p>
          </div>
          <Btn className='btn_next btn'  text='Order'/>
          <Btn className='btn_back' text='Back'/>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart;