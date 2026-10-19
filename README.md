# Recurrly

An Expo Router app for tracking recurring subscriptions.

## Project structure

- `src/app/` contains routes and navigation layouts.
- `src/components/` contains shared interface components.
- `src/theme/` contains theme tokens, font families, and persisted theme state.
- `constants/` contains app data and asset references.
- `assets/` contains fonts and images referenced by the app.

## Development

- `npm start` starts Expo.
- `npm run lint` runs ESLint.
- `npx tsc --noEmit` checks TypeScript.
- `npx expo-doctor` checks the Expo project configuration.

The app uses React Native styles and shared theme tokens; it does not use a
utility-CSS pipeline.
