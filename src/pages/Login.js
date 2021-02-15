import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { register, login, ping } from '../actions';
import NoterBannerImg from '../assets/images/noterbanner.png';

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

export default function LoginPage(props) {
  const [registerState, setRegisterState] = useState(false);
  const [emailString, setEmailString] = useState('');
  const [passwordString, setPasswordString] = useState('');
  const [confirmString, setConfirmString] = useState('');

  const toggleRegisterState = () => setRegisterState(!registerState);

  const handleSubmit = () => {
    if (registerState) register(emailString, passwordString, props.history);
    else login(emailString, passwordString, props.history);
  };

  useEffect(() => {
    ping();
  }, []);
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <img src={NoterBannerImg} />
        <Typography component='h1' variant='h5'>
          {registerState ? 'Register' : 'Sign in'}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            value={emailString}
            onChange={(e) => setEmailString(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={passwordString}
            onChange={(e) => setPasswordString(e.target.value)}
          />
          {registerState && (
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='confirm'
              label='Confirm Password'
              type='password'
              id='confirm'
              autoComplete='current-password'
              value={confirmString}
              onChange={(e) => setConfirmString(e.target.value)}
            />
          )}

          <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={handleSubmit}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link
                className={classes.registerLink}
                onClick={toggleRegisterState}
                variant='body2'
              >
                {registerState
                  ? 'Already have an account? Log in'
                  : "Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
