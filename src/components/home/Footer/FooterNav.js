import { Link } from "react-router-dom";
import { homeIcon, star, wallet, profileCircle } from "../../../assets/images";
import Image from "../../designLayouts/Image";

export default function FooterNav() {
  return (
    <div className="w-[99%] md:hidden mx-auto fixed bottom-0 right-0 left-0 bg-white rounded-t-lg">
      <div className="flex items-center justify-around p-3">
        <Link to="/">
          <Image imgSrc={homeIcon} className="w-[30px] h-[30px]" />
        </Link>
        <Link to="/">
          <Image imgSrc={wallet} className="w-[30px] h-[30px]" />
        </Link>
        <Link to="/">
          <Image imgSrc={star} className="w-[30px] h-[30px]" />
        </Link>
        <Link to="/">
          <Image imgSrc={profileCircle} className="w-[30px] h-[30px]" />
        </Link>
      </div>
    </div>
  );
}
