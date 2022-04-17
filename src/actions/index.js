// import axios from 'axios';
// import { decode } from 'jsonwebtoken';
// const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
// axios.defaults.withCredentials = true;

// removed server integration for now, this will simply work through localstorage as an example application
export const ping = () => {
  // axios
  //   .get(`${API_ENDPOINT}/`)
  //   .then(() => console.log('server ping'))
  //   .catch((err) => console.log(err));
};

export const register = (email, password, history) => {
  // axios
  //   .post(`${API_ENDPOINT}/api/users`, { email, password })
  //   .then((res) => {
  //     let token = res.data.token;
  //     axios.defaults.headers.common['Authorization'] = token;
  //     localStorage.setItem('user', res.data.user);
  //     localStorage.setItem('token', res.data.token);
  //     history.push('/notes');
  //   })
  //   .catch((err) => {});
  localStorage.setItem('user', { user: email });
  localStorage.setItem('token', 'test-toketestn-1234567890abcdef');
  history.push('/notes');
};

export const login = (email, password, history) => {
  // axios
  //   .post(`${API_ENDPOINT}/api/login`, { email, password })
  //   .then((res) => {
  //     let token = res.data.token;
  //     axios.defaults.headers.common['Authorization'] = token;
  //     localStorage.setItem('user', res.data.user);
  //     localStorage.setItem('token', res.data.token);
  //     history.push('/notes');
  //   })
  //   .catch((err) => {});
  localStorage.setItem('user', JSON.stringify({ user: email }));
  localStorage.setItem('token', 'test-toketestn-1234567890abcdef');
  history.push('/notes');
};

export const logout = (history) => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  history.push('/');
};

// ==== NOTES actions ====

export const fetchNotes = () => {
  const user = localStorage.getItem('user');
  const localNotes = localStorage.getItem('notes');
  return localNotes ? JSON.parse(localNotes) : [];
  // return axios
  //   .get(`${API_ENDPOINT}/api/notes/user/${user}`)
  //   .then((notes) => notes)
  //   .catch((err) => console.log(err));
};

export const createNote = (title, content, cb) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const note = { title, content, user };
  const localNotes = localStorage.getItem('notes');
  if (localNotes) {
    localStorage.setItem(
      'notes',
      JSON.stringify([
        ...JSON.parse(localNotes),
        {
          ...note,
          _id: 'note-' + JSON.parse(localNotes).length,
          last_edit: { date: new Date() },
          created: new Date(),
        },
      ])
    );
  } else {
    localStorage.setItem(
      'notes',
      JSON.stringify([
        {
          ...note,
          _id: 'note-0',
          last_edit: { date: new Date() },
          created: new Date(),
        },
      ])
    );
  }
  return JSON.parse(localStorage.getItem('notes'));
  // axios
  //   .post(`${API_ENDPOINT}/api/notes`, note)
  //   .then((res) => {
  //     cb(res.data.success, title, content);
  //   })
  //   .catch((err) => {
  //     if (err) alert(err);
  //   });
};

export const deleteNote = (id) => {
  const localNotes = localStorage.getItem('notes');
  if (localNotes) {
    const newNotes = JSON.parse(localNotes)
      .filter((note) => note._id !== id)
      .map((note, i) => {
        console.log(note, i);
        return { ...note, _id: 'note-' + i };
      });
    localStorage.setItem('notes', JSON.stringify(newNotes));
    return newNotes;
  }
  // axios
  //   .delete(`${API_ENDPOINT}/api/notes/${id}`)
  //   .then((deletion) => {})
  //   .catch((err) => {});
};

export const updateNote = (updates, cb) => {
  const { id, title, content } = updates;
  const localNotes = localStorage.getItem('notes');
  if (localNotes) {
    const newNotes = JSON.parse(localNotes)
      .map((note) => {
        if (note._id === id) {
          return {...note, title, content}
        } else {
          return note;
        }
      });
    localStorage.setItem('notes', JSON.stringify(newNotes));
    return newNotes;
  }
  // axios
  //   .put(`${API_ENDPOINT}/api/notes/${id}`, { title, content })
  //   .then((update) => {
  //     cb();
  //   })
  //   .catch((err) => {});
};
