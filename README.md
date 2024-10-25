# use-darkmode

![GitHub Repo stars](https://img.shields.io/github/stars/joassanon/use-darkmode?style=social)
![npm](https://img.shields.io/npm/v/use-darkmode?style=plastic)
![GitHub](https://img.shields.io/github/license/joassanon/use-darkmode?style=plastic)
![npm](https://img.shields.io/npm/dy/use-darkmode?style=plastic)
![npm](https://img.shields.io/npm/dw/use-darkmode?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/joassanon/use-darkmode?style=plastic)

A flexible and easy-to-use React hook for implementing dark mode in your applications. This package provides a simple way to toggle between light, dark, and system preference themes.

## Features

- **Easy Integration**: Quickly add dark mode functionality to your React applications.
- **System Preference Support**: Automatically detects and applies the user's system preference for light or dark mode.
- **Manual Override**: Allows users to manually switch between light and dark modes, overriding system preferences.
- **Persistent Theme**: Saves the user's theme preference, persisting it across page reloads.
- **TypeScript Support**: Fully typed for better developer experience and code safety.
- **Context-based**: Uses React Context for efficient theme management across your entire application.
- **SSR Compatible**: Works seamlessly with server-side rendered applications.
- **Minimal Dependencies**: Built with minimal external dependencies for a lighter package footprint.

## Installation

Install the package using npm:

```bash
npm install use-darkmode
```

Or using yarn:

```bash
yarn add use-darkmode
```

## Usage

1. Wrap your application with the `DarkModeProvider`:

```jsx
import { DarkModeProvider } from 'use-darkmode';

function App() {
  return (
    <DarkModeProvider>
      {/* Your app components */}
    </DarkModeProvider>
  );
}
```

2. Use the `useDarkmode` hook in your components:

```jsx
import { useDarkmode } from 'use-darkmode';

function ThemeToggle() {
  const { mode, changeMode } = useDarkmode();

  return (
    <button onClick={() => changeMode(mode === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
}
```

## API

### DarkModeProvider

A React component that provides the dark mode context to its children.

### useDarkmode

A custom hook that returns an object with the following properties:

- `mode`: The current theme mode ('light', 'dark', or 'system').
- `modes`: An array of available modes.
- `changeMode`: A function to change the current mode.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.