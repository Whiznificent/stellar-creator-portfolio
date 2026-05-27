/**
 * AppNavigator — root navigation tree.
 *
 * Stack:
 *   MainTabs (bottom tabs)
 *     ├── Home
 *     ├── Creators
 *     ├── Bounties
 *     ├── Activity  → ActivityTimelineScreen
 *     └── Profile
 *
 * Modal stack (pushed over tabs):
 *   ├── RatingScreen
 *   ├── ShareScreen
 *   └── LanguageSettings
 */

import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RatingScreen }           from '../screens/RatingScreen';
import { ActivityTimelineScreen } from '../screens/ActivityTimelineScreen';
import { ShareScreen }            from '../screens/ShareScreen';
import { LanguageSettingsScreen } from '../screens/LanguageSettingsScreen';
import { Colors, FontSize, FontWeight } from '../theme/tokens';
import { MainTabParamList, RootStackParamList } from '../types';
import { useI18n } from '../i18n/I18nProvider';

// ─── Placeholder screens ──────────────────────────────────────────────────────

import { View, StyleSheet } from 'react-native';

function PlaceholderScreen({ name }: { name: string }) {
  return (
    <View style={ph.center}>
      <Text style={ph.text}>{name}</Text>
    </View>
  );
}
const ph = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.surface },
  text:   { fontSize: FontSize.xl, color: Colors.textSecondary, fontWeight: FontWeight.semibold },
});

// ─── Navigators ───────────────────────────────────────────────────────────────

const Tab   = createBottomTabNavigator<MainTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MainTabs() {
  const { t } = useI18n();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:   Colors.primary,
        tabBarInactiveTintColor: Colors.textTertiary,
        tabBarStyle: {
          borderTopColor: Colors.border,
          backgroundColor: Colors.background,
        },
        tabBarLabelStyle: {
          fontSize: FontSize.xs,
          fontWeight: FontWeight.medium,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{ title: t('nav.home'), tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🏠</Text> }}
      >
        {() => <PlaceholderScreen name={t('nav.home')} />}
      </Tab.Screen>

      <Tab.Screen
        name="Creators"
        options={{ title: t('nav.creators'), tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>👥</Text> }}
      >
        {() => <PlaceholderScreen name={t('nav.creators')} />}
      </Tab.Screen>

      <Tab.Screen
        name="Bounties"
        options={{ title: t('nav.bounties'), tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>📋</Text> }}
      >
        {() => <PlaceholderScreen name={t('nav.bounties')} />}
      </Tab.Screen>

      <Tab.Screen
        name="Activity"
        options={{ title: t('nav.activity'), tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>⚡</Text> }}
      >
        {() => <ActivityTimelineScreen />}
      </Tab.Screen>

      <Tab.Screen
        name="Profile"
        options={{ title: t('nav.profile'), tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>👤</Text> }}
      >
        {() => <PlaceholderScreen name={t('nav.profile')} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />

        <Stack.Screen
          name="RatingScreen"
          options={{ presentation: 'card' }}
        >
          {({ route }) => (
            <RatingScreen
              creatorId={route.params?.creatorId}
              creatorName={route.params?.creatorName}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="ActivityTimeline"
          options={{ presentation: 'card' }}
        >
          {() => <ActivityTimelineScreen />}
        </Stack.Screen>

        <Stack.Screen
          name="ShareScreen"
          options={{ presentation: 'modal' }}
        >
          {({ route, navigation }) => (
            <ShareScreen
              payload={route.params}
              onClose={() => navigation.goBack()}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="LanguageSettings"
          options={{ presentation: 'card' }}
        >
          {({ navigation }) => (
            <LanguageSettingsScreen onBack={() => navigation.goBack()} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
