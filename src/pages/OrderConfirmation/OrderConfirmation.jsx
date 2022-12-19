import '../../pages/OrderConfirmation/OrderConfirmation';
import Header from '../../components/Header/Header';

function OrderConfirmation () {
  return(
    <>
      <Header />
    <div className='order-confirmation'>
      <h3 className='order-confirmation__title'>Your order is submitted successfully</h3>
      <p className='order-confirmation__text'>Order# 12312323</p>
    </div>
    </>
    
  )
}

export default OrderConfirmation;