import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Image from "../../designLayouts/Image";
import {
  homeIcon,
  star,
  profileCircle,
  shoppingCart,
  hamburgerIcon,
  search,
} from "../../../assets/images";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/dialog";
import useQuery from "../../../hooks/useQuery";
import { Button } from "../../ui/button";

export default function FooterNav() {
  const categories = useSelector((state) => state.orebiReducer.categories);
  const selectedCategoryId = useQuery("category"); // Getting the selected category from query params
  const isCategorySelected = (id) => selectedCategoryId === id.toString();
  // Compare category IDs as strings

  const location = useLocation(); // Get the current location

  const handleSearchClick = () => {
    const event = new CustomEvent('focusSearchInput');
    window.dispatchEvent(event); // Dispatch a custom event
  };

  return (
    <div className="w-[99%] md:hidden mx-auto fixed bottom-0 right-0 left-0 bg-white rounded-t-lg z-50">
      <div className="flex items-center justify-around p-3">
        <Link
          to="/"
          className={`${
            location.pathname === "/" ? "border-b-2 border-primeColor pb-1" : ""
          }`}
        >
          <Image imgSrc={homeIcon} className="w-[23px] h-[23px]" />
        </Link>
        <Link
          to="/shop"
          className={`${
            location.pathname === "/shop"
              ? "border-b-2 border-primeColor pb-1"
              : ""
          }`}
        >
          <Image imgSrc={shoppingCart} className="w-[23px] h-[23px]" />
        </Link>
        <Link
          to="/saved"
          className={`${
            location.pathname === "/saved"
              ? "border-b-2 border-primeColor pb-1"
              : ""
          }`}
        >
          <Image imgSrc={star} className="w-[23px] h-[23px]" />
        </Link>
        <Link
          to="/signin"
          className={`${
            location.pathname === "/signin"
              ? "border-b-2 border-primeColor pb-1"
              : ""
          }`}
        >
          <Image imgSrc={profileCircle} className="w-[23px] h-[23px]" />
        </Link>
        <Link
          to=""
          onClick={handleSearchClick}
          className={`${
            location.pathname === "/signin"
              ? "border-b-2 border-primeColor pb-1"
              : ""
          }`}
        >
          <Image imgSrc={search} className="w-[23px] h-[23px]" />
        </Link>

        {/* Category Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <p>
              <Image imgSrc={hamburgerIcon} className="w-[23px] h-[23px]" />
            </p>
            {/* <HiOutlineMenuAlt4 className="w-[30px] h-[30px]" /> */}
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Категории</SheetTitle>
              <div className="w-full flex flex-col items-start gap-3">
                {categories.map((category) => {
                  return (
                    <SheetClose asChild key={category.id}>
                      <Link
                        to={
                          isCategorySelected(category.id)
                            ? "/shop"
                            : `/shop?category=${category.id}`
                        }
                        className={`${
                          isCategorySelected(category.id)
                            ? "text-primeColor font-bold"
                            : "text-black font-normal"
                        } w-full text-base px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-gray-500 hover:text-gray-500 duration-300 cursor-pointer`}
                      >
                        {category.name}
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
