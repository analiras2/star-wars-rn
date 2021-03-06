import GlobalStorage from '../data/GlobalStorage';
import { KEYS } from '../data/keys';
import Movie from '../models/Movie';
import { getIdFromUrl, getNextPage } from '../utils/helper';
import api from './api';

export default (nextRequest: () => void) => {
  const movieDB = new GlobalStorage(KEYS.MOVIES_KEY);
  let movies: Movie[] = [];

  const getMovies = (page: number) => {
    return api.getMovies(page).then(({ data }) => {
      const moviesResp: Movie[] = data.results.map((item: any) => ({
        id: getIdFromUrl(item.url),
        title: item.title,
        director: item.director,
        openingCrawl: item.opening_crawl,
        releaseDate: item.release_date,
        producer: item.producer,
      }));
      movies = movies.concat(moviesResp);
      movieDB.saveItems(movies);
      if (data.next) getMovies(getNextPage(data.next));
      else nextRequest();
    });
  };

  getMovies(1);
};
