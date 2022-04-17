import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
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
    minHeight: '240px',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  collapsedText: {
    marginBottom: '16px',
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
    <Grid item key={note._id} xs={12} md={6} lg={4} xl={3}>
      <Card className={classes.card} elevation={1}>
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
          title={
            <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>
              {note.title}
            </Typography>
          }
          subheader={
            <Typography style={{ fontSize: '12px' }}>
              {getDisplayDate()}
            </Typography>
          }
        />

        <CardContent className={classes.cardContent}>
          {!expanded && note.content.length > 32 && (
            <Typography className={classes.collapsedText}>
              {note.content.substring(0, 32) + '...'}
            </Typography>
          )}
          {note.content.length > 32 ? (
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <Typography
                style={{ fontSize: '16px' }}
                paragraph
              >
                {note.content}
              </Typography>
            </Collapse>
          ) : (
            <Typography
              style={{ fontSize: '16px' }}
              paragraph
            >
              {note.content}
            </Typography>
          )}
        </CardContent>

        {note.content.length > 32 && (
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        )}
      </Card>
    </Grid>
  );
}
