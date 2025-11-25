/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    // Couleurs principales
    text: '#11181C',
    background: '#ffffff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    borderColor: '#ccc',
    // UI personnalisée
    navBarBack: '#f0f4f8',              // Couleur de fond de la barre de navigation
    uiTextInputBackColor: '#f9fafb',    // Fond des champs de saisie
    uiTextInputBorder: '#d0d7de',       // Bordure des champs
    uiCardBackground: '#fff',        // Fond des cartes / blocs
    uiCardShadow: 'rgba(0, 0, 0, 0.1)', // Ombre légère
    buttonPrimary: '#0a7ea4',           // Bouton principal
    buttonPrimaryText: '#ffffff',       // Texte sur bouton principal
    buttonSecondary: '#e2e8f0',         // Bouton secondaire
    buttonSecondaryText: '#11181C',     // Texte sur bouton secondaire
    tabIconActiveBackground: "rgba(10, 126, 164, 0.1)", // Fond actif des icônes d'onglet
  },

  dark: {
    // Couleurs principales
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    borderColor: '#444',

    // UI personnalisée
    navBarBack: '#1e1f22',              // Couleur de fond de la barre de navigation
    uiTextInputBackColor: '#2a2b2e',    // Fond des champs de saisie
    uiTextInputBorder: '#3a3b3d',       // Bordure des champs
    uiCardBackground: '#1f2023',        // Fond des cartes
    uiCardShadow: 'rgba(0, 0, 0, 0.5)', // Ombre plus marquée
    buttonPrimary: '#0a84ff',           // Bouton principal (bleu iOS style)
    buttonPrimaryText: '#ffffff',       // Texte sur bouton principal
    buttonSecondary: '#2d2d30',         // Bouton secondaire
    buttonSecondaryText: '#ECEDEE',     // Texte sur bouton secondaire
    tabIconActiveBackground: "#0a84ff30", // Fond actif des icônes d'onglet
  },
};


export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
