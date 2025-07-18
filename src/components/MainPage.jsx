import React from "react";
import Hero from "../subComponents/Hero";
import TrendingProduct from "../subComponents/TrendingProduct";
import ProductFeatures from "../subComponents/ProductFeatures";
import PromotionalBanner from "../subComponents/PromotionalBanner";
import QandA from "../subComponents/QandA";
import AboutUs from "../subComponents/AboutUs";
function MainPage() {
  return (
    <>
      <Hero />
      <TrendingProduct />
      <ProductFeatures />
      <PromotionalBanner />
      <AboutUs />
      <QandA />
    </>
  );
}

export default MainPage;
