import React from "react";
import { Link } from "react-router-dom";
import { cardbg, cardbg2, cardbg3 } from "../../../assets/images";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <Link
        className="relative h-[200px] md:h-[440px] w-full md:w-2/3 lg:w-1/2 p-[20px] text-[1.5rem] font-bold text-white before:bg-black before:bg-opacity-50 before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0"
        style={{ backgroundImage: `url(${cardbg})` }}
        to="/shop"
      >
        Ежедневники
      </Link>

      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <Link
          className="relative h-[200px] w-full p-[20px] text-[1.5rem] font-bold text-white before:bg-black before:bg-opacity-50 before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0"
          style={{ backgroundImage: `url(${cardbg2})` }}
          to="/shop"
        >
          Ручки и карандаши
        </Link>
        <Link
          className="relative h-[200px] w-full p-[20px] text-[1.5rem] font-bold text-white before:bg-black before:bg-opacity-50 before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0"
          style={{ backgroundImage: `url(${cardbg3})` }}
          to="/shop"
        >
          Ручки и карандаши
        </Link>
      </div>
    </div>
  );
};

export default Sale;
