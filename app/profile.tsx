import { useLocalSearchParams } from 'expo-router';
import { FC } from 'react';
import { Text, View } from 'react-native';
import { PERSON_CURRENT_USER } from '../data';

const Profile: FC = () => {
  const local = useLocalSearchParams();
  const personName = local.personName ?? PERSON_CURRENT_USER.name;

  return (
    <View>
      <Text>Profile</Text>
      <Text>{personName}</Text>
    </View>
  );
};

export default Profile;
