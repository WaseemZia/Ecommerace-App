import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/Store";

function App() {

  // const getInitialDarkMode=()=>{
  //   const storeDarkMode= localStorage.getItem('darkMode');
  //   return storeDarkMode?JSON.parse(storeDarkMode):true
  // }
  // const[darkMode,setDarkmode]=useState(getInitialDarkMode);


  // const toggleDarkMode=()=>
  // {
  //   localStorage.setItem('darkMode',JSON.stringify(!darkMode))
  //   setDarkmode(!darkMode);
  // }
  const {darkMode}=useAppSelector(state=>state.ui);

  const paletteMode = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteMode,
      background: {
        default: paletteMode === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar/>
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "radial-gradient(circle, #1e3aBa, #111B27)"
            : "radial-gradient(circle, #baecf9, #f0f9ff)",
          py: 6,
        }}
      >
        <Container maxWidth="xl" sx={{ marginTop: 8 }}>
          <Outlet/>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
