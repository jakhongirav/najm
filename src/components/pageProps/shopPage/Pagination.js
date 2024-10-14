import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { useSelector } from "react-redux";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id} className="w-full">
            <Product
              category={item.category}
              id={item.id}
              img={item.images}
              product_name={item.name}
              price={item.price}
              des={item.description}
              in_stock={item.in_stock}
              is_recommended={item.is_recommended}
              slug={item.slug}
            />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const products = useSelector((state) => state.orebiReducer.products);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user clicks to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />
        <p className="text-base font-normal text-lightText">
          Products from {itemOffset + 1} to{" "}
          {endOffset > products.length ? products.length : endOffset} of{" "}
          {products.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
