import React, { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <div className="container mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
      <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
        সাধারণ জিজ্ঞাসা
      </h1>

      <div className="lg:w-8/12 w-full mx-auto">
        {/* <!-- Question 1 --> */}
        <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

        <div className="w-full md:px-6  ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className=" ">
              <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                {" "}
                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                  Q1.
                </span>{" "}
                ব্যায়াম কি সত্যিই মানসিক স্বাস্থ্যের জন্য সাহায্য করে?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen(!open)}
            >
              <svg
                className={"transform " + (open ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open ? "block" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-600 font-normal">
              ব্যায়াম আপনার মেজাজ, কেন্দ্রবিন্দু এবং শক্তি উন্নত করতে পারে।
              এমনকি এটি আপনাকে জীবনের প্রতি ইতিবাচক দৃষ্টিভঙ্গি রাখতে সাহায্য
              করতে পারে। নিয়মিত ব্যায়াম আপনাকে ভালো ঘুমাতে সাহায্য করতে পারে।
              ভালো ঘুম আপনার মেজাজকে সাহায্য করে। ব্যায়াম আপনাকে নিয়ন্ত্রণে
              অনুভব করতে এবং নিজের সম্পর্কে ভাল বোধ করতেও সহায়তা করতে পারে।
            </p>
          </div>
        </div>

        {/* <!-- Question 2 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                {" "}
                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                  Q2.
                </span>{" "}
                নিজের স্বাস্থ্যে দিকে সবচেয়ে বেশি মনোযোগ দেয়ার কথা ভাবছেন?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen2(!open2)}
            >
              <svg
                className={"transform " + (open2 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open2 ? "block" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-600 font-normal">
              মানুষ সারাক্ষণ দেহের সুস্থতা নিয়ে ভাবে। আর এটি সহজও বটে। কিন্তু
              ব্রিটেনের এক্সেটার বিশ্ববিদ্যালয়ের স্পোর্টস ও এক্সারসাইজ বিষয়ক
              শিক্ষক ড. নেডাইন স্যামি বলেছেন, আমাদের নিজেদের মনের উপরে বিশেষ
              খেয়াল দেয়া দরকার। তার মতে, আত্ম-সচেতনতা বাড়িয়ে মনের উপরে
              আমাদের নিয়ন্ত্রণ বাড়ানো সম্ভব। ড. স্যামি বলছিলেন, আত্ম-সচেতনতা
              এমন এক জিনিষ যা মানুষকে তার নিজের আবেগ, অনুভূতি ও ইচ্ছে-অনিচ্ছা
              অনেক নিবিড়ভাবে চিনতে সহায়তা করে। তার মতে, নিজের অনুভূতিকে চেনার
              মধ্য দিয়েই মানুষ নিজের স্বাস্থ্য ও সুরক্ষার দিকে সবচে' বেশি
              মনোযোগ দিতে পারে। নিজের সম্পর্কে ব্যক্তির ধারণা যত নির্ভুল ও গভীর
              হবে, ততই সে তার নিজের শক্তি ও দুর্বলতার দিকগুলো জানবে। এই জানার
              মাধ্যমেই নিজের দুর্বলতাগুলোকে কাটিয়ে উঠা সম্ভব হয়ে উঠে বলে মনে
              করেন ড. স্যামি।
            </p>
          </div>
        </div>

        {/* <!-- Question 3 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                {" "}
                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                  Q3.
                </span>
                সুস্বাস্থ্য ও দীর্ঘায়ু; সুস্বাস্থ্য গঠনের উপায় কি?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen3(!open3)}
            >
              <svg
                className={"transform " + (open ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open3 ? "block" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-600 font-normal">
              সুস্বাস্থ্য ও দীর্ঘায়ু একে অন্যের সাথে সম্পর্কযুক্ত। স্বাস্থ্য
              যেহেতু আমাদের জীবনের জন্য অনেক বেশি গুরুত্বপূর্ণ, তাই এটি ঠিক
              রাখতে আমাদের কিছু দিক খেয়াল রাখতে হবে। শারীরিক স্বাস্থ্য ঠিক রাখার
              কয়েকটি উপায় এখানে উল্লেখ করছি। এর বেশিরভাগ তোমরা অনেকেই জানো।
              কিন্তু শুধু জানলে কোনো লাভ নেই। জেনে সেগুলো আমলে আনতে হবে।
              সুস্বাস্থ্য গঠনের উপায় গুলো আরেকবার তোমাদের মনে করে দিতে আমি
              হাজির এই অংশে। এজন্য আপনাকে শরীরচর্চা: পর্যাপ্ত পানি, আলো-বাতাস,
              প্রাকৃতিক খাবারম,ঘুম ও বিশ্রাম নিতে হবে।
            </p>
          </div>
        </div>

        {/* <!-- Question 4 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6  ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                {" "}
                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                  Q4.
                </span>
                চুল পাতলা হলে করনীয় কি?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen4(!open4)}
            >
              <svg
                className={"transform " + (open4 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open4 ? "block" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-600 font-normal">
              চুল পাতলা হওয়া রোধে যা করবেন- ১. প্রোটিন সমৃদ্ধ খাবার খাওয়া ২.
              মাল্টিভিটামিন ট্যাবলেট ৩. চাপ নিয়ন্ত্রণ করা ৪. মাথার ত্বক মালিশ
              করা ৫. সহনশীল যন্ত্রপাতির ব্যবহার উপরের উপায়গুলো কাজ না করলে
              চিকিৎসকের পরামর্শ গ্রহণ করা ভালো। প্রাথমিকভাবে সাধারণ ডাক্তারের
              কাছে পরামর্শ নিতে পারেন কিংবা চর্মবিশেষজ্ঞের কাছেও যেতে পারেন।
            </p>
          </div>
        </div>

        {/* <!-- Question 5 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                {" "}
                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                  Q5.
                </span>
                হার্টবিট আচমকা বাড়লে কী করণীয়? চিকিৎসকরা কী বলছেন?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen5(!open5)}
            >
              <svg
                className={"transform " + (open5 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={
              "mt-6 w-full " + (open5 ? "block transition-all" : "hidden")
            }
          >
            <p className="text-base leading-6 text-gray-600 font-normal">
              • উত্তেজিত হবেন না এই সময়। বেশি চিন্তাও করবেন না। বরং নিজেকে এবং
              মনকে শান্ত রাখুন। • সমান জায়গায় ধীরে হাঁটুন। এই সময় ধীরে শ্বাস
              নিন আর ছাড়ুন। এতে হার্টবিট আবার স্বাভাবিক হয়ে যাবে। • পারলে একটু
              অল্প গরম জলে স্নান করে নিন। কিন্তু বাড়াবাড়ি হলে অবশ্যই চিকিৎসকের
              পরামর্শ নিন, ফেলে রাখবেন না। হার্টবিট বেড়ে যাওয়া আটকাতে কী করা
              উচিত? চিকিৎসকদের মতে, হার্টবিট স্বাভাবিক রাখার জন্য নিয়মিত
              ব্যায়াম করুন। এতে বিভিন্ন ধরনের রোগের ঝুঁকি কমে। বুকের ধড়ফড়ানি
              দূর হয়। একই সঙ্গে দূর হয়ে যায় স্ট্রেস, চিন্তা। প্রত্যেকদিন
              প্রচুর পরিমাণে জল খান। একই সঙ্গে খান সঠিক, পুষ্টিকর খাবার। ধূমপান
              এবং মদ্যপানের অভ্যাস ত্যাগ করুন। বাড়াবাড়ি হলে চিকিৎসকের পরামর্শ
              নিতে ভুলবেন না একদম।
            </p>
          </div>
        </div>

        <hr className=" w-full lg:mt-10 my-8" />
      </div>
    </div>
  );
};

export default Faq;
