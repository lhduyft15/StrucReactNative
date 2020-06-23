/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeComponent from 'components/organisms/HomeComponent'
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <HomeComponent />
    </SafeAreaView>
  );
};
export default App;
