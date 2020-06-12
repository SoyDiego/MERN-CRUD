import React, { useReducer } from "react";
import MyContext from "./MyContext";
import myContextReducer from "./myContextReducer";
import { ADD_USER, DELETE_USER } from "../types";

const MyContextState = (props) => {
	const initialState = {
		users: [],
	};

	const [state, dispatch] = useReducer(myContextReducer, initialState);

	const addUser = (data) => {
		dispatch({
			type: ADD_USER,
			payload: data
		});
	};

	const deleteUser = (id) => {
		dispatch({
			type: DELETE_USER,
			payload: id
		})
	}

	return (
		<MyContext.Provider
			value={{
				...state, 
				addUser,
				deleteUser
			}}>
			{props.children}
		</MyContext.Provider>
	);
};

export default MyContextState;