import React from 'react';
// import { withRouter } from 'react-router-dom';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions
} from '@material-ui/core';

export default function NotesRender() {
  let notes = [
    { title: 'one', content: 'Blah' },
    { title: 'two', content: 'Blah' },
    { title: 'three', content: 'Blah' }
  ];
  const renderNotes = () => {
    return notes.map(note => {
      return (
        <Grid item>
          <Card>
            <CardHeader title={note.title} />
            <CardContent>{note.content}</CardContent>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <div className='landing'>
      <Grid container justify='center' spacing={10} />
      {renderNotes()}
    </div>
  );
}
