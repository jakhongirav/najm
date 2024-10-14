import React, { useEffect, useState } from "react";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToSaved } from "../../../redux/orebiSlice";
import { Button, buttonVariants } from "../../ui/button";
import { shoppingCart, star } from "../../../assets/images";
import { Card } from "../../ui/card";
import { Skeleton } from "../../ui/skeleton";

const Product = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local state to handle loading status
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props.id) {
      setIsLoading(false);
    }
  }, [props]);

  // Function to format product ID
  const idString = (id) => String(id).toLowerCase().split(" ").join("");
  const rootId = idString(props.id);

  // Handle product detail navigation
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: { item: props },
    });
  };

  return (
    <>
      <Card className="w-full relative py-2 p-0" {...props}>
        {isLoading ? (
          <div className="container w-full mx-auto my-5 border-b-gray-300 flex flex-col space-y-3">
            <Skeleton className="h-80 w-full" />
            <div className="space-y-2 w-full h-full text-center">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
        ) : (
          <>
            <div className="pt-3">
              <img
                className="max-w-80 max-h-80 mx-auto"
                src={props.img[0].image}
                alt="najm product"
              />
            </div>
            <div className="p-4">
              <div className="font-titleFont pb-4">
                <h2 className="text-lg text-primeColor font-bold pb-2">
                  {props.product_name}
                </h2>
                <p className="text-[#767676] text-[14px] font-bold">
                  {props.price} сумов
                </p>
              </div>
              <Button
                onClick={handleProductDetails}
                className={`${buttonVariants({
                  variant: "outline",
                  size: "default",
                })} text-primeColor rounded-none w-full`}
              >
                Перейти
              </Button>
              <div className="py-2 absolute top-[3%] right-[5%]">
                <ul className="flex flex-col items-end justify-center gap-4 font-titleFont">
                  <li
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: props.id,
                          images: props.img,
                          name: props.name,
                          description: props.des,
                          price: props.price,
                          slug: props.slug,
                          inStock: props.inStock,
                          quantity: 1,
                          isRecommended: props.isRecommended,
                          category: props.category,
                        })
                      );
                    }}
                    className="gap-2 hover:cursor-pointer duration-300 p-2 rounded-full border border-gray-600 hover:border-primeColor"
                  >
                    <Image
                      imgSrc={shoppingCart}
                      alt="cart"
                      className="w-[20px] h-[20px]"
                    />
                  </li>
                  <li
                    onClick={() => {
                      dispatch(
                        addToSaved({
                          id: props.id,
                          images: props.img,
                          name: props.name,
                          description: props.des,
                          price: props.price,
                          slug: props.slug,
                          inStock: props.inStock,
                          quantity: 1,
                          isRecommended: props.isRecommended,
                          category: props.category,
                        })
                      );
                    }}
                    className="gap-2 hover:cursor-pointer duration-300 p-2 rounded-full border border-gray-600 hover:border-primeColor"
                  >
                    <Image
                      imgSrc={star}
                      alt="star"
                      className="w-[20px] h-[20px]"
                    />
                  </li>
                </ul>
              </div>
              <div className="absolute top-6 left-8">
                {props.badge && <Badge text="New" />}
              </div>
            </div>
          </>
        )}
      </Card>
    </>
  );
};

export default Product;
