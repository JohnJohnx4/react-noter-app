import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RegistrationForm from "./RegForm";

const styles = theme => ({
	root: {
		margin: "auto",
		flexGrow: 1
	},
	linkText: {
		textDecoration: "none",
		fontSize: theme.typography.pxToRem(12)
	},
	paper: {
		margin: "7% 25% 0",
		minHeight: "75%",
		padding: theme.spacing.unit * 2,
		textAlign: "left",
		color: theme.palette.text.secondary
	},
	row: {
		display: "flex",
		justifyContent: "left"
	},
	button: {
		margin: theme.spacing.unit
	}
});

class RegistrationPage extends Component {
	constructor(props) {
		super(props);
		this.history = this.props.history;
	}
	render() {
		const { classes } = this.props;
		return (
			<div className="registration">
				<div className={classes.root}>
					<Grid container spacing={24}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<RegistrationForm history={this.history} />
								<Typography
									className={classes.linkText}
									component={Link}
									to="/login"
								>
									Already have an account? Click here to login
								</Typography>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

RegistrationPage.propTypes = {
	classes: PropTypes.object
};

export default withStyles(styles)(RegistrationPage);
