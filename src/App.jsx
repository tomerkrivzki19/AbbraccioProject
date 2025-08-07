import reactLogo from "./assets/react.svg"; // delete this
import viteLogo from "/vite.svg"; // delete this
import "./App.css";
import "./input.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import NavContainer from "./components/NavContainer";
import Footer from "./components/Footer";
import StorePage from "./components/StorePage";
import MainPage from "./components/MainPage";
import Taknon from "./components/Taknon";
import Negishot from "./components/Negishot";
import DeliveryPolicy from "./components/DeliveryPolicy";
import ErrorPage from "./components/ErrorPage";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <>
      <Router>
        <NavContainer />

        <Routes>
          <Route path="/*" element={<ErrorPage />} />

          <Route path="/" element={<MainPage />} />
          <Route path="/shop" element={<StorePage />} />
          {/* TODO: add a url params ?.... */}
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/takanon" element={<Taknon />} />
          <Route path="/negishot" element={<Negishot />} />
          <Route path="/delivery-policy" element={<DeliveryPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
