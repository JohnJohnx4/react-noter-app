import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { DotsVerticalIcon } from "mdi-react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import EditNote from "./EditNote";
import DeleteNote from "./DeleteNote";

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const styles = theme => ({
	button: {
		margin: theme.spacing.unit
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
	},
	paper: {
		position: "absolute",
		width: "25%",
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4
	}
});

class NoteMenu extends React.Component {
	state = {
		anchorEl: null,
		deleteOpen: false,
		updateOpen: false
	};

	FloatingActionButtons(props, anchorEl) {
		const { classes } = this.props;
		return (
			<div>
				<IconButton
					variant="fab"
					aria-label="add"
					aria-owns={anchorEl ? "simple-menu" : null}
					aria-haspopup="true"
					onClick={this.handleClick}
					className={classes.button + " nav__button"}
				>
					<DotsVerticalIcon className="nav__menuicon" />
				</IconButton>
			</div>
		);
	}

	handleEditModalOpen = () => {
		this.setState({ updateOpen: true, anchorEl: null });
	};

	handleDeleteModalOpen = () => {
		this.setState({ deleteOpen: true, anchorEl: null });
	};

	handleModalClose = () => {
		this.setState({ deleteOpen: false, updateOpen: false });
	};

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
  };
  
  handleEditClosing = () => {
    this.setState({ deleteOpen: false, updateOpen: false });
  }

	render() {
		const { anchorEl } = this.state;
		const { classes } = this.props;

		return (
			<div className="action__button">
				{this.FloatingActionButtons(this.props, anchorEl)}
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleClose}
				>
					<MenuItem onClick={this.handleEditModalOpen}>Edit Note</MenuItem>
					<MenuItem onClick={this.handleDeleteModalOpen}>Delete Note</MenuItem>
				</Menu>
				<div>
					<Modal
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						open={this.state.updateOpen}
						onClose={this.handleModalClose}
					>
						<div style={getModalStyle()} className={classes.paper}>
							<Typography variant="subheading" id="simple-modal-description">
								Update Note
              </Typography>
							<EditNote
                note={this.props.note}
                parentCB={this.handleEditClosing.bind(this)}
							/>
						</div>
					</Modal>
					<Modal
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						open={this.state.deleteOpen}
						onClose={this.handleModalClose}
					>
						<div style={getModalStyle()} className={classes.paper}>
							<Typography variant="subheading" id="simple-modal-description">
								Delete this note?
							</Typography>
							<DeleteNote parentCB={this.handleEditClosing.bind(this)}
							note={this.props.note._id} />
						</div>
					</Modal>
				</div>
			</div>
		);
	}
}

NoteMenu.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {};
};

export default connect(
	mapStateToProps,
	{}
)(withStyles(styles)(NoteMenu));
