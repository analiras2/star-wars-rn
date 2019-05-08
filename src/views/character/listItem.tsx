import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SWText from '../../components/SWText';
import Person from '../../models/Person';
import { ROUTES } from '../../navigator/routes';
import { peopleAvatar } from '../../utils/pictures';

const styles = (numColumns: number) =>
  StyleSheet.create({
    container: {
      width: (Dimensions.get('window').width - 40) / numColumns,
      alignItems: 'center',
      marginVertical: 8,
    },
    avatar: { width: 140, height: 140, borderRadius: 75 },
  });

export default (person: Person, navigation: any, numColumns: number) => {
  const avatar = {
    uri: peopleAvatar[person.name],
  };

  return (
    <TouchableOpacity
      style={styles(numColumns).container}
      activeOpacity={0.6}
      onPress={() =>
        navigation.navigate(ROUTES.CHARACTER_DETAILS, {
          person: new Person(person),
        })
      }
    >
      <Image
        style={styles(numColumns).avatar}
        source={avatar.uri ? avatar : require('../../res/img/placeholder.png')}
      />
      <SWText key={person.id} title={person.name} top={4} bold />
    </TouchableOpacity>
  );
};
