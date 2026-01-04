import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";

const midLinks=[
  {title:"catalog",path:"/catalog"},
  {title:"contact",path:"/contact"},
  {title:"about",path:"/about"},
];

const rightLinks=[
  {title:"login",path:"/login"},
  {title:"register",path:"/register"}
];
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/Store";
import { setDarkMode } from "./uiSlice";
const navStyles = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": {
    color: "grey.5000",
  },
  "&.active": {
    color: "#baecf9",
  },
};


function NavBar() {
  const{isLoading,darkMode}=useAppSelector(state=>state.ui)
  const dispatch=useAppDispatch();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
         <Box sx={{display:'flex', alignItems:'center'}}>
           <Typography component={NavLink} sx={navStyles} to="/" variant="h6">
            RE STORE
          </Typography>
          <IconButton onClick={()=>dispatch(setDarkMode())}>
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
          </IconButton>
         </Box>
          <List sx={{ display: "flex" }}>
            {midLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
          </Box>
        </Toolbar>
        {isLoading &&(
          <Box sx={{width:'100%'}}>
            <LinearProgress color="secondary"/>
          </Box>
        )}
      </AppBar>
    </>
  );
}
export default NavBar;
