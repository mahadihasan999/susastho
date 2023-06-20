import React, { useState } from "react";
import useProducts from "../../hooks/useProducts";

import { Link } from "react-router-dom";
import TextField from "../Form/TextField";

const Category = () => {
  const { products } = useProducts();
  const [location, setLocaton] = useState("Dhanmondi");
  const [propertyType, setPropertyType] = useState("Furnished Apartment");

  let queary;

  // const queary = location + cut + propertyType;

  if (location && propertyType) {
    queary = location + "&" + propertyType;
  } else {
    queary = propertyType;
  }

  console.log(queary);
  const key1 = "Commercial Space";
  const key2 = "Residential Apartment";
  const key3 = "Furnished Apartment";
  const key4 = "Luxury Collection";
  const key5 = "Office Space";
  const key6 = "Bachelor Apartment";
  return (
    <div className=" py-10 px-4 ">
      <div className="text-center">
        <h1 className="lg:text-4xl text-3xl font-semibold text-gray-800 text-center pb-6">
          What You Want?
        </h1>
      </div>
      <div className="mx-auto container flex items-center justify-center">
        <div
          className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-2 gap-4 text-center text-gray-100 "
          id="home"
        >
          <Link
            to={`/category/${key1}`}
            className="cursor-pointer hover:shadow hover:scale-105 py-6 xl:px-4 rounded xl:w-60 w-40 flex justify-center items-center flex-col text-blue-600 shadow shadow-blue-600  text-blue-600"
          >
            <div className="mb-2">
              <img
                className="h-[50px]"
                src="https://img.icons8.com/wired/64/40C057/client-company--v2.png"
              />
            </div>

            <h2 className="dark:gray-white text-xl font-semibold text-center ">
              Commercial Space
            </h2>
          </Link>
          <Link
            to={`/category/${key6}`}
            className="cursor-pointer hover:shadow hover:scale-105 py-6 xl:px-4 rounded xl:w-60 w-40 flex justify-center items-center flex-col  shadow shadow-blue-600  bg-blue-500"
          >
            <div className="mb-2">
              <img src="https://img.icons8.com/external-becris-lineal-becris/64/FFFFFF/external-single-finance-taxation-becris-lineal-becris.png" />
            </div>

            <h2 className="dark:gray-white text-xl font-semibold text-center ">
              Bachelor Apartment
            </h2>
          </Link>
          <Link
            to={`/category/${key3}`}
            className="cursor-pointer hover:shadow hover:scale-105 py-6 xl:px-4 rounded xl:w-60 w-40 flex justify-center items-center flex-col text-blue-600 shadow shadow-blue-600  "
          >
            <div className="mb-2">
              <img src="https://img.icons8.com/ios/50/40C057/apartment.png" />
            </div>

            <h2 className="dark:gray-white text-xl font-semibold text-center ">
              Furnished Apartment
            </h2>
          </Link>
          <Link
            to={`/category/${key4}`}
            className="cursor-pointer hover:shadow hover:scale-105 py-6 xl:px-4 rounded xl:w-60 w-40 flex justify-center items-center flex-col text-blue-600 shadow shadow-blue-600  text-blue-600"
          >
            <div className="mb-2">
              <img
                className="h-[50px]"
                src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/40C057/external-office-building-city-life-icongeek26-outline-icongeek26.png"
              />
            </div>

            <h2 className="dark:gray-white text-xl font-semibold text-center mx-2">
              Luxury Collection
            </h2>
          </Link>
          <Link
            to={`/category/${key5}`}
            className="cursor-pointer hover:shadow hover:scale-105 py-6 xl:px-4 rounded xl:w-60 w-40 flex justify-center items-center flex-col text-blue-600 shadow shadow-blue-600  text-blue-600"
          >
            <div className="mb-2">
              <img src="https://img.icons8.com/ios/50/40C057/skyscrapers.png" />
            </div>

            <h2 className="dark:gray-white text-xl font-semibold text-center ">
              Office Space
            </h2>
          </Link>
          <Link
            to={`/category/${key2}`}
            className="cursor-pointer hover:shadow hover:scale-105  py-6 xl:px-4 rounded xl:w-60 w-40 flex justify-center items-center flex-col text-blue-600 shadow shadow-blue-600  text-blue-600"
          >
            <div className="mb-2">
              <img src="https://img.icons8.com/ios/50/40C057/building-with-rooftop-terrace.png" />
            </div>

            <h2 className="dark:gray-white text-xl font-semibold text-center ">
              Residential Apartment
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
