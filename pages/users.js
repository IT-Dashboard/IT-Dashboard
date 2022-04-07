import React, { useEffect, useState, Fragment } from "react";
import styles from "../components/table.module.css";
import Layout from "../components/Layout";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditingRow from "../components/EditingRow";
import { withSessionSsr } from "../lib/session";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function Page({ users: initialUsers }) {
  const [users, setUsers] = useState(initialUsers);
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editUserId, setEditUserId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
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

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedUser = {
      id: editUserId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === editUserId);

    newUsers[index] = editedUser;

    setUsers(newUsers);
    setEditUserId(null);
  };

  const handleEditClick = (event, user) => {
    event.preventDefault();
    setEditUserId(user.id);

    const formValues = {
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      phoneNumber: user.phoneNumber,
      email: user.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditUserId(null);
  };

  const handleDeleteClick = (userId) => {
    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === userId);

    newUsers.splice(index, 1);

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
              <form onSubmit={handleEditFormSubmit}>
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
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <Fragment key={index}>
                        {editUserId === user.id ? (
                          <EditingRow
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                          <ReadOnlyRow
                            user={user}
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                          />
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </form>
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

    const users = await prisma.user.findMany();

    return {
      props: {
        user: req.session.user,
        users,
      },
    };
  }
);
