import Brands from "../components/Brands";
import EcomusFav from "../components/EcomusFav";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PeopleFeed from "../components/PeopleFeed";
import PremiumSupport from "../components/PremiumSupport";
import ReadStorie from "../components/ReadStorie";

export default function Homepage() {
  return (
    <>
      
      <EcomusFav/>
      <ReadStorie/>
      <PeopleFeed/>
      <PremiumSupport/>
      <Brands/>
      
    </>
  );
}
