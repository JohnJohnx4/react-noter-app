import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import { createNote, updateNote } from '../actions';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  const history = useHistory();

  const handleCreateNote = () => {
    const createNoteCb = (id, newTitle, newContent) => {
      handleClose();

      props.setNotes(() => [
        ...props.notes,
        {
          _id: id,
          title: newTitle,
          content: newContent,
          created: new Date(),
          last_edit: { date: new Date() },
        },
      ]);
    };

    if (props.editNote) {
      props.setNotes(
        updateNote({ id: props.note_id, title, content }, () =>
          createNoteCb(props.note_id, title, content)
        )
      );
    } else  {
      props.setNotes(createNote(title, content, createNoteCb));
      setOpen(false);
    }
  };

  const handleClickOpen = () => {
    setTitle('');
    setContent('');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {props.editNote ? (
        <MenuItem onClick={handleClickOpen}>Edit</MenuItem>
      ) : (
        <Button variant='contained' color='primary' onClick={handleClickOpen}>
          Create New Note
        </Button>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {props.editNote ? 'Edit Note' : 'Create a New Note'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in these fields to make a new note:
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='title'
            label='Note Title'
            fullWidth
            defaultValue={props.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            multiline
            margin='dense'
            id='content'
            label='Note Content'
            fullWidth
            defaultValue={props.content}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={() => handleCreateNote()} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
