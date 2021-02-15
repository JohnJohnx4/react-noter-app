// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardTitle,
//   CardText,
//   CardBody,
//   CardDeck,
//   Button,
//   Form,
//   FormGroup,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Input,
// } from 'reactstrap';

// import { fetchNotes, createNote } from '../actions';

// const AddNote = (props) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   const handleCreateNote = () => {
//     createNote(title, content);
//     props.toggle();
//   }

//   return (
//     <Form className='m-4'>
//       <FormGroup>
//         <Input className='mb-3'
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder='Title'
//         />
//         <Input className='mb-3'
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder='Content'
//         />
//         <Button color='primary' onClick={handleCreateNote}>
//           Submit
//         </Button>
//       </FormGroup>
//     </Form>
//   );
// };

// const NotesPage = (props) => {
//   const [notes, setNotes] = useState([]);
//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   useEffect(() => {
//     fetchNotes().then((res) => setNotes(res.data));
//   }, [modal]);

//   const handleNewNote = () => {
//     toggle();
//     console.log('activated');
//   };

//   return (
//     <Container className='mt-5'>
//       <Modal className='p-5' isOpen={modal} toggle={toggle}>
//         <ModalHeader>Add New Note</ModalHeader>
//         <AddNote toggle={toggle} />
//       </Modal>
//       <CardDeck className='m-auto'>
//         {notes.map((note) => (
//           <Card key={note._id} className='mb-3' style={{ minWidth: '315px' }}>
//             <CardBody>
//               <CardTitle tag='h5'>{note.title}</CardTitle>
//               <CardText>{note.content}</CardText>
//             </CardBody>
//           </Card>
//         ))}
//       </CardDeck>
//       <Button onClick={handleNewNote} className='ml-3' color='primary'>
//         Add New Note
//       </Button>
//     </Container>
//   );
// };

// export default NotesPage;

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}