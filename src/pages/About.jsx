import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common/Footer/Footer";

function About() {
  return (
    <>
      <div className="md:mx-auto md:container px-4">
        <div className="pt-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
              <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div className="py-2 text-color">
                  <h1 className="tetext-xlxt-2xl lg:text-4xl md:leading-snug tracking-tighter f-f-l font-black">
                    স্বাগতম সুস্বাস্থ্যে
                  </h1>
                  <h2 className="text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                    স্বাস্থ্যই সম্পদ । স্বাস্থ্যই সকল সুখের মূল । মানুষ
                    প্রতিনিয়ত নানা প্রতিকূলতার মাঝেও জীবনকে উপভোগ করতে চায়। এই
                    বিশ্বাস থেকেই আমাদের যাত্রা শুরু, যে জীবনকে আনন্দের সাথে
                    উপভোগের জন্য সুস্থ্য থাকা অত্যন্ত আবশ্যক। আবহাওয়া ও ঋতুগত
                    পরিবর্তন, বৈশ্বিক উষ্ণতা , ক্রমাগত দূষণের প্রভাব বেড়ে যাওয়া
                    এসকল কারণে যেমন নতুন ধরনের রোগের প্রাদুর্ভাব বেড়েই চলেছে। এর
                    সঙ্গে সাধারণ অসুস্থ্যতা তো রয়েছেই। আমাদের সর্বোচ্চ চেষ্টা
                    থাকবে তথ্যনির্ভর ও একেবারে বাড়িতে বানানো উপকরণের মাধ্যমেই এ
                    ধরনের সমস্যার সমাধানের উপায় আপনাদের কাছে পৌঁছে দেওয়া ।
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                    <Link
                      to="/properties"
                      className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700"
                    >
                      Lets Get Started
                    </Link>
                    <div className="pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                          fill="#D53F8C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src="https://res.cloudinary.com/dmh446knl/image/upload/v1687221960/plmj5vkgh6vtrcswsgd8.jpg"
                  alt="-coverimage"
                />
                <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                  <div className="text-center w-full sm:w-full mb-8">
                    <div className="flex items-center">
                      <h1 className=" -xlxt-2xl lg:text-4xl md:leading-snug tracking-tighter f-f-l font-black">
                        Everything You Need
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-32 pt-16">
            <div className="mx-auto">
              <div className="flex flex-wrap flex-row-reverse items-center">
                <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                  <div className="py-2 text-color">
                    <h1 className="text-2xl lg:text-4xl tracking-tighter md:leading-snug f-f-l font-black">
                      Our vision is very simple
                    </h1>
                    <h2 className="text-lg lg:text-xl leading-7 md:leading-10 f-f-r py-8">
                      প্রতিটি মানুষ যাতে সকল ধরনের রোগ থেকে মুক্তি পেয়ে
                      সুস্বাস্থ্যে থাকতে পারে এটাই আমাদের কামনা। স্বাস্থ্য বিষয়ক
                      বিশেষজ্ঞের উল্লেখকৃত মতামতই গুরুত্বের সঙ্গে আপনাদের সামনে
                      তুলে ধরা আমাদের অঙ্গিকার। তবে গুরুতর পরিস্থিতিতে অবশ্যই
                      বিশেষজ্ঞ চিকিৎসকের শরণাপন্ন হওয়ার পরামর্শ থাকবে। আপনার
                      সুন্দর ও সুস্থ্য জীবন আমাদের কাম্য । আর দৈনন্দিন সমস্যার
                      সমাধান করে তা আরও সুন্দর করতে প্রয়োজনীয় তথ্য পাবেন আমাদের
                      কাছে। অসংখ্য ধন্যবাদ ও শুভকামনা।
                    </h2>
                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                      <Link
                        to="/all-disease"
                        className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700"
                      >
                        Lets Get Started
                      </Link>
                      <div className="pl-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                            fill="#D53F8C"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                  <img
                    className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                    src="https://img.huffingtonpost.com/asset/5b9ef92c2000003000fe9497.jpeg?ops=scalefit_720_noupscale"
                    alt="cover-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
