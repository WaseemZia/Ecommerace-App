import { useEffect, useState } from "react";
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const[darkMode,setDarkmode]=useState(true);

  useEffect(() => {
    fetch("https://localhost:5001/api/Product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleDarkMode=()=>
  {
    setDarkmode(!darkMode);
  }

  const paletteMode = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteMode,
      background: {
        default: paletteMode === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  // const addProduct = () => {
  //   setProducts(prevState => [
  //     ...prevState,
  //     {
  //       id: prevState.length + 1,
  //       name: "Product" + (prevState.length + 1),
  //       price: prevState.length * 100 + 100,
  //       description: "Test description",
  //       pictureUrl: "https://via.placeholder.com/150",
  //       type: "Test type",
  //       brand: "Test brand",
  //       quantityInStock: 10
  //     }
  //   ]);
  // };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleDarkMode={toggleDarkMode}  darkMode={darkMode}/>
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
          {/* <Box sx={{ display:"flex", justifyContent:'center', marginY:3 }}>
          <Typography variant='h4'>Re Store</Typography>
          <Button variant="contained" onClick={addProduct}>Add Product</Button>
        </Box> */}

          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
