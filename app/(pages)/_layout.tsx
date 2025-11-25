import { Colors } from '@/constants/theme';
import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

const Layout = () => {
    const colorScheme = useColorScheme() ?? 'light';
  return (
    <Stack screenOptions={{
            headerStyle: {
                backgroundColor: Colors[colorScheme].background,
            },
            headerTintColor: Colors[colorScheme].text,
            headerTitleStyle: {
                fontSize: 18,
            },
        }}>
        <Stack.Screen name="composition" options={{ headerShown: true,title: 'Composition' }} />
        <Stack.Screen name="devoir" options={{ headerShown: true,title: 'Devoir' }} />
        <Stack.Screen name="paiement" options={{ headerShown: true,title: 'Paiement' }} />
        <Stack.Screen name="absence" options={{ headerShown: true,title: 'Absence' }} />
        <Stack.Screen name="planning" options={{ headerShown: true,title: 'Planning' }} />
        <Stack.Screen name="matiere" options={{ headerShown: true,title: 'Matière' }} />
        <Stack.Screen name="annonce" options={{ headerShown: true,title: 'Annonces' }} />
        <Stack.Screen name="moyenne" options={{ headerShown: true,title: 'Bulletins de note' }} />
    </Stack>
  )
}

export default Layout