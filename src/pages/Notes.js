import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardDeck,
  Button,
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from 'reactstrap';

import { fetchNotes, createNote } from '../actions';

const AddNote = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreateNote = () => {
    createNote(title, content);
    props.toggle();
  }

  return (
    <Form className='m-4'>
      <FormGroup>
        <Input className='mb-3'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
        />
        <Input className='mb-3'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Content'
        />
        <Button color='primary' onClick={handleCreateNote}>
          Submit
        </Button>
      </FormGroup>
    </Form>
  );
};

const NotesPage = (props) => {
  const [notes, setNotes] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    fetchNotes().then((res) => setNotes(res.data));
  }, [modal]);

  const handleNewNote = () => {
    toggle();
    console.log('activated');
  };

  return (
    <Container className='mt-5'>
      <Modal className='p-5' isOpen={modal} toggle={toggle}>
        <ModalHeader>Add New Note</ModalHeader>
        <AddNote toggle={toggle} />
      </Modal>
      <CardDeck className='m-auto'>
        {notes.map((note) => (
          <Card key={note._id} className='mb-3' style={{ minWidth: '315px' }}>
            <CardBody>
              <CardTitle tag='h5'>{note.title}</CardTitle>
              <CardText>{note.content}</CardText>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
      <Button onClick={handleNewNote} className='ml-3' color='primary'>
        Add New Note
      </Button>
    </Container>
  );
};

export default NotesPage;
