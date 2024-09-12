import React, { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                background: {
                  default: '#ffffff',
                  paper: '#f5f5f5',
                },
                text: {
                  primary: '#000000',
                  secondary: '#333333',
                },
              }
            : {
                background: {
                  default: '#121212',
                  paper: '#1d1d1d',
                },
                text: {
                  primary: '#ffffff',
                  secondary: '#bbbbbb',
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
