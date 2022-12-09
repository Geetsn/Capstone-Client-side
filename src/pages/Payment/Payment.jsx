import '../../pages/Payment/Payment.scss';
import Btn from '../../components/Btn/Btn';

function Payment(){
  return( 
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
              <input className='payment-page__input-card' type="text" placeholder='Name on Card' />
            </div>
            <div className='payment-page__inputs'>
              <input className='payment-page__input-card' type="text" placeholder='Card Number' />
            </div>
            <div className='payment-page__inputs'>
              <input className='payment-page__input' type="text" placeholder='Expiry Date' />
              <input className='payment-page__input' type="text" placeholder='CVC' />
            </div>
          </div> 
      </form>

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

export default Payment;