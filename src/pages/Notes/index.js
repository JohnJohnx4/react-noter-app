import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../../components/NavBar';

class LoginPage extends Component {
  render() {
    return (
      <div className='notes'>
        <NavBar history={this.props.history} />
        This is the Notes Page
      </div>
    );
  }
}

export default withRouter(LoginPage);
