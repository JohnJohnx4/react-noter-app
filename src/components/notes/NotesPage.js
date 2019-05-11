import React, { Component } from "react";
import NoteCard from "./NoteCard";
import "../../styles/NotePage.css";
import { fetchNotes } from "../../actions";
import { connect } from "react-redux";

class NotesPage extends Component {
	constructor(props) {
		super(props);
		this.history = props.history;
	}

	componentDidMount() {
		this.props.fetchNotes();
	}

	render() {
		return (
			<div className="notes">
				{!this.props.loadingNotes && this.props.notes
					? this.props.notes.map(note => (
							<NoteCard
								note={note}
								key={note._id}
							/>
					  ))
					: null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loadingNotes: state.notes.loadingNotes,
		notes: state.notes.notes,
		updatingNote: state.notes.updatingNote,
	};
};

export default connect(
	mapStateToProps,
	{ fetchNotes }
)(NotesPage);
