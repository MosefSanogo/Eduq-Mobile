import ThemeButton from "@/components/theme-button";
import ThemeCard from "@/components/theme-card";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, useColorScheme } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function Create() {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  const [loader, setLoader] = useState(false);
  const onPressLogout = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      Toast.show({
        type: "success",
        text1: "Déconnexion réussie",
        text2: "Vous avez été déconnecté avec succès.",
        position: "top",
      });
    }, 2000);
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      {/* Header */}
      <ThemedText type="subtitle" style={styles.header}>
        Mon compte
      </ThemedText>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Carte Profil */}
        <ThemeCard
          style={[
            styles.profileCard,
            { backgroundColor: theme.uiCardBackground, borderColor: theme.borderColor },
          ]}
        >
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/12.jpg" }}
            style={styles.profileImage}
          />
          <ThemedText type="subtitle" style={{ flexShrink: 1 }}>
            Ibrahim Diallo
          </ThemedText>
        </ThemeCard>

        {/* Infos Classe & Matricule */}
        <ThemedView style={styles.row}>
          <ThemedView style={styles.infoBlock}>
            <ThemedText type="default">Classe</ThemedText>
            <ThemeCard style={{ borderWidth: 1, borderColor: theme.borderColor }}>
              <ThemedText type="defaultSemiBold">Terminale S</ThemedText>
            </ThemeCard>
          </ThemedView>

          <ThemedView style={styles.infoBlock}>
            <ThemedText type="default">Matricule</ThemedText>
            <ThemeCard style={{ borderWidth: 1, borderColor: theme.borderColor }}>
              <ThemedText type="defaultSemiBold">123456</ThemedText>
            </ThemeCard>
          </ThemedView>
        </ThemedView>

        {/* Infos Date & Lieu */}
        <ThemedView style={styles.singleInfo}>
          <ThemedText type="default">Date et lieu de naissance</ThemedText>
          <ThemeCard style={{ borderWidth: 1, borderColor: theme.borderColor }}>
            <ThemedText type="defaultSemiBold">
              15 Mars 2004, Le Havre
            </ThemedText>
          </ThemeCard>
        </ThemedView>

        {/* Bouton Déconnexion */}
        <ThemeButton
          name="Se déconnecter"
          onPress={onPressLogout}
          style={[
            styles.logoutButton,
            { backgroundColor:  "#e53935" },
          ]}
          loader={loader}
          iconName="log-out-outline"
          iconSize={24}
        />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 32,
    marginBottom: 16,
    fontSize: 22,
    fontWeight: "600",
  },
  profileCard: {
    marginHorizontal: 20,
    padding: 20,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
    borderWidth: 1,
    borderRadius: 16,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  row: {
    paddingHorizontal: 20,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  infoBlock: {
    flex: 1,
    gap: 5,
  },
  singleInfo: {
    paddingHorizontal: 20,
    marginTop: 15,
    gap: 5,
  },
  logoutButton: {
    marginTop: 40,
    marginHorizontal: 20,
  },
});
