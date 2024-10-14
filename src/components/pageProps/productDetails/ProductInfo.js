import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToSaved } from "../../../redux/orebiSlice";
import { Card, CardContent } from "../../ui/card";
import { Skeleton } from "../../../components/ui/skeleton";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();

  // Set default color state correctly
  const [defaultColor, setDefaultColor] = useState("");

  useEffect(() => {
    if (productInfo && productInfo.img && productInfo.img.length === 1) {
      setDefaultColor(productInfo.img[0].id); // Set the first image's id as default
    }
  }, [productInfo]);

  // Check if productInfo or productInfo.img is undefined/null
  if (!productInfo || !productInfo.img) {
    return (
      <div className="space-y-2 w-full h-full text-center">
        <Skeleton className="h-7 w-full" />
        <Skeleton className="h-7 w-full" />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-5">
      <h2 className="text-3xl md:text-4xl font-semibold">
        {productInfo.productName}
      </h2>
      <p className="text-xl font-semibold">{productInfo.price} сумов</p>
      <p className="text-base text-gray-600">
        <b>Описание: </b>
        {productInfo.des}
      </p>

      <div className="font-medium text-lg flex flex-col items-start gap-4">
        <span className="font-normal">Цвета:</span>
        {productInfo.img.map((img) => (
          <Card
            key={img.id}
            className={`max-w-[100px] cursor-pointer ${
              img.id === defaultColor ? "border-primeColor" : ""
            }`}
            onClick={() => setDefaultColor(img.id)}
          >
            <CardContent className="w-full flex aspect-square items-center justify-center p-2">
              <img
                className="w-full object-cover"
                src={img.image}
                alt="product thumbnail"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <button
        onClick={() =>
          dispatch(
            addToSaved({
              _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              color: defaultColor,
            })
          )
        }
        className="w-full py-4 bg-white border hover:bg-primeColor hover:text-white duration-300 text-black text-lg font-titleFont"
      >
        Сохранить
      </button>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              color: defaultColor,
            })
          )
        }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Добавить в корзину
      </button>

      <p className="font-normal text-sm">
        <span className="text-base font-medium">Категории:</span>{" "}
        {productInfo.category.name}
      </p>
    </div>
  );
};

export default ProductInfo;
