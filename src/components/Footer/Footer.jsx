import '../../components/Footer/Footer.scss';
import  Logo  from '../../assets/Logo/u-solid.svg';
import { Link } from 'react-router-dom';
import FIcon from '../../assets/Icons/facebook.svg';
import IgIcon from '../../assets/Icons/square-instagram.svg';
import TIcon from '../../assets/Icons/tiktok.svg';


function Footer(props){
  return(
    <div className='footer'>
      <div className='footer-details'>
        <div className='footer-logo'>
           <Link><img src={Logo} alt='logo' className='footer-logo__link'/></Link>
        </div>
        <div className='footer-contact'>
          <h5 className='footer-contact__title'>Customer Care</h5>
          <p className='footer-contact__email'>Email: universal@info.com </p>
          <p className='footer-contact__phone'>Tel: 777 234 2323</p>
        </div>
        <div className='footer-location'>
          <h5 className='footer-title'>Locations</h5>
          <p className='footer-add'>123 Robson St, Vancouver, BC</p>
        </div>
        <div className='footer-socials'>
          <h5 className='footer-title'>Socials</h5>
            <Link><img src={FIcon} className='footer-fb' alt=''/></Link>
            <Link><img src={IgIcon} className='footer-ig' alt=''/></Link>
            <Link><img src={TIcon} className='footer-tk' alt=''/></Link>
        </div>
      </div>
    
         <p class="footer-text">Copyright Universal © 2022 All Rights Reserved</p>
    </div>
  )
}

export default Footer;