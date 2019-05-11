import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function MenuAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function renderPathName() {
    return (
      props.history.location.pathname
        .slice(1)
        .charAt(0)
        .toUpperCase() + props.history.location.pathname.slice(2)
    );
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function routeToProfilePage() {
    props.history.push('/account');
    handleClose();
  }
  function routeToNotesPage() {
    props.history.push('/notes');
    handleClose();
  }
  function handleLogOut() {
    props.history.push('/');
    handleClose();
  }
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <div>
            <IconButton
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              {props.history.location.pathname === '/account' ? null : (
                <MenuItem onClick={routeToProfilePage}>My Account</MenuItem>
              )}
              {props.history.location.pathname === '/notes' ? null : (
                <MenuItem onClick={routeToNotesPage}>Notes</MenuItem>
              )}
              <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
            </Menu>
          </div>
          <Typography variant='h6' className={classes.title}>
            {renderPathName()}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppBar;
