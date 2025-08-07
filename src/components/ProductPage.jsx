import React from "react";
// TODO: fix the images link
// import { Header } from "./Header";
// import { ProductImageGallery } from "./ProductImageGallery";
// import { ProductDetails } from "./ProductDetails";
// import { RelatedProducts } from "./RelatedProducts";
import ProductImageGallery from "../subComponents/ProductImageGallery ";
import ProductDetails from "../subComponents/ProductDetails";
import RelatedProducts from "./RelatedProducts";
// ProductImageGallery
// ProductDetails
// import coffeeMugWhite from "./assets/coffee-mug-white.jpg";
// import coffeeMugSet from "./assets/coffee-mug-set.jpg";

function ProductPage() {
  const coffeeMugWhite =
    "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchINT/Lge/E07051.jpg?im=Resize,width=450";
  const coffeeMugSet =
    "https://femora.in/cdn/shop/files/FMBNNSHBLKMRL_1.jpg?v=1719041481";

  // Sample product data
  const productImages = [
    coffeeMugWhite,
    coffeeMugSet,
    coffeeMugWhite,
    coffeeMugSet,
  ];

  const productColors = [
    { name: "White", value: "#FFFFFF" },
    { name: "Cream", value: "#F5F5DC" },
    { name: "Beige", value: "#F0E68C" },
    { name: "Light Brown", value: "#D2B48C" },
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "Classic Espresso Cup",
      price: 24.0,
      image: coffeeMugSet,
    },
    {
      id: 2,
      name: "Artisan Coffee Mug",
      price: 32.0,
      image: coffeeMugWhite,
    },
    {
      id: 3,
      name: "Vintage Tea Cup",
      price: 28.0,
      image: coffeeMugSet,
    },
    {
      id: 4,
      name: "Modern Latte Mug",
      price: 35.0,
      image: coffeeMugWhite,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fefbf7] pt-20">
      {/* <Header /> */}

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <ProductImageGallery
            images={productImages}
            productName="Ceramic Coffee Mug"
          />

          <ProductDetails
            name="Ceramic Coffee Mug Classic"
            price={31.0}
            colors={productColors}
            description="Our classic ceramic coffee mug combines timeless design with exceptional craftsmanship. Made from high-quality ceramic, this mug features a comfortable handle and perfectly balanced weight for the ultimate coffee experience."
            features={[
              "Handcrafted Ceramic",
              "Dishwasher Safe",
              "Microwave Safe",
              "12oz Capacity",
              "Comfortable Grip",
              "Lead-Free Glaze",
            ]}
          />
        </div>

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </main>

      <footer className="bg-[#eee3d3] py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-light text-[#4B2E23] mb-4">
            CERAMIC CAFÉ
          </h3>
          <p className="text-gray-500">
            Handcrafted ceramic coffee mugs for the perfect morning ritual
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ProductPage;
