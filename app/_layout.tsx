import { Colors } from '@/constants/theme';
import UserProvider from '@/context/userContext';
import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import Toast from "react-native-toast-message";

export default function Layout() {
    const colorScheme = useColorScheme() ?? 'light';
  return (
    <UserProvider>
    <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'light-content'} />
    <Stack screenOptions={{
        headerStyle: {
            backgroundColor: Colors[colorScheme].background,
        },
        headerTintColor: Colors[colorScheme].text,
        headerTitleStyle: {
            fontSize: 18,
        },
      }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(pages)" options={{ headerShown: false }} />
      </Stack>
      <Toast />
    </UserProvider>
  )
}
