import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" absolute bottom-0 left-0 flex items-center justify-center w-full h-52 bg-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 ">
          <div className="flex items-center justify-center flex-col gap-1">
            &copy; 2022 Jacob Hooker, Kyle Hoganson, Robert Raheja, Sam Kharel,
            Sky Kim
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
