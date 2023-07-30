import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navbar from './Navbar';
import COLORS from './colors';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  content: {
    backgroundColor: COLORS.background,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const App = () => (
  <>
    <StatusBar backgroundColor={COLORS.primary} />
    <SafeAreaView style={styles.safeAreaView}>
      <Navbar />
      <View style={styles.content}>
        <Text>Content</Text>
      </View>
    </SafeAreaView>
  </>
);

export default App;
