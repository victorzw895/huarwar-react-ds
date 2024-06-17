import { defineConfig } from '@pandacss/dev'
import { theme } from './src/styles/tokens'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  strictTokens: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: theme.tokens,
      semanticTokens: theme.semanticTokens,
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
