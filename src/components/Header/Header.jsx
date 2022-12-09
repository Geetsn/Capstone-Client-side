import '../../components/Header/Header.scss';
import Logo from '../../assets/Logo/u-solid.svg';
import {Link} from 'react-router-dom'
import UserIcon from '../../assets/Icons/user-regular.svg';
import HeartIcon from '../../assets/Icons/heart-regular.svg';
import CartIcon from '../../assets/Icons/cart-shopping-solid.svg';



function Header (props) {
  return(
   
      <nav className="header-nav">
        <div className='header-nav__details'>
          <div className='header-nav__logo'>
            <Link to='/' ><img src={Logo} alt='logo' className='header-nav__logo-link'/></Link>
          </div>
          <div className='header-nav__links'>
            <Link to='/login'><img src={UserIcon} className='header-nav__login'/></Link>
            <Link to='' className='header-nav__wishlist'>< img src={HeartIcon} /> 0</Link>
            <Link to='/shopping-cart' className='header-nav__cart'><img src={CartIcon}/> 0</Link>
          </div> 
        </div>
      </nav>
  )
}

export default Header;