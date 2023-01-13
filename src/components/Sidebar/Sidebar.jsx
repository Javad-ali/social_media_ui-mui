import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import Page from "@mui/icons-material/Article";
import Group from "@mui/icons-material/Group";
import Person from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import AccountBox from '@mui/icons-material/AccountBox';
import ModeNight from '@mui/icons-material/ModeNight';
import Switch from '@mui/material/Switch';


const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#page">
            <ListItemIcon>
              <Page />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Groups">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Gropus" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#friends">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#setting">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#profile">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
      
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#setting">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch onChange={e=>setMode(mode ==="light" ? "dark": "light")}/>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
