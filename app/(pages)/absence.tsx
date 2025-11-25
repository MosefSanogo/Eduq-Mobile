import ThemedAbsenceCard from "@/components/theme-absence-card";
import ThemedFilterBox from "@/components/theme-filter-box";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import React, { useState } from "react";
import { ScrollView, StyleSheet, useColorScheme } from "react-native";

const Absence = () => {
  const colorScheme = useColorScheme() ?? "light";
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    { label: "Présent", value: "Présent" },
    { label: "Absence", value: "Absence" },
    { label: "Retard", value: "Retard" },
  ]);
  const absences = [
    { id: 1, matiere: "Math", date: "12 Janvier 2025", type: "présent" },
    { id: 2, matiere: "ECM", date: "10 Février 2025", type: "retard" },
  ];
  return (
    <ThemedView
      style={{
        flex: 1,
        borderTopWidth: 0.65,
        borderTopColor: Colors[colorScheme].borderColor,
      }}
    >
      <ThemedFilterBox
        name="Filtrer"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <ScrollView
        contentContainerStyle={{ padding: 10 }}
        showsVerticalScrollIndicator={false}
        style={{ zIndex: -1000 }}
      >
        {absences.map((item, i) => (
          <ThemedAbsenceCard key={i} item={item} colorScheme={colorScheme} />
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default Absence;

const styles = StyleSheet.create({});
