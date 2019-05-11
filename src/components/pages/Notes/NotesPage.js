import React, { Component } from "react";
import NoteCard from "./NoteCard";
import "../../styles/NotePage.css";
import { fetchNotes } from "../../../actions";
import { connect } from "react-redux";

class NotesPage extends Component {
	constructor(props) {
		super(props);
		this.history = props.history;
	}

	render() {
		return (
			<div className="notes">
				This is the Notes Page
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
	};
};

export default connect(
	mapStateToProps,
	{ fetchNotes }
)(NotesPage);
