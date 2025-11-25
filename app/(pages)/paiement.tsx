import ThemedPaymentCard from "@/components/theme-payment-card";
import ThemedSearchBar from "@/components/theme-search-box";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
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
        {paiements.map((p, i) => (
          <ThemedPaymentCard key={i} {...p} />
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default Paiement;

const styles = StyleSheet.create({});
