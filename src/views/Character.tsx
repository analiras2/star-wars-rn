import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import Background from '../components/Background';
import SWText from '../components/SWText';
import SWView from '../components/SWView';
import GlobalStorage from '../data/GlobalStorage';
import Person from '../models/Person';
import constants from '../utils/constants';

export default function character() {
  const [people, setPeople] = useState<Person[]>([]);
  const numColumns = 2;

  useEffect(() => {
    new GlobalStorage(constants.PEOPLE_KEY).getItems().then(data => {
      if (data) setPeople(JSON.parse(data));
    });
    // tslint:disable-next-line: align
  }, []);

  const renderListItem = (item: Person) => {
    return (
      <SWView align="center" justify="center" flex={1}>
        <Image
          style={{ width: 140, height: 140, borderRadius: 75 }}
          source={{
            uri:
              'https://cdn1.newsplex.pt/media/2018/12/4/668548.jpg?type=artigo',
          }}
        />
        <SWText key={item.id} flex={1} title={item.name} top={4} bold={true} />
      </SWView>
    );
  };

  return (
    <Background>
      <SWView bottom={98}>
        <SWText title="Character" big={true} bold={true} />
        <FlatList
          data={people}
          numColumns={numColumns}
          keyExtractor={item => item.id}
          renderItem={({ item }) => renderListItem(item)}
        />
      </SWView>
    </Background>
  );
}
