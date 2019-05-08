import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Background from '../../components/Background';
import SWText from '../../components/SWText';
import SWView from '../../components/SWView';
import GlobalStorage from '../../data/GlobalStorage';
import { KEYS } from '../../data/keys';
import Movie from '../../models/Movie';
import strings from '../../res/strings';
import listItem from './listItem';

const NUM_COLUMNS = 2;

interface Props {
  navigation: any;
}
export default function character(props: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    new GlobalStorage(KEYS.MOVIES_KEY).getItems().then(data => {
      if (data) setMovies(JSON.parse(data));
    });
    // tslint:disable-next-line: align
  }, []);

  return (
    <Background>
      <SWView bottom={98}>
        <SWText title={strings.movie.label} big bold />
        <FlatList
          data={movies}
          numColumns={NUM_COLUMNS}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            listItem(item, props.navigation, NUM_COLUMNS)
          }
        />
      </SWView>
    </Background>
  );
}
