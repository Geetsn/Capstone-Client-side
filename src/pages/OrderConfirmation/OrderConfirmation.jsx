import '../../pages/OrderConfirmation/OrderConfirmation';
import Header from '../../components/Header/Header';

function OrderConfirmation () {
  return(
    <>
      <Header />
    <div className='containerTwo'>
      <h3 className='containerTwo__title'>Your order is submitted successfully.</h3>
      <p className='containerTwo__text'>Your Order# 12312323</p>
    </div>
    </>
    
  )
}

export default OrderConfirmation;