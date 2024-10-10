import { Link } from "react-router-dom";
import Image from "../../designLayouts/Image";
import {
  homeIcon,
  star,
  profileCircle,
  shoppingCart,
} from "../../../assets/images";

export default function FooterNav() {
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
      </div>
    </div>
  );
}
