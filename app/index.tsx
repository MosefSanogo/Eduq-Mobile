import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)/person");
    }, 1500);

    // Cleanup function pour éviter les fuites mémoire
    return () => clearTimeout(timer);
  }, [router]); // Dépendance router ajoutée

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Bienvenue sur Eduq</ThemedText>
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