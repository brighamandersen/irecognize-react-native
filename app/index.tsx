import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PEOPLE_NEAR_ME } from '../data';
import { Link } from 'expo-router';

const styles = StyleSheet.create({
  personContainer: {
    padding: 8
  }
});

const Index: FC = () => (
  <View>
    <Text style={{ fontSize: 24 }}>People Near Me</Text>
    {PEOPLE_NEAR_ME.map((person) => (
      <Link
        href={`/profile?personName=${person.name}`}
        key={person.name}
        style={styles.personContainer}
      >
        <Text>{person.name}</Text>
      </Link>
    ))}
  </View>
);

export default Index;
