import {ADD_USER, EDIT_USER, DELETE_USER, SELECTED_USER} from '../types'

export default (state, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				users: [...state.users, action.payload],
			}
		case EDIT_USER:
			return {
				...state,
				users: state.users.map((user) => user.id === action.payload.id ? action.payload : user),
				user: null
			};
		case DELETE_USER:
			return {
				...state,
				users: state.users.filter(user => user.id !== action.payload)
			}
		case SELECTED_USER:
			return {
				...state,
				user: action.payload
			}
		default:
			return state;
	}
};