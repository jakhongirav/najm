import React, { useEffect } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { useDispatch, useSelector } from "react-redux";
import { getNewArrivals } from "../../../redux/orebiSlice";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewArrivals());
  }, []);

  const newArrivals = useSelector((state) => state.orebiReducer.newArrivals);

  return (
    <div className="w-full pb-16">
      <Heading heading="Новинки" />
      <Slider {...settings}>
        {newArrivals.map((product) => (
          <div className="px-2" key={product.id}>
            <Product
              id={product.id}
              images={product.images}
              product_name={product.name}
              price={product.price}
              badge={true}
              des={product.description}
              slug={product.slug}
              in_stock={product.in_stock}
              is_recommended={product.is_recommended}
              category={product.category}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
