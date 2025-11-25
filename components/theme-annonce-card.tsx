import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Animated, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";


interface AnnonceProps {
  titre: string;
  description: string;
  date: string;
  categorie: string;
  onPress?: () => void;
}

export default function ThemedAnnonceCard({
  titre,
  description,
  date,
  categorie,
  onPress,
}: AnnonceProps) {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const scale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        style={[
          styles.card,
          {
            backgroundColor: theme.uiCardBackground,
            borderColor: theme.borderColor,
            shadowColor: theme.uiCardShadow,
          },
        ]}
      >
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>
            {titre}
          </Text>
          <View
            style={[
              styles.badge,
              { backgroundColor: theme.tabIconSelected + "22" },
            ]}
          >
            <Text
              style={{
                color: theme.tabIconSelected,
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              {categorie}
            </Text>
          </View>
        </View>

        <Text
          style={[styles.description, { color: theme.text + "AA" }]}
          numberOfLines={2}
        >
          {description}
        </Text>

        <View style={styles.footer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="calendar-outline"
              size={16}
              color={theme.icon + "99"}
              style={{ marginRight: 4 }}
            />
            <Text style={{ color: theme.text + "99", fontSize: 13 }}>
              {date}
            </Text>
          </View>

          <Ionicons
            name="chevron-forward-circle-outline"
            size={22}
            color={theme.icon}
          />
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    marginRight: 10,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
