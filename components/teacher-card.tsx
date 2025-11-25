import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";
interface Teacher {
  id: string;
  image: string;
  nom: string;
  prenom: string;
  tel: string;
  email: string;
  matiere: string;
}
const TeacherCard = ({ item }: { item: Teacher }) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.uiCardBackground,
          borderColor: theme.borderColor,
        },
      ]}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.name, { color: theme.text }]}>
          {item.prenom} {item.nom}
        </Text>
        <View style={styles.row}>
          <Ionicons name="call-outline" size={16} color={theme.icon} />
          <Text style={[styles.detail, { color: theme.icon }]} selectable>
            {item.tel}
          </Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="mail-outline" size={16} color={theme.icon} />
          <Text style={[styles.detail, { color: theme.icon }]} selectable>
            {item.email}
          </Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="book-outline" size={16} color={theme.icon} />
          <Text style={[styles.subject, { color: theme.tint }]}>
            {item.matiere}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TeacherCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  detail: {
    fontSize: 14,
    marginLeft: 6,
  },
  subject: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
});
