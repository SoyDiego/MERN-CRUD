import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import MyContext from "../context/MyContext";

const Form = () => {
	const { userInfo, setUserInfo, editForm, editData } = useContext(MyContext);

	const [data, setData] = useState({
		id: "",
		name: "",
		email: "",
		phone: "",
	});

	useEffect(() => {
		if (editData) {
			setData({
				...data,
				id: editData.id,
				name: editData.name,
				email: editData.email,
				phone: editData.phone,
			});
		}//eslint-disable-next-line
	}, [editData]);

	const { name, email, phone } = data;

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleForm = (e) => {
		e.preventDefault();

		if (editData) {
			const edited = userInfo.map((user) => {
				if (user.id === editData.id) {
					return data;
				}
				return user;
			});

			console.log(edited);
			setUserInfo(edited);
		} else {
			data.id = uuidv4();
			setUserInfo([...userInfo, data]);
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
				{editForm ? "Edit Contact" : "Add Contact"}
			</button>
		</form>
	);
};

export default Form;
