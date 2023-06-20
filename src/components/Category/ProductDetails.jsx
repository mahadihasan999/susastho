import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link, useNavigate, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

export default function ProductDetails() {
  const { key } = useParams();
  const navigate = useNavigate();
  const [product, setProducts] = useState([]);
  const { products } = useProducts();
  const [id, setID] = useState(key);

  useEffect(() => {
    fetch(`https://susasto.malihatabassum.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);
  console.log(product);

  const handleClick = (id) => {
    setID(id);
  };

  return (
    <div className="mx-auto container  py-16">
      <button
        className="text-sm font-bold mt-4 mx-2"
        onClick={() => navigate(-1)}
      >
        {product.category}
        <span className="font-normal">/{product.title?.slice(0, 30)}...</span>
      </button>
      <div className=" flex justify-between px-2 bg-gray-50 py-5">
        <h1 className="text-2xl text-gray-800 mr-2">{product.title}</h1>
        <h1 className="text-2xl font-semibold">{product.price} BDT</h1>
      </div>
      <div class="flex ...  gap-2 flex-col lg:flex-row">
        <div class="lg:w-2/3 md:w-full sm:w-full">
          <Carousel>
            {product?.images?.map((data, index) => (
              <div>
                <img src={data.photo_url} alt={data.photo_url} />
                {/* <p className="legend">Legend 3</p> */}
              </div>
            ))}
          </Carousel>

          <div className="flex-col gap-3 flex">
            <div className="bg-blue-50">
              <div className="ml-3 text-gray-800 ">
                <h1 className="font-bold text-blue-500 uppercase ">Overview</h1>
                <hr className="text-gray-500 " />
                <div>
                  <h1>{product.title}</h1>
                </div>
              </div>
            </div>
            <div className="bg-blue-50">
              <div className=" text-gray-800 ">
                <h1 className="font-bold text-blue-500 uppercase px-2 ">
                  Description
                </h1>
                <div>
                  <div class="py-2 inline-block min-w-full  ">
                    <table class="min-w-full lg:flex md:flex  gap-2 jusitfy-between items-center ">
                      <tbody>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Property Size:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {product.size} Sq ft
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Bed:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {product.bed}
                          </td>
                        </tr>

                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Bath:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {product.bath}
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Number of Balcony:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {" "}
                            {product.balconry}
                          </td>
                        </tr>

                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Parking:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {" "}
                            {product.parking}
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Lift:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {" "}
                            {product.lift}
                          </td>
                        </tr>

                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Flor:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {" "}
                            {product.floor}
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Unit:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {" "}
                            {product.unit}
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Price:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {" "}
                            {product.price}
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Service Charge:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {" "}
                            BDT 10,000/-
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Garage Size:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {" "}
                            {product.garageSize}
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Property Type:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {" "}
                            {product.category}
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Building Registration Type:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {product.category}
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Property Purpose:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            For Rent
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Interior:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            Outstanting
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            House Rules:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            Basic Rules
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Front Road Size
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {product.frontRoadSize}
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Common Area:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            170 Sq Ft
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Preferred Tenant:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            ELite, Foreigner
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Gas:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {product.gas}
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Servant Room:
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            01
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Property ID
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {product.propertyID}
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Condition
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            New
                          </td>
                        </tr>
                        <tr class="bg-gray-50 text-gray-700 border-b ">
                          <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Area
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            Safe
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50">
              <div className="ml-3 text-gray-800 ">
                <h1 className="font-bold text-blue-500 uppercase ">Address</h1>
                <hr className="text-gray-500 " />
                <div className="flex-col gap-2 flex">
                  <h1 className="bg-gray-50 text-gray-700 px-2">
                    Address: {product.address}
                  </h1>
                  <h1 className="bg-gray-50 text-gray-700 px-2">
                    Area: {product.area}
                  </h1>
                  <h1 className="bg-gray-50 text-gray-700 px-2">
                    City :{product.city}
                  </h1>
                  <h1 className="bg-gray-50 text-gray-700 px-2">
                    Country :{product.country}
                  </h1>
                  <h1 className="bg-gray-50 text-gray-700 px-2">
                    Zip: {product.zipCode}
                  </h1>
                </div>
              </div>
            </div>
            <div className="bg-blue-50">
              <div className="ml-3 text-gray-800 ">
                <h1 className="font-bold text-blue-500 uppercase ">Address</h1>
                <hr className="text-gray-500 " />
                <div className="flex-col gap-2 flex">
                  <p className="bg-gray-50 text-gray-700 px-2">
                    24 hours CC TV coverage, Automatic fire alarm system, Corner
                    Plot, Dedicated Electricity Line, Generator Backup, Good
                    Location, Open Space, Road side view, WiFi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 px-2 lg:w-1/3  w-full  pb-20">
          <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold text-gray-800 text-center py-3 ">
            See More
          </h1>
          <div>
            <ol className="flex flex-col gap-2 px-2">
              {products?.map((data) => (
                <Link onClick={() => window.scrollTo(0, 0)}>
                  <li
                    onClick={() => handleClick(data.propertyID)}
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
  );
}
