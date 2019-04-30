import axios from 'axios';
import strings from '../res/strings';

const instance = axios.create({ baseURL: 'https://swapi.co/api/' });

// instance.interceptors.response.use(
//   response => {
//     console.log('-> response: ', response);
//     return response;
//   },
//   error => {
//     let responseError = error.response;
//     console.log('-> error: ', responseError);
//     if (!responseError) {
//       responseError = { message: 'Algo inesperado aconteceu' };
//     }
//     return Promise.reject(responseError);
//   },
// );

const getPeople = (page: number) =>
  instance(`https://swapi.co/api/people/?page=${page}`);

const getMovies = (page: number) =>
  instance(`https://swapi.co/api/films/?page=${page}`);

const getSpecies = (page: number) =>
  instance(`https://swapi.co/api/species/?page=${page}`);

export default {
  getPeople: (page: number) => getPeople(page),
  getMovies: (page: number) => getMovies(page),
  getSpecies: (page: number) => getSpecies(page),
};
