import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import SWText from '../../components/SWText';
import Movie from '../../models/Movie';
import { ROUTES } from '../../navigator/routes';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'center',
    marginLeft: 20,
    borderWidth: 1,
    borderBottomColor: colors.secondary,
  },
});

export default (movie: Movie, navigation: any) => {
  return (
    <TouchableOpacity
        key={movie.id}
      style={styles.container}
      activeOpacity={0.6}
      onPress={() =>
        navigation.navigate(ROUTES.MOVIE_DETAILS, {
          movie,
        })
      }
    >
      <SWText title={movie.title} />
    </TouchableOpacity>
  );
};
