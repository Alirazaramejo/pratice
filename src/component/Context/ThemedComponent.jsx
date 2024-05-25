// ThemedComponent.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedComponent = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    light: {
      backgroundColor: '#fff',
      color: '#000',
      padding: '20px',
      textAlign: 'center',
    },
    dark: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles[theme]}>
      <p>The current theme is {theme}</p>
    </div>
  );
};

export default ThemedComponent;
