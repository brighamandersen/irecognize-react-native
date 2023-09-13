import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from './colors';
import { Link } from 'expo-router';

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
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.accent
  },
  recognizeText: {
    fontSize: 30,
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

const Navbar: FC = () => (
  <View style={styles.appBar}>
    <View style={styles.appNameContainer}>
      <Link href='/'>
        <Text style={styles.iText}>i</Text>
        <Text style={styles.recognizeText}>Recognize</Text>
      </Link>
    </View>
    <Link href='/search' style={styles.searchWrapper}>
      <MaterialIcons name='search' size={24} color={COLORS.primary} />
    </Link>
    <Link href='/profile' style={styles.myProfileWrapper}>
      <MaterialIcons name='account-circle' size={24} color={COLORS.primary} />
    </Link>
  </View>
);

export default Navbar;
