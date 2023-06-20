import React, { useState } from "react";

import { Link } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";
import useDiaseas from "../../hooks/useDiaseas";
import { useEffect } from "react";
const Alldiaseas = () => {
  const [action, setAction] = useState(false);
  const [id, setID] = useState(0);
  const { diaseas } = useDiaseas();
  // const { blog } = useBlogs();
  const [filterTab, setFilterTab] = useState("সকল রোগ");

  const [page, setPage] = useState(0);
  const [blog, setDisplayBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const size = 8;
  useEffect(() => {
    fetch(`https://susasto.malihatabassum.com/blogs?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setDisplayBlogs(data.blogs);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  const [loading, setLoading] = useState(false);
  //loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="scroll-smooth">
      <div className="py-12 px-4 md:px-6 xl:px-0 md:container xl:mx-auto overflow-x-hidden ">
        <div className="flex lg:justify-center lg:items-center items-center justify-center pb-8 lg:pb-0 md:pb-0">
          <h1 className="mx-4 leading-4 font-extrabold uppercase lg:text-9xl text-gray-700/5 absolute object-fit">
            সকল রোগ
          </h1>
          <h1 className="leading-4 font-extrabold uppercase text-3xl lg:text-5xl text-gray-700 reletive md:mb-8 lg:mb-0 ">
            রোগ<span className="textColor">সমূহ</span>
          </h1>
        </div>

        <div class="w-full px-4 lg:mt-16">
          <ul class="mb-12 flex flex-wrap justify-center space-x-1">
            {diaseas?.category?.map((data, index) => (
              <li class="mb-1" onClick={() => setID(index + 0)}>
                <button
                  key={index}
                  onClick={() => setFilterTab(data)}
                  class={
                    id === index + 0
                      ? "inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 w-full focus:bg-blue-800 bg-blue-800 text-white"
                      : "inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 w-full focus:bg-blue-500"
                  }
                >
                  {data}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* ?.filter(
              (e) => e.category === filterTab || filterTab === categorys[0]
            ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-5 justify-center items-center my-10">
          {blog
            ?.filter((e) => e.category === filterTab || filterTab === "সকল রোগ")
            .map((data) => (
              <div class="lg:ml-6 lg:mt-0 mt-7  w-full flex lg:flex-col sm:flex-row flex-col items-center justify-between">
                <Link
                  to={`/blogs/${data?._id}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div class="lg:w-auto sm:w-1/2">
                    <img
                      src={data.image}
                      alt={data.title}
                      class="w-full object-fill h-44"
                    />
                    <div class="mt-4">
                      <div class="flex items-center justify-between">
                        <div class="flex items-center">
                          <p class="text-base leading-4 text-gray-500 text-gray-700">
                            {data?.date?.slice(0, 7)}
                          </p>
                          <p class="text-base leading-none text-gray-500 text-gray-700 ml-12">
                            5 min read
                          </p>
                        </div>
                        <div class="flex items-center">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-4-svg1.svg"
                            alt="line"
                          />
                          <p class="text-base leading-none text-gray-500 text-gray-700 ml-2">
                            Rishan Ahmed
                          </p>
                        </div>
                      </div>
                      <h1 class="text-2xl font-semibold leading-6 mt-4 text-gray-800">
                        {data.title}
                      </h1>
                      <p class="text-base leading-6 text-gray-600 text-gray-700 mt-2">
                        {data?.summary?.slice(0, 150)}...
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        <a href="#pagination">
          <div className="pagination flex justify-center items-center gap-2">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={
                  number === page
                    ? "selected bg-blue-800 px-3 text-white rounded"
                    : "bg-blue-100 text-gray-500 px-3 rounded  "
                }
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </a>
      </div>
    </section>
  );
};

export default Alldiaseas;
