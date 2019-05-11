import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
// import ProgressBar from "./ProgressBar";

// Todo:
// Add progress bar for email while checking if taken

const styles = theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "left"
	},
	formControl: {
		margin: theme.spacing.unit
	}
});

class RegEmailField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			stepCleared: this.props.stepCleared,
			trigger: false
		};
	}

	handleChange = event => {
		/^.+@.+\..+$/.test(event.target.value)
			? this.setState({ trigger: false, stepCleared: true })
			: this.setState({ trigger: true, stepCleared: false });
		this.setState({ [event.target.name]: event.target.value });
		this.props.parentCallback(this.state.stepCleared, event.target.value);
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.container}>
				{this.state.trigger ? (
					<FormControl
						className={classes.formControl}
						error
						aria-describedby="email-error-text"
					>
						<InputLabel htmlFor="email-error">Email</InputLabel>
						<Input
							id="email-error"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<FormHelperText id="email-error-text">
							Error, please enter valid email
							<br /> <em>example@example.com</em>
						</FormHelperText>
					</FormControl>
				) : (
					<FormControl
						className={classes.formControl}
						aria-describedby="email-helper-text"
					>
						<InputLabel htmlFor="email-helper">Email</InputLabel>
						<Input
							id="email-helper"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</FormControl>
				)}
			</div>
		);
	}
}

RegEmailField.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegEmailField);
