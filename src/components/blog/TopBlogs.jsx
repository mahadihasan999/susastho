import React from "react";
import useBlogs from "../../hooks/useBlogs";
import { Link } from "react-router-dom";

const TopBlogs = () => {
  const { blog } = useBlogs();

  return (
    <div>
      <div class="container mx-auto">
        <div className="flex lg:justify-center lg:items-center items-center justify-center pb-8 lg:pb-0 md:pb-0">
          <h1 className="mx-4 leading-4 font-extrabold uppercase lg:text-9xl text-gray-700/5 absolute object-fit">
            সর্বাধিক পড়া হয়েছে
          </h1>
          <h1 className="leading-4 font-extrabold uppercase text-3xl lg:text-5xl text-gray-700 reletive md:mb-8 lg:mb-0 ">
            পরামর্শ<span className="textColor"> চিকিৎসা</span>
          </h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6">
          {blog?.slice(5, 11).map((data) => (
            <div className="bg-gray-100/50 border-2 p-3 rounded pointer border-purple-200 ">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="rounded-lg md:w-56"
                    src={data.image}
                    alt={data.title}
                  />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <div className="uppercase tracking-wide text-sm text-lime-600 font-bold">
                    {data.date.slice(4, 15)}
                  </div>
                  <p
                    href="#"
                    className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                  >
                    {data.title}
                  </p>
                  <Link
                    to={`/blogs/${data._id}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <p className="mt-2 text-gray-600 block md:hidden lg:block ">
                      {data.summary.slice(0, 105)}....
                      <button className="text-blue-600 font-semibold pointer">
                        আরো পড়ুন
                      </button>
                    </p>
                  </Link>
                  <Link
                    to={`/blogs/${data._id}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <p className="mt-2 text-gray-600 hidden md:block lg:hidden ">
                      {data.summary.slice(0, 15)}....
                      <button className="text-blue-600 font-semibold pointer">
                        আরো পড়ুন
                      </button>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      ;
    </div>
  );
};

export default TopBlogs;
