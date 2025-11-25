import Spacer from '@/components/spacer';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
        <ThemedText type="title">Bienvenue sur Eduq</ThemedText>
        <Spacer height={20} />
        <Link href="/person">
          <ThemedText type="link">Se connecter</ThemedText>
        </Link>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

