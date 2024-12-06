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
  {
    image: cardbg3,
    title: "Новинки",
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
    <div className="my-5 w-full mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {CARD_DATA.map((card, index) => (
        <SaleCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Sale;
