import GlobalStorage from '../data/GlobalStorage';
import { KEYS } from '../data/keys';
import Person from '../models/Person';
import { getIdFromUrl, getNextPage } from '../utils/helper';
import api from './api';

export default (nextRequest: () => void) => {
  const personDB = new GlobalStorage(KEYS.PEOPLE_KEY);
  let people: Person[] = [];

  const getPeople = (page: number) => {
    return api.getPeople(page).then(({ data }) => {
      const peopleResp: Person[] = data.results.map((item: any) => ({
        id: getIdFromUrl(item.url),
        name: item.name,
        gender: item.gender,
        birthYear: item.birth_year,
        homeworld: getIdFromUrl(item.homeworld),
        specy: item.species.map((specy: string) => getIdFromUrl(specy)),
        moveis: item.films.map((movie: string) => getIdFromUrl(movie)),
      }));
      people = people.concat(peopleResp);
      personDB.saveItems(people);
      if (data.next) getPeople(getNextPage(data.next));
      else nextRequest();
    });
  };

  getPeople(1);
};
