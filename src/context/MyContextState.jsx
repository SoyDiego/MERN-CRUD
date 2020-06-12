import React, { useReducer } from "react";
import MyContext from "./MyContext";
import myContextReducer from "./myContextReducer";
import { ADD_USER } from "../types";

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

	return (
		<MyContext.Provider
			value={{
				...state, 
				addUser,
			}}>
			{props.children}
		</MyContext.Provider>
	);
};

export default MyContextState;