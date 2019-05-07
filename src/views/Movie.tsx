import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import Background from '../components/Background';
import SWText from '../components/SWText';
import SWView from '../components/SWView';
import GlobalStorage from '../data/GlobalStorage';
import Movie from '../models/Movie';
import colors from '../res/colors';
import constants from '../utils/constants';

const NUM_COLUMNS = 2;

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width - 40) / NUM_COLUMNS,
    alignItems: 'center',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  title: {
    width: 140,
    height: 52,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: colors.secondary,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
});

export default function character() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    new GlobalStorage(constants.MOVIES_KEY).getItems().then(data => {
      if (data) setMovies(JSON.parse(data));
    });
    // tslint:disable-next-line: align
  }, []);

  const renderListItem = (item: Movie) => {
    return (
      <View style={styles.container}>
        <Image
          style={{ height: 212, width: 140 }}
          source={{
            uri:
              'http://img3.wikia.nocookie.net/__cb20150429011457/starwars/images/8/84/SpecialEditionPoster.jpg',
          }}
        />
        <View style={styles.title}>
          <SWText
            key={item.id}
            title={item.title}
            top={4}
            bold={true}
            color={colors.primary}
            textAlign="center"
          />
        </View>
      </View>
    );
  };

  return (
    <Background>
      <SWView bottom={98}>
        <SWText title="Movies" big={true} bold={true} />
        <FlatList
          data={movies}
          numColumns={NUM_COLUMNS}
          keyExtractor={item => item.id}
          renderItem={({ item }) => renderListItem(item)}
        />
      </SWView>
    </Background>
  );
}
