import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from '../colors';
import { Person } from '../models';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.surface
  },
  profilePic: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: 'yellow'
  },
  nameBioContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  nameText: {
    fontSize: 24,
    color: COLORS.primary
  },
  bioText: {
    color: COLORS.textColor,
    fontSize: 16
  }
});

interface Props {
  person: Person;
}

const ProfilePersonBar: FC<Props> = ({ person }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePic}></View>
      <View style={styles.nameBioContainer}>
        <Text style={styles.nameText}>{person.name}</Text>
        <Text style={styles.bioText}>{person.bio}</Text>
      </View>
    </View>
  );
};

export default ProfilePersonBar;
