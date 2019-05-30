import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import SWText from '../../components/SWText';
import Movie from '../../models/Movie';
import { ROUTES } from '../../navigator/routes';
import colors from '../../res/colors';
import { moviePoster } from '../../utils/pictures';

const styles = (numColumns: number) =>
  StyleSheet.create({
    container: {
      height: 264,
      width: (Dimensions.get('window').width - 40) / numColumns,
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 8,
      borderRadius: 6,
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
    poster: {
      height: 212,
      width: 140,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
    },
  });

export default (movie: Movie, navigation: any, numColumns: number) => {
  const poster = {
    uri: moviePoster[movie.title],
  };

  return (
    <TouchableOpacity
      style={styles(numColumns).container}
      activeOpacity={0.6}
      onPress={() => navigation.navigate(ROUTES.MOVIE_DETAILS, { movie })}
    >
      <Image
        style={styles(numColumns).poster}
        source={poster.uri ? poster : require('../../res/img/movie.jpg')}
      />
      <View style={styles(numColumns).title}>
        <SWText
          key={movie.id}
          title={movie.title}
          top={4}
          bold
          color={colors.primary}
          textAlign="center"
        />
      </View>
    </TouchableOpacity>
  );
};
