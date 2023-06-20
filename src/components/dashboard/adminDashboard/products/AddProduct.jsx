import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import toast, { Toaster } from "react-hot-toast";
import Label from "../../../Form/Label";
import TextField from "../../../Form/TextField";
import Button from "../../../Form/Button";
import ManageProducts from "./ManageProducts";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("Furnished Apartment");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [bed, setBed] = useState("");
  const [bath, setBath] = useState("");
  const [balcony, setBalcony] = useState("");
  const [builtYear, setBuiltYear] = useState();
  const [image, setImageData] = useState(null);
  const [lift, setLift] = useState();
  const [floor, setFloor] = useState();
  const [totalUnit, setTotalUnit] = useState();
  const [frontRoadSize, setFrontRoadSize] = useState();
  const [gas, setGas] = useState();
  const [propertyID, setPropertyID] = useState();
  const [parking, setParking] = useState("");
  const [garageSize, setGarageSize] = useState();
  const [date, setDate] = useState(new Date());
  const [country, setCountry] = useState();
  const [address, setAddress] = useState();
  const [zipcode, setZipcode] = useState();
  const [area, setArea] = useState("Dhanmondi");
  const [city, setCity] = useState();

  const navigate = useNavigate();

  //post to database

  function handleOpenWidget() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "djejkfzz6",
        uploadPreset: "rents-bd",
      },

      (error, result) => {
        if (!error && result && result.event === "queues-end") {
          const files = result.info.files?.map(function (element) {
            return {
              photo_url: element.uploadInfo.url,
            };
          });
          setImageData(files);
        }
      }
    );

    //open widget
    myWidget.open();
  }
  //   const { uuid } = require("uuidv4");
  //   const key = uuid();
  console.log(image);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newFiles = {
      category: category,
      title: title,
      price: price,
      size: size,
      address: address,
      images: image,
      builtYear: builtYear,
      bed: bed,
      bath: bath,
      balcony: balcony,
      lift: lift,
      floor: floor,
      unit: totalUnit,
      frontRoadSize: frontRoadSize,
      gas: gas,
      propertyID: propertyID,
      parking: parking,
      garageSize: garageSize,
      date: date,
      country: country,
      zipcode: zipcode,
      area: area,
      city: city,
    };
    fetch("https://susasto.malihatabassum.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFiles),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully Added!");
          navigate("/");
        } else {
          toast.error("This didn't work.");
        }
      });
    //uuidv4
  };

  return (
    <>
      <div className="mx-auto container px-6  lg:py-20 md:py-16 z-0 -mt-28">
        <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold text-gray-800 text-center py-3">
          Add New Product
        </h1>
        <Toaster />
        <form
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-4"
          onSubmit={handleSubmit}
        >
          {/* title and description  */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="category" text="Category" />
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="py-2  border"
            >
              <option value="Furnished Apartment">Furnished Apartment</option>
              <option value="Residential Apartment">
                Residential Apartment
              </option>
              <option value="Commercial Space">Commercial Space</option>
              <option value="Office Space">Office Space</option>
              <option value="Luxury Collection">Luxury Collection</option>
              <option value="Bachelor Apartment">Bachelor Apartment</option>
            </select>

            <Label htmlFor="area" text="Area" />
            <select
              name="location"
              id="location"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="py-2  border"
            >
              <option value="Dhanmondi">Dhanmondi</option>
              <option value="Banani">Banani</option>
              <option value="Gulsan">Gulsan</option>
              <option value="Purbacal">Purbacal</option>
              <option value="Mohammadpur">Mohammadpur</option>
            </select>

            <Label htmlFor="title" text="Title" />
            <TextField
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Label htmlFor="size" text="Property Size" />
            <TextField
              id="size"
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            />
            <Label htmlFor="price" text="Price" />
            <TextField
              id="price"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <Label htmlFor="bed" text="Bed" />
            <TextField
              id="bed"
              type="text"
              value={bed}
              onChange={(e) => setBed(e.target.value)}
              required
            />
            <Label htmlFor="bath" text="Bath" />
            <TextField
              id="bath"
              type="text"
              value={bath}
              onChange={(e) => setBath(e.target.value)}
              required
            />
            <Label htmlFor="balcony" text="Balcony" />
            <TextField
              id="balcony"
              type="text"
              value={balcony}
              onChange={(e) => setBalcony(e.target.value)}
              required
            />
            <Label htmlFor="built-year" text="Built Year" />
            <TextField
              id="built-year"
              type="text"
              value={builtYear}
              onChange={(e) => setBuiltYear(e.target.value)}
              required
            />
            <Label htmlFor="litf" text="Lift" />
            <TextField
              id="lift"
              type="text"
              value={lift}
              onChange={(e) => setLift(e.target.value)}
              required
            />
            <Label htmlFor="floor" text="Floor" />
            <TextField
              id="floor"
              type="text"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              required
            />
            <Label htmlFor="total-unit" text="Total Unit" />
            <TextField
              id="total-unit"
              type="text"
              value={totalUnit}
              onChange={(e) => setTotalUnit(e.target.value)}
              required
            />
            <Label htmlFor="font-road-size" text="Front Road Size" />
            <TextField
              id="font-road-size"
              type="text"
              value={frontRoadSize}
              onChange={(e) => setFrontRoadSize(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="gas" text="Gas Line" />
            <TextField
              id="gas"
              type="text"
              value={gas}
              onChange={(e) => setGas(e.target.value)}
              required
            />
            <Label htmlFor="property-id" text="Property ID" />
            <TextField
              id="property-id"
              type="text"
              value={propertyID}
              onChange={(e) => setPropertyID(e.target.value)}
              required
            />
            <Label htmlFor="parking-zone" text="Parking Zone" />
            <TextField
              id="parking-zone"
              type="text"
              value={parking}
              onChange={(e) => setParking(e.target.value)}
              required
            />
            <Label htmlFor="garage-size" text="Garage Size" />
            <TextField
              id="garage-size"
              type="text"
              value={garageSize}
              onChange={(e) => setGarageSize(e.target.value)}
              required
            />
            <Label htmlFor="address" text="Address" />
            <TextField
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <Label htmlFor="country" text="Country" />
            <TextField
              id="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            <Label htmlFor="city" text="City" />
            <TextField
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />

            <Label htmlFor="zipcode" text="Zip Code" />
            <TextField
              id="zip-code"
              type="text"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              required
            />
            <Label htmlFor="date" text="Date" />
            <input
              className="py-2 rounded px-2"
              onChange={(e) => setDate(e.target.value)}
              type="date"
              selected={date}
            />

            <div className="mt-5 flex gap-2 items-center justify-start">
              <div onClick={handleOpenWidget} className="flex gap-3">
                <button
                  onClick={() => {
                    setLoading(true);
                  }}
                  className="bg-gray-100 border border-gray-400 px-6 py-2 rounded"
                  type="button"
                >
                  {loading ? (
                    <div class="flex justify-center items-center">
                      {image ? (
                        <span class="visually-hidden">Uploaded done</span>
                      ) : (
                        <span class="visually-hidden">Loading...</span>
                      )}
                    </div>
                  ) : (
                    <span className="text-gray-600">Choose File</span>
                  )}
                </button>

                <div className="px-6 flex items-center flex-no-wrap">
                  {image?.map((element) => (
                    <div className="">
                      <div className="w-12 h-12 bg-cover bg-center rounded-md">
                        <img
                          src={element.photo_url}
                          alt={element.photo_url}
                          className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* button  */}

            {/* button  */}
            <div className="mt-8">
              <Button text="Add" type="submit" />
            </div>
          </div>
        </form>

        <ManageProducts />
      </div>
    </>
  );
};

export default AddProduct;
