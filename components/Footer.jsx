import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" absolute bottom-0 left-0 flex items-center justify-center w-full h-52 bg-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="flex items-center justify-center flex-col gap-1">
            <Link className=" font-medium text-gray-700 hover:text-pr" href="/">Home</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" href="/">Signup</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" href="/about">About</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" href="/contact">Contact</Link>
          </div>
        
          <div className="flex items-center justify-center flex-col gap-1">
            <Link className=" font-medium text-gray-700 hover:text-pr" href="/">Dashboard</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" href="/tool1">Tool 1</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" href="/tool2">Tool 2</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" href="/tool3">Tool 3</Link>
          </div>
        
          <div className="flex items-center justify-center flex-col gap-1">
            <Link className=" font-medium text-gray-700 hover:text-pr" href="/resources">Resource</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" href="/guidelines">Guidelines</Link>
           
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
