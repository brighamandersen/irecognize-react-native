import { FC, Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MY_TALKED_TO_RECENTLY, PEOPLE_NEAR_ME } from '../data';
import { Link } from 'expo-router';
import Navbar from '../Navbar';

const styles = StyleSheet.create({
  personContainer: {
    padding: 8
  }
});

const Index: FC = () => (
  <Fragment>
    <Navbar />
    <View>
      <Text style={{ fontSize: 24 }}>People Near Me</Text>
      {PEOPLE_NEAR_ME.map((person) => (
        <Link
          href={`/profile?personId=${person.id}`}
          key={person.id}
          style={styles.personContainer}
        >
          <Text>{person.name}</Text>
        </Link>
      ))}
      <Text style={{ fontSize: 24 }}>Friends I've Talked to Recently</Text>
      {MY_TALKED_TO_RECENTLY.map((person) => (
        <Link
          href={`/profile?personId=${person.id}`}
          key={person.id}
          style={styles.personContainer}
        >
          <Text>{person.name}</Text>
        </Link>
      ))}
    </View>
  </Fragment>
);

export default Index;
