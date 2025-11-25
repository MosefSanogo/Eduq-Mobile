import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Animated, StyleSheet, Text, useColorScheme, View } from "react-native";


interface PlanningProps {
  jour: string;
  heureDebut: string;
  heureFin: string;
  matiere: string;
}

export default function ThemedPlanningCard({
  jour,
  heureDebut,
  heureFin,
  matiere,
}: PlanningProps) {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];
  const fadeAnim = new Animated.Value(0);
  const translateY = new Animated.Value(15);

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.card,
        {
          backgroundColor: theme.uiCardBackground,
          borderColor: theme.borderColor,
          shadowColor: theme.uiCardShadow,
          opacity: fadeAnim,
          transform: [{ translateY }],
        },
      ]}
    >
      <View style={styles.header}>
        <Ionicons
          name="calendar-outline"
          size={20}
          color={theme.tabIconSelected}
        />
        <Text style={[styles.jour, { color: theme.text }]}>{jour}</Text>
      </View>

      <View style={styles.body}>
        <Text
          style={[
            styles.matiere,
            { color: theme.tabIconSelected, fontWeight: "600" },
          ]}
        >
          {matiere}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Ionicons name="time-outline" size={18} color={theme.icon + "AA"} />
          <Text style={[styles.time, { color: theme.text + "AA" }]}>
            {heureDebut} - {heureFin}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderWidth: 1,
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 6,
  },
  jour: {
    fontSize: 16,
    fontWeight: "600",
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  matiere: {
    fontSize: 15,
  },
  time: {
    fontSize: 14,
  },
});
