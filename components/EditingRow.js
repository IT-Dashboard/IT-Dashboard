import React from "react";

const EditingRow = ({
	editFormData,
	handleEditFormChange,
	handleCancelClick,
}) => {
	return (
		<tr>
			<td>
				<input
					type="text"
					required="required"
					placeholder="Please enter your first name..."
					name="firstName"
					value={editFormData.firstName}
					onChange={handleEditFormChange}
					className="border px-2 py-2 mt-2 w-full rounded-sm"
				></input>
			</td>
			<td>
				<input
					type="text"
					required="required"
					placeholder="Please enter your last name..."
					name="lastName"
					value={editFormData.lastName}
					onChange={handleEditFormChange}
					className="border px-2 py-2 mt-2 w-full rounded-sm"
				></input>
			</td>
			<td>
				<input
					type="text"
					required="required"
					placeholder="Please enter your address..."
					name="address"
					value={editFormData.address}
					onChange={handleEditFormChange}
					className="border px-2 py-2 mt-2 w-full rounded-sm"
				></input>
			</td>
			<td>
				<input
					type="text"
					required="required"
					placeholder="Please enter your phone number..."
					name="phoneNumber"
					value={editFormData.phoneNumber}
					onChange={handleEditFormChange}
					className="border px-2 py-2 mt-2 w-full rounded-sm"
				></input>
			</td>
			<td>
				<input
					type="text"
					required="required"
					placeholder="Please enter your email..."
					name="email"
					value={editFormData.email}
					onChange={handleEditFormChange}
					className="border px-2 py-2 mt-2 w-full rounded-sm"
				></input>
			</td>
			<td className="inline-flex">
				<button
					className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-normal text-sm py-2 px-3 rounded-l"
					type="submit"
				>
					Save
				</button>
				<button
					className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-normal text-sm py-2 px-3 rounded-r"
					type="button"
					onClick={handleCancelClick}
				>
					Cancel
				</button>
			</td>
		</tr>
	);
};

export default EditingRow;
