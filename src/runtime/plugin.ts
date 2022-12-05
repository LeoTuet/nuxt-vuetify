import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ...useRuntimeConfig()?.public?.vuetify
  })

  nuxtApp.vueApp.use(vuetify)
})
