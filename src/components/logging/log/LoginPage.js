import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LoginFields from "./LoginFields";
import { Link } from "react-router-dom";
import { Button, Typography } from "../../../../node_modules/@material-ui/core";
import { login } from "../../../actions";

const styles = theme => ({
	root: {
		margin: "auto",
		flexGrow: 1
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
  },
  linkText : {
    textDecoration: "none",
    fontSize: theme.typography.pxToRem(12)
  }
});

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			emailTrigger: false,
			passwordTrigger: false
		};
	}

	handleFieldData = (key, val) => {
		this.setState({ [key]: val });
	};

	handleSubmit() {
		this.props.login(this.state.email, this.state.password, this.props.history);
	}

	render() {
		const { classes } = this.props;
		return (
			<div className="registration">
				<div className={classes.root}>
					<Grid container spacing={24}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<LoginFields
									history={this.props.history}
									parentCallback={this.handleFieldData.bind(this)}
								/>
								<Button
									color="primary"
									variant="contained"
                  className={classes.button}
                  onClick={this.handleSubmit.bind(this)}
								>
									Login
								</Button>
								<Typography className={classes.linkText} component={Link} to="/register">
									Click here to register
								</Typography>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

LoginPage.propTypes = {
	classes: PropTypes.object
};

const mapStateToProps = state => {
	return {};
};

export default connect(
	mapStateToProps,
	{ login }
)(withStyles(styles)(LoginPage));
