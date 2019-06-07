import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { Grid, Paper } from '@material-ui/core';
import NotesRender from './NotesRender';
import './index.scss';

class LoginPage extends Component {
  render() {
    return (
      <div className='notes'>
        <NavBar history={this.props.history} />
        <div className='container'>
          <Grid container spacing={10}>
            <Paper>
              <NotesRender />
            </Paper>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);
