import React from "react";
import { Link } from "react-router-dom";
import { cardbg, cardbg2, cardbg3 } from "../../../assets/images";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { cn } from "../../../lib/utils";
import { buttonVariants } from "../../ui/button";

const Sale = () => {
  return (
    <div className="container my-20 w-full mx-auto grid grid-rows-3 md:grid-rows-1 md:grid-cols-2 gap-4">
      <Card
        className="md:col-span-1 row-span-1 md:row-auto"
        style={{
          backgroundImage: `url(${cardbg})`,
          background: "contain",
          backgroundPosition: "bottom",
        }}
      >
        <CardHeader>
          <CardTitle className="text-2xl text-[#fff]">Ежедневники</CardTitle>
        </CardHeader>
        <CardContent>
          <Link
            to={"/"}
            className={cn(buttonVariants("default"), `rounded-none`)}
          >
            Перейти
          </Link>
        </CardContent>
      </Card>
      <div className="md:col-span-1 row-span-2 md:row-auto flex flex-col gap-4 md:gap-2">
        <Card
          className="bg-black"
          style={{
            backgroundImage: `url(${cardbg2})`,
            background: "contain",
            backgroundPosition: "center",
          }}
        >
          <CardHeader>
            <CardTitle className="text-2xl text-[#fff]">
              Ручки и карандаши
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link
              to={"/"}
              className={cn(buttonVariants("default"), `rounded-none`)}
            >
              Перейти
            </Link>
          </CardContent>
        </Card>
        <Card
          className="bg-black"
          style={{
            backgroundImage: `url(${cardbg3})`,
            background: "contain",
            backgroundPosition: "center",
          }}
        >
          <CardHeader>
            <CardTitle className="text-2xl text-[#fff]">Тетради</CardTitle>
          </CardHeader>
          <CardContent>
            <Link
              to={"/"}
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
