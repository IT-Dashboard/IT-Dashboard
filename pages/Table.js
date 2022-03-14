import React, { useEffect, useState} from "react";
import styles from '../components/table.module.css';
import data from "../components/mock_data.json";
import { nanoid } from 'nanoid';

const App = () => {

	const[users, setUsers] = useState(data);
	const[addFormData, setAddFormData] = useState({
		firstName: '',
		lastName: '',
		address: '',
		phoneNumber: '',
		email: '',
	});

	const handleAddFormChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute('name');
		const fieldValue = event.target.value;

		const newFormData = {...addFormData};
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
	<div className="app-container">
		<table>
			<thead>
				<tr>
					<th>First name</th>
					<th>Last name</th>
					<th>Address</th>
					<th>Phone Number</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
			{users.map((user, index) => (
				<tr key={index}>
					<td>{user.firstName}</td>
					<td>{user.lastName}</td>
					<td>{user.address}</td>
					<td>{user.phoneNumber}</td>
					<td>{user.email}</td>
				</tr>
				))}
			</tbody>
		</table>

		<h2>Add a User</h2>
		<form onSubmit={handleAddFormSubmit}>
			<input
				type="text"
				name="firstName"
				required="required"
				placeholder="Enter your first name..."
				onChange={handleAddFormChange}
			/>
			<input
				type="text"
				name="lastName"
				required="required"
				placeholder="Enter your last name..."
				onChange={handleAddFormChange}
			/>
			<input
				type="text"
				name="address"
				required="required"
				placeholder="Enter your address..."
				onChange={handleAddFormChange}
			/>
			<input
				type="text"
				name="phoneNumber"
				required="required"
				placeholder="Enter your phone number..."
				onChange={handleAddFormChange}
			/>
			<input
				type="text"
				name="email"
				required="required"
				placeholder="Enter your email..."
				onChange={handleAddFormChange}
			/>
			<button type="submit">Add</button>
		</form>
	</div>
	);
};

export default App;