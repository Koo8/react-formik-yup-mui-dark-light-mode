
import Form from './Form';
import { Box, Typography, ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useMode, ColorModeContext } from './theme';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import IconButton from "@mui/material/IconButton";

function App() {
  // call custome hook for theme can toggle function
  const [theme, colorModeValue] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorModeValue}> {/** context create to make the toggleColor method  accessible for whole app */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box m="30px" display="flex" gap="20px" flexDirection="column">
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h3">Create User</Typography>
            <IconButton onClick={colorModeValue.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          </Box>
          <Form />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;