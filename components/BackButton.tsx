import { router } from 'expo-router';
import React, { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MENU_ITEM_SIZE } from '../constants';
import COLORS from '../colors';

const styles = StyleSheet.create({
  backWrapper: {
    paddingLeft: 16
  }
});

const BackButton: FC = () => (
  <Pressable onPress={() => router.back()} style={styles.backWrapper}>
    <MaterialIcons
      name='arrow-back'
      size={MENU_ITEM_SIZE}
      color={COLORS.primary}
    />
  </Pressable>
);

export default BackButton;
