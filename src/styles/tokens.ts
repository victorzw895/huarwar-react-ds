import { themeColors } from './colors'

import { defineTokens, defineSemanticTokens } from '@pandacss/dev'

export const theme = {
  tokens: defineTokens({
    colors: {
      primary: {
        lighter: { value: themeColors.primaryLighter },
        light: { value: themeColors.primaryLight },
        default: { value: themeColors.primaryDefault },
        dark: { value: themeColors.primaryDark },
        darker: { value: themeColors.primaryDarker },
      },
      secondary: { value: themeColors.secondary1 },
      accent: { value: themeColors.accent1 },
      background: { value: themeColors.neutralWhite },
      lineColor: { value: themeColors.neutralMid },
    },
    fonts: {
      body: { value: 'system-ui, sans-serif' },
    },
    spacing: {
      none: { value: '0px' },
      '0.5x': { value: '0.5rem' },
      '1x': { value: '1rem' },
      '1.5x': { value: '1.5rem' },
      '2x': { value: '2rem' },
      '2.5x': { value: '2.5rem' },
      '3x': { value: '3rem' },
      '3.5x': { value: '3.5rem' },
      '4x': { value: '4rem' },
      '4.5x': { value: '4.5rem' },
      '5x': { value: '5rem' },
      '5.5x': { value: '5.5rem' },
      '6x': { value: '6rem' },
      '7x': { value: '7rem' },
      '8x': { value: '8rem' },
      '9x': { value: '9rem' },
      '10x': { value: '10rem' },
      '11x': { value: '11rem' },
      '12x': { value: '12rem' },
    },
  }),
  semanticTokens: defineSemanticTokens({
    colors: {
      default: {
        value: {
          light: themeColors.neutralLight,
          dark: themeColors.neutralDark,
        },
      },
      success: {
        value: {
          light: themeColors.systemSuccessLight,
          dark: themeColors.systemSuccessDark,
        },
      },
      error: {
        value: {
          light: themeColors.systemErrorLight,
          dark: themeColors.systemErrorDark,
        },
      },
      warning: {
        value: {
          light: themeColors.systemWarningLight,
          dark: themeColors.systemWarningDark,
        },
      },
      info: {
        value: {
          light: themeColors.systemInfoLight,
          dark: themeColors.systemInfoDark,
        },
      },
    },
  }),
}
