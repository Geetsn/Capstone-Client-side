import '../../pages/Login/Login.scss';
// import { Link } from 'react-router-dom';
import Btn from '../../components/Btn/Btn';
import Header from '../../components/Header/Header';

function Login () {

  
  // localStorage.setItem("message", "saved in browser storage");
  // console.log(localStorage.getItem("message"));
  
  return(
    <>
    <Header />
    <form className='login-page'>
        <div className='login-page__form'>
          <h3 className='login-page__header'>Login</h3>
          <h3 className='login-page__title'>
            Email
          </h3>
          <input className='login-page__input' type="text" />
          <h3 className='login-page__title'>
            Password
          </h3>
          <input className='login-page__input' type="text" />
        <Btn className='btn_login' text="Login"/>
        </div>
        <div className='login-page__form'>
          <h3 className='login-page__header'>SignUp</h3>
          <h3 className='login-page__title'>
            Email
          </h3>
          <input className='login-page__input' type="text" />
          <h3 className='login-page__title'>
            Password
          </h3>
          <input className='login-page__input' type="text" />
          <h3 className='login-page__title'>
            Confirm Password
          </h3>
          <input className='login-page__input' type="text" />
        <Btn className='btn_register' text="Register"/>
        </div>  
    </form>
    </>
  )
}

export default Login;