import React from 'react'

const EditingRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
	return (
			<tr>
				<td>
					<input type="text" 
					required="required" 
					placeholder="Please enter your first name..." 
					name="firstName"
					value={editFormData.firstName}
					onChange={handleEditFormChange}></input>
				</td>
				<td><input type="text" 
					required="required" 
					placeholder="Please enter your last name..." 
					name="lastName"
					value={editFormData.lastName}
					onChange={handleEditFormChange}></input>
					</td>
				<td><input type="text" 
					required="required" 
					placeholder="Please enter your address..." 
					name="address"
					value={editFormData.address}
					onChange={handleEditFormChange}></input>
					</td>
				<td><input type="text" 
					required="required" 
					placeholder="Please enter your phone number..." 
					name="phoneNumber"
					value={editFormData.phoneNumber}
					onChange={handleEditFormChange}></input>
					</td>
				<td><input type="text" 
					required="required" 
					placeholder="Please enter your email..." 
					name="email"
					value={editFormData.email}
					onChange={handleEditFormChange}></input>
					</td>
				<td>
					<button type="submit">Save</button>
					<button type="button" onClick={handleCancelClick}>Cancel</button>
					</td>
			</tr>
		)
}

export default EditingRow