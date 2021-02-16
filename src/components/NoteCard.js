import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { makeStyles } from '@material-ui/core/styles';

import { deleteNote } from '../actions';
import NoteDialog from '../components/Dialog';
import AlertDialog from '../components/AlertDialog';
dayjs.extend(relativeTime);

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const NoteCardMenu = ({ note, isOpen, closeMenu, anchor, notes, setNotes }) => (
  <Menu
    id='notecard=menu'
    anchorEl={anchor}
    keepMounted
    open={isOpen}
    onClose={closeMenu}
  >
    <NoteDialog
      editNote={true}
      note_id={note._id}
      title={note.title}
      content={note.content}
      notes={notes}
      setNotes={setNotes}
      closeMenu={closeMenu}
    />
    <AlertDialog
      deleteNote={deleteNote}
      note_id={note._id}
      notes={notes}
      setNotes={setNotes}
      closeMenu={closeMenu}
    />
  </Menu>
);

export default function NoteCard({ note, notes, setNotes }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getDisplayDate = () => {
    if (note.last_edit.date && note.created !== note.last_edit.date)
      return dayjs(note.last_edit.date).fromNow();
    return dayjs(note.created).fromNow();
  };

  return (
    <Grid item key={note._id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <>
              <IconButton onClick={handleClick} aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
              <NoteCardMenu
                note={note}
                isOpen={open}
                closeMenu={handleClose}
                anchor={anchorEl}
                notes={notes}
                setNotes={setNotes}
              />
            </>
          }
          title={note.title}
          subheader={getDisplayDate()}
        />

        <CardContent className={classes.cardContent}>
          <Typography>{note.content}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
