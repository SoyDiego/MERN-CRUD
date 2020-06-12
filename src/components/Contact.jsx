import React, {useContext}from "react";
import MyContext from "../context/MyContext";


const Contact = ({ user }) => {

	const { selectedUser, deleteUser } = useContext(MyContext);

	const {id, name, email, phone } = user;

	const handleEdit  = () => {
		selectedUser(user)

	}

	const handleDelete = (id) => {
		deleteUser(id)
	};

	return (
		<>
			<div className="shadow border rounded col-md-5 bg-dark m-1 p-3">
				<h4>{name}</h4>
				<h5>{email}</h5>
				<span>{phone}</span>
				<div className="col-md-12 d-flex justify-content-between mt-4">
					<button type="button" className="btn btn-outline-warning" onClick={handleEdit}>
						Edit
					</button>
					<button
						type="button"
						className="btn btn-outline-danger"
						onClick={() => handleDelete(id)}>
						Delete
					</button>
				</div>
			</div>
		</>
	);
};

export default Contact;
