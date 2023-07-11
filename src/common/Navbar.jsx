import React, { useState } from "react";
import {
  AiFillDatabase,
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineLayout,
  AiOutlineLogout,
  AiOutlinePaperClip,
  AiOutlineProject,
  AiOutlineUser,
} from "react-icons/ai";
import {
  MdDashboardCustomize,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../assets/logo/logo.png";
export default function Navbar() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [about, setDeliverables] = useState(false);
  const { user, signOutUser } = useAuth();
  return (
    <>
      <div className="bg-gray-200 h-full w-full ">
        {/* Code block starts */}
        <nav className="bg-white shadow xl:block hidden">
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center xl:hidden">
                <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                  <div className="visible xl:hidden">
                    <ul className="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden">
                      <Link
                        to="/"
                        className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none"
                      >
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-grid"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={4} y={4} width={6} height={6} rx={1} />
                            <rect x={14} y={4} width={6} height={6} rx={1} />
                            <rect x={4} y={14} width={6} height={6} rx={1} />
                            <rect x={14} y={14} width={6} height={6} rx={1} />
                          </svg>
                          <span className="ml-2 font-bold">প্রথম পাতা </span>
                        </div>
                      </Link>
                      <Link
                        to="/properties"
                        className="flex xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none flex justify-center"
                      >
                        <div className="flex items-center">
                          <AiOutlineProject className="w-6 h-6 md:w-8 md:h-8 text-gray-800"></AiOutlineProject>
                          <span className="ml-2 font-bold"></span>
                        </div>
                      </Link>
                      <Link className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <AiOutlineLayout className="text-xl text-gray-800" />
                        <span className="ml-2 font-bold">সকল রোগ</span>
                      </Link>
                      <Link
                        to="/health-tools"
                        className="border-b border-gray-300 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-code"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="7 8 3 12 7 16" />
                          <polyline points="17 8 21 12 17 16" />
                          <line x1={14} y1={4} x2={10} y2={20} />
                        </svg>
                        <span className="ml-2 font-bold">স্বাস্থ্য টূলস</span>
                      </Link>
                      <Link className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <div className="flex items-center">
                          <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                            <img
                              className="rounded h-10 w-10 object-cover"
                              src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                              alt="logo"
                            />
                          </div>
                          <p className="text-sm ml-2 cursor-pointer">
                            Jane Doe
                          </p>
                          <div className="sm:ml-2 text-white relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                      <Link className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user.displayName"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={7} r={4} />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                          <span className="ml-2">Profile</span>
                        </div>
                      </Link>
                    </ul>
                    <svg
                      onclick="MenuHandler(this,true)"
                      aria-haspopup="true"
                      aria-label="Main Menu"
                      xmlns="http://www.w3.org/2000/svg"
                      className="show-m-menu icon icon-tabler icon-tabler-menu"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={4} y1={8} x2={20} y2={8} />
                      <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                  </div>
                  <div
                    className="hidden close-m-menu text-gray-700"
                    onclick="MenuHandler(this,false)"
                  >
                    <svg
                      aria-label="Close"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </div>
              <Link
                to="/"
                className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start"
              >
                <div className="flex items-center">
                  <img className="w-24" src={logo} alt="" />
                </div>
              </Link>
              <div className="flex">
                <div className="hidden xl:flex md:mr-6 xl:mr-16">
                  <Link
                    to="/"
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-grid"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x={4} y={4} width={6} height={6} rx={1} />
                        <rect x={14} y={4} width={6} height={6} rx={1} />
                        <rect x={4} y={14} width={6} height={6} rx={1} />
                        <rect x={14} y={14} width={6} height={6} rx={1} />
                      </svg>
                    </span>
                    প্রথম পাতা
                  </Link>
                  <Link
                    to="/all-disease"
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    <span className="mr-2">
                      <AiOutlineProject className="text-xl text-gray-800"></AiOutlineProject>
                    </span>
                    সকল সমস্যা
                  </Link>
                  <Link
                    to="/blogs/648ca321c97faef7397f500e"
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out text-2xl"
                  >
                    <span className="mr-2">
                      <AiOutlineLayout className="text-xl text-gray-800" />
                    </span>
                    <h1 className="text-md"> জ্বর হলে করণীয়</h1>
                  </Link>

                  {user.displayName ? (
                    <Link
                      to="/dashboard"
                      className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                    >
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user.displayName"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={7} r={4} />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                      </span>
                      Dashboard
                    </Link>
                  ) : (
                    <Link
                      to="/health-tools"
                      className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                    >
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-code"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="7 8 3 12 7 16" />
                          <polyline points="17 8 21 12 17 16" />
                          <line x1={14} y1={4} x2={10} y2={20} />
                        </svg>
                      </span>
                      স্বাস্থ্য টুলস
                    </Link>
                  )}
                </div>
                <div className="hidden xl:flex items-center">
                  <div className="ml-6 ">
                    {user.displayName ? (
                      <div className="flex gap-2">
                        <div className="flex items-center  ">
                          <div className="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                            <AiOutlineUser className="object-cover text-2xl" />
                          </div>
                          <div className="ml-2 text-gray-600">
                            <h1>{user.displayName?.displayName}</h1>
                          </div>
                        </div>

                        <Link onClick={signOutUser}>
                          <button class="bg-blue-600 hover:bg-blue-600 text-gray-100 font-bold py-2 px-4 rounded">
                            <AiOutlineLogout className="font-bold text-white" />
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <Link to="/sign-in">
                        <button class="bg-blue-600 hover:bg-blue-600 text-gray-100 font-bold py-2 px-4 rounded">
                          Login
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white 0 top-0 z-40">
            <Link to="/" className="w-24">
              <img className="w-32" src={logo} alt="" />
            </Link>
            <div className="flex items-center">
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    onClick={() => window.scrollTo(0, 0)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 "
                : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"
            }
          >
            <div
              className="bg-gray-800 opacity-50 w-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 0 overflow-y-auto z-40 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <Link
                      to="/"
                      className="mt-6 flex w-full items-center justify-between"
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {/* <img
                            className="w-32"
                            src="https://res.cloudinary.com/djejkfzz6/image/upload/v1674570459/bvcrwz8dcvcwlv4tjfjn.png"
                            alt=""
                          /> */}
                          <h1>সুস্বাস্থ্য</h1>
                        </div>
                      </div>
                    </Link>
                    <ul className=" flex-col flex">
                      <Link
                        to="/"
                        onClick={() => setShow(!show)}
                        className="text-gray-800 pt-10 focus:font-bold hover:font-bold"
                      >
                        <div className="flex items-center ">
                          <AiOutlineHome className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
                          <p className=" xl:text-base md:text-2xl text-base ml-3 ">
                            প্রথম
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/all-disease"
                        onClick={() => setShow(!show)}
                        className="text-gray-800 pt-8 focus:font-bold hover:font-bold"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <AiOutlineProject className="w-6 h-6 md:w-8 md:h-8 text-gray-800"></AiOutlineProject>

                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                              সকল রোগ
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/health-tools"
                        onClick={() => setShow(!show)}
                        className="text-gray-800 pt-8  focus:font-bold hover:font-bold"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-code"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="7 8 3 12 7 16" />
                                <polyline points="17 8 21 12 17 16" />
                                <line x1={14} y1={4} x2={10} y2={20} />
                              </svg>
                            </div>
                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                              স্বাস্থ্য টূলস
                            </p>
                          </div>
                        </div>
                      </Link>

                      {user.displayName && (
                        <Link
                          to="/dashboard"
                          onClick={() => setShow(!show)}
                          className="text-gray-800 pt-8  focus:font-bold hover:font-bold"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                <MdOutlineDashboardCustomize className="text-2xl" />
                              </div>
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                Dashboard
                              </p>
                            </div>
                          </div>
                        </Link>
                      )}
                    </ul>
                  </div>
                  {user?.displayName ? (
                    <div className="w-full pt-4">
                      <div className="border-t border-gray-300">
                        <div className="w-full flex items-center justify-between pt-1">
                          <div className="flex items-center">
                            <AiOutlineUser />
                            <p className=" text-gray-800 text-base leading-4 ml-2">
                              {user.displayName}{" "}
                            </p>
                          </div>
                          <Link onClick={signOutUser}>
                            <button class="bg-blue-600 hover:bg-blue-600 text-gray-100 font-bold py-2 px-4 rounded">
                              <AiOutlineLogout className="font-bold text-white" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link to="/sign-in" onClick={() => setShow(!show)}>
                      <button class="bg-blue-600 hover:bg-blue-600 text-gray-100 font-bold py-2 px-4 rounded">
                        Login
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </>
  );
}
