import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	heading: {
		margin: "10px",
		fontSize: theme.typography.pxToRem(30),
		fontWeight: "bold",
		textAlign: "center"
	},
	secondaryHeading: {
		margin: "0 20px",
		fontSize: theme.typography.pxToRem(14),
		color: theme.palette.text.secondary
	},
	paper: {
		margin: "5% 15%",
		minHeight: "75%",
		padding: theme.spacing.unit * 2,
		textAlign: "center",
		color: theme.palette.text.secondary
	},
	row: {
		marginTop: "3%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center"
	},
	button: {
		margin: theme.spacing.unit
	},
	image: {
		padding: "1% 0",
		width: "100%",
		maxWidth: "500px"
	}
});

function LandingPage(props) {
	const { classes } = props;
	return (
		<div className="landing">
			<div className={classes.root}>
				<Grid container spacing={24}>
					<Grid item xs={12} className="home__grid">
						<Paper className={classes.paper + " home__paper"}>
							<img src="https://i.imgur.com/Q7q30Jt.png"
							alt="Noter Logo"
							className={classes.image}
              />
							<Typography>
								Welcome! Sign in to add or edit notes, or visit as a guest to
								just simply view notes!
							</Typography>
							<div className={classes.row}>
								<Button
									component={Link}
									to="/guest"
									className={classes.button}
									variant="contained"
									color="inherit"
								>
									Guest
								</Button>
								<Button
									component={Link}
									to="/register"
									className={classes.button}
									variant="contained"
									color="primary"
								>
									Register
								</Button>
								<Button
									component={Link}
									to="/login"
									className={classes.button}
									variant="contained"
									color="primary"
								>
									Login
								</Button>
							</div>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

LandingPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LandingPage);
