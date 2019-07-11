import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import Background from '../../components/Background';
import DataField from '../../components/DataField';
import SWText from '../../components/SWText';
import SWView from '../../components/SWView';
import Movie from '../../models/Movie';
import strings from '../../res/strings';
import { dateFormat } from '../../utils/helper';
import { moviePoster } from '../../utils/pictures';

const styles = StyleSheet.create({
  container: { height: Dimensions.get('window').height - 100 },
  poster: {
    height: 212,
    width: 140,
    borderRadius: 6,
  },
});

interface Props {
  navigation: any;
}
export default function movieDetails(props: Props) {
  const movie: Movie = props.navigation.getParam('movie', {});

  const poster = {
    uri: moviePoster[movie.title],
  };

  return (
    <Background
      title={movie.title}
      onBackPress={() => props.navigation.goBack(null)}
      noPadding
    >
      <View style={styles.container}>
        <ScrollView>
          <SWView padding={20} row>
            <Image
              style={styles.poster}
              source={poster.uri ? poster : require('../../res/img/movie.jpg')}
            />
            <SWView left={12}>
              <DataField
                title={strings.movie.director}
                value={movie.director}
              />
              <DataField
                title={strings.movie.producer}
                value={movie.producer}
              />
              <DataField
                title={strings.movie.releaseDateer}
                value={dateFormat(movie.releaseDate)}
              />
            </SWView>
          </SWView>
          <SWText left={20} title={movie.openingCrawl} />
        </ScrollView>
      </View>
    </Background>
  );
}
