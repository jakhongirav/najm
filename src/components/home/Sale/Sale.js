import React from "react";
import { Link } from "react-router-dom";
import { cardbg, cardbg2, cardbg3 } from "../../../assets/images";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { cn } from "../../../lib/utils";
import { buttonVariants } from "../../ui/button";

const Sale = () => {
  return (
    <div className="my-20 w-full mx-auto grid grid-rows-3 md:grid-rows-1 md:grid-cols-2 gap-4">
      <Card
        className="relative md:col-span-1 row-span-1 md:row-auto"
        style={{
          backgroundImage: `url(${cardbg})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        {/* Semi-transparent black overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

        <CardHeader className="relative z-10">
          <CardTitle className="text-2xl text-[#fff]">Ежедневники</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <Link
            to={"/shop/category"}
            className={cn(buttonVariants("default"), `rounded-none`)}
          >
            Перейти
          </Link>
        </CardContent>
      </Card>

      <div className="md:col-span-1 row-span-2 md:row-auto flex flex-col gap-4 md:gap-2">
        <Card
          className="relative"
          style={{
            backgroundImage: `url(${cardbg2})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl text-[#fff]">Ежедневники</CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <Link
              to={"/shop/category"}
              className={cn(buttonVariants("default"), `rounded-none`)}
            >
              Перейти
            </Link>
          </CardContent>
        </Card>
        <Card
          className="relative"
          style={{
            backgroundImage: `url(${cardbg3})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl text-[#fff]">Ежедневники</CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <Link
              to={"/shop/category"}
              className={cn(buttonVariants("default"), `rounded-none`)}
            >
              Перейти
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sale;
