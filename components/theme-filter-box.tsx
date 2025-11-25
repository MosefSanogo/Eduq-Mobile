import { Colors } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, useColorScheme, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { ThemedText } from './themed-text'
type Props = {
    name: string;
    placeholder?: string;
    open: boolean;
    value: string;
    items: {label: string; value: string}[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    setItems: React.Dispatch<React.SetStateAction<{label: string; value: string}[]>>;
}
const ThemedFilterBox = ({name, placeholder, open, value, items, setOpen, setValue, setItems }: Props) => {
    const colorScheme = useColorScheme() ?? "light";
  return (
    <View style={{ paddingHorizontal: 20 }}>
        {/* Titre + icône filtre */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Ionicons name="filter" size={24} color={Colors[colorScheme].icon} />
          <ThemedText style={{ marginLeft: 6 }}>{name}</ThemedText>
        </View>

        {/* Dropdown stylé */}
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          searchable={true}
          placeholder={placeholder || "Sélectionner une option"}
          searchPlaceholder="Rechercher..."
          searchPlaceholderTextColor={Colors[colorScheme].text + "88"}
          style={{
            borderColor: open
              ? Colors[colorScheme].tint
              : Colors[colorScheme].borderColor,
            backgroundColor: Colors[colorScheme].uiCardBackground,
            width: "85%",
            borderRadius: 10,
            minHeight: 50,
          }}
          dropDownContainerStyle={{
            borderColor: Colors[colorScheme].borderColor,
            backgroundColor: Colors[colorScheme].uiCardBackground,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 5,
            width: "85%",
            borderRadius: 10,
          }}
          textStyle={{
            color: Colors[colorScheme].text,
            fontSize: 16,
            fontWeight: "500",
          }}
          placeholderStyle={{
            color: Colors[colorScheme].text + "88",
            fontStyle: "italic",
          }}
          listItemLabelStyle={{
            color: Colors[colorScheme].text,
            fontSize: 16,
          }}
          selectedItemLabelStyle={{
            color: Colors[colorScheme].tint,
            fontWeight: "bold",
          }}
          selectedItemContainerStyle={{
            backgroundColor: Colors[colorScheme].buttonPrimary + "22",
          }}
          searchTextInputStyle={{
            borderColor: Colors[colorScheme].borderColor,
            backgroundColor: Colors[colorScheme].uiTextInputBackColor,
            color: Colors[colorScheme].text,
            borderRadius: 8,
            fontSize: 15,
            paddingLeft: 12,
          }}
          TickIconComponent={() => (
            <Ionicons
              name="checkmark"
              size={20}
              color={Colors[colorScheme].tint}
            />
          )}
          ArrowDownIconComponent={() => (
            <Ionicons
              name="chevron-down"
              size={20}
              color={Colors[colorScheme].icon}
            />
          )}
          ArrowUpIconComponent={() => (
            <Ionicons
              name="chevron-up"
              size={20}
              color={Colors[colorScheme].icon}
            />
          )}
          zIndex={1000}
        />
      </View>
  )
}

export default ThemedFilterBox

const styles = StyleSheet.create({})