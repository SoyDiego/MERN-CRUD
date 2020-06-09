import React, { useState } from "react";
import Form from "./components/Form";
import Contact from "./components/Contact";
import MyContext from "./context/MyContext";

function App() {
	const [userInfo, setUserInfo] = useState([]);
	const [editForm, setEditForm] = useState(false);
	const [editData, setEditData] = useState(null);

	return (
		<MyContext.Provider
			value={{
				userInfo,
				setUserInfo,
				editForm,
				setEditForm,
				editData,
				setEditData,
			}}>
			<div className="container">
				<div className="row text-center">
					<div className="col-md-12 my-3">
						<h1>CRUD MERN</h1>
					</div>
					<div className="col-md-4 bg-secondary d-flex flex-column align-items-center">
						<Form />
					</div>
					<div className="col-md-8 bg-secondary d-flex flex-wrap py-4 justify-content-center align-items-center">
						{userInfo.map((user) => (
							<Contact key={user.id} user={user} />
						))}
					</div>
				</div>
			</div>
		</MyContext.Provider>
	);
}

export default App;
