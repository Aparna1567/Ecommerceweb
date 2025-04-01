import React from 'react';
import ProductCard from "../layout/ProductCard";

const Features = () => {
    const data = [
        {
          id: 6,
          img: "src/images/product7.webp",
          name: "FrostFire Outerlayers",
          price: "398.00",
          discount: "24% Off",
        },
        {
          id: 7,
          img: "src/images/product8.webp",
          name: "DaintyDoll Dresses",
          price: "258.00",
          discount: "40% Off",
        },
        {
          id: 8,
          img: "src/images/product9.webp",
          name: "TrendTraverse Bag",
          price: "104.00",
          discount: "35% Off",
        },
        {
          id: 9,
          img: "src/images/product10.webp",
          name: "Fitness Footgear",
          price: "299.00",
          discount: "40% Off",
        },
        {
          id: 10,
          img: "src/images/product11.webp",
          name: "UrbanBelle Hoodies",
          price: "129.00",
          discount: "28% Off",
        },
        {
          id: 11,
          img: "src/images/product12.webp",
          name: "Elite Handbags",
          price: "189.00",
          discount: "30% Off",
        },
      ];
  return (
    <div className='flex flex-col justify-center pt-24 min-h-screen bg-slate-200 pb-10'>
        <h1 className='text-center text-4xl font-semibold text-ExtraDarkColor'>Exclusive Products</h1>
        <div className='flex flex-wrap justify-center gap-5 pt-8'>
            {data.map((item)=>(
               <div className='md:w-2/4 lg:w-1/4'> 
                 <ProductCard
                              key={item.id}
                              id={item.id}
                              img={item.img}
                              name={item.name}
                              price={item.price}
                              discount={item.discount}
                            />
               </div>
            ))}
        </div>

    </div>
  )
}

export default Features