import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../colors';
import { Link } from 'expo-router';
import { MENU_ITEM_SIZE } from '../constants';
import BackButton from './BackButton';

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: COLORS.surface,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLORS.textColor
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
  }
});

interface Props {
  shouldShowBackButton?: boolean;
  shouldShowBottomBorder?: boolean;
}

const Navbar: FC<Props> = ({
  shouldShowBackButton,
  shouldShowBottomBorder
}) => (
  <View
    style={{
      ...styles.appBar,
      borderBottomWidth: shouldShowBottomBorder ? 1 : 0
    }}
  >
    {shouldShowBackButton && <BackButton />}
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
