import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class LandingPage extends Component {
  render() {
    return (
      <div className='landing'>
        Landing Page
        <Button 
        variant="contained"
        color="primary"
        href='/login'>Login</Button>
      </div>
    );
  }
}

export default withRouter(LandingPage);
