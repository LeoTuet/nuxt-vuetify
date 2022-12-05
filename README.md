# Vuetify 3 - Nuxt 3 Module

A very simple plugin to make Vuetify 3 work with Nuxt 3

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

To configure Vuetify just put your configuration under the `vuetify` config key

```.ts
export default defineNuxtConfig({
  modules: ['nuxt-vuetify'],
  vuetify: {
    // ...your configuration goes here
  }
})
```

## Develop the Module

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
