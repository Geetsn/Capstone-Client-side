import '../../pages/HomePage/HomePage.scss';
import Image from '../../assets/Image/hero1.jpg';
import ImageOne from '../../assets/Image/sweater5.jpeg';
import ImageTwo from '../../assets/Image/sweater2.jpeg';
import ImageThree from '../../assets/Image/sweater3.jpeg';
import ProductCategory from '../../components/ProductCategory/ProductCategory';
import Header from '../../components/Header/Header';





function HomePage () {
  return(
    <>
     <Header />
    <ProductCategory />

   
      <div className='main'>
        <img className='main-hero' src={Image} alt="hero" />
        <h1 className='main-title'>Trending</h1>
        {/* const displayImage = image.display("", "", "width=200, height=100"); */}
        {/* setTimeout(function() {Image.display()}, 5000); */}
        {/* setTimeout(() => {
                Image.display();
            }, 3000);
          let image = Math.random() */}
       
        <img className='main-imageOne' src={ImageOne} alt="" />
        <img className='main-imageTwo' src={ImageTwo} alt="" />
        <img className='main-imageThree' src={ImageThree} alt="" />

      </div>
    </>
  )
}
export default HomePage;