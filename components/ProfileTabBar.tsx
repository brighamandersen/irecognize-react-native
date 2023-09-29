import React, { FC } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import COLORS from '../colors';
import { MENU_ITEM_SIZE } from '../constants';

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.surface,
    borderBottomColor: COLORS.textColor,
    borderBottomWidth: 1
  },
  tabContainer: {
    alignItems: 'center',
    borderBottomColor: COLORS.surface,
    borderBottomWidth: 1
  },
  tabLabel: {
    fontSize: 16,
    color: COLORS.primary
  }
});

const ProfileTabBar: FC = () => {
  return (
    <View style={styles.barContainer}>
      <Pressable style={styles.tabContainer}>
        <MaterialIcons
          name='info'
          size={MENU_ITEM_SIZE}
          color={COLORS.secondary}
        />
        <Text style={styles.tabLabel}>About</Text>
      </Pressable>
      <Pressable style={styles.tabContainer}>
        <MaterialIcons
          name='location-pin'
          size={MENU_ITEM_SIZE}
          color={COLORS.secondary}
        />
        <Text style={styles.tabLabel}>Places</Text>
      </Pressable>
      <Pressable style={styles.tabContainer}>
        <MaterialIcons
          name='people'
          size={MENU_ITEM_SIZE}
          color={COLORS.secondary}
        />
        <Text style={styles.tabLabel}>Friends</Text>
      </Pressable>
      <Pressable style={styles.tabContainer}>
        <MaterialIcons
          name='record-voice-over'
          size={MENU_ITEM_SIZE}
          color={COLORS.secondary}
        />
        <Text style={styles.tabLabel}>Chats</Text>
      </Pressable>
    </View>
  );
};

export default ProfileTabBar;
