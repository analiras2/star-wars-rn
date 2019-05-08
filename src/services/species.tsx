import GlobalStorage from '../data/GlobalStorage';
import { KEYS } from '../data/keys';
import Specy from '../models/Specy';
import { getIdFromUrl, getNextPage } from '../utils/helper';
import api from './api';

export default (nextRequest: () => void) => {
  const specyDB = new GlobalStorage(KEYS.SPECIES_KEY);
  let species: Specy[] = [];

  const getSpecies = (page: number) => {
    return api.getSpecies(page).then(({ data }) => {
      const speciesResp: Specy[] = data.results.map((item: any) => ({
        id: getIdFromUrl(item.url),
        name: item.name,
      }));
      species = species.concat(speciesResp);
      specyDB.saveItems(species);
      if (data.next) getSpecies(getNextPage(data.next));
      else nextRequest();
    });
  };

  getSpecies(1);
};
