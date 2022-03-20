import React from "react";
import signup from "../image/signup.jpg";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen bg-blue-50">
      <div className="p-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Join now to begin IT tool utilization with this dashboard!
        </h1>
        <form className=" mt-10 border p-9 bg-white shadow-md">
          <h6 className="text-xl text-gray-700 font-bold">
            Sign up for a free account
          </h6>
          <div className=" grid grid-cols-1 lg:grid-cols-2 w-full  gap-2 pt-3">
            <input
              type="text"
              placeholder="First name"
              className=" border px-2 py-2 w-full rounded-sm"
            />
            <input
              type="text"
              placeholder="Last name"
              className=" border px-2 py-2 w-full rounded-sm"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className=" border px-2 py-2 mt-2 w-full rounded-sm"
          />
          <input
            type="password"
            placeholder="Create Password"
            className=" border px-2 py-2 mt-2 w-full rounded-sm"
          />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className=" mt-3 px-3 py-2 rounded-sm text-sm hover:bg-blue-800 bg-pr text-white"
            >
              Register
            </button>
            
              
              <Link className="text-xs text-pr font-medium pt-2" to="/login">Already have an account?</Link>
            
          </div>
        </form>
      </div>
      <div className=" h-full">
        <img
          src={signup}
          style={{ height: "100%", width: "100%", objectFit: "100% 100%" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Signup;
