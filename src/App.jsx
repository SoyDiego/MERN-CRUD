import React from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import MyContextState from "./context/MyContextState";

function App() {
	return (
		<MyContextState>
			<div className="container">
				<div className="row text-center">
					<div className="col-md-12 my-3">
						<h1>CRUD MERN</h1>
					</div>
					<div className="col-md-4 bg-secondary d-flex flex-column align-items-center">
						<Form />
					</div>
					<div className="col-md-8 bg-secondary d-flex flex-wrap py-4 justify-content-center align-items-center">
						<ContactList/>
					</div>
				</div>
			</div>
		</MyContextState>
	);
}

export default App;
