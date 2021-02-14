import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Fade } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Layout from './layout/Layout';
import LoginPage from './pages/Login';
import NotesPage from './pages/Notes';
import ProfilePage from './pages/Profile';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Fade in={true}>
        <Route exact path='/' component={LoginPage} />
      </Fade>
      <Fade in={true}>
        <Route path='/notes'>
          <Layout>
            <NotesPage />
          </Layout>
        </Route>
      </Fade>
      <Fade in={true}>
        <Route path='/profile'>
          <Layout>
            <ProfilePage />
          </Layout>
        </Route>
      </Fade>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
