import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import Background from '../../components/Background';
import DataField from '../../components/DataField';
import SWText from '../../components/SWText';
import SWView from '../../components/SWView';
import Movie from '../../models/Movie';
import Person from '../../models/Person';
import colors from '../../res/colors';
import strings from '../../res/strings';
import { peopleAvatar } from '../../utils/pictures';
import MovieListItem from './movieListItem';

const styles = StyleSheet.create({
  container: { height: Dimensions.get('window').height - 100 },
  img: { height: 187 },
  divider: { backgroundColor: colors.accent, height: 1 },
  divider2: { backgroundColor: colors.accent, height: 1, marginTop: 4 },
});

interface Props {
  navigation: any;
}
export default function characterDetails(props: Props) {
  const [homeworld, setHomeworld] = useState<string>('n/a');
  const [species, setSpecies] = useState<string>('n/a');
  const [movies, setMovies] = useState<Movie[]>([]);

  const person: Person = props.navigation.getParam('person', {});

  useEffect(() => {
    person.getSpecies().then(setSpecies);
    person.getHomeworld().then(setHomeworld);
    person.getMovies().then(setMovies);
    // tslint:disable-next-line: align
  }, []);

  const avatar = {
    uri: peopleAvatar[person.name],
  };

  return (
    <Background
      title={person.name}
      onBackPress={() => props.navigation.goBack(null)}
      noPadding
    >
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={
            avatar.uri ? avatar : require('../../res/img/placeholder.png')
          }
        />
        <View style={styles.divider} />
        <View style={styles.divider2} />
        <ScrollView>
          <SWView vertical={20}>
            <SWView horizontal={20} justify="space-between" row>
              <DataField
                title={strings.person.bithYear}
                value={person.birthYear}
              />
              <DataField title={strings.person.gender} value={person.gender} />
            </SWView>
            <SWView horizontal={20} justify="space-between" top={20} row>
              <DataField title={strings.person.specy} value={species} />
              <DataField title={strings.person.homeworld} value={homeworld} />
            </SWView>
          </SWView>
          <SWText
            left={20}
            title={strings.person.films}
            color={colors.accent}
            bold
          />
          {movies.map((item: Movie) => MovieListItem(item, props.navigation))}
        </ScrollView>
      </View>
    </Background>
  );
}
