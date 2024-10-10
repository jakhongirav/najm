import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteSaved } from "../../redux/orebiSlice";
import { Button } from "../../components/ui/button";

const SavedItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col mb-4 border py-2 gap-3">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={() => dispatch(deleteSaved(item._id))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <img className="w-32 h-32" src={item.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold">{item.name}</h1>
      </div>
      <div className="px-4">
        <p>
          <b>Description:</b> Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </p>
      </div>
      <Button>Add to cart</Button>
    </div>
  );
};

export default SavedItem;
