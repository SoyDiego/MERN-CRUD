import React from "react";

const Form = () => {
	return (
		<form className="shadow border border-dark rounded-top p-5">
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					name=""
					id=""
					aria-describedby="helpId"
					placeholder="Name"
				/>
			</div>
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					name=""
					id=""
					aria-describedby="helpId"
					placeholder="Email"
				/>
			</div>
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					name=""
					id=""
					aria-describedby="helpId"
					placeholder="Phone"
				/>
			</div>

            <button type="submit" class="btn btn-primary">Add Contact</button>
		</form>
	);
};

export default Form;
