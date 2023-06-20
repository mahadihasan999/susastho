import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";

const BlogDetails = () => {
  const [blogs, setProducts] = useState({});
  const { blog } = useBlogs();
  const { id } = useParams();

  const [key, setID] = useState(id);
  useEffect(() => {
    fetch(`https://susasto.malihatabassum.com/blogs/${key}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [key]);

  const handleClick = (id) => {
    setID(id);
  };
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 h-screen">
      <div className="p-5 my-16 mg:my-10 md:my-16 ">
        <button
          className="text-sm font-bold my-4 mx-2"
          onClick={() => navigate(-1)}
        >
          Blogs
          <span className="font-normal">/{blogs.title?.slice(0, 30)}...</span>
        </button>
        <div class="flex gap-2 lg:flex-row md:flex-row flex-col ">
          <div class="lg:w-2/3 md:w-2/3 w-full  px-2 bg-gray-50">
            {" "}
            <div className="uppercase tracking-wide text-sm text-blue-600 font-bold">
              {blogs?.date?.slice(4, 15)}
            </div>
            <p
              href="#"
              className="block mt-1 text-2xl leading-tight font-semibold text-gray-900 hover:underline pb-2"
            >
              {blogs?.title}
            </p>
            <div>
              <img src={blogs.image} alt="" />
            </div>
            <hr className="my-2" />
            <p className="mt-2 text-gray-800">
              {blogs?.summary?.split(/\r\n|\n|\r/gm).map((line) => {
                return (
                  <React.Fragment>
                    {line}
                    <br />
                  </React.Fragment>
                );
              })}
            </p>
            <p className="mt-2 text-gray-600">
              {blogs?.excerpt?.split(/\r\n|\n|\r/gm).map((line) => {
                return (
                  <React.Fragment>
                    {line}
                    <br />
                  </React.Fragment>
                );
              })}
            </p>
          </div>
          <div class=" bg-gray-50 px-2 lg:w-1/3 md:w-1/3 w-full pb-20  ">
            <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold text-gray-800 text-center py-3 ">
              আরো পড়ুন
            </h1>
            <div>
              <ol className="flex flex-col gap-2">
                {blog?.map((data) => (
                  <Link onClick={() => window.scrollTo(0, 0)}>
                    <li
                      onClick={() => handleClick(data._id)}
                      className="text-blue-500 border-b border-gray-300 font-normal"
                    >
                      {data.title}
                    </li>
                  </Link>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
