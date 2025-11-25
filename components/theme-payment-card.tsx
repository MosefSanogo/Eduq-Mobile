import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, useColorScheme, View } from "react-native";

export default function ThemedPaymentCard({
  type,
  montant,
  date,
  mois,
  onPress,
}: {
  type: string;
  montant: string;
  date: string;
  mois: string;
  onPress?: () => void;
}) {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: theme.uiCardBackground,
          borderColor: theme.borderColor,
          shadowColor: theme.uiCardShadow,
          transform: [{ scale: isPressed ? 0.98 : 1 }],
        },
      ]}
    >
      {/* Icône + Type de paiement */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="card-outline"
            size={26}
            color={theme.tabIconSelected}
          />
        </View>
        <View style={{ flex: 1 }}>
          <ThemedText type="defaultSemiBold" style={styles.typeText}>
            {type}
          </ThemedText>
          <ThemedText type="default" style={{ color: theme.text + "99" }}>
            {mois}
          </ThemedText>
        </View>
        <ThemedText
          type="defaultSemiBold"
          style={[styles.amount, { color: theme.tabIconSelected }]}
        >
          {montant} €
        </ThemedText>
      </View>

      {/* Ligne inférieure */}
      <View style={styles.bottomRow}>
        <Ionicons
          name="calendar-outline"
          size={18}
          color={theme.icon}
          style={{ marginRight: 6 }}
        />
        <ThemedText type="default" style={{ color: theme.text + "99" }}>
          Payé le {date}
        </ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: "#0a7ea41a",
    padding: 10,
    borderRadius: 12,
    marginRight: 10,
  },
  typeText: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd3",
    paddingTop: 6,
  },
});
