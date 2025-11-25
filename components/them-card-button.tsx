import { Colors } from '@/constants/theme';
import { useRouter } from 'expo-router'; // si tu utilises expo-router
import React from 'react';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';

export default function ThemeCardButton({style, id, children, href}: {style?: object, id?: number, children: React.ReactNode, href?: string}) {
  const router = useRouter();
  const colorScheme = useColorScheme() || 'light';
  const theme = Colors[colorScheme];
  const handlePress = () => {
    // Logique de navigation basée sur l'ID ou autre
    switch(id) {
        case 1: router.push("/(pages)/composition"); break;
        case 2: router.push("/(pages)/devoir"); break;
        case 3: router.push("/(pages)/planning"); break;
        case 4: router.push("/(pages)/matiere"); break;
        case 5: router.push("/(pages)/absence"); break;
        case 6: router.push("/(pages)/paiement"); break;
        case 7: router.push("/(pages)/moyenne"); break;
        case 8: router.push("/(pages)/annonce"); break;
        default: break;
    }
}
  return (
    <Pressable
      onPress={handlePress} // navigation
      style={({ pressed }) => ([{
        backgroundColor:theme.uiCardBackground, // effet de clic
        transform: [{ scale: pressed ? 0.98 : 1 }], // petit zoom out
        borderRadius: 12,
        borderWidth: 1,
        borderColor: pressed ? theme.buttonPrimary : theme.borderColor,
        padding: 20,
        margin: 10,
        shadowColor: theme.uiCardShadow,
        shadowOpacity: 0.1,
        shadowRadius: 5,
      }, style, pressed ? styles.pressed : null,
      ])}
    >
     {children}
    </Pressable>
  );
}
const styles = StyleSheet.create({
    pressed:{
        opacity: 0.65
    }
});