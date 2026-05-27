/**
 * Stellar Mobile — app entry point.
 *
 * Wraps the entire tree with:
 *   - GestureHandlerRootView  (react-native-gesture-handler)
 *   - I18nProvider            (locale + RTL)
 *   - AppNavigator            (navigation tree)
 */

import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { I18nProvider } from './i18n/I18nProvider';
import { AppNavigator } from './navigation/AppNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <I18nProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </I18nProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
