import React from "react";
import Form from "./components/Form";
import Contactlist from "./components/ContactList";

function App() {
	return (
		<>
			<div className="container">
				<div className="row text-center">
					<div className="col-md-12 my-3">
						<h1>CRUD MERN</h1>
					</div>
					<div className="col-md-4 bg-secondary d-flex flex-column justify-content-center align-items-center">
						<Form />
					</div>
					<div className="col-md-8 bg-secondary d-flex flex-wrap p-3 justify-content-center">
						<Contactlist />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
