import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LandingPage extends Component {
  render() {
		console.log(this.props)
    return <div className='landing'>Landing Page</div>;
  }
}

export default withRouter(LandingPage);