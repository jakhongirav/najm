import React from "react";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToSaved } from "../../../redux/orebiSlice";
import { Button, buttonVariants } from "../../ui/button";
import { shoppingCart, star } from "../../../assets/images";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

const Product = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(id);
  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };

  return (
    // <div className="w-full relative">
    //   <div className="max-w-80 max-h-80 overflow-hidden ">
    //     <div className="w-full h-full">
    //       {/* Updated Image styling */}
    //       <img
    //         className="w-full h-full object-bottom"
    //         src={props.img[0].image}
    //         alt="najm product"
    //       />
    //     </div>
    //     <div className="absolute top-6 left-8">
    //       {props.badge && <Badge text="New" />}
    //     </div>
    //     <div className="py-2 absolute top-[5%] right-[5%]">
    //       <ul className="flex flex-col items-end justify-center gap-4 font-titleFont">
    //         <li
    //           onClick={() => {
    //             dispatch(
    //               addToCart({
    //                 id: props.id,
    //                 images: props.img,
    //                 name: props.name,
    //                 description: props.des,
    //                 price: props.price,
    //                 slug: props.slug,
    //                 inStock: props.inStock,
    //                 quantity: 1,
    //                 isRecommended: props.isRecommended,
    //                 category: props.category,
    //               })
    //             );
    //           }}
    //           className="gap-2 hover:cursor-pointer duration-300 p-2 rounded-full border border-gray-600 hover:border-primeColor"
    //         >
    //           <Image
    //             imgSrc={shoppingCart}
    //             alt="cart"
    //             className="w-[20px] h-[20px]"
    //           />
    //         </li>
    //         <li
    //           onClick={() => {
    //             dispatch(
    //               addToSaved({
    //                 id: props.id,
    //                 images: props.img,
    //                 name: props.name,
    //                 description: props.des,
    //                 price: props.price,
    //                 slug: props.slug,
    //                 inStock: props.inStock,
    //                 quantity: 1,
    //                 isRecommended: props.isRecommended,
    //                 category: props.category,
    //               })
    //             );
    //           }}
    //           className="gap-2 hover:cursor-pointer duration-300 p-2 rounded-full border border-gray-600 hover:border-primeColor"
    //         >
    //           <Image imgSrc={star} alt="star" className="w-[20px] h-[20px]" />
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
    //     <div className="flex items-center justify-between font-titleFont">
    //       <h2 className="text-lg text-primeColor font-bold">
    //         {props.productName}
    //       </h2>
    //       <p className="text-[#767676] text-[14px]">{props.price} сумов</p>
    //     </div>
    //     <div className="w-full">
    //       <button
    //         onClick={handleProductDetails}
    //         className={`${buttonVariants({
    //           variant: "outline",
    //           size: "default",
    //         })} text-primeColor rounded-none w-full`}
    //       >
    //         Перейти
    //       </button>bottom
    //     </div>
    //   </div>
    // </div>
    <>
      <Card className="w-full relative py-2 p-0" {...props}>
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
              {props.productName}
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
                <Image imgSrc={star} alt="star" className="w-[20px] h-[20px]" />
              </li>
            </ul>
          </div>
          <div className="absolute top-6 left-8">
            {props.badge && <Badge text="New" />}
          </div>
        </div>
      </Card>
    </>
  );
};

export default Product;
