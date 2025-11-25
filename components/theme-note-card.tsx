import { Colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "./themed-text";
type Props = {
  item: any;
};
const ThemeNoteCard = ({ item }: Props) => {
    const colorScheme = useColorScheme() ?? "light";
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        borderBottomWidth: 0.2,
        borderBottomColor: Colors[colorScheme].borderColor,
        paddingVertical: 10,
      }}
    >
      <ThemedText type="default" style={{ flex: 1,width: 150 }}>{item.matiere}</ThemedText>
      <ThemedText type="default" style={{ width: 100,  }}>{item.coef}</ThemedText>
      <ThemedText
        type="default"
        style={{
          fontWeight: "bold",
          backgroundColor: item.note >= 10 ? "#4caf50" : "#e53935",
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 4,
          color: "#fff",
          width: 50,
          textAlign: "center",
        }}
      >
        {item.note}
      </ThemedText>
    </View>
  );
};

export default ThemeNoteCard;

const styles = StyleSheet.create({});
