import React, { PureComponent } from 'react';
import { Image, View } from 'react-native';
import Background from '../../components/Background';
import DataField from '../../components/DataField';
import SWText from '../../components/SWText';
import SWView from '../../components/SWView';
import Person from '../../models/Person';
import colors from '../../res/colors';
import { peopleAvatar } from '../../utils/pictures';

interface Props {
  navigation: any;
}
export default class CharacterDetails extends PureComponent<Props> {
  public render() {
    const { navigation } = this.props;
    const person: Person = navigation.getParam('person', {});
    const avatar = {
      uri: peopleAvatar[person.name],
    };

    return (
      <Background
        title={person.name}
        onBackPress={() => navigation.goBack(null)}
        noPadding
      >
        <SWView>
          <Image
            style={{ height: 187 }}
            source={
              avatar.uri ? avatar : require('../../res/img/placeholder.png')
            }
          />
          <View style={{ backgroundColor: colors.accent, height: 1 }} />
          <View
            style={{ backgroundColor: colors.accent, height: 1, marginTop: 4 }}
          />
          <SWView vertical={20}>
            <SWView horizontal={20} justify="space-between" row>
              <DataField title="Bith Year" value={person.birthYear} />
              <DataField title="Gender" value={person.gender} />
            </SWView>
            <SWView horizontal={20} justify="space-between" top={20} row>
              <DataField title="Specy" value="Humano" />
              <DataField title="Homeworld" value={person.homeworld} />
            </SWView>
          </SWView>
          <SWText left={20} title="Films" color={colors.accent} bold />
        </SWView>
      </Background>
    );
  }
}
