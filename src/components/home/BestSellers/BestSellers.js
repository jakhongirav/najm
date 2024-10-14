import React, { useEffect } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { useDispatch, useSelector } from "react-redux";
import { getBestSellers } from "../../../redux/orebiSlice";

const BestSellers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBestSellers());
  }, []);

  const bestSellers = useSelector((state) => state.orebiReducer.bestSellers);

  return (
    <div className="w-full pb-20">
      <Heading heading="Бестселлеры" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {bestSellers.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            img={product.images}
            productName={product.name}
            price={product.price}
            des={product.description}
            slug={product.slug}
            inStock={product.in_stock}
            isRecommended={product.is_recommended}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
