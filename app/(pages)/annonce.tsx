import ThemedAnnonceCard from "@/components/theme-annonce-card";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import React from "react";
import { ScrollView, StyleSheet, useColorScheme } from "react-native";

const Annonce = () => {
  const colorScheme = useColorScheme() ?? "light";
  const annonces = [
    {
      titre: "Interruption des cours vendredi",
      description:
        "Les cours seront suspendus ce vendredi en raison de la journée culturelle.",
      date: "10 Octobre 2025",
      categorie: "Important",
    },
    {
      titre: "Résultats du second trimestre",
      description:
        "Les bulletins seront disponibles en ligne dès lundi prochain.",
      date: "8 Octobre 2025",
      categorie: "Information",
    },
    {
      titre: "Tournoi de football inter-classes",
      description:
        "Les inscriptions sont ouvertes jusqu’au 15 octobre à la vie scolaire.",
      date: "6 Octobre 2025",
      categorie: "Activité",
    },
  ];
  return (
    <ThemedView
      style={{
        flex: 1,
        borderTopWidth: 0.65,
        borderTopColor: Colors[colorScheme].borderColor,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 10 }}>
        {annonces.map((a, index) => (
          <ThemedAnnonceCard key={index} {...a} />
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default Annonce;

const styles = StyleSheet.create({});
