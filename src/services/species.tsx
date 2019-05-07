import GlobalStorage from '../data/GlobalStorage';
import Specie from '../models/Specie';
import constants from '../utils/constants';
import { getIdFromUrl, getNextPage } from '../utils/helper';
import api from './api';

export default (nextRequest: () => void) => {
  const specieDB = new GlobalStorage(constants.SPECIES_KEY);
  let species: Specie[] = [];

  const getSpecies = (page: number) => {
    return api.getSpecies(page).then(({ data }) => {
      const speciesResp: Specie[] = data.results.map((item: any) => ({
        id: getIdFromUrl(item.url),
        name: item.name,
      }));
      species = species.concat(speciesResp);
      specieDB.saveItems(species);
      if (data.next) getSpecies(getNextPage(data.next));
      else nextRequest();
    });
  };

  getSpecies(1);
};
