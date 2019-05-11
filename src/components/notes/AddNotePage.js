import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AddNoteFields from "./AddNoteFields";

const styles = {
  root: {
    margin: "5% 15%",
    minHeight: "75%",
    padding: "5%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center"
  }
};

class AddNotePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <AddNoteFields history={this.props.history} />
        </Paper>
      </div>
    );
  }
}

AddNotePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddNotePage);
