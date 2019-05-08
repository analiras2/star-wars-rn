import GlobalStorage from '../data/GlobalStorage';
import { KEYS } from '../data/keys';
import Planet from '../models/Planet';
import { getNextPage } from '../utils/helper';
import api from './api';

export default (goToNewScreen: () => void) => {
  const planetDB = new GlobalStorage(KEYS.PLANETS_KEY);
  let planets: Planet[] = [];

  const getPlanets = (page: number) => {
    console.log('REQUEST');
    return api.getPlanets(page).then(({ data }) => {
      const planetsResp: Planet[] = data.results.map((item: any) => ({
        id: item.name,
        name: item.name,
      }));
      planets = planets.concat(planetsResp);
      planetDB.saveItems(planets);
      if (data.next) getPlanets(getNextPage(data.next));
      else goToNewScreen();
    });
  };

  getPlanets(1);
};
