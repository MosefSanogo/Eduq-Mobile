import ThemeButton from "@/components/theme-button";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import React, { useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import Toast from "react-native-toast-message";

const Planning = () => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  const [loader, setLoader] = useState(false);
    const onPress = () => {
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
        Toast.show({
          type: "success",
          text1: "Planning",
          text2: "Planning a été  avec succès.",
          position: "top",
        });
      }, 2000);
    };
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
        name="Télécharger le Planning"
        onPress={onPress}
        style={[
          styles.card,
          {
            backgroundColor: theme.uiCardBackground,
            borderColor: theme.borderColor,
            shadowColor: theme.uiCardShadow,
          },
        ]}
        loader={loader}
        iconName="download-outline"
        iconSize={24}
        textStyle={{color: theme.text}}
        iconColor={theme.text}
      />
    </ThemedView>
  );
};

export default Planning;

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
