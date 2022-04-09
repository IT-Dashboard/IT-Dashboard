import React, { useEffect, useState, Fragment } from "react";
import Layout from "../components/Layout";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditingRow from "../components/EditingRow";
import prisma from "../lib/prisma";
import { withSessionSsr } from "../lib/session";
{/* nanoid generates id for the user */}
import { nanoid } from "nanoid";
import Link from "next/link";


{/* A JSX comment */}
export default function Page({ users: initialUsers }) {

  {/* initialize user data from database to use for table */}
  const [users, setUsers] = useState(initialUsers);

  {/* store/initialize new user values as object in a state hook */}
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  {/* create state object to hold form data while editing a row */}
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  {/* if editUserId is null, the user is not editing any rows, hiding EditingRows component */}
  const [editUserId, setEditUserId] = useState(null);

  {/*
    event handler function to update values of new user in a form
    form values saved in state
  */}
  const handleAddFormChange = (event) => {
    event.preventDefault();

    {/*
      get name of input a user has changed
      fieldName becomes name of changed value (firstName, lastName, address, etc)
      fieldValue accepts the value of that variable
    */}
    
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    {/* creates copy of the existing form data to change without changing state */}
    const newFormData = { ...addFormData };
    {/* updates objects with the new data the user inputs */}
    newFormData[fieldName] = fieldValue;

    {/* set into state and pass in new form data */}
    setAddFormData(newFormData);
  };

  {/*
    updates state when any of the values change
    works the same way as handleAddFormChange
  */}
  
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;


    {/* set into state and pass in new form data */}
    setEditFormData(newFormData);
  };
  {/* submits form of new user data */}
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    {/* takes entered data in form(stored in state object) and create a new object */}
    const newUser = {
      {/* id used to determine which user is being changed or updated */}
      id: nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    {/* create new user array to avoid changing state */}
    const newUsers = [...users, newUser];
    {/* pass in new array */}
    setUsers(newUsers);
  };

  {/* submits form of edited user data */}
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    {/* new object created based on the inputs exiting in the editFormData */}
    const editedUser = {
      id: editUserId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    {/* create new user array to avoid mutating state */}
    const newUsers = [...users];

    {/*
      replace user object with new user object
      to do this get index of row that is being edited
    */}
    
    const index = users.findIndex((user) => user.id === editUserId);

    {/* update array at the given index */}
    newUsers[index] = editedUser;

    {/* set new array into state */}
    setUsers(newUsers);
    {/* set EditUserId to null to hide EditingRow component */}
    setEditUserId(null);
  };

  {/*
    event listener function triggered when edit button is clicked
    needs user to find the user id, and sets the EditUserId
    takes data from the user object and saves it to the editFormData to prepopulate row
  */}
  const handleEditClick = (event, user) => {
    event.preventDefault();
    setEditUserId(user.id);
    {/*
      new object to hold same properties as editFormData
      used to prepopulate user data that is being edited
    */}
    
    const formValues = {
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      phoneNumber: user.phoneNumber,
      email: user.email,
    };
    {/* set into state with the current values */}
    setEditFormData(formValues);
  };

  {/* reverts the EditUserId as null to render the ReadOnlyRow and unrender the EditingRow component */}
  const handleCancelClick = () => {
    setEditUserId(null);
  };

  {/*
    Remove row from state, and rerender component with new array with the row removed
    userId used to find index of the user to remove that specific row
  */}
  const handleDeleteClick = (userId) => {

    {/* create new array from current user to stop state from changing */}
    const newUsers = [...users];

    {/* get index of user */}
    const index = users.findIndex((user) => user.id === userId);

    {/* splice method use to remove user object at the given index of an array */}
    newUsers.splice(index, 1);
    {/* save into state and pass in new array */}
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
            {/*
              editing row component needs to be in a form tag but <form> cannot appear as a child of tbody
              to get around this problem, the whole table is wrapped in form tag
              works due to only having one set of form inputs displayed at any given time, preventing any form duplication problems
              implements the handleEditFormSubmit to submit changed made to editFormData 
            */}
            
              <form onSubmit={handleEditFormSubmit}>

              {/* start of table */}
                <table className="min-w-full">

                {/* column headings */}
                  <thead className="bg-white border-b bg-gray-50">

                  {/* heading row */}
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
                  {/* ending of column row */}

                  {/* table body */}
                  <tbody>
                    {users.map((user, index) => (
                      {/* react Fragment used due to not being able to have two children components */}
                      <Fragment key={index}>
                        {/*
                          edituserid checked to determine which component will be rendered
                          if id of current user id matches the id stored in state in the EditingUserId state hook,
                          it will render the EditingRow, if not it wil render ReadOnlyRow
                        */}
                        
                        {editUserId === user.id ? (
                          {/*
                            editFormData holds current values of a row and carries them over to EditingRows to be prepopulated
                            handleEditFormChange to update state onchange as well as the editFormData
                            handleCancelClick used to cancel an edit 
                          */}
                          
                          <EditingRow
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                        {/*
                          ReadOnlyRow component rendered
                          all the data needed for the component is passed in as a prop (ex. user)
                          handeEditClick passed in due to the edit button displayed on the ReadOnlyRow
                          handleDeleteClick passed in for delete button
                        */}
                        
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

      {/*
        form to add new user
        updates form through "onChange" passing in new user event 
      */}
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

          {/* submission button for adding user form */}
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
