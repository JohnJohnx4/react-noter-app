import axios from "axios";
import * as actiontype from "./actiontypes";
import { createAction } from "redux-actions";
import { decode } from "jsonwebtoken";
const API_KEY = process.env.REACT_APP_API_KEY;

export * from "./actiontypes";

// axios.defaults.withCredentials = true;

// const ROOT_URL = "https://johnc-noter-api.herokuapp.com";
const ROOT_URL = "http://localhost:5000";

// action creators

export const userRegistering = createAction(actiontype.USER_REGISTERING);
export const userRegistered = createAction(actiontype.USER_REGISTERED);
export const userLogging = createAction(actiontype.USER_LOGGING);
export const userLoggedIn = createAction(actiontype.USER_LOGGED_IN);

export const userAuth = createAction(actiontype.USER_AUTH);
export const userUnauth = createAction(actiontype.USER_UNAUTH);

export const loadingNotes = createAction(actiontype.LOADING_NOTES);
export const loadedNotes = createAction(actiontype.LOADED_NOTES);

export const creatingNote = createAction(actiontype.CREATING_NOTE);
export const noteCreated = createAction(actiontype.NOTE_CREATED);

export const deletingNote = createAction(actiontype.DELETING_NOTE);
export const deletedNote = createAction(actiontype.DELETED_NOTE);

export const updatingNote = createAction(actiontype.UPDATING_NOTE);
export const updatedNote = createAction(actiontype.UPDATED_NOTE);

export const singleNote = createAction(actiontype.SINGLE_NOTE);

export const toggleUpdateNote = createAction(actiontype.TOGGLE_UPDATE_NOTE);

// ==== USERS actions ====
//region

export const authErr = err => {
	console.log(err);
	return {
		type: actiontype.AUTH_ERR,
		payload: err
	};
};

export const register = (email, password, history) => {
	return dispatch => {
		dispatch(userRegistering());
		if (!email || !password) {
			dispatch(authErr("Please fill in all fields"));
		}
		axios
			.post(`${ROOT_URL}/api/users`, { email, password, key: API_KEY })
			.then(user => {
				let token = user.data.token;
				axios.defaults.headers.common["Authorization"] = token;
				localStorage.setItem("uuID", user.data.user);
				dispatch(userRegistered());
				dispatch(userAuth());
				history.push("/notes");
			})
			.catch(err => {
				dispatch(authErr(err.toString()));
			});
	};
};

export const login = (email, password, history) => {
	return dispatch => {
		dispatch(userLogging());
		axios
			.post(`${ROOT_URL}/api/login`, { email, password })
			.then(res => {
				console.log(res)
				let token = res.data.token;
				axios.defaults.headers.common["Authorization"] = token;
				var decoded = decode(token, { complete: true });
				localStorage.setItem("uuID", decoded.payload.uID);
				dispatch(userAuth());
				dispatch(userLoggedIn());
				history.push("/notes");
			})
			.catch(err => {
				dispatch(authErr(err.toString()));
			});
	};
};

// ==== NOTES actions ====

export const fetchNotes = () => {
	return dispatch => {
		dispatch(loadingNotes())
		axios
			.get(`${ROOT_URL}/api/notes`)
			.then(notes => {
				dispatch(loadedNotes(notes.data.success));
			})
			.catch(err => console.log(err));
	};
};

export const createNote = (title, content, history) => {
	const user = localStorage.getItem("uuID");
	const note = { title, content, user };
	return dispatch => {
		dispatch(creatingNote());
		axios
			.post(`${ROOT_URL}/api/notes`, note)
			.then(res => {
				dispatch(noteCreated(res));
				history.push("/notes");
			})
			.catch(err => {
				if (err) alert(err);
				dispatch(authErr(err.toString()));
			});
	};
};

export const deleteNote = id => {
	return dispatch => {
		dispatch({ type: actiontype.DELETING_NOTE });
		axios
			.delete(`${ROOT_URL}/api/notes/${id}`)
			.then(deletion => {
				dispatch(deletedNote(deletion));
			})
			.catch(err => {
				dispatch(authErr(err.toString()));
			});
	};
};

export const updateNote = updates => {
	const { id, title, content } = updates;
	return dispatch => {
		dispatch({ type: actiontype.UPDATING_NOTE });
		axios
			.put(`${ROOT_URL}/api/notes/${id}`, { title, content })
			.then(update => {
				dispatch(updatedNote(update));
			})
			.catch(err => {
				dispatch(authErr(err.toString()));
			});
	};
};

export const logout = () => {
	return dispatch => {
		dispatch(userUnauth());
	}
}

export const toggleShowUpdate = () => {
	return {
		type: actiontype.TOGGLE_UPDATE_NOTE
	};
};

export const updateSingleNote = note => {
	return {
		type: actiontype.SINGLE_NOTE,
		payload: note
	};
};
//endregion
