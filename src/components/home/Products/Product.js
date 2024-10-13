import React, { useEffect } from "react";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToSaved } from "../../../redux/orebiSlice";
import { buttonVariants } from "../../ui/button";
import { shoppingCart, star } from "../../../assets/images";
// import axios from "axios";

const Product = (props) => {
  // let [products, setProducts] = useEffect("");

  // useEffect(() => {
  //   try {
  //     axios.get("http://38.242.226.165/products/all-products/").then((res) => {
  //       setProducts(res.json());
  //       console.log(res);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });

  const liked = useSelector((state) => state.orebiReducer.liked);

  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
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
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div>
          <Image className="w-full h-full" imgSrc={props.img} />
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
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    badge: props.badge,
                    price: props.price,
                    colors: props.color,
                  })
                );
              }}
              className="gap-2 hover:cursor-pointer duration-300 p-2 rounded-full border border-gray-600 hover:border-primeColor"
            >
              <Image
                imgSrc={shoppingCart}
                alt="najm"
                className="w-[20px] h-20px]"
              />
            </li>
            <li
              onClick={() => {
                dispatch(
                  addToSaved({
                    _id: props._id,
                    name: props.productName,
                    image: props.img,
                    badge: props.badge,
                    price: props.price,
                    colors: props.color,
                  })
                );
              }}
              className="gap-2 hover:cursor-pointer duration-300 p-2 rounded-full border border-gray-600 hover:border-primeColor"
            >
              {/* Image */}
              <Image imgSrc={star} alt="najm" className="w-[20px] h-[20px]" />
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
        <div className="w-full">
          <button
            onClick={handleProductDetails}
            className={`${buttonVariants({ variant: "outline", size: "default" })} text-primeColor rounded-none w-full`}
          >
            Перейти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
