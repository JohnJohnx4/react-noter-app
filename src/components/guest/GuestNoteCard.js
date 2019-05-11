import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";
import moment from "moment";
import { ChevronDownIcon } from "mdi-react";

const styles = theme => ({
	card: {
		maxWidth: 300,
		margin: "10px"
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	actions: {
		display: "flex"
	},
	expand: {
		transform: "rotate(0deg)",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest
		}),
		marginLeft: "auto",
		[theme.breakpoints.up("sm")]: {
			marginRight: -8
		}
	},
	expandOpen: {
		transform: "rotate(180deg)"
	},
	avatar: {
		backgroundColor: blue[500]
	}
});

class GuestNoteCard extends Component {
	constructor(props) {
		super(props);
		this.history = props.history;
	}

	state = { expanded: false };

	handleExpandClick = () => {
		this.setState(state => ({ expanded: !state.expanded }));
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<Card className={classes.card} draggable="true">
					<CardHeader
						avatar={
							<Avatar
								aria-label="Recipe"
								color="primary"
								className={classes.avatar}
							>
								{this.props.note.user.email[0].toUpperCase()}
							</Avatar>
						}
						title={this.props.note.title}
						subheader={moment(this.props.note.date).format("dddd MMM Do ")}
					/>
					{this.props.note.photo ? (
						<CardMedia
							className={classes.media}
							image={this.props.note.photo}
							title="Contemplative Reptile"
						/>
					) : null}
					<CardContent>
						<Typography component="p">
							{this.props.note.content.length > 100
								? this.props.note.content.slice(0, 100) + "..."
								: this.props.note.content}
						</Typography>
					</CardContent>
					<CardActions className={classes.actions} disableActionSpacing>
						{this.props.note.content.length > 150 ? (
							<IconButton
								className={classnames(classes.expand, {
									[classes.expandOpen]: this.state.expanded
								})}
								onClick={this.handleExpandClick}
								aria-expanded={this.state.expanded}
								aria-label="Show more"
							>
								<ChevronDownIcon />
							</IconButton>
						) : null}
					</CardActions>
					<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography paragraph variant="body2">
								{this.props.note.content}
							</Typography>
						</CardContent>
					</Collapse>
				</Card>
			</div>
		);
	}
}

GuestNoteCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GuestNoteCard);
