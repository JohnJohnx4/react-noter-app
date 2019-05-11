import React, { Component } from "react";
import GuestNoteCard from "./GuestNoteCard";
import "../../styles/NotePage.css";
import { fetchNotes } from "../../actions";
import { connect } from "react-redux";

class GuestPage extends Component {
	componentDidMount() {
		this.props.fetchNotes();
	}
	render() {
		return (
			<div className="notes">
				{!this.props.loadingNotes && this.props.notes
					? this.props.notes.map(note => (
							<GuestNoteCard
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
	};
};

export default connect(
	mapStateToProps,
	{ fetchNotes }
)(GuestPage);
