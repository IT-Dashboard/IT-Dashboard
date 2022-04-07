import React, { useEffect, useState } from "react";
import styles from "../components/table.module.css";
import data from "../components/mock_data.json";
import Layout from "../components/Layout";
import { withSessionSsr } from "../lib/session";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function Page() {
  const [users, setUsers] = useState(data);
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newUsers = [...users, newUser];
    setUsers(newUsers);
  };

  return (
    <div className="p-3 min-h-screen">
      <h1 className="text-gray-600  mt-3 text-2xl font-medium w-full text-center">
        Hello User
      </h1>
      <h1 className="text-gray-600  mt-3 text-2xl font-medium w-full text-center">
        Welcome To User Page!
      </h1>
      <div className="mt-3 w-full grid grid-cols-1 lg:grid-cols-3">
        <div className=" cursor-pointer bg-purple-600 hover:bg-purple-800 border-r-2 border-white text-white py-2 flex items-center justify-center">
          Add User
        </div>
        <div className=" cursor-pointer bg-pink-600 hover:bg-pink-800 border-r-2 border-white text-white flex items-center justify-center">
          Edit User
        </div>
        <div className=" cursor-pointer bg-red-600 hover:bg-red-800  text-white flex items-center justify-center">
          Delete User
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      First name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Last name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.firstName}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.lastName}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.address}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.phoneNumber}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleAddFormSubmit}
        className="mt-10 border p-9 bg-white shadow-md"
      >
        <h6 className="text-xl text-gray-700 font-bold">Add user account</h6>
        <div className=" grid grid-cols-1 lg:grid-cols-2 w-full  gap-2 pt-3">
          <input
            type="text"
            name="firstName"
            required="required"
            placeholder="First name..."
            className=" border px-2 py-2 w-full rounded-sm"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="lastName"
            required="required"
            placeholder="Last name..."
            className=" border px-2 py-2 w-full rounded-sm"
            onChange={handleAddFormChange}
          />
        </div>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Address..."
          className=" border px-2 py-2 mt-2 w-full rounded-sm"
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Phone number..."
          className=" border px-2 py-2 mt-2 w-full rounded-sm"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Email..."
          className=" border px-2 py-2 mt-2 w-full rounded-sm"
          onChange={handleAddFormChange}
        />
        <input
          type="password"
          name="password"
          placeholder="New Password..."
          required="required"
          className=" border px-2 py-2 mt-2 w-full rounded-sm"
        />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className=" mt-3 px-3 py-2 rounded-sm text-sm hover:bg-blue-800 bg-pr text-white"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout title="Users Page">{page}</Layout>;
};

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;

    if (!user || user.admin !== true) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        user: req.session.user,
      },
    };
  }
);
