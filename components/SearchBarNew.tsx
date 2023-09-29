import React, { FC } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../colors';
import { MENU_ITEM_SIZE } from '../constants';
import BackButton from './BackButton';

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: COLORS.surface,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLORS.textColor,
    borderBottomWidth: 1
  },
  closeWrapper: {
    padding: 16
  },
  searchInput: {
    flex: 1,
    height: '100%',
    padding: 20,
    fontSize: 24,
    fontWeight: '500'
  }
});

interface Props {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

const SearchBar: FC<Props> = ({ searchQuery, setSearchQuery }) => (
  <View style={styles.searchBar}>
    <BackButton />
    <TextInput
      numberOfLines={1}
      onChangeText={setSearchQuery}
      placeholder='Search for person...'
      style={styles.searchInput}
      value={searchQuery}
    />
    <Pressable onPress={() => setSearchQuery('')} style={styles.closeWrapper}>
      <MaterialIcons
        name='close'
        size={MENU_ITEM_SIZE}
        color={COLORS.primary}
      />
    </Pressable>
  </View>
);

export default SearchBar;
