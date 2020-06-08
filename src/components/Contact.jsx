import React from "react";

const Contact = ({ user }) => {
	const { name, email, phone } = user;

	return (
		<>
			<div className="shadow border rounded col-md-5 bg-dark m-1 p-3">
				<h4>{name}</h4>
				<h5>{email}</h5>
				<span>{phone}</span>
				<div className="col-md-12 d-flex justify-content-between mt-4">
					<button type="button" className="btn btn-outline-warning">
						Edit
					</button>
					<button type="button" className="btn btn-outline-danger">
						Delete
					</button>
				</div>
			</div>
		</>
	);
};

export default Contact;
