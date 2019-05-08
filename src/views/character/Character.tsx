import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Background from '../../components/Background';
import SWText from '../../components/SWText';
import SWView from '../../components/SWView';
import GlobalStorage from '../../data/GlobalStorage';
import { KEYS } from '../../data/keys';
import Person from '../../models/Person';
import strings from '../../res/strings';
import ListItem from './listItem';

const NUM_COLUMNS = 2;

interface Props {
  navigation: any;
}
export default function character(props: Props) {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    new GlobalStorage(KEYS.PEOPLE_KEY).getItems().then(data => {
      if (data) setPeople(JSON.parse(data));
    });
    // tslint:disable-next-line: align
  }, []);

  return (
    <Background>
      <SWView bottom={98}>
        <SWText title={strings.person.label} big bold />
        <FlatList
          data={people}
          numColumns={NUM_COLUMNS}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            ListItem(item, props.navigation, NUM_COLUMNS)
          }
        />
      </SWView>
    </Background>
  );
}
