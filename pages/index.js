import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";

const Login = () => {
  return (
    <div className=" min-h-screen relative w-full bg-blue-50">
      <div className="flex flex-col gap-1 items-center w-full h-full justify-center">
        <div className=" px-5 p-3 rounded-md bg-blue-200 mt-32">
          <h1 className="text-gray-800">Dashboard Login</h1>
        </div>
        <form className=" mt-24 border p-9 bg-white shadow-md">
          <input
            type="text"
            placeholder="username"
            className=" border px-2 py-2 mt-2 w-full rounded-sm"
          />
          <input
            type="password"
            placeholder="password"
            className=" border px-2 py-2 mt-2 w-full rounded-sm"
          />
          <div className="flex items-center justify-between">
            <Link href="dashboard">
              <a className=" mt-3 px-3 py-2 rounded-sm text-sm hover:bg-blue-800 bg-pr text-white">
                Login
              </a>
            </Link>
            <button
              type="submit"
              className=" mt-3 px-3 py-2 rounded-sm text-sm hover:bg-pink-800 bg-pink-600 text-white"
            >
              Forget Password
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
