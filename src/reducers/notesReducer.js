import {
	LOADING_NOTES,
	LOADED_NOTES,
	CREATING_NOTE,
	NOTE_CREATED,
	DELETING_NOTE,
	DELETED_NOTE,
	UPDATING_NOTE,
	UPDATED_NOTE,
	ERROR
} from "../actions";

const initialState = {
	notes: [],
	loadingNotes: false,
	creatingNote: false,
	deletingNote: false,
	updatingNote: false,
	error: null
};

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING_NOTES:
			return { ...state, loadingNotes: true };
		case LOADED_NOTES:
			return { ...state, loadingNotes: false, notes: action.payload };
		case CREATING_NOTE:
			return { ...state, creatingNote: true };
		case NOTE_CREATED:
			return {
				...state,
				notes: [...state.notes, action.payload.data.success],
				creatingNote: false
			};
		case UPDATING_NOTE:
			return { ...state, updatingNote: true };
		case UPDATED_NOTE:
			return {
				...state,
				notes: state.notes.map(note => {
					if (note._id === action.payload.data.updated._id)
						return action.payload.data.updated;
					else return note;
				}),
				updatingNote: false
			};
		case DELETING_NOTE:
			return { ...state, deletingNote: true };
		case DELETED_NOTE:
			return {
				...state,
				notes: state.notes.filter(note => note._id !== action.payload.data.deleted._id),
				deletingNote: false
			};
		case ERROR:
			return {
				...state,
				loadingNotes: false,
				creatingNote: false,
				deletingNote: false,
				updatingNote: false,
				error: action.payload
			};
		default:
			return state;
	}
};
