import { Colors } from '@/constants/theme';
import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';

const ThemeCard = ({children, style}: {children: React.ReactNode, style?: any}) => {
    const colorScheme = useColorScheme() || 'light';
    const theme = Colors[colorScheme];
  return (
    <View style={[{
        backgroundColor: theme.uiCardBackground,
        borderRadius: 10,
        padding: 15,
        shadowColor: theme.uiCardShadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    }, style]}>
      {children}
    </View>
  )
}

export default ThemeCard

const styles = StyleSheet.create({})