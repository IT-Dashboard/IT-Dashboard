/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import { BiSearch, BiGridAlt, BiChat } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Topbar = ({ setShowsidebar, showsidebar }) => {
  return (
    <Disclosure
      as="nav"
      className="bg-white border-b-2 fixed top-0 left-0 z-50 w-full"
    >
      {({ open }) => (
        <>
          <div className=" w-full px-2 ">
            <div className="relative hidden lg:flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block ">
                  <div className="flex space-x-4 items-center  gap-1 lg:gap-0">
                    <BiGridAlt onClick={()=>setShowsidebar(!showsidebar)} className={showsidebar ? " w-7 h-7 cursor-pointer hover:text-pr text-gray-600": " w-7 h-7 cursor-pointer text-pr border-2 border-pr"} />
                    <h1 className="text-3xl text-gray-600 ">IT Dashboard</h1>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 mr-4 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="px-3 py-2 bg-pr hover:bg-blue-700 rounded-md text-white text-sm">
                  Create
                </button>

                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className=" flex text-sm rounded-full focus:outline-none ">
                      <button
                        type="button"
                        className=" p-1 rounded-full text-gray-600 focus:outline-none"
                      >
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            View Notifications
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className=" flex items-center gap-2  p-1">
                      <CgProfile className="h-6 w-6 text-gray-600" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              " px-4 flex items-center gap-2 py-2 text-sm text-gray-700"
                            )}
                          >
                            <MdManageAccounts className="text-green-500 h-5 w-5" />{" "}
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              " px-4 flex items-center cursor-pointer gap-2 py-2 text-sm text-gray-700"
                            )}
                          >
                            <AiOutlineLogout className="text-green-500 h-5 w-5" />{" "}
                            LogOut
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <div className="relative flex lg:hidden items-center justify-around h-16">
              <div>
                <BiGridAlt  onClick={()=>setShowsidebar(!showsidebar)} className={showsidebar ? " w-7 h-7 cursor-pointer hover:text-pr text-gray-600": " w-7 h-7 cursor-pointer text-pr border-2 border-pr"} />
              </div>
              <div className="flex items-center gap-4">
                <button className="px-3 py-2 bg-pr hover:bg-blue-700 rounded-md text-white text-sm">
                  Create
                </button>

                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className=" flex text-sm rounded-full focus:outline-none ">
                      <button
                        type="button"
                        className=" p-1 rounded-full text-gray-600 focus:outline-none"
                      >
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            View Notifications
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className=" flex items-center gap-2  p-1">
                      <CgProfile className="h-6 w-6 text-gray-600" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              " px-4 flex items-center gap-2 py-2 text-sm text-gray-700"
                            )}
                          >
                            <MdManageAccounts className="text-green-500 h-5 w-5" />{" "}
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-2 flex items-center gap-2">
              <NavLink
                exact
                activeClassName="bg-hr tc"
                to="/industry"
                className="p-2 text-gray-400 border-2 text-xs border-yellow-100"
              >
                Speciality
              </NavLink>
              <div className="flex items-center">
                <input
                  placeholder="Type to search"
                  type="text"
                  className="bg-gray-100 p-2 outline-none"
                />
                <button className="p-2 h-full bg-gray-100">
                  <BiSearch className="h-6 w-6" />
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Topbar;
