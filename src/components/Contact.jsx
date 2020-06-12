import React from "react";

const Contact = ({ user }) => {

	const { name, email, phone } = user;

	// const handleEdit = (id) => {
	// 	setEditForm(true)
	// 	const editUser = userInfo.find((user) => user.id === id);
	// 	setEditData(editUser)

	// }

	// const handleDelete = (id) => {
	// 	const deleteUser = userInfo.filter((user) => user.id !== id);
	// 	setUserInfo(deleteUser)
	// };

	return (
		<>
			<div className="shadow border rounded col-md-5 bg-dark m-1 p-3">
				<h4>{name}</h4>
				<h5>{email}</h5>
				<span>{phone}</span>
				<div className="col-md-12 d-flex justify-content-between mt-4">
					{/* <button type="button" className="btn btn-outline-warning" onClick={() => handleEdit(id)}>
						Edit
					</button> */}
					{/* <button
						type="button"
						className="btn btn-outline-danger"
						onClick={() => handleDelete(id)}>
						Delete
					</button> */}
				</div>
			</div>
		</>
	);
};

export default Contact;
