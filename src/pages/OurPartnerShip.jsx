import React from "react";
import { AiFillBuild, AiFillPropertySafety } from "react-icons/ai";
import {
  MdGppGood,
  MdLocationCity,
  MdOutlinePriceChange,
} from "react-icons/md";

function OurPartnerShip() {
  return (
    <>
      <div className="overflow-y-hidden">
        <div className="mx-auto container  px-4 md:px-6 px-4 py-12">
          <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
            <div className="">
              <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
                Why choose us
              </p>
              <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
                We also offer a wide range of services.
              </p>
              <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                <img
                  src="https://i.pinimg.com/originals/29/b5/17/29b517c1c265501194211b756764b10c.jpg"
                  alt="ongoing meeting"
                  className="w-full obejct-fit object-center object-fill h-full"
                />
              </div>
              <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12 t">
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <div className="bg-blue-600 p-4 rounded">
                        <AiFillBuild className="text-white text-4xl" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Durable property
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      Each flat will be a sustainable property
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <div className="bg-blue-600 p-4 rounded">
                        <MdLocationCity className="text-white text-4xl" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Convenient Place
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      You will find flats in signature locations
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <div className="bg-blue-600 p-4 rounded">
                        <MdOutlinePriceChange className="text-white text-4xl" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Reasonable Price
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      You can buy property with reasonable price
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <div className="bg-blue-600 p-4 rounded">
                        <MdGppGood className="text-white text-4xl" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Best Facilities
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      We provid best facilites with services
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
              <img
                src="https://res.cloudinary.com/djejkfzz6/image/upload/v1676486379/zmohwucnxokhp4codnr6.jpg"
                alt="ongoing meeting"
                className="w-full obejct-fit object-center object-fill h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* end */}
    </>
  );
}

export default OurPartnerShip;
