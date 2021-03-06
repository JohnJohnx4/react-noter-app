import axios from 'axios';
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
// axios.defaults.withCredentials = true;

export const ping = () => {
  axios
    .get(`${API_ENDPOINT}/`)
    .then(() => console.log('server ping'))
    .catch((err) => console.log(err));
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return axios
    .get(`${API_ENDPOINT}/api/users/${user}`)
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const register = (email, password, history) => {
  axios
    .post(`${API_ENDPOINT}/api/users`, { email, password })
    .then((res) => {
      let token = res.data.token;
      axios.defaults.headers.common['Authorization'] = token;
      localStorage.setItem('user', res.data.user);
      localStorage.setItem('token', res.data.token);
      history.push('/notes');
    })
    .catch((err) => {});
};

export const login = (email, password, history) => {
  axios
    .post(`${API_ENDPOINT}/api/login`, { email, password })
    .then((res) => {
      let token = res.data.token;
      axios.defaults.headers.common['Authorization'] = token;
      localStorage.setItem('user', res.data.user);
      localStorage.setItem('token', res.data.token);
      history.push('/notes');
    })
    .catch((err) => {});
};

export const logout = (history) => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  history.push('/');
};

// ==== NOTES actions ====

export const fetchNotes = () => {
  const user = localStorage.getItem('user');
  return axios
    .get(`${API_ENDPOINT}/api/notes/user/${user}`)
    .then((notes) => notes)
    .catch((err) => console.log(err));
};

export const createNote = (title, content, cb) => {
  const user = localStorage.getItem('user');
  const note = { title, content, user };
  axios
    .post(`${API_ENDPOINT}/api/notes`, note)
    .then((res) => {
      cb(res.data.success, title, content);
    })
    .catch((err) => {
      if (err) alert(err);
    });
};

export const deleteNote = (id) => {
  axios
    .delete(`${API_ENDPOINT}/api/notes/${id}`)
    .then((deletion) => {})
    .catch((err) => {});
};

export const updateNote = (updates, cb) => {
  const { id, title, content } = updates;
  axios
    .put(`${API_ENDPOINT}/api/notes/${id}`, { title, content })
    .then((update) => {
      cb();
    })
    .catch((err) => {});
};
