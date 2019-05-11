import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class GuestPage extends Component {
  render() {
    return <div className='guest'>Guest Page</div>;
  }
}

export default withRouter(GuestPage);