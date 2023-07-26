import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const COLORS = {
  primary: '#577399',
  secondary: '#BDD5EA',
  accent: '#FF3366',
  textColor: '#495867',
  surface: '#FFFFFF',
  background: '#F7F7F7'
};

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.appBar}>
        <View style={styles.appNameContainer}>
          <Text style={styles.iText}>i</Text>
          <Text style={styles.recognizeText}>Recognize</Text>
        </View>
        <TouchableOpacity style={styles.searchWrapper}>
          <MaterialIcons name='search' size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <View style={styles.myProfileWrapper}>
          <MaterialIcons
            name='account-circle'
            size={24}
            color={COLORS.primary}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text>Content</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'yellow',
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
  },
  content: {
    backgroundColor: COLORS.background
    // flexGrow: 1
    // height: 200
  }
});
