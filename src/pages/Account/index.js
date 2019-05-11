import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../../components/NavBar';

class AccountPage extends Component {
  render() {
    return (
      <div className='account'>
        <NavBar history={this.props.history}/>
        Account Page
      </div>
    );
  }
}

export default withRouter(AccountPage);
