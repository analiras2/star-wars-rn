import axios from 'axios';

const BASE_URL = 'https://swapi.co/api/';
const instance = axios.create({ baseURL: BASE_URL });

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
