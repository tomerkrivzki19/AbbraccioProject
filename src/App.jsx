import reactLogo from "./assets/react.svg"; // delete this
import viteLogo from "/vite.svg"; // delete this
import "./App.css";
import Hero from "./subComponents/Hero";
import TrendingProduct from "./subComponents/TrendingProduct";
import ProductFeatures from "./subComponents/ProductFeatures";
import PromotionalBanner from "./subComponents/PromotionalBanner";
import QandA from "./subComponents/QandA";
import AboutUs from "./subComponents/AboutUs";
import NavContainer from "./components/NavContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* nav */}
      <NavContainer />
      {/* checking for the main page  */}
      <Hero />
      <TrendingProduct />
      <ProductFeatures />
      <PromotionalBanner />
      <AboutUs />
      <QandA />
      {/*  */}
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
