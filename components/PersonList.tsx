import React, { FC } from 'react';
import { Person } from '../models';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const styles = StyleSheet.create({
  personContainer: {
    padding: 8
  }
});

interface Props {
  persons: Person[];
}

const PersonList: FC<Props> = ({ persons }) => {
  return (
    <View>
      {persons.map((person) => (
        <Link
          href={`/profile?personId=${person.id}`}
          key={person.id}
          style={styles.personContainer}
        >
          <Text>{person.name}</Text>
        </Link>
      ))}
    </View>
  );
};

export default PersonList;
