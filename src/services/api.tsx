import axios from 'axios';

const BASE_URL = 'https://swapi.co/api/';
const instance = axios.create({ baseURL: BASE_URL });

instance.interceptors.response.use(
  response => {
    console.log('-> response: ', response);
    return response;
  },
  error => {
    let responseError = error.response;
    console.log('-> error: ', responseError);
    if (!responseError) {
      responseError = { message: 'Algo inesperado aconteceu' };
    }
    return Promise.reject(responseError);
  },
);

const getPeople = (page: number) => instance(`${BASE_URL}people/?page=${page}`);

const getMovies = (page: number) => instance(`${BASE_URL}films/?page=${page}`);

const getSpecies = (page: number) =>
  instance(`${BASE_URL}species/?page=${page}`);

const getPlanets = (page: number) =>
  instance(`${BASE_URL}planets/?page=${page}`);

export default {
  getPeople: (page: number) => getPeople(page),
  getMovies: (page: number) => getMovies(page),
  getSpecies: (page: number) => getSpecies(page),
  getPlanets: (page: number) => getPlanets(page),
};
