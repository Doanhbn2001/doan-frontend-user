import axios from 'axios';
const url = 'http://localhost:5000/';

const API = {
  getPlants: (search) => {
    return axios({
      url: url + 'plants//get-all-plants?search=' + search,
    });
  },

  getTypes: (search, page) => {
    return axios({
      url: url + `plants//get-all-types?page=${page}&search=${search}`,
    });
  },

  getType: (id) => {
    return axios({
      method: 'post',
      url: url + 'plants//get-type',
      data: { id: id },
    });
  },

  getPlant: (id) => {
    return axios({
      method: 'post',
      url: url + 'plants//get-detail',
      data: { id: id },
    });
  },

  postSignIn: (user) => {
    return axios({
      method: 'post',
      url: url + 'auth/user-signin',
      data: user,
    });
  },

  postSignup: (user) => {
    return axios({
      method: 'post',
      url: url + 'auth/signup',
      data: user,
    });
  },

  getLogout: () => {
    return axios({
      url: url + 'auth/logout',
    });
  },

  getData: (idUser) => {
    return axios({
      method: 'post',
      url: url + 'auth/get-data',
      data: { id: idUser },
    });
  },

  addNote: (idUser, idPlant, note) => {
    return axios({
      method: 'post',
      url: url + 'auth/add-note',
      data: { idUser: idUser, idPlant: idPlant, note: note },
    });
  },

  deleteNote: (idUser, idPlant) => {
    return axios({
      method: 'post',
      url: url + 'auth/delete-note',
      data: { idUser: idUser, idPlant: idPlant },
    });
  },
};

export default API;
