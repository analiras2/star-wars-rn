import React, { useEffect } from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import SWLoading from '../components/SWLoading';
import SWView from '../components/SWView';
import navigatorHelper from '../navigator/navigatorHelper';
import colors from '../res/colors';
import getAllMovies from '../services/movies';
import getAllPeople from '../services/people';
import getAllPlanets from '../services/planets';
import getAllSpecies from '../services/species';

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
  useEffect(() => {
    getAllPeople();
    getAllSpecies();
    getAllMovies();
    getAllPlanets(goToDash);
    // tslint:disable-next-line: align
  }, []);

  const goToDash = () => {
    // props.navigation.dispatch(resetAction)
    console.log('Chamou');
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
      <SWLoading title="Loading..." />
    </SWView>
  );
}
