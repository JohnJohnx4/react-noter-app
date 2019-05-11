import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { deleteNote } from "../../actions";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center"
	},
	button: {
		margin: theme.spacing.unit
	}
});

class DeleteNote extends React.Component {
	constructor(props) {
		super(props);
		this.note = props.note;
		this.state = {
			checked: false
		};
	}

	handleChange = name => event => {
		this.setState({ [name]: event.target.checked });
	};

	handleSubmit = () => {
		if (!this.props.deletingNote) {
			this.props.deleteNote(this.note);
			this.props.parentCB();
		}
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.container}>
				<Switch
					checked={this.state.checked}
					onChange={this.handleChange("checked")}
					value="checked"
					color="primary"
				/>
				<Button
					variant="contained"
					onClick={this.handleSubmit}
					disabled={!this.state.checked}
					color="primary"
					className={classes.button}
				>
					Delete
				</Button>
			</div>
		);
	}
}

DeleteNote.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		deletingNote: state.notes.deletingNote
	};
};

export default connect(
	mapStateToProps,
	{ deleteNote }
)(withStyles(styles)(DeleteNote));
