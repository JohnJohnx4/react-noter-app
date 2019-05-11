import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
// import ProgressBar from "./ProgressBar";

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

class RegPasswordField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			password: "",
			confirm: "",
			stepCleared: this.props.stepCleared,
			trigger: false,
			trigger2: false,
			initial: true,
			initial2: true
		};
	}

	errorText() {
		if (this.state.password.length < 8)
			return "Must be at least 8 characters long";
		if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.state.password)) {
			return "Need 1 upper/lowercase letter, 1 number";
		}
	}

	handlePasswordChange = event => {
		/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(event.target.value)
			? this.setState({ trigger: false, stepCleared: true, initial: false })
			: this.setState({ trigger: true, stepCleared: false, initial: true });
			this.setState({ [event.target.name]: event.target.value });
	};

	handleConfirmChange = event => {
		event.target.value === this.state.password
			? this.setState({
					trigger2: false,
					stepCleared: true,
					initial2: false
			  })
			: this.setState({
					trigger2: true,
					initial2: true
			  });
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
						aria-describedby="password-error-text"
					>
						<InputLabel htmlFor="password-error">Password</InputLabel>
						<Input
							type="password"
							id="password-error"
							name="password"
							value={this.state.password}
							onChange={this.handlePasswordChange}
						/>
						<FormHelperText id="password-error-text">
							{this.errorText()}
						</FormHelperText>
					</FormControl>
				) : (
					<FormControl
						className={classes.formControl}
						aria-describedby="password-helper-text"
					>
						<InputLabel htmlFor="password-helper">Password</InputLabel>
						<Input
							type="password"
							id="password-helper"
							name="password"
							value={this.state.password}
							onChange={this.handlePasswordChange}
						/>
					</FormControl>
				)}

				{this.state.trigger2 ? (
					<FormControl
						className={classes.formControl}
						error
						aria-describedby="confirm-error-text"
					>
						<InputLabel htmlFor="confirm-error">Confirm Password</InputLabel>
						<Input
							type="password"
							id="confirm-error"
							name="confirm"
							value={this.state.confirm}
							onChange={this.handleConfirmChange}
						/>
						<FormHelperText id="confirm-error-text">Error</FormHelperText>
					</FormControl>
				) : (
					<FormControl
						className={classes.formControl}
						aria-describedby="confirm-helper-text"
					>
						<InputLabel htmlFor="confirm-helper">Confirm Password</InputLabel>
						<Input
							type="password"
							id="confirm-helper"
							name="confirm"
							value={this.state.confirm}
							onChange={this.handleConfirmChange}
						/>
						<FormHelperText id="confirm-helper-text">
							{this.state.initial2 ? "Passwords must match" : "They match!"}
						</FormHelperText>
					</FormControl>
				)}
			</div>
		);
	}
}

RegPasswordField.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegPasswordField);
