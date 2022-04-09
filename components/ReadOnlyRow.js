import React from "react";

/* 
  ReadOnlyRow component
  data passed in as props
  component renders details based on user object which is passed in
*/

const ReadOnlyRow = ({ user, index, handleEditClick, handleDeleteClick }) => {
  return (
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
      <td className="inline-flex">
        {/* 
          calls handleEditClick function to set EditUserId
          when edit button is clicked, it stores the id of user, which is used to show whether to show EditingRow or ReadOnlyRow component
         */}
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-normal text-sm py-2 px-3 rounded-l"
          type="button"
          onClick={(event) => handleEditClick(event, user)}
        >
          Edit
        </button>

        {/* delete button */}
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-normal text-sm py-2 px-3 rounded-r"
          type="button"
          onClick={() => handleDeleteClick(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
