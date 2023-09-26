import { useLocalSearchParams } from 'expo-router';
import { FC, Fragment } from 'react';
import { Text, View } from 'react-native';
import { PERSON_CURRENT_USER } from '../data';
import Navbar from '../Navbar';
import { getPersonById } from '../utils';
import COLORS from '../colors';

const Profile: FC = () => {
  const local = useLocalSearchParams();
  const personId = (local.personId as string) ?? PERSON_CURRENT_USER.id;
  const person = getPersonById(personId);
  const isOnOwnProfile = person.id === PERSON_CURRENT_USER.id;

  return (
    <Fragment>
      <Navbar shouldShowBackButton={!isOnOwnProfile} />
      <View>
        <Text style={{ fontSize: 24, color: COLORS.primary }}>
          {person.name}
        </Text>
        <Text style={{ color: COLORS.primary }}>{person.bio}</Text>
      </View>
    </Fragment>
  );
};

export default Profile;
