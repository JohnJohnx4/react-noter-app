import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { updateNote } from "../../actions";

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

class EditNote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.note.title,
			content: props.note.content
		};
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = () => {
    if(!this.props.updatingNote) {
      const { _id, user } = this.props.note;
      this.props.updateNote({
        id: _id,
        title: this.state.title,
        content: this.state.content,
        user: user._id
      });
      this.props.parentCB();
    }
	};

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
					<InputLabel htmlFor="name-helper">content</InputLabel>
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
						onClick={this.handleSubmit}
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

EditNote.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
    updatingNote: state.notes.updatingNote
  };
};

export default connect(
	mapStateToProps,
	{ updateNote }
)(withStyles(styles)(EditNote));
