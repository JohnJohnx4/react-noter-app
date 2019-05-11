import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { FilePlusIcon } from "mdi-react";

const styles = {
	root: {
		flexGrow: 1
	},
	flex: {
		flex: 1,
		textAlign: "left",
		textDecoration: "none"
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	icon: {
		marginRight: "5px"
	}
};

function ApplicationBar(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static" className="appbar">
				<Toolbar className="appbar__container">
					<Typography
						component={Link}
						to="/"
						variant="title"
						color="inherit"
						className={classes.flex}
					>
						Noter App
					</Typography>
					<Button
						component={Link}
						to="/notes/add"
						className="appbar__button"
						color="inherit"
					>
						<FilePlusIcon className={classes.icon} color="#fff" />
						Add Note
					</Button>

					<Button
						component={Link}
						to="/notes"
						className="appbar__button"
						color="inherit"
					>
						Notes
					</Button>
					<Button
						component={Link}
						to="/"
						className="appbar__button"
						color="inherit"
					>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

ApplicationBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ApplicationBar);
