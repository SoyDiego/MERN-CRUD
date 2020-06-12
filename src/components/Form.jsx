import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import MyContext from "../context/MyContext";

const Form = () => {
	const { user, addUser, editUser } = useContext(MyContext);

	const [data, setData] = useState({
		id: "",
		name: "",
		email: "",
		phone: "",
	});

	const {name, email, phone } = data;

	useEffect(() => {
		if (user) {
			console.log("editando...");
			setData(user);

		} //eslint-disable-next-line
	}, [user]);

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleForm = (e) => {
		e.preventDefault();

		if (user) {
			editUser(data)
		} else {
			data.id = uuidv4();
			addUser(data);
		}

		setData({
			id: "",
			name: "",
			email: "",
			phone: "",
		});
	};

	return (
		<form
			onSubmit={handleForm}
			className="shadow border border-dark rounded-top p-5 my-5">
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					name="name"
					aria-describedby="helpId"
					placeholder="Name"
					value={name}
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					name="email"
					aria-describedby="helpId"
					placeholder="Email"
					value={email}
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					name="phone"
					aria-describedby="helpId"
					placeholder="Phone"
					value={phone}
					onChange={handleChange}
				/>
			</div>

			<button type="submit" className="btn btn-primary">
				{user ? "Edit User" : "Add User"}
			</button>
		</form>
	);
};

export default Form;
