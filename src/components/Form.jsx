import React, { useState, useContext } from "react";
import MyContext from "../context/MyContext";

const Form = () => {
	const { userInfo, setUserInfo } = useContext(MyContext);

	const [data, setData] = useState(
		{
			name: "",
			email: "",
			phone: "",
		},
	);

	const { name, email, phone } = data;

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		setUserInfo([...userInfo, data]);
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
				Add Contact
			</button>
		</form>
	);
};

export default Form;
