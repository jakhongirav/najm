import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToSaved } from "../../../redux/orebiSlice";
import { ToggleGroup, ToggleGroupItem } from "../../ui/toggleGroup";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";

const ProductInfo = ({ productInfo }) => {
  const randomColors = [
    { id: 1, color: "#FF5733" }, // Red-Orange
    { id: 2, color: "#33FF57" }, // Green
    { id: 3, color: "#3357FF" }, // Blue
    { id: 4, color: "#F0E68C" }, // Khaki
    { id: 5, color: "#FF33A1" }, // Pink
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const Select = (val) => {
    setSelectedValue(val);
    console.log(val);
  };

  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col gap-5">
      <h2 className="text-3xl md:text-4xl font-semibold">
        {productInfo.productName}
      </h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600">
        <b>Описание: </b>
        {productInfo.des}
      </p>
      <div className="font-medium text-lg flex items-center gap-4">
        <span className="font-normal">Цвета:</span>
        <ToggleGroup type="single" variant="outline">
          {/* <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <FontBoldIcon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <FontItalicIcon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <UnderlineIcon className="h-4 w-4" />
          </ToggleGroupItem> */}
          {randomColors.map((item) => (
            <ToggleGroupItem
              key={item.id}
              value={item.id}
              aria-label="Color picker"
              className="hover:border rounded-full p-[1px] hover:border-primeColor"
              onClick={(e) => console.log(e)}
            >
              <span
                style={{ backgroundColor: item.color }}
                className="w-8 h-8 rounded-full"
              ></span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
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
              colors: productInfo.color,
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
              colors: productInfo.color,
            })
          )
        }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Добавить в корзину
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Категории:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
