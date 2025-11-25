import TeacherCard from "@/components/teacher-card";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import React from "react";
import { FlatList, useColorScheme } from "react-native";
interface Teacher {
  id: string;
  image: string;
  nom: string;
  prenom: string;
  tel: string;
  email: string;
  matiere: string;
}
export default function Book() {
  const teachers: Teacher[] = [
    {
      id: "1",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      nom: "Traoré",
      prenom: "Moussa",
      tel: "+33 6 58 23 90 12",
      email: "moussa.traore@ecole.com",
      matiere: "Mathématiques",
    },
    {
      id: "2",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      nom: "Koné",
      prenom: "Aminata",
      tel: "+33 6 41 11 74 32",
      email: "aminata.kone@ecole.com",
      matiere: "Physique-Chimie",
    },
    {
      id: "3",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      nom: "Diallo",
      prenom: "Ibrahim",
      tel: "+33 6 25 47 98 00",
      email: "ibrahim.diallo@ecole.com",
      matiere: "Informatique",
    },
  ];
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedText
        type="subtitle"
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderBottomWidth: 0.4,
          borderBottomColor: theme.borderColor,
        }}
      >
        Les enseignants
      </ThemedText>
      <FlatList
        data={teachers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TeacherCard item={item} />}
        contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
}
