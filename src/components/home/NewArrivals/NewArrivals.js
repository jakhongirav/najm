import React, { useEffect, useMemo } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { useDispatch, useSelector } from "react-redux";
import { getNewArrivals } from "../../../redux/orebiSlice";

const NewArrivals = () => {
  const settings = useMemo(() => ({
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
  }), []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewArrivals());
  }, [dispatch]);
  const newArrivals = useSelector((state) => state.orebiReducer.newArrivals);

  return (
    <div className="w-full pb-16">
      <Heading heading="Новинки" />
      {newArrivals.length > 0 ? (
        <Slider {...settings}>
          {newArrivals.map((product) => (
            <div className="px-2" key={product.id}>
              <Product
                {...product}
                in_stock={String(product.in_stock)}
                is_recommended={String(product.is_recommended)}
                product_name={product.name}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p>Нет новых поступлений</p>
      )}
    </div>
  );
};

export default NewArrivals;
