import React, { useState } from "react";
import { Link } from "react-router-dom";
function IndexPage() {
  const [menu, setMenu] = useState(false);
  const [location, setLocaton] = useState("Dhanmondi");
  const [propertyType, setPropertyType] = useState("Furnished Apartment");
  let queary;

  // const queary = location + cut + propertyType;

  if (location && propertyType) {
    queary = location + "&" + propertyType;
  } else {
    queary = propertyType;
  }

  return (
    <>
      <div className="bg-gradient-to-b from-blue-500 w-full">
        <div className="px-4 py-16">
          <div className="md:flex justify-center gap-8 items-center">
            <div>
              <img
                src="https://res.cloudinary.com/djejkfzz6/image/upload/v1676705451/rpeliqtzj4wpmnpekfok.png"
                className="lg:block md:hidden block h-96"
                alt="cover"
              />
            </div>
            <div>
              <p className="lg:text-4xl md:text-3xl text-3xl font-semibold md:text-left text-center">
                A home changes everything.
              </p>
              <p className="text-base text-gray-600 max-w-[624px] w-full mt-6 md:text-left text-center pb-3">
                HomePros is a leading letting-property portal web-site with a
                comprehensive search facility for property-finders to find any
                kind of property they wish to live in. We also offer a wide
                range of services.
              </p>
              <div className="py-2 lg:pb-6 md:pb-6 flex items-center justify-start text-center ">
                <select
                  name="location"
                  id="location"
                  value={location}
                  onChange={(e) => setLocaton(e.target.value)}
                  className="py-2  border px-2"
                >
                  <option value="Dhanmondi">Dhanmondi</option>
                  <option value="Banani">Banani</option>
                  <option value="Gulsan">Gulsan</option>
                  <option value="Purbacal">Purbacal</option>
                  <option value="Mohammadpur">Mohammadpur</option>
                </select>

                <select
                  name="category"
                  id="category"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="py-2  border px-2"
                >
                  <option value="Furnished Apartment">
                    Furnished Apartment
                  </option>
                  <option value="Residential Apartment">
                    Residential Apartment
                  </option>
                  <option value="Commercial Space">Commercial Space</option>
                  <option value="Office Space">Office Space</option>
                  <option value="Luxury Collection">Luxury Collection</option>
                  <option value="Bachelor Apartment">Bachelor Apartment</option>
                </select>

                <Link
                  to={`/search/${queary}`}
                  className="py-2  bg-blue-600 text-gray-100 px-4 hidden lg:block md:block "
                >
                  Search
                </Link>
              </div>
              <Link
                to={`/search/${queary}`}
                className="py-2  bg-blue-600 text-gray-100 px-4 block lg:hidden md:hidden text-center font-semibold text-xl "
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
