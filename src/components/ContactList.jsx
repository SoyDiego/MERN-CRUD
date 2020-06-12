import React, { useContext } from "react";
import Contact from "./Contact";
import MyContext from "../context/MyContext";

const ContactList = () => {
	const { users } = useContext(MyContext);

	return (
		<div>
			{users.map((user) => (
				<Contact key={user.id} user={user} />
			))}
		</div>
	);
};

export default ContactList;
