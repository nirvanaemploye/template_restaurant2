import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="container flex justify-center space-x-4 mt-6 text-black/40">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4  text-white ${
          currentPage === 1 ? " cursor-not-allowed" : ""
        }`}
      >
        <IoIosArrowBack className="text-black/40 text-2xl" />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`px-3 py-1 text-2xl  rounded-full ${
            currentPage === index + 1 ? "bg-black border-4 border-primary text-white" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-1 rounded-full ${
          currentPage === totalPages ? " cursor-not-allowed" : " text-white"
        }`}
      >
        <IoIosArrowForward className="text-black/40 text-2xl" />

      </button>
    </div>
  );
};

export default Pagination;
