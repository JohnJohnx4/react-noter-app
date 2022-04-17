import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import LoginPage from './pages/Login';
import NotesPage from './pages/Notes';
import ProfilePage from './pages/Profile';

const App = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('token')
  );
  if (!authenticated)
    return (
      <Router>
        <Route
          path='/'
          component={(props) => (
            <LoginPage {...props} setAuthenticated={setAuthenticated} />
          )}
        />
      </Router>
    );

  return (
    <Router>
      <Route
        exact
        path='/'
        component={(props) => (
          <LoginPage {...props} setAuthenticated={setAuthenticated} />
        )}
      />
      <Route path='/notes'>
        <Layout setAuthenticated={setAuthenticated} >
          <NotesPage />
        </Layout>
      </Route>
      {/* <Route path='/profile'>
        <Layout setAuthenticated={setAuthenticated} >
          <ProfilePage />
        </Layout>
      </Route> */}
    </Router>
  );
};

export default App;
