import React, { useEffect, useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import SWLoading from '../components/SWLoading';
import SWView from '../components/SWView';
import GlobalStorage from '../data/GlobalStorage';
import navigatorHelper from '../navigator/navigatorHelper';
import colors from '../res/colors';
import strings from '../res/strings';
import getAllMovies from '../services/movies';
import getAllPeople from '../services/people';
import getAllPlanets from '../services/planets';
import getAllSpecies from '../services/species';
import constants from '../utils/constants';

const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: navigatorHelper.dashboard }),
  ],
});
interface Props {
  navigation: any;
}
export default function main(props: Props) {
  const [loadingMsg, setLoadingMsg] = useState<string>(strings.loading.people);

  useEffect(() => {
    new GlobalStorage(constants.PEOPLE_KEY).getItems().then(people => {
      if (people) goToDash();
      else getPeople();
    });
    // tslint:disable-next-line: align
  }, []);

  const getPeople = () => {
    getAllPeople(getSpecies);
  };

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

  const goToDash = () => {
    props.navigation.dispatch(resetAction);
  };

  return (
    <SWView bgColor={colors.background} flex={1} align="center">
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
        barStyle="light-content"
      />
      <Image
        style={{ width: 300, height: 200, marginTop: 38, marginBottom: 88 }}
        source={require('../res/img/logo.png')}
      />
      <SWLoading title={loadingMsg} />
    </SWView>
  );
}
