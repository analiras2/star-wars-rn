import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import Background from '../components/Background';
import SWText from '../components/SWText';
import SWView from '../components/SWView';
import GlobalStorage from '../data/GlobalStorage';
import Person from '../models/Person';
import constants from '../utils/constants';

const NUM_COLUMNS = 2;

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width - 40) / NUM_COLUMNS,
    alignItems: 'center',
    marginVertical: 8,
  },
  avatar: { width: 140, height: 140, borderRadius: 75 },
});

export default function character() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    new GlobalStorage(constants.PEOPLE_KEY).getItems().then(data => {
      if (data) setPeople(JSON.parse(data));
    });
    // tslint:disable-next-line: align
  }, []);

  const renderListItem = (item: Person) => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://cdn1.newsplex.pt/media/2018/12/4/668548.jpg?type=artigo',
          }}
        />
        <SWText key={item.id} title={item.name} top={4} bold={true} />
      </View>
    );
  };

  return (
    <Background>
      <SWView bottom={98}>
        <SWText title="Character" big={true} bold={true} />
        <FlatList
          data={people}
          numColumns={NUM_COLUMNS}
          keyExtractor={item => item.id}
          renderItem={({ item }) => renderListItem(item)}
        />
      </SWView>
    </Background>
  );
}
