
import React, { createContext } from 'react';
import LoginForm from './components/LoginForm';  

export const ThemeContext = createContext();

const App = () => {
  const theme = 'dark'; // Change this value to 'light' for light theme

  return (
    <ThemeContext.Provider value={theme}>
      <LoginForm />
    </ThemeContext.Provider>
  );
};

export default App;

