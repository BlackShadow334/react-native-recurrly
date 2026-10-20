# Recurrly

An Expo Router app for tracking recurring subscriptions.

## Project structure

- `src/app/` contains route entry points and navigation layouts.
- `src/features/` contains screen-specific UI and data. Home is organized under
  `src/features/home/`, with its screen, components, and sample subscription
  data kept together.
- `src/components/` contains UI shared by multiple features.
- `src/theme/` contains theme tokens, font families, and persisted theme state.
- `constants/` contains app-wide data and asset references.
- `assets/` contains fonts and images referenced by the app.

The Home screen currently uses example subscription data from
`src/features/home/data/subscriptions.ts`. Replace it with the app's data source
when subscription accounts are connected.

## Development

- `npm start` starts Expo.
- `npm run lint` runs ESLint.
- `npx tsc --noEmit` checks TypeScript.
- `npx expo-doctor` checks the Expo project configuration.
