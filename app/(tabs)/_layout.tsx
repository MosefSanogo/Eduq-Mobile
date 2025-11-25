import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View, useColorScheme } from "react-native";

export default function Layout() {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBarBack,
          height: 140,
          paddingTop: 8,
          borderTopColor: theme.borderColor,
          borderTopWidth: 0.4,
        },
        tabBarActiveTintColor: theme.tabIconSelected,
        tabBarInactiveTintColor: theme.tabIconDefault,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 6,
          marginTop: 10,
        },
        // ✅ effet de fond actif + arrondi
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}
    >
      {/* --- Onglet Accueil --- */}
      <Tabs.Screen
        name="person"
        options={{
          title: "Accueil",
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                backgroundColor: focused
                  ? theme.tabIconActiveBackground
                  : "transparent",
                padding: 8,
                borderRadius: 35,
                width: 60,
                height: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={20}
                color={color}
              />
            </View>
          ),
        }}
      />

      {/* --- Onglet Profs --- */}
      <Tabs.Screen
        name="book"
        options={{
          title: "Profs",
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                backgroundColor: focused
                  ? theme.tabIconActiveBackground
                  : "transparent",
                padding: 8,
                borderRadius: 35,
                width: 60,
                height: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={focused ? "people" : "people-outline"}
                size={20}
                color={color}
              />
            </View>
          ),
        }}
      />

      {/* --- Onglet Compte --- */}
      <Tabs.Screen
        name="create"
        options={{
          title: "Compte",
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                backgroundColor: focused
                  ? theme.tabIconActiveBackground
                  : "transparent",
                padding: 8,
                borderRadius: 35,
                width: 60,
                height: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={20}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
