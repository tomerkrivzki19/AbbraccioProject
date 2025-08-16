import React, { useState, useEffect } from "react";
import Hero from "../subComponents/Hero";
import TrendingProduct from "../subComponents/TrendingProduct";
import ProductFeatures from "../subComponents/ProductFeatures";
import PromotionalBanner from "../subComponents/PromotionalBanner";
import QandA from "../subComponents/QandA";
import AboutUs from "../subComponents/AboutUs";
import {
  getAllProducts,
  getProductById,
  getTop4Products,
} from "../services/shopify";

function MainPage() {
  const [trendingProducts, setTopTrendingProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errHandeler, setErrHandeler] = useState(false);

  // getAllProducts();
  // getProductById("gid://shopify/Product/7345044881511");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTop4Products();
        setTopTrendingProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchData();
  }, []);

  console.log(trendingProducts);
  return (
    <>
      <Hero />
      <TrendingProduct data={trendingProducts} />
      <ProductFeatures />
      <PromotionalBanner />
      <AboutUs />
      <QandA />
    </>
  );
}

export default MainPage;
