import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" absolute bottom-0 left-0 flex items-center justify-center w-full h-52 bg-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="flex items-center justify-center flex-col gap-1">
            <Link className=" font-medium text-gray-700 hover:text-pr" to="/">Home</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" to="/">Signup</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" to="/about">About</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" to="/contact">Contact</Link>
          </div>
        
          <div className="flex items-center justify-center flex-col gap-1">
            <Link className=" font-medium text-gray-700 hover:text-pr" to="/">Dashboard</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" to="/tool1">Tool 1</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" to="/tool2">Tool 2</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" to="/tool3">Tool 3</Link>
          </div>
        
          <div className="flex items-center justify-center flex-col gap-1">
            <Link className=" font-medium text-gray-700 hover:text-pr" to="/resources">Resource</Link>
            <Link className=" font-medium text-gray-700 hover:text-pr" to="/guidelines">Guidelines</Link>
           
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
