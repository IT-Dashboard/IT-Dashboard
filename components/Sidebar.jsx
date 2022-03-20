import React, { useState } from "react";

import { MdDeviceHub } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { BiChat } from "react-icons/bi";
import { VscProject } from "react-icons/vsc";

import { SiStatuspal } from "react-icons/si";
import { BiGlobe } from "react-icons/bi";
import { FiHome, FiBarChart2, FiTool, FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowRoundForward, IoIosArrowDown } from "react-icons/io";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineArrowBackIos,
} from "react-icons/md";

import { NavLink } from "react-router-dom";
const Sidebar = ({ setShowsidebar }) => {
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
          <NavLink
            exact
            activeClassName="hvr tc w-full"
            className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full"
            to="/"
            onClick={() => setShowsidebar(false)}
          >
            {" "}
            <FiHome className="w-5 h-5" /> Dashboard
          </NavLink>
        </div>
        `
        <div className="w-full  flex items-center justify-center">
          <NavLink
            exact
            activeClassName="hvr tc w-full"
            className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full"
            to="/device"
            onClick={() => setShowsidebar(false)}
          >
            {" "}
            <FiBarChart2 className="w-5 h-5" /> Stats
          </NavLink>
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
              <NavLink
                exact
                onClick={() => setShowsidebar(false)}
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full"
                to="/users"
              >
                {" "}
                Users
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                onClick={() => setShowsidebar(false)}
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full"
                to="/departments"
              >
                {" "}
                Departments
              </NavLink>
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
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full"
                to="/issues"
                onClick={() => setShowsidebar(false)}
              >
                {" "}
                Issues
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full"
                to="/knowledgebase"
                onClick={() => setShowsidebar(false)}
              >
                {" "}
                Knowledgebase
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full"
                to="/timesheets"
                onClick={() => setShowsidebar(false)}
              >
                {" "}
                Timesheets
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full"
                to="/it-services"
                onClick={() => setShowsidebar(false)}
              >
                {" "}
                IT Services
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full"
                to="/additonal-tools"
                onClick={() => setShowsidebar(false)}
              >
                {" "}
                [Additional Tools...]
              </NavLink>
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
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full"
                to="/userprofile"
                onClick={() => setShowsidebar(false)}
              >
                {" "}
                User Profile
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 px-2 text-gray-700 hover:text-sr w-full"
                to="/organization"
                onClick={() => setShowsidebar(false)}
              >
                {" "}
                Organization
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
