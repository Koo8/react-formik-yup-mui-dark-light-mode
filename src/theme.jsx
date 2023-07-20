/** For toggle theme */

import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { blue, blueGrey, grey, lightGreen } from "@mui/material/colors";


export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const colorAndThemeSetting = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
        primary: blue,
        secondary: lightGreen,
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: blueGrey,
          background: {
            default: blueGrey[900],
            paper: blueGrey[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});


export const useMode = () => {
    const [mode, setMode] = useState('dark');
    const colorModeValue = useMemo(() => {
        return {
            toggleColorMode: () => 
                setMode(pre => (pre === 'dark')
                    ? 'light' : 'dark'),
            
        }
    }, []);
    const theme = createTheme(colorAndThemeSetting(mode));

    return [theme, colorModeValue];
}