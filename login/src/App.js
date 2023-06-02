import React, { createContext, useState } from 'react';
import LoginForm from './components/LoginForm';

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme === 'dark' ? 'dark' : 'light'}>
        <LoginForm />
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
};

export default App;


