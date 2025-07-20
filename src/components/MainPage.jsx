import React from "react";
import Hero from "../subComponents/Hero";
import TrendingProduct from "../subComponents/TrendingProduct";
import ProductFeatures from "../subComponents/ProductFeatures";
import PromotionalBanner from "../subComponents/PromotionalBanner";
import QandA from "../subComponents/QandA";
import AboutUs from "../subComponents/AboutUs";
import {
  getAllProducts,
  getProductById,
  getTop5Products,
} from "../services/shopify";

function MainPage() {
  // getTop5Products();
  // getAllProducts();
  getProductById("gid://shopify/Product/7345044881511");

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
