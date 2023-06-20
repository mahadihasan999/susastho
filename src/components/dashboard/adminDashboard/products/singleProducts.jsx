import React from "react";

const SingleProducts = ({
  category,
  title,
  price,
  _id,
  handleDeleteProduct,
  propertyID,
}) => {
  return (
    <tr className="h-24 border-blue-400  border">
      <td className="text-sm px-2 whitespace-no-wrap text-gray-800  tracking-normal leading-4 text-left  border-blue-400 border-l px-2">
        {propertyID}
      </td>
      <td className="text-sm px-2 whitespace-no-wrap text-gray-800  tracking-normal leading-4 text-left  border-blue-400 border-l px-2">
        {title}
      </td>
      <td className="text-sm px-2 whitespace-no-wrap text-gray-800  tracking-normal leading-4 text-left  border-blue-400 border-l px-2">
        {category}
      </td>
      <td className="text-sm px-2 whitespace-no-wrap text-gray-800  tracking-normal leading-4 text-left  border-blue-400 border-l px-2">
        {price} BDT.
      </td>

      <td className="border-blue-400 border-l ">
        <div className="flex flex-col items-center gap-1 mx-2">
          <h1
            onClick={() => handleDeleteProduct(_id)}
            className="text-red-500 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
            href="javascript: void(0)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon cursor-pointer icon-tabler icon-tabler-trash"
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
              <line x1={4} y1={7} x2={20} y2={7} />
              <line x1={10} y1={11} x2={10} y2={17} />
              <line x1={14} y1={11} x2={14} y2={17} />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </h1>
        </div>
      </td>
    </tr>
  );
};

export default SingleProducts;
