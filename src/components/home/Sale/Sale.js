import React from "react";
import { Link } from "react-router-dom";
// import card_bg1 from "../../../assets/images/cardBack.jpg";
// import card_bg2 from "../../../assets/images/cardBack1.jpg";
// import card_bg3 from "../../../assets/images/cardBack2.jpg";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div
        className="w-full md:w-2/3 lg:w-1/2 h-full"
        // style={{ backgroundImage: `url(${card_bg1})` }}
      >
        <Link to="/shop">Ежедневники</Link>
      </div>

      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div
          className="h-1/2 w-full"
          // style={{ backgroundImage: `url(${card_bg2})` }}
        >
          <Link to="/shop">Ручки и карандаши</Link>
        </div>
        <div
          className="h-1/2 w-full"
          // style={{ backgroundImage: `url(${card_bg3})` }}
        >
          <Link to="/shop">Тетради</Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
