import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


class LoginPage extends Component {
  render() {
    return (
      <div className='registration'>
        <TextField
        label="Email"
        type="email"
        />
        <TextField
        label="Password"
        type="password"
        />
                <Button 
        variant="contained"
        color="primary"
        href='/notes'>Notes</Button>
      </div>
    );
  }
}

export default withRouter(LoginPage);
