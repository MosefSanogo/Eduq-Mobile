import Spacer from '@/components/spacer'
import ThemedFilterBox from '@/components/theme-filter-box'
import ThemeNoteCard from '@/components/theme-note-card'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { Colors } from '@/constants/theme'
import React, { useMemo, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, useColorScheme, View } from 'react-native'

const Devoir = () => {
    const colorScheme = useColorScheme() ?? "light";
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState("");
      const [loader, setLoader] = useState(false);
      const [items, setItems] = useState([
        { label: "Période 1", value: "Période 1" },
        { label: "Période 2", value: "Période 2" },
        { label: "Période 3", value: "Période 3" },
      ]);
      const [notes, setNotes] = useState([
        { id: 1, matiere: "Mathématiques", coef: 4, note: 12, periode: "Période 1" },
        { id: 2, matiere: "Français", coef: 3, note: 15, periode: "Période 1" },
        { id: 3, matiere: "Histoire", coef: 2, note: 9, periode: "Période 2" },
        { id: 4, matiere: "Sciences", coef: 3, note: 14, periode: "Période 1" },
        { id: 5, matiere: "Anglais", coef: 2, note: 11, periode: "Période 2" },
        { id: 6, matiere: "Mathématiques", coef: 4, note: 12, periode: "Période 2" },

      ]);
      const notesFiltered = useMemo(() => {
        setLoader(true);
        if (value === "") {
            setLoader(false);
          return notes;
        }
        setTimeout(() => {
          setLoader(false);
        }, 1000);
        return notes.filter((note) => note.periode === value);
      }, [value, notes]);
  return (
    <ThemedView
      style={{
        flex: 1,
        borderTopWidth: 0.65,
        borderTopColor: Colors[colorScheme].borderColor,
      }}
    >
      <ThemedFilterBox
        name="Filtrer par Période"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />

      <Spacer  height={10} />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            borderWidth: 0.2,
            borderTopColor: Colors[colorScheme].borderColor,
            borderBottomColor: Colors[colorScheme].borderColor,
            paddingVertical: 10,
          }}
        >
          <ThemedText type="defaultSemiBold" style={{ color: Colors[colorScheme].text + "88" }}>Matières</ThemedText>
          <ThemedText type="defaultSemiBold" style={{ color: Colors[colorScheme].text + "88" }}>Coef</ThemedText>
          <ThemedText type="defaultSemiBold" style={{ color: Colors[colorScheme].text + "88" }}>Note</ThemedText>
        </View>
        {loader ? (<ActivityIndicator size="large" color={Colors[colorScheme].tint} style={{ marginVertical: 50 }} />) : (
          notesFiltered.map((item) => (
            <ThemeNoteCard key={item.id} item={item} />
          ))
        )}
      </ScrollView>
    </ThemedView>
  )
}

export default Devoir

const styles = StyleSheet.create({})