import { Colors } from "@/constants/theme";
import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, useColorScheme, View } from "react-native";

export default function ThemeLoader() {
  const rotation = useRef(new Animated.Value(0)).current;
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotation]);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={[styles.container, { backgroundColor: "transparent" }]}>
      <Animated.View
        style={[
          styles.loader,
          {
            borderColor: theme.tint,
            borderTopColor: "transparent",
            transform: [{ rotate: spin }],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loader: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 4,
  },
});
