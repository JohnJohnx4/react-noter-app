import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import RegEmailField from "./RegEmailField";
import RegPasswordField from "./RegPasswordField";
import { register } from "../../../actions/index";

const styles = theme => ({
	root: {
		width: "90%"
	},
	button: {
		marginTop: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	actionsContainer: {
		marginBottom: theme.spacing.unit * 2
	},
	resetContainer: {
		padding: theme.spacing.unit * 3
	}
});

const getSteps = () => ["Enter your email", "Enter your password"];

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      stepCleared: false,
      email: "",
      password: "",
      submitting: false
    };
  }

	stepEnterEmail = () => (
		<RegEmailField
			stepCleared={this.state.stepCleared}
			parentCallback={this.handleEmailChange.bind(this)}
		/>
	);

	stepEnterPassword = () => (
		<RegPasswordField
			stepCleared={this.state.stepCleared}
			parentCallback={this.handlePasswordChange.bind(this)}
		/>
	);

	getStepContent(step) {
		switch (step) {
			case 0:
				return this.stepEnterEmail();
			case 1:
				return this.stepEnterPassword();
			default:
				return "Unknown step";
		}
	}

	handleEmailChange = (cleared, email) => {
		this.setState({ stepCleared: cleared, email: email });
	};

	handlePasswordChange = (cleared, password) => {
		this.setState({ stepCleared: cleared, password: password });
	};

	handleNext = () => {
		if (this.state.stepCleared === true) {
		this.setState(state => ({
			activeStep: state.activeStep + 1
		}));
		}
	};

	handleReset = () => {
		this.setState({
			activeStep: 0
		});
	};

	submitUserInfo() {
    this.setState({
      submitting: true
		})
		this.props.register(this.state.email, this.state.password, this.props.history);
	}

	render() {
		const { classes } = this.props;
		const steps = getSteps();
		const { activeStep } = this.state;

		return (
			<div className={classes.root}>
				<Stepper activeStep={activeStep} orientation="vertical">
					{steps.map((label, index) => {
						return (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
								<StepContent>
									{this.getStepContent(index)}
									<div className={classes.actionsContainer}>
										<div>
											<Button
												variant="contained"
												color="primary"
												onClick={this.handleNext}
												className={classes.button}
											>
												{activeStep === steps.length - 1 ? "Finish" : "Next"}
											</Button>
										</div>
									</div>
								</StepContent>
							</Step>
						);
					})}
				</Stepper>
				{activeStep === steps.length && (
					<Paper square elevation={0} className={classes.resetContainer}>
						<Typography>
							All steps completed - redirecting in one second
						</Typography>
						{this.state.submitting ? null : this.submitUserInfo()}
						<Button onClick={this.handleReset} className={classes.button}>
							Reset
						</Button>
					</Paper>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		registering: state.auth.registering
	};
};

RegistrationForm.propTypes = {
	classes: PropTypes.object
};

export default connect(
	mapStateToProps,
	{ register }
)(withStyles(styles)(RegistrationForm));
