// src/plugins/vuetify.ts
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'sumanDark',
    themes: {
      sumanDark: {
        dark: true,
        colors: {
          background: '#020617', // overall background
          surface: '#020617', // cards / sheets
          primary: '#22c55e', // emerald
          'primary-darken-1': '#16a34a',
          secondary: '#38bdf8', // soft blue accent (small details only)
          error: '#f97373',
          info: '#38bdf8',
          success: '#22c55e',
          warning: '#facc15',
        },
      },
    },
  },
})

export default vuetify
