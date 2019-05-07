// tslint:disable: object-literal-key-quotes
// tslint:disable: max-line-length
interface PeopleAvatar {
  'Luke Skywalker': string;
  'C-3PO': string;
  Yoda: string;
  'R2-D2': string;
  'Darth Vader': string;
  'Leia Organa': string;
  'Obi-Wan Kenobi': string;
  Chewbacca: string;
  'Han Solo': string;
  'Boba Fett': string;
  [key: string]: string;
}
export const peopleAvatar: PeopleAvatar = {
  'Luke Skywalker':
    'https://cdn1.newsplex.pt/media/2018/12/4/668548.jpg?type=artigo',
  'C-3PO':
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWS4_rS1B7UjzQAbsk-SJ5mwwOqN-uKEBmeIg714tY0lhdk3S',
  Yoda:
    'https://metro.co.uk/wp-content/uploads/2018/04/sei_7510757.jpg?quality=90&strip=all',
  'R2-D2':
    'https://starwarsblog.starwars.com/wp-content/uploads/2018/08/star-wars-r2-d2-tall-image.jpg',
  'Darth Vader':
    'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
  'Leia Organa':
    'https://paladone.com/blog/wp-content/uploads/2017/04/Princess-Leia-1.jpg',
  'Obi-Wan Kenobi':
    'https://www.thoughtco.com/thmb/pYLUnM7lQ6ef-ShHTdunHcExcw0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/EP2-IA-60435_R_8x10-56a83bea3df78cf7729d314a.jpg',
  Chewbacca:
    'https://img.elo7.com.br/product/zoom/1F5283F/poster-cartaz-chewbacca-star-wars-story-o-filme-jesse.jpg',
  'Han Solo':
    'https://abrilexame.files.wordpress.com/2016/09/size_960_16_9_han_solo.jpg?quality=70&strip=info&w=920',
  'Boba Fett':
    'http://www.internerdz.com.br/wp-content/uploads/2013/09/boba-fett-010.jpg',
};

interface MoviePoster {
  'A New Hope': string;
  'Attack of the Clones': string;
  'The Phantom Menace': string;
  'Revenge of the Sith': string;
  'Return of the Jedi': string;
  'The Empire Strikes Back': string;
  'The Force Awakens': string;
  [key: string]: string;
}

export const moviePoster: MoviePoster = {
  'A New Hope':
    'https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg',
  'Attack of the Clones':
    'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Attackoftheclones_novel.jpg/220px-Attackoftheclones_novel.jpg',
  'The Phantom Menace':
    'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
  'Revenge of the Sith':
    'https://images-na.ssl-images-amazon.com/images/I/51sNjN0MbdL._SY445_.jpg',
  'Return of the Jedi':
    'https://images-na.ssl-images-amazon.com/images/I/51UB-i-tjdL._SX302_BO1,204,203,200_.jpg',
  'The Empire Strikes Back':
    'https://images-na.ssl-images-amazon.com/images/I/51QvoX064kL._SX303_BO1,204,203,200_.jpg',
  'The Force Awakens':
    'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg',
};
