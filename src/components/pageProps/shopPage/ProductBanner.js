import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const ProductBanner = ({ itemsPerPageFromBanner, confItem }) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
      {/* =========================================================
                            Right Part STart here
        ======================================================== */}
      <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
        {/* <div className="flex flex-col md:flex-row items-center gap-2 text-base text-[#767676] relative">
          <label className="block">Сортировать по:</label>
          <select
            // onChange={(e) => setSelected(e.target.value)}
            id="countries"
              <SelectLabel>Сортировка</SelectLabel>
            className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="Best Sellers">Бестселлары</option>
            <option value="New Arrival">Новинки</option>
          </select>
        </div> */}
        <Select onValueChange={(e) => confItem(e)} defaultValue="all-products">
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Сортировать по:" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all-products">Все продукты</SelectItem>
              <SelectItem value="new-products">Новинкии</SelectItem>
              <SelectItem value="best-sellers">Бестселлары</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* <div className="flex flex-col md:flex-row items-center gap-2 text-[#767676] relative">
          <label className="block">Показывать:</label>
          <select
            onChange={(e) => itemsPerPageFromBanner(+e.target.value)}
            id="countries"
            className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
        </div> */}
        <Select
          onValueChange={(e) => itemsPerPageFromBanner(+e)}
          defaultValue="12"
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Показывать:" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="24">24</SelectItem>
              <SelectItem value="36">36</SelectItem>
              <SelectItem value="48">48</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* =========================================================
                            Right Part End here
        ======================================================== */}
    </div>
  );
};

export default ProductBanner;
