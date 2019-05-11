import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../../actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className='registration'>This is the Registration Page</div>;
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
