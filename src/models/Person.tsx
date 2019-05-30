import GlobalStorage from '../data/GlobalStorage';
import { KEYS } from '../data/keys';
import Specy from '../models/Specy';
import Movie from './Movie';
import Planet from './Planet';

interface Props {
  id: string;
  name: string;
  gender: string;
  birthYear: string;
  homeworld: string;
  species: string[];
  movies: string[];
}

export default class Person {
  public id: string;
  public name: string;
  public gender: string;
  public birthYear: string;
  public homeworld: string;
  public species: string[];
  public movies: string[];

  constructor(person: Props) {
    this.id = person.id;
    this.name = person.name;
    this.gender = person.gender;
    this.birthYear = person.birthYear;
    this.homeworld = person.homeworld;
    this.species = person.species;
    this.movies = person.movies;
  }

  public async getSpecies(): Promise<string> {
    const species: string | undefined = await new GlobalStorage(
      KEYS.SPECIES_KEY,
    )
      .getItems()
      .then(data => {
        if (data) {
          const speciesDB: Specy[] = JSON.parse(data);

          if (speciesDB.length > 0) {
            const speciesObj: string[] = this.species.map(specy => {
              const obj: Specy | undefined = speciesDB.find(
                item => item.id === specy,
              );
              return obj ? obj.name : 'n/a';
            });
            return speciesObj.toString();
          }
          return 'n/a';
        }
      });

    return species || 'n/a';
  }

  public async getHomeworld(): Promise<string> {
    const planet: string | undefined = await new GlobalStorage(KEYS.PLANETS_KEY)
      .getItems()
      .then(data => {
        if (data) {
          const planetsDB: Planet[] = JSON.parse(data);

          if (planetsDB.length > 0) {
            const obj: Planet | undefined = planetsDB.find(
              item => item.id === this.homeworld,
            );
            return obj ? obj.name : 'n/a';
          }
          return 'n/a';
        }
      });

    return planet || 'n/a';
  }

  public async getMovies(): Promise<Movie[]> {
    const movies: any = await new GlobalStorage(KEYS.MOVIES_KEY)
      .getItems()
      .then(data => {
        if (data) {
          const moviesDB: Movie[] = JSON.parse(data);

          if (moviesDB.length > 0) {
            return this.movies.map(movie => {
              return moviesDB.find(item => item.id === movie);
            });
          }
        }
      });

    return movies || [];
  }
}
