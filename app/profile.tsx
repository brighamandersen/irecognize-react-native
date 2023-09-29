import { Link, useLocalSearchParams } from 'expo-router';
import { FC, Fragment } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PERSON_CURRENT_USER } from '../data';
import Navbar from '../components/Navbar';
import { getFriendsOfPerson, getPersonById } from '../utils';
import COLORS from '../colors';
import PersonList from '../components/PersonList';

const styles = StyleSheet.create({
  personContainer: {
    padding: 8
  }
});

const Profile: FC = () => {
  const local = useLocalSearchParams();
  const personId = (local.personId as string) ?? PERSON_CURRENT_USER.id;
  const person = getPersonById(personId);
  const isOwnProfile = person.id === PERSON_CURRENT_USER.id;
  const friendsOfPerson = getFriendsOfPerson(person);

  return (
    <Fragment>
      <Navbar shouldShowBackButton={!isOwnProfile} />
      <View>
        <Text style={{ fontSize: 24, color: COLORS.primary }}>
          {person.name}
        </Text>
        <Text style={{ color: COLORS.primary }}>{person.bio}</Text>
        <ScrollView>
          <Text style={{ fontSize: 16, color: COLORS.primary }}>
            {isOwnProfile ? 'My Friends' : `${person.name}'s Friends`}
          </Text>
          {friendsOfPerson.length === 0 && <Text>N/A</Text>}
          <PersonList persons={friendsOfPerson} />
        </ScrollView>
      </View>
    </Fragment>
  );
};

export default Profile;
