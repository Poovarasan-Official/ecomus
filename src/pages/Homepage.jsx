import Brand from "../components/Brand";
import Footer from "../components/Footer";
import Navbar from "../components/header/Navbar";
import CarouselPage from "../components/carousel/CarouselPage";
import Categories from "../components/categories/Categories";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <CarouselPage />
      <Categories />
      <Brand />
      <Footer />
    </>
  );
}
