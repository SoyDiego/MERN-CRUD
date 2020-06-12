import React, { useReducer } from "react";
import MyContext from "./MyContext";
import myContextReducer from "./myContextReducer";
import { ADD_USER, EDIT_USER, DELETE_USER, SELECTED_USER} from "../types";

const MyContextState = (props) => {
	const initialState = {
		users: [],
		user: null
	};

	const [state, dispatch] = useReducer(myContextReducer, initialState);

	const addUser = (data) => {
		dispatch({
			type: ADD_USER,
			payload: data
		});
	};

	const editUser = (user) => {
		dispatch({
			type: EDIT_USER,
			payload: user
		})
	}

	const deleteUser = (id) => {
		dispatch({
			type: DELETE_USER,
			payload: id
		})
	}

	const selectedUser = (user) => {
		dispatch({
			type: SELECTED_USER,
			payload: user
		})
	}

	return (
		<MyContext.Provider
			value={{
				...state, 
				addUser,
				editUser,
				selectedUser,
				deleteUser
			}}>
			{props.children}
		</MyContext.Provider>
	);
};

export default MyContextState;