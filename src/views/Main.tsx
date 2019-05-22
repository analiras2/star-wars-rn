import React, { useEffect, useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import SWLoading from '../components/SWLoading';
import SWView from '../components/SWView';
import GlobalStorage from '../data/GlobalStorage';
import { KEYS } from '../data/keys';
import { ROUTES } from '../navigator/routes';
import colors from '../res/colors';
import strings from '../res/strings';
import getAllMovies from '../services/movies';
import getAllPeople from '../services/people';
import getAllPlanets from '../services/planets';
import getAllSpecies from '../services/species';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: ROUTES.DASH })],
});
interface Props {
  navigation: any;
}
export default function main(props: Props) {
  const [loadingMsg, setLoadingMsg] = useState<string>(strings.loading.people);

  useEffect(() => {
    new GlobalStorage(KEYS.PEOPLE_KEY).getItems().then(people => {
      if (people) goToDash();
      else getPeople();
    });
    // tslint:disable-next-line: align
  }, []);

  const getPeople = () => getAllPeople(getSpecies);

  const getSpecies = () => {
    setLoadingMsg(strings.loading.species);
    getAllSpecies(getMovies);
  };

  const getMovies = () => {
    setLoadingMsg(strings.loading.movies);
    getAllMovies(getPlanets);
  };

  const getPlanets = () => {
    setLoadingMsg(strings.loading.planets);
    getAllPlanets(goToDash);
  };

  const goToDash = () => props.navigation.dispatch(resetAction);

  return (
    <SWView bgColor={colors.background} flex={1} align="center">
      <StatusBar
        animated
        backgroundColor={colors.primary}
        barStyle="light-content"
      />
      <Image
        style={{ width: 300, height: 200, marginTop: 38, marginBottom: 44 }}
        source={require('../res/img/logo.png')}
      />
      <SWLoading title={loadingMsg} />
    </SWView>
  );
}
