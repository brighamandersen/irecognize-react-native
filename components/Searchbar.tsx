import React, { FC } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../colors';
import { Link } from 'expo-router';

const MENU_ITEM_SIZE = 30;

const styles = StyleSheet.create({
  searchbar: {
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
  backWrapper: {
    paddingLeft: 16
  },
  searchInput: {
    flex: 1,
    height: '100%',
    padding: 16,
    fontSize: 20,
    fontWeight: '500'
  }
});

interface Props {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

const Searchbar: FC<Props> = ({ searchQuery, setSearchQuery }) => (
  <View style={styles.searchbar}>
    <Link href='/' style={styles.backWrapper}>
      <MaterialIcons
        name='arrow-back'
        size={MENU_ITEM_SIZE}
        color={COLORS.primary}
      />
    </Link>
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

export default Searchbar;
