import { FC, Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MY_TALKED_TO_RECENTLY, PEOPLE_NEAR_ME } from '../data';
import Navbar from '../components/Navbar';
import PersonList from '../components/PersonList';

const styles = StyleSheet.create({
  header: {
    fontSize: 24
  }
});

const Index: FC = () => (
  <Fragment>
    <Navbar />
    <View>
      <Text style={styles.header}>People Near Me</Text>
      <PersonList persons={PEOPLE_NEAR_ME} />
      <Text style={styles.header}>Friends I've Talked to Recently</Text>
      <PersonList persons={MY_TALKED_TO_RECENTLY} />
    </View>
  </Fragment>
);

export default Index;
