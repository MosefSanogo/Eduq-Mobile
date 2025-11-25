import ThemeMat from "@/components/theme-mat";
import ThemedSearchBar from "@/components/theme-search-box";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import React, { useState } from "react";
import { ScrollView, StyleSheet, useColorScheme } from "react-native";

const Matiere = () => {
  const colorScheme = useColorScheme() ?? "light";
  const [mats, setMats] = useState([
    { id: 1, name: "Mathématiques", coef: 4 },
    { id: 2, name: "Français", coef: 3 },
    { id: 3, name: "Histoire", coef: 2 },
    { id: 4, name: "Sciences", coef: 3 },
    { id: 5, name: "Anglais", coef: 2 },
  ]);
  const [search, setSearch] = useState("");
  return (
    <ThemedView
      style={{
        flex: 1,
        borderTopWidth: 0.65,
        borderTopColor: Colors[colorScheme].borderColor,
      }}
    >
      <ThemedText
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: Colors[colorScheme].text,
          margin: 8,
          paddingHorizontal: 10,
        }}
      >
        Liste des Matières
      </ThemedText>
      <ThemedSearchBar value={search} onChangeText={setSearch} />
      <ScrollView>
        {mats.map((mat) => (
          <ThemeMat key={mat.id} item={mat} />
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default Matiere;

const styles = StyleSheet.create({});
