import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export default function ThemedAbsenceCard({
  item,
  colorScheme = "light",
}: {
  item:any
  colorScheme?: "light" | "dark";
}) {
  // 🎨 Couleur dynamique selon le type
  const getStatusColor = () => {
    switch (item.type) {
      case "présent":
        return "#4CAF50"; // Vert
      case "retard":
        return "#FFC107"; // Jaune
      case "absence":
        return "#F44336"; // Rouge
      default:
        return Colors[colorScheme].tint;
    }
  };

  const getStatusIcon = () => {
    switch (item.type) {
      case "présent":
        return "checkmark-circle";
      case "retard":
        return "time";
      case "absence":
        return "close-circle";
      default:
        return "alert-circle";
    }
  };

  return (
    <ThemedView
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
        borderRadius: 16,
        backgroundColor: Colors[colorScheme].uiCardBackground,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Partie gauche : infos cours */}
      <View>
        <ThemedText type="subtitle" style={{ fontWeight: "600" }}>
          {item.matiere}
        </ThemedText>
        <ThemedText
          type="default"
          style={{ opacity: 0.8, fontSize: 13, marginTop: 2 }}
        >
          {item.date}
        </ThemedText>
      </View>

      {/* Partie droite : statut */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: getStatusColor() + "20",
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 20,
        }}
      >
        <Ionicons
          name={getStatusIcon()}
          size={18}
          color={getStatusColor()}
          style={{ marginRight: 6 }}
        />
        <ThemedText
          type="defaultSemiBold"
          style={{
            color: getStatusColor(),
            textTransform: "capitalize",
          }}
        >
          {item.type}
        </ThemedText>
      </View>
    </ThemedView>
  );
}
