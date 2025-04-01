import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../layout/ProductCard";
import product1 from "../images/product1.webp";
import product2 from "../images/product2.webp";
import product3 from "../images/product3.webp";
import product4 from "../images/product4.webp";
import product5 from "../images/product5.webp";
import product6 from "../images/product6.webp";


const Shop = () => {
  const data = [
    {
      id: 0,
      img: product1,
      name: "Nike Air",
      price: "198.00",
      discount: "20% Off",
    },
    {
      id: 1,
      img: product2,
      name: "Sportswear Futura",
      price: "208.00",
      discount: "40% Off",
    },
    {
      id: 2,
      img: product3,
      name: "CozyCraze Hoodies",
      price: "104.00",
      discount: "35% Off",
    },
    {
      id: 3,
      img: product4,
      name: "t-shirt combo pack",
      price: "299.00",
      discount: "40% Off",
    },
    {
      id: 4,
      img: product5,
      name: "Royal Collection",
      price: "159.00",
      discount: "23% Off",
    },
    {
      id: 5,
      img: product6,
      name: "LuxeLoom Purses",
      price: "189.00",
      discount: "30% Off",
    },
  ];

  const settings = {
    lazyLoad:"ondemand",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14 bg-slate-100 ">
      {/* heading section */}
      <div>
        <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
          Best sellers
        </h1>
      </div>

      {/* carousel section */}
      <div className=" mt-8">
        <Slider {...settings}>
          {data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Shop;