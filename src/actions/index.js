import axios from 'axios';
import { decode } from 'jsonwebtoken';
const API_KEY = process.env.REACT_APP_API_KEY;
// axios.defaults.withCredentials = true;

// const ROOT_URL = "https://johnc-noter-api.herokuapp.com";
const ROOT_URL = 'http://localhost:5000';

export const register = (email, password, history) => {
  axios
    .post(`${ROOT_URL}/api/users`, { email, password, key: API_KEY })
    .then(user => {
      let token = user.data.token;
      axios.defaults.headers.common['Authorization'] = token;
      localStorage.setItem('uuID', user.data.user);
      history.push('/notes');
    })
    .catch(err => {});
};

export const login = (email, password, history) => {
  axios
    .post(`${ROOT_URL}/api/login`, { email, password })
    .then(res => {
      console.log(res);
      let token = res.data.token;
      axios.defaults.headers.common['Authorization'] = token;
      var decoded = decode(token, { complete: true });
      localStorage.setItem('uuID', decoded.payload.uID);
      history.push('/notes');
    })
    .catch(err => {});
};

// ==== NOTES actions ====

export const fetchNotes = () => {
  axios
    .get(`${ROOT_URL}/api/notes`)
    .then(notes => {})
    .catch(err => console.log(err));
};

export const createNote = (title, content, history) => {
  const user = localStorage.getItem('uuID');
  const note = { title, content, user };
  axios
    .post(`${ROOT_URL}/api/notes`, note)
    .then(res => {
      history.push('/notes');
    })
    .catch(err => {
      if (err) alert(err);
    });
};

export const deleteNote = id => {
  axios
    .delete(`${ROOT_URL}/api/notes/${id}`)
    .then(deletion => {})
    .catch(err => {});
};

export const updateNote = updates => {
  const { id, title, content } = updates;
  axios
    .put(`${ROOT_URL}/api/notes/${id}`, { title, content })
    .then(update => {})
    .catch(err => {});
};
