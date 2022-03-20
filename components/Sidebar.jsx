import React, { useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { FiHome, FiBarChart2, FiTool, FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineArrowBackIos } from "react-icons/md";

import Link from "next/link";

const Sidebar = () => {
  const [contractshow, setContractshow] = useState(false);
  const [transhow, setTranshow] = useState(false);
  const [setting, setSetting] = useState(false);
  return (
    <div
      style={{ top: "65px" }}
      className="fixed  w-44 bg-white lg:w-60 p-2  z-30 border-r-2 min-h-screen"
    >
      <div className="flex w-full items-center justify-center lg:justify-between h-14 border-b">
        <CgProfile className="h-8 w-8 text-gray-600" />
        <p className="text-xs text-gray-600 pl-3 hidden lg:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="w-full  py-4 flex-col items-center gap-1">
        <div className="w-full  flex items-center justify-center">
          <Link href="/">
            <a className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full">
              <FiHome className="w-5 h-5" /> Dashboard
            </a>
          </Link>
        </div>
        <div className="w-full  flex items-center justify-center">
          <Link href="/device">
            <a className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full">
              <FiBarChart2 className="w-5 h-5" /> Stats
            </a>
          </Link>
        </div>
        <div className="w-full  flex items-center justify-center">
          <div
            onClick={() => setContractshow(!contractshow)}
            className="py-2 flex cursor-pointer items-center justify-between px-2 text-gray-700  w-full"
          >
            <div className="flex items-center gap-2">
              <BiGlobe className="w-5 h-5" /> Organization
            </div>{" "}
            {!contractshow ? (
              <MdOutlineArrowBackIos />
            ) : (
              <IoIosArrowDown className="h-5 w-5" />
            )}
          </div>
        </div>
        {contractshow && (
          <div className="w-full flex items-center flex-col text-sm">
            <div className="w-full pl-1 flex items-center justify-center">
              <Link href="/users">
                <a className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full">
                  Users
                </a>
              </Link>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <Link href="/departments">
                <a className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full">
                  Departments
                </a>
              </Link>
            </div>
          </div>
        )}
        <div className="w-full flex items-center justify-center">
          <div
            onClick={() => setTranshow(!transhow)}
            className="py-2 flex items-center cursor-pointer justify-between px-2 text-gray-700  w-full"
          >
            <div className="flex items-center gap-2">
              <FiTool className="w-5 h-5" /> Tools
            </div>{" "}
            {!transhow ? (
              <MdOutlineArrowBackIos />
            ) : (
              <IoIosArrowDown className="h-5 w-5" />
            )}
          </div>
        </div>
        {transhow && (
          <div className="w-full flex items-center flex-col text-sm">
            <div className="w-full pl-1 flex items-center justify-center">
              <Link href="/issues">
                <a className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full">
                  Issues
                </a>
              </Link>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <Link href="/knowledgebase">
                <a className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full">
                  Knowledgebase
                </a>
              </Link>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <Link href="/timesheets">
                <a className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full">
                  Timesheets
                </a>
              </Link>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <Link href="/it-services">
                <a className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full">
                  IT Services
                </a>
              </Link>
            </div>
          </div>
        )}
        <div className="w-full  flex items-center justify-center">
          <div
            onClick={() => setSetting(!setting)}
            className="py-2 flex cursor-pointer items-center justify-between px-2 text-gray-700 hover:text-sr w-full"
          >
            <div className="flex items-center gap-2">
              <FiSettings className="w-5 h-5" /> Settings
            </div>{" "}
            {!setting ? (
              <MdOutlineArrowBackIos />
            ) : (
              <IoIosArrowDown className="h-5 w-5" />
            )}
          </div>
        </div>
        {setting && (
          <div className="w-full flex items-center flex-col text-sm">
            <div className="w-full pl-1 flex items-center justify-center">
              <Link href="/user/profile">
                <a className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full">
                  User Profile
                </a>
              </Link>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <Link href="/organization">
                <a className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full">
                  Organization
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
