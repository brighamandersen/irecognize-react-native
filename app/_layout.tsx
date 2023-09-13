import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../Navbar';
import COLORS from '../colors';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  content: {
    backgroundColor: COLORS.background,
    flexGrow: 1
  }
});

const Layout: FC = () => (
  <>
    <StatusBar backgroundColor={COLORS.primary} />
    <SafeAreaView style={styles.safeAreaView}>
      <Navbar />
      <View style={styles.content}>
        <Slot />
      </View>
    </SafeAreaView>
  </>
);

export default Layout;
