import React from "react";

const Button = ({ text }) => {
  return (
    <button className="w-full py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins ">
      {text}
    </button>
  );
};

export default Button;
