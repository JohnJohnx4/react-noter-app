import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
// import ProgressBar from "./ProgressBar";

// Todo:
// Add progress barwhile logging info in

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

class LoginField extends Component {
	constructor(props) {
		super(props);

		this.state = {
      email: "",
      password: "",
      emailTrigger: false,
      passwordTrigger: false
		};
	}

	handleChange = event => {
	// Sets email or password in state
		this.setState({ [event.target.name]: event.target.value });
	// passes the state of the 'stepCleared' bool
	// and user email to the parent component
		this.props.parentCallback(event.target.name, event.target.value);
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.container}>
				{this.state.emailTrigger ? (
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
        
        {this.state.passwordTrigger0 ? (
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
							onChange={this.handleChange}
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
							onChange={this.handleChange}
						/>
						<FormHelperText id="password-helper-text">
							{this.state.initial
								? "Must be at least 8 characters long"
								: null}
						</FormHelperText>
					</FormControl>
				)}
			</div>
		);
	}
}

LoginField.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginField);
