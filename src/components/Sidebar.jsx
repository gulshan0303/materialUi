import React from "react";
import { Box } from "@mui/system";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Sidebar = ({mode,setMode}) => {
  return (
    <Box p={2} flex={1} sx={{display: {xs:"none" , sm:"block"}}}>
      <Box position="fixed">
            <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
           
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                <AutoStoriesIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketplaces">
              <ListItemIcon>
                <AddBusinessIcon/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
           
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friend">
              <ListItemIcon>
                <Diversity3Icon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#setting">
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>
           
          <ListItem disablePadding>
            <ListItemButton component="a" href="#darkmode">
              <ListItemIcon>
               <ModeNightIcon/>
              </ListItemIcon>
              <Switch defaultChecked  onChange={(e) => setMode(mode === 'light'? 'dark' : 'light')}/>
            </ListItemButton>
          </ListItem>
          
          
          </List>
          </Box>
          
    </Box>
  );
};

export default Sidebar;
