import React, { useState } from "react";
import NavTitle from "./NavTitle";
import { useSelector } from "react-redux";
import useQuery from "../../../../hooks/useQuery";
import { Link } from "react-router-dom";

const Category = () => {
  const categories = useSelector((state) => state.orebiReducer.categories);

  const id = useQuery("category");

  return (
    <div className="w-full">
      <NavTitle title="Покупки по категориям" />
      <div>
        <ul className="flex flex-col gap-4">
          {categories.map((category) => {
            return (
              <Link key={category.id} to={`/shop?category=${category.id}`}>
                <li
                  key={category.id}
                  className={`${category.id == id ? "font-bold" : ""} text-sm lg:text-base text-[#767676] border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between`}
                >
                  {category.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Category;
