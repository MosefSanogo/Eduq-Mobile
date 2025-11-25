import ThemedPaymentCard from "@/components/theme-payment-card";
import ThemedSearchBar from "@/components/theme-search-box";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, useColorScheme } from "react-native";

const Paiement = () => {
  const colorScheme = useColorScheme() ?? "light";
  const [search, setSearch] = useState("");
  const paiements = [
    {
      type: "Frais de scolarité",
      montant: "50",
      date: "10 Mars 2025",
      mois: "Mars 2025",
    },
    { type: "Cantine", montant: "25", date: "2 Mars 2025", mois: "Mars 2025" },
    {
      type: "Transport",
      montant: "40",
      date: "28 Février 2025",
      mois: "Février 2025",
    },
  ];
  const filterPaie = paiements.filter(p=>{
    if(p.type.toLowerCase().includes(search.toLowerCase())||p.date.toLowerCase().includes(search.toLowerCase())
    ||p.mois.toLowerCase().includes(search.toLowerCase())){
        return true
      }

      return false
  })
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
        Mes Paiements
      </ThemedText>
      <ThemedSearchBar value={search} onChangeText={setSearch} />
      <ScrollView
        contentContainerStyle={{ padding: 10 }}
        showsVerticalScrollIndicator={false}
        style={{ zIndex: -1000 }}
      >
        {filterPaie.length > 0 ? filterPaie.map((p, i) => (
          <ThemedPaymentCard key={i} {...p} />
        )) :(
          <ThemedView
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 15,
              marginTop: 30,
            }}
          >
            <Ionicons
              name="search-outline"
              size={30}
              color={Colors[colorScheme].icon}
            />
            <ThemedText type="subtitle">Aucune matière trouvée</ThemedText>
          </ThemedView>
        )} 
      </ScrollView>
    </ThemedView>
  );
};

export default Paiement;

const styles = StyleSheet.create({});
