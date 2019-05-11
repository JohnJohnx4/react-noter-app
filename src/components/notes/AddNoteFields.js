import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { createNote } from "../../actions";

const styles = theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	formControl: {
		margin: theme.spacing.unit
	},
	button: {
		margin: theme.spacing.unit
	}
});

class AddNoteField extends React.Component {
	constructor(props) {
		super(props);
    this.state= {
      title: "",
      content: ""
    }
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit() {
			if(!this.props.creatingNote) {
				this.props.createNote(this.state.title, this.state.content, this.props.history)
			}
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<FormControl
					className={classes.formControl}
					aria-describedby="name-helper-text"
				>
					<InputLabel htmlFor="name-helper">Title</InputLabel>
					<Input
						id="name-helper"
						name="title"
						value={this.state.title}
						onChange={this.handleChange}
					/>
					<FormHelperText id="name-helper-text">
						Your note's title
					</FormHelperText>
				</FormControl>
				<FormControl
					className={classes.formControl}
					aria-describedby="name-helper-text"
				>
					<InputLabel htmlFor="name-helper">Content</InputLabel>
					<Input
						multiline={true}
						id="name-helper"
						name="content"
						value={this.state.content}
						onChange={this.handleChange}
					/>
					<FormHelperText id="name-helper-text">
						The main content of your note
					</FormHelperText>
				</FormControl>
				<FormControl
					className={classes.formControl}
					aria-describedby="submit-button"
				>
					<Button
						onClick={this.handleSubmit.bind(this)}
						className={classes.button}
						variant="contained"
						color="primary"
					>
						Submit
					</Button>
				</FormControl>
			</div>
		);
	}
}

AddNoteField.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		creatingNote: state.notes.creatingNote
	};
};

export default connect(
	mapStateToProps,
	{ createNote }
)(withStyles(styles)(AddNoteField));
