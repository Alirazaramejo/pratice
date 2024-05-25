// App.js
import React from 'react';
import { ThemeProvider } from './First';
import ThemedComponent from './ThemedComponent';
import ThemeToggleButton from './ThemeToggleButton';

const Main = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Context API Theme Switcher</h1>
        <ThemedComponent />
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
};

export default Main;
