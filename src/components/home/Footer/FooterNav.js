import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "../../designLayouts/Image";
import {
  homeIcon,
  star,
  profileCircle,
  shoppingCart,
} from "../../../assets/images";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/dialog";
import { Button } from "../../ui/button";

export default function FooterNav() {
  const categories = useSelector((state) => state.orebiReducer.categories);
  const ref = useRef();
  const [show, setShow] = useState(false);

  return (
    <div className="w-[99%] md:hidden mx-auto fixed bottom-0 right-0 left-0 bg-white rounded-t-lg z-50">
      <div className="flex items-center justify-around p-3">
        <Link to="/">
          <Image imgSrc={homeIcon} className="w-[30px] h-[30px]" />
        </Link>
        <Link to="/shop">
          <Image imgSrc={shoppingCart} className="w-[30px] h-[30px]" />
        </Link>
        <Link to="/saved">
          <Image imgSrc={star} className="w-[30px] h-[30px]" />
        </Link>
        <Link to="/signin">
          <Image imgSrc={profileCircle} className="w-[30px] h-[30px]" />
        </Link>
        {/* <div
          onClick={() => setShow(!show)}
          ref={ref}
          className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
        >
          <HiOutlineMenuAlt4 className="w-[30px] h-[30px]" />

          {show && (
            <motion.ul
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute w-[50%] right-0 h-max z-40 bg-white border text-[#767676] p-4"
            >
              {categories.map((category) => {
                return (
                  <li
                    key={category.id}
                    className="text-black px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-gray-500 hover:text-gray-500 duration-300 cursor-pointer"
                  >
                    <Link
                      key={category.id}
                      to={`/shop?category=${category.id}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </div> */}
        <Sheet>
          <SheetTrigger asChild>
            <HiOutlineMenuAlt4 className="w-[30px] h-[30px]" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Категории</SheetTitle>
              {categories.map((category) => {
                return (
                  <Link
                    key={category.id}
                    className="text-black font-normal text-base px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-gray-500 hover:text-gray-500 duration-300 cursor-pointer"
                    to={`/shop?category=${category.id}`}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
