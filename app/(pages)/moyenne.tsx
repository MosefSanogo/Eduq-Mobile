import ThemeButton from "@/components/theme-button";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import React, { useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import Toast from "react-native-toast-message";

const Moyenne = () => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  const [activeLoader, setActiveLoader] = useState<string | null>(null);
  return (
    <ThemedView
      style={{
        flex: 1,
        borderTopWidth: 0.65,
        borderTopColor: Colors[colorScheme].borderColor,
        paddingTop: 20,
      }}
    >
      <ThemeButton
        name="Bulletin du 1er Trimestre"
        onPress={() => {
          setActiveLoader("t2");
          setTimeout(() => {
            setActiveLoader(null);
            Toast.show({
              type: "success",
              text1: "Planning",
              text2: "Bulletin du 2ème trimestre téléchargé avec succès.",
              position: "top",
            });
          }, 2000);
        }}
        loader={activeLoader === "t2"}
        style={[
          styles.card,
          {
            backgroundColor: theme.uiCardBackground,
            borderColor: theme.borderColor,
            shadowColor: theme.uiCardShadow,
          },
        ]}
        iconName="download-outline"
        iconSize={24}
        textStyle={{color: theme.text}}
        iconColor={theme.text}
      />
      <ThemeButton
        name="Bulletin du 2ème Trimestre"
        onPress={() => {
          setActiveLoader("t1");
          setTimeout(() => {
            setActiveLoader(null);
            Toast.show({
              type: "success",
              text1: "Planning",
              text2: "Bulletin du 1er trimestre téléchargé avec succès.",
              position: "top",
            });
          }, 2000);
        }}
        loader={activeLoader === "t1"}
        style={[
          styles.card,
          {
            backgroundColor: theme.uiCardBackground,
            borderColor: theme.borderColor,
            shadowColor: theme.uiCardShadow,
          },
        ]}
        iconName="download-outline"
        iconSize={24}
        textStyle={{color: theme.text}}
        iconColor={theme.text}
      />
    </ThemedView>
  );
};

export default Moyenne;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
});
