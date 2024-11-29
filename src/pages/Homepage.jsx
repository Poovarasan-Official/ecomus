import Carousel from "../components/carousel/CarouselPage";
import Categories from "../components/categories/Categories";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <>
      {/* <Navbar /> */}
      <Carousel />
       <Categories /> 
      <Footer /> 
    </>
  );
}
