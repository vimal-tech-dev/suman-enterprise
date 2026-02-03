// src/plugins/vuetify.ts
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'medicalPremium',
    themes: {
      medicalPremium: {
        dark: true,
        colors: {
          background: '#020816',
          surface: '#052238',
          primary: '#d4af37', // gold accent
          'primary-darken-1': '#91762b',
          secondary: '#0a4b78', // medical blue
          'secondary-darken-1': '#0d3b5a',
          error: '#f97373',
          info: '#38bdf8',
          success: '#1dbf73',
          warning: '#facc15',
        },
      },
    },
  },
})

export default vuetify
