import React from "react";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToSaved } from "../../../redux/orebiSlice";
import { buttonVariants } from "../../ui/button";
import { shoppingCart, star } from "../../../assets/images";

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
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-hidden ">
        <div className="w-full h-full">
          {/* Updated Image styling */}
          <Image
            className="w-full h-full object-cover object-center"
            imgSrc={props.img[0].image}
          />
        </div>
        <div className="absolute top-6 left-8">
          {props.badge && <Badge text="New" />}
        </div>
        <div className="py-2 absolute top-[5%] right-[5%]">
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
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[14px]">{props.price} сумов</p>
        </div>
        <div className="w-full">
          <button
            onClick={handleProductDetails}
            className={`${buttonVariants({
              variant: "outline",
              size: "default",
            })} text-primeColor rounded-none w-full`}
          >
            Перейти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
