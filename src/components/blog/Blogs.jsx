import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [page, setPage] = useState(0);
  const [displayBlogs, setDisplayBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const size = 6;
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
    <div className="pb-6">
      <section id="pagination" className="container mx-auto px-4  ">
        <h1 className="lg:text-xl md:text-xl text-xl font-semibold text-gray-800 text-start py-6">
          সর্বশেষ প্রকাশিত-
        </h1>
        {/* <div className="flex items-center justify-center py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-x-8 md:gap-6 gap-4 py-2">
            {displayBlogs?.map((item) =>
              loading ? <Skeleton /> : <BlogItem key={item._id} {...item} />
            )}
          </div>
        </div>
        <a href="#pagination">
          <div className="pagination flex justify-center items-center gap-2">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={
                  number === page
                    ? "selected bg-blue-500 px-2 text-white rounded"
                    : "bg-blue-100 text-gray-500 px-2 rounded "
                }
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </a> */}

        <div class="lg:flex justify-center">
          {displayBlogs.slice(0, 1).map((data) => (
            <Link
              to={`/blogs/${data?._id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <div class="container mx-auto px-4">
                <img src={data?.image} alt={data.title} class="w-full   " />

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
                      {/* <p class="text-base leading-none text-gray-500 text-gray-700 ml-2">
                        Admin
                      </p> */}
                    </div>
                  </div>
                  <h1 class="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">
                    {data.title}
                  </h1>
                  <p class="text-base leading-6 text-gray-600 text-gray-700 mt-2">
                    {data.summary}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <div class="lg:ml-6 lg:mt-0 mt-7 2xl:w-3/12 lg:w-4/12 w-full flex lg:flex-col sm:flex-row flex-col items-center justify-between">
            {displayBlogs.slice(1, 3).map((data) => (
              <Link
                to={`/blogs/${data?._id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div class="lg:w-auto sm:w-1/2">
                  <img src={data.image} alt={data.title} class="w-full" />
                  <div class="mt-4">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center">
                        <p class="text-base leading-4 text-gray-500 text-gray-700">
                          {data?.date?.slice(0, 7)}
                        </p>
                        {/* <p class="text-base leading-none text-gray-500 text-gray-700 ml-12">
                          5 min read
                        </p> */}
                      </div>
                      <div class="flex items-center">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-4-svg1.svg"
                          alt="line"
                        />
                        {/* <p class="text-base leading-none text-gray-500 text-gray-700 ml-2">
                          Rishan Ahmed
                        </p> */}
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
