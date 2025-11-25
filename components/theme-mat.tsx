import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "./themed-text";

const ThemeMat = ({ style, item }: { style?: object; item: any }) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      onPress={() => {}}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={({ pressed }) => [
        {
          backgroundColor: isPressed ? theme.uiCardBackground : theme.background,
          transform: [{ scale: isPressed ? 0.97 : 1 }],
          paddingVertical: 18,
          paddingHorizontal: 22,
          marginHorizontal: 16,
          marginVertical: 6,
          borderRadius: 14,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: 0.8,
          borderColor: theme.borderColor,
        },
        style,
      ]}
    >
      {/* Texte principal (nom de la matière) */}
      <ThemedText
        type="defaultSemiBold"
        style={{
          fontSize: 16,
          width: "60%",
          color: theme.text,
          letterSpacing: 0.3,
        }}
      >
        {item.name}
      </ThemedText>

      {/* Coefficient */}
      <ThemedText
        type="default"
        style={{
          fontSize: 14,
          width: "20%",
          textAlign: "center",
          color: theme.text + "99",
        }}
      >
        Coef {item.coef}
      </ThemedText>

      {/* Icône flèche */}
      
      <Ionicons
        name="arrow-forward-circle-outline"
        size={26}
        color={theme.icon}
        style={{
          opacity: isPressed ? 0.6 : 1,
          transform: [{ translateX: isPressed ? 8 : 0 }],
        }}
      />
    </Pressable>
  );
};

export default ThemeMat;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.65,
  },
});
