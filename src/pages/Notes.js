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
  Input,
} from 'reactstrap';

import { fetchNotes } from '../actions';

const LoginPage = (props) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes().then((res) => setNotes(res.data));
  }, []);

  const handleNewNote = () => {
    console.log('activated')
  }

  return (
    <Container className='mt-5'>
      <CardDeck className='m-auto'>
          {notes.map((note) => (
            <Card key={note._id} className='mb-3' style={{ minWidth: '315px' }}>
              <CardBody >
              <CardTitle tag='h5'>{note.title}</CardTitle>
              <CardText>{note.content}</CardText>
                </CardBody>
            </Card>
          ))}
          </CardDeck>
          <Button onClick={handleNewNote} className='ml-3' color='primary'>Add New Note</Button>
    </Container>
  );
};

export default LoginPage;
