import Brands from "../components/Brands";
import EcomusFav from "../components/EcomusFav";
import Footer from "../components/Footer";
import Navbar from "../components/header/Navbar";
import PeopleFeed from "../components/PeopleFeed";
import PremiumSupport from "../components/PremiumSupport";
import ReadStorie from "../components/ReadStorie";
import CarouselPage   from "../components/carousel/CarouselPage";
import Categories from "../components/categories/Categories"

export default function Homepage() {
  return (
    <>
      <Navbar />
      <CarouselPage />
      <Categories />
      <EcomusFav/>
      <ReadStorie/>
      <PeopleFeed/>
      <PremiumSupport/>
      <Brands/>
      <Footer />
    </>
  );
}
