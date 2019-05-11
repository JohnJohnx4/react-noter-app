import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App";
import GuestBar from "./components/logging/navbar/GuestBar";
import NavBar from "./components/logging/navbar/NavBar";
import RequireAuth from "./components/HOC/Authorization";
import NotesPage from "./components/notes/NotesPage";
import AddNotePage from "./components/notes/AddNotePage";
import GuestPage from "./components/guest/GuestPage";
import LoginPage from "./components/logging/log/LoginPage";
import "./index.css";
import RegistrationPage from "./components/logging/register/RegistrationPage";

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
