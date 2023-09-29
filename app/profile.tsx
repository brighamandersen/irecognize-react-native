import { useLocalSearchParams } from 'expo-router';
import { FC, Fragment } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { PERSON_CURRENT_USER } from '../data';
import Navbar from '../components/Navbar';
import { getFriendsOfPerson, getPersonById } from '../utils';
import COLORS from '../colors';
import PersonList from '../components/PersonList';
import ProfilePersonBar from '../components/ProfilePersonBar';
import ProfileTabBar from '../components/ProfileTabBar';

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
        <ProfilePersonBar
          person={person}
          shouldShowBottomBorder={isOwnProfile}
        />
        {isOwnProfile ? (
          <ScrollView>
            <Text style={{ fontSize: 16, color: COLORS.primary }}>
              {'My Friends'}
            </Text>
            {friendsOfPerson.length === 0 && <Text>N/A</Text>}
            <PersonList persons={friendsOfPerson} />
          </ScrollView>
        ) : (
          <Fragment>
            <ProfileTabBar />
          </Fragment>
        )}
      </View>
    </Fragment>
  );
};

export default Profile;
