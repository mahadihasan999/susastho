import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faUtensils,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";

const Stat = () => {
  return (
    <div className="py-12 px-4 md:px-6 xl:px-0 md:container xl:mx-auto overflow-x-hidden ">
      <div className="flex lg:justify-center lg:items-center items-center justify-center pb-8 lg:pb-0 md:pb-0">
        <h1 className="mx-4 leading-4 font-extrabold uppercase lg:text-9xl text-gray-700/5 absolute object-fit">
          সকল সেবা
        </h1>
        <h1 className="leading-4 font-extrabold uppercase text-3xl lg:text-5xl text-gray-700 reletive md:mb-8 lg:mb-0 ">
          স্বাস্থ্য<span className="primary-color"> টুলস</span>
        </h1>
      </div>
      <div className="my-12 grid grid-cols-3 gap-5">
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg">
          <div className="flex items-center justify-center h-20 bg-blue-700">
            <FontAwesomeIcon
              icon={faUtensils}
              className="text-white text-4xl"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Calorie Calculator</h2>
            <p className="text-gray-700">প্রতিদিন কি পরিমাণ ক্যালোরি প্রয়োজন</p>
            <Link
              to="/calorie-calculator"
              className="mt-4 inline-block bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              দেখুন
            </Link>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg">
          <div className="flex items-center justify-center h-20 bg-blue-700">
            <FontAwesomeIcon
              icon={faHeartbeat}
              className="text-white text-4xl"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Stress Management</h2>
            <p className="text-gray-700">মানসিক চাপ কমানোর সহজ উপায়</p>
            <Link
              to="/stress-management-tools"
              className="mt-4 inline-block bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              দেখুন
            </Link>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg">
          <div className="flex items-center justify-center h-20 bg-blue-700">
            <FontAwesomeIcon icon={faWeight} className="text-white text-4xl" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">BMI Calculator</h2>
            <p className="text-gray-700">
              আপনার Body Mass Index (BMI) হিসাব করুন.
            </p>
            <Link
              to="/bmi-tools"
              className="mt-4 inline-block bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              দেখুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
