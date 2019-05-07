import GlobalStorage from '../data/GlobalStorage';
import Person from '../models/Person';
import constants from '../utils/constants';
import { getIdFromUrl, getNextPage } from '../utils/helper';
import api from './api';

export default () => {
  const personDB = new GlobalStorage(constants.PEOPLE_KEY);
  let people: Person[] = [];

  const getPeople = (page: number) => {
    return api.getPeople(page).then(({ data }) => {
      const peopleResp: Person[] = data.results.map((item: any) => ({
        id: getIdFromUrl(item.url),
        name: item.name,
        gender: item.gender,
        birthYear: item.birth_year,
      }));
      people = people.concat(peopleResp);
      personDB.saveItems(people);
      if (data.next) getPeople(getNextPage(data.next));
    });
  };

  getPeople(1);
};
