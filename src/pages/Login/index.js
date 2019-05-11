import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});



class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className='registration'>
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(LoginPage));
