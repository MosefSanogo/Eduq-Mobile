import ThemeMat from "@/components/theme-mat";
import ThemedSearchBar from "@/components/theme-search-box";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
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
  const matsFilter = mats.filter(v=>v.name.toUpperCase().includes(search.toUpperCase()));
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
        { matsFilter.length > 0 ? matsFilter.map((mat) => (
          <ThemeMat key={mat.id} item={mat} />
        )) : <ThemedView style={
          {
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 15,
            marginTop: 30
          }
        }>
          <Ionicons
            name="search-outline"
            size={30}
            color={Colors[colorScheme].icon}
            />
          <ThemedText type="subtitle" >Aucune matière trouvée</ThemedText>
        </ThemedView>
}
      </ScrollView>
    </ThemedView>
  );
};

export default Matiere;

const styles = StyleSheet.create({});
