import React from 'react'

const ReadOnlyRow = ({ user, index, handleEditClick, handleDeleteClick }) =>{
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
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button type="button" onClick={(event)=> handleEditClick(event, user)}>
                        Edit 
                        </button>
                        <button type="button" onClick={()=> handleDeleteClick(user.id)}>
                        Delete
                        </button>
                      </td>
            </tr>
		);
};

export default ReadOnlyRow