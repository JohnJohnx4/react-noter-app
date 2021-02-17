import React, { useState, useEffect } from 'react';
import { getUser } from '../actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { register, login, ping } from '../actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  registerLink: {
    cursor: 'pointer',
  },
}));

const ProfilePage = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState({ email: '' });
  const [editUser, setEditUser] = useState(false);
  const [registerState, setRegisterState] = useState(false);
  const [emailString, setEmailString] = useState('');

  const [passwordString, setPasswordString] = useState('');
  const [newPasswordString, setNewPasswordString] = useState('');
  const [newConfirmString, setNewConfirmString] = useState('');

  useEffect(() => {
    getUser().then((user) => setUser(user.data));
  }, []);

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'></Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            disabled={!editUser}
            margin='normal'
            fullWidth
            id='email'
            label={editUser ? 'Update Email Address' : 'Email Address'}
            name='email'
            autoComplete='email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          {editUser && (
            <>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Old Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={passwordString}
                onChange={(e) => setPasswordString(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='New Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={newPasswordString}
                onChange={(e) => setPasswordString(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Confirm New Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={newConfirmString}
                onChange={(e) => setNewConfirmString(e.target.value)}
              />
            </>
          )}
          {/* <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={() => setEditUser(!editUser)}
            className={classes.submit}
          >
            {editUser ? 'Cancel' : 'Edit Profile'}
          </Button> */}
        </form>
      </div>
    </Container>
  );
};

export default ProfilePage;
