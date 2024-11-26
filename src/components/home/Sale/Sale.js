import React from "react";
import { Link } from "react-router-dom";
import { cardbg, cardbg2, cardbg3 } from "../../../assets/images";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { cn } from "../../../lib/utils";
import { buttonVariants } from "../../ui/button";

const CARD_DATA = [
  {
    image: cardbg,
    title: "Подарочные боксы",
    category: "6",
    className: "md:col-span-1 row-span-1 md:row-auto",
  },
  {
    image: cardbg2,
    title: "Тетради и Блокноты",
    category: "2",
    className: "",
  },
  {
    image: cardbg3,
    title: "Ручки и Карандаши",
    category: "5",
    className: "",
  },
];

const SaleCard = ({ image, title, category, className }) => (
  <Card
    className={`relative ${className}`}
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-50 rounded-xl" />
    <CardHeader className="relative z-10">
      <CardTitle className="text-2xl text-[#fff]">{title}</CardTitle>
    </CardHeader>
    <CardContent className="relative z-10">
      <Link
        to={`/shop?category=${category}`}
        className={cn(buttonVariants("default"), "rounded-none")}
      >
        Перейти
      </Link>
    </CardContent>
  </Card>
);

const Sale = () => {
  return (
    <div className="my-12 w-full mx-auto grid grid-rows-3 md:grid-rows-1 md:grid-cols-2 gap-4">
      <SaleCard {...CARD_DATA[0]} />
      <div className="md:col-span-1 row-span-2 md:row-auto flex flex-col gap-4 md:gap-2">
        <SaleCard {...CARD_DATA[1]} />
        <SaleCard {...CARD_DATA[2]} />
      </div>
    </div>
  );
};

export default Sale;
