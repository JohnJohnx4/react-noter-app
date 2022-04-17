import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import NoteDialog from '../components/Dialog';
import NoteCard from '../components/NoteCard';
import { fetchNotes } from '../actions';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    padding: theme.spacing(8, 6),
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

export default function NotesPage(props) {
  const classes = useStyles();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(fetchNotes());
  }, []);

  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth='sm'>
          <Typography
            align='center'
            style={{ fontWeight: 'bold', fontSize: '32px' }}
            gutterBottom
          >
            Notes
          </Typography>
          <Typography
            align='center'
            style={{ fontSize: '18px' }}
            paragraph
          >
            {notes.length === 0 ? "Click this button to add your first note" : "Here are all of your notes!"}
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justifyContent='center'>
              <Grid item>
                <NoteDialog
                  editNote={false}
                  title={''}
                  content={''}
                  notes={notes}
                  setNotes={setNotes}
                />
              </Grid>
              <Grid item>
                {/* <Button variant='outlined' color='primary'>
                    Secondary action
                  </Button> */}
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid}>
        {/* End hero unit */}
        <Grid container spacing={2}>
          {notes.map((note, i) => (
            <NoteCard
              key={note.title + i}
              note={note}
              notes={notes}
              setNotes={setNotes}
            />
          ))}
        </Grid>
      </Container>
    </main>
  );
}
