import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from './colors';
import { Link } from 'expo-router';

const MENU_ITEM_SIZE = 30;

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: COLORS.surface,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLORS.textColor,
    borderBottomWidth: 1
  },
  appNameContainer: {
    flexDirection: 'row',
    flex: 1,
    padding: 16
  },
  iText: {
    fontSize: MENU_ITEM_SIZE,
    fontWeight: 'bold',
    color: COLORS.accent
  },
  recognizeText: {
    fontSize: MENU_ITEM_SIZE,
    fontWeight: 'bold',
    color: COLORS.primary
  },
  searchWrapper: {
    padding: 16
  },
  myProfileWrapper: {
    padding: 16
  },
  backWrapper: {
    paddingLeft: 16
  }
});

interface Props {
  shouldShowBackButton?: boolean;
}

const Navbar: FC<Props> = ({ shouldShowBackButton }) => (
  <View style={styles.appBar}>
    {shouldShowBackButton && (
      <Link href='/' style={styles.backWrapper}>
        <MaterialIcons
          name='arrow-back'
          size={MENU_ITEM_SIZE}
          color={COLORS.primary}
        />
      </Link>
    )}
    <View style={styles.appNameContainer}>
      <Link href='/'>
        <Text style={styles.iText}>i</Text>
        <Text style={styles.recognizeText}>Recognize</Text>
      </Link>
    </View>
    <Link href='/search' style={styles.searchWrapper}>
      <MaterialIcons
        name='search'
        size={MENU_ITEM_SIZE}
        color={COLORS.primary}
      />
    </Link>
    <Link href='/profile' style={styles.myProfileWrapper}>
      <MaterialIcons
        name='account-circle'
        size={MENU_ITEM_SIZE}
        color={COLORS.primary}
      />
    </Link>
  </View>
);

export default Navbar;
