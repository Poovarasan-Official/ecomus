import Brands from "../components/brands/Brands";
import Footer from "../components/Footer";
import Navbar from "../components/header/Navbar";
import CarouselPage   from "../components/carousel/CarouselPage";
import Categories from "../components/categories/Categories"
import EcomusFav from "../components/ecomusfav/EcomusFav";
import ReadStorie from "../components/readStorie/ReadStorie";
import PeopleFeed from "../components/peopleFeed/PeopleFeed";
import PremiumSupport from "../components/premiumSupport/PremiumSupport";

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
