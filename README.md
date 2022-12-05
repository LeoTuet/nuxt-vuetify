# Nuxt Vuetify Module

A very simple plugin to make Vuetify work with Nuxt

## How to use

```bash
npm install nuxt-vuetify
```

add the following to your `nuxt.config.ts`

```.ts
export default defineNuxtConfig({
  modules: ['nuxt-vuetify']
})
```

## How to configure Vuetify

To configure Vuetify just put your configuration under the `nuxtVuetify` configkey

```.ts
export default defineNuxtConfig({
  modules: ['nuxt-vuetify'],
  nuxtVuetify: {
    // ...your configuration goes here
  }
})
```

## Develop the Module

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
