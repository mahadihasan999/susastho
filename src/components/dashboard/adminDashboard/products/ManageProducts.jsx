import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import SingleProducts from "./singleProducts";

const ManageProducts = () => {
  // DELETE AN USER
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const size = 8;
  useEffect(() => {
    fetch(
      `https://susasto.malihatabassum.com/products?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://susasto.malihatabassum.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Successfully deleted!");
            const remainingUsers = products?.filter(
              (product) => product._id !== id
            );
            setProducts(remainingUsers);
          }
        });
    }
  };

  //loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  products?.map((element) => console.log(element));
  return (
    <div>
      <div className="my-6">
        <div className="mx-auto container">
          <Toaster></Toaster>
          <div className="flex p-4 lg:p-8 flex-col items-center justify-center"></div>

          {loading ? (
            <div class="flex items-center justify-center space-x-2 animate-pulse mt-20">
              <div class="w-5 h-5 bg-gray-700 rounded-full"></div>
              <div class="w-5 h-5 bg-gray-600 rounded-full"></div>
              <div class="w-5 h-5 bg-gray-500 rounded-full"></div>
            </div>
          ) : (
            <div className="w-full overflow-x-scroll xl:overflow-x-hidden ">
              <h1 className="text-gray-100  font-bold font-semibold pr-2 text-md text-left py-2 tracking-normal leading-4 ">
                Total products found {}
              </h1>
              <table className="min-w-full border-2 border-blue-500 text-center">
                <thead>
                  <tr className="h-16 bg-blue-500 border py-8 text-center font-bold">
                    <th className="text-gray-100  font-bold  font-semibold pr-2 text-sm border tracking-normal leading-4">
                      ID
                    </th>
                    <th className=" text-gray-100  font-bold font-semibold text-sm border tracking-normal leading-4 border ">
                      Product Name
                    </th>
                    <th className="text-gray-100  font-bold font-semibold pr-2 text-sm border tracking-normal leading-4">
                      Category
                    </th>
                    <th className="text-gray-100  font-bold font-semibold px-2 text-sm border tracking-normal leading-4">
                      Price
                    </th>
                    <td className="text-gray-100  font-bold  font-semibold px-2 text-sm border tracking-normal leading-4">
                      Action
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((item, index) => (
                    <SingleProducts
                      handleDeleteProduct={handleDeleteProduct}
                      product={item}
                      index={index}
                      key={index}
                      {...item}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="pagination flex justify-center items-center my-6 ">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={
                  number === page
                    ? "selected bg-blue-500 px-2 text-white mx-2 rounded"
                    : "bg-blue-200 text-gray-700 mx-2 px-2 rounded"
                }
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
