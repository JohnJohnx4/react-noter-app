import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { notesReducer } from "./notesReducer";
import authReducer from "./auth";

const rootReducer = combineReducers({
  form: FormReducer,
  auth: authReducer,
  notes: notesReducer,
});

export default rootReducer;
