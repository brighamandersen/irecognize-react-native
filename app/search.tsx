import { FC, Fragment } from 'react';
import { Text, View } from 'react-native';
import Navbar from '../Navbar';

const Search: FC = () => (
  <Fragment>
    <Navbar shouldShowBackButton />
    <View>
      <Text>Search</Text>
    </View>
  </Fragment>
);

export default Search;
