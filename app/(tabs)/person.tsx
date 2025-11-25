import ThemeCardButton from "@/components/them-card-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Pressable, useColorScheme, View } from "react-native";

export default function Person() {
  const data = [
    {
      id: 1,
      label: "Composition",
      icon: "school-outline",
      link: "/(pages)/composition",
    }, // 📘 examens / évaluation
    {
      id: 2,
      label: "Note Devoir",
      icon: "create-outline",
      link: "/(pages)/devoir",
    }, // ✏️ écriture / devoirs
    {
      id: 3,
      label: "Planning",
      icon: "calendar-outline",
      link: "/(pages)/planning",
    }, // 📅 emploi du temps
    { id: 4, label: "Matière", icon: "book-outline", link: "/(pages)/matiere" }, // 📚 cours / matières
    {
      id: 5,
      label: "Absences",
      icon: "alert-circle-outline",
      link: "/(pages)/absence",
    }, // 🚫 avertissement / absences
    {
      id: 6,
      label: "Paiements",
      icon: "card-outline",
      link: "/(pages)/paiement",
    }, // 💳 paiements / factures
    {
      id: 7,
      label: "Moyenne",
      icon: "stats-chart-outline",
      link: "/(pages)/moyenne",
    },
    {
      id: 8,
      label: "Annonces",
      icon: "megaphone-outline",
      link: "/(pages)/annonces",
    },
  ];

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <ThemedView
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 20,
          paddingBottom: 10,
          borderBottomWidth: 0.4,
          borderBottomColor: theme.borderColor,
        }}
      >
        <ThemedText type="subtitle">Portail</ThemedText>

        <Pressable onPress={() => {}}>
          <View style={{ position: "relative" }}>
            <Ionicons
              name="notifications-outline"
              size={28}
              color={theme.tabIconDefault}
            />
            {/* Badge rouge */}
            <View
              style={{
                position: "absolute",
                top: -5,
                right: -5,
                backgroundColor: "#e53935",
                borderRadius: 8,
                width: 20,
                height: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ThemedText
                style={{
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: "bold",
                  marginBottom: 3,
                }}
              >
                3
              </ThemedText>
            </View>
          </View>
        </Pressable>

        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/12.jpg" }}
          style={{
            width: 40,
            height: 40,
            objectFit: "cover",
            borderRadius: 20,
            borderWidth: 2,
            borderColor: theme.borderColor,
          }}
        />
      </ThemedView>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 20,
          alignItems: "center",
        }}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 50,
          alignItems: "center",
          paddingTop: 10,
        }}
        renderItem={({ item }) => (
          <ThemeCardButton
            style={{ width: "45%", alignItems: "center", gap: 10,shadowColor: "#000",
            shadowOpacity: 0.1,elevation: 2, }}
            id={item.id}
          >
            <Ionicons name={item.icon as any} size={24} color={theme.icon} />
            <ThemedText type="default">{item.label}</ThemedText>
          </ThemeCardButton>
        )}
        keyExtractor={(item) => item.id + ""}
      />
    </ThemedView>
  );
}
