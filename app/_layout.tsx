import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import ExpoHorizon from 'expo-horizon-core';

// Check if running on a Horizon device
if (ExpoHorizon.isHorizonDevice) {
  console.log('Running on Meta Horizon OS!');
}

// Check if this is a Horizon build
if (ExpoHorizon.isHorizonBuild) {
  console.log('This is a Horizon build variant');
}

// Access the Horizon App ID
const appId = ExpoHorizon.horizonAppId;
console.log('Horizon App ID:', appId ?? 'Not configured');

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
