import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export interface NuxtVuetifyOptions {}

export default defineNuxtModule<NuxtVuetifyOptions>({
  meta: {
    name: 'nuxt-vuetify',
    configKey: 'nuxtVuetify'
  },
  setup: (_, nuxt) => {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.build.transpile.push('vuetify')
    nuxt.options.css.push('vuetify/lib/styles/main.sass')
    nuxt.options.css.push('@mdi/font/css/materialdesignicons.css')
    addPlugin(resolve(runtimeDir, 'plugin'))
  }
})
