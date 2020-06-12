import React, { useContext } from "react";
import Contact from "./Contact";
import MyContext from "../context/MyContext";

const ContactList = () => {
	const { users } = useContext(MyContext);

	return (
		<div className="col-md-12 d-flex flex-wrap py-4 justify-content-center align-items-center">
			{users.map((user) => (
				<Contact key={user.id} user={user} />
			))}
		</div>
	);
};

export default ContactList;