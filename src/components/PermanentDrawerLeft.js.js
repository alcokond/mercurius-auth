import * as React from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex', height:'0' }} className='drawer'>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar className='alto'/>
        
        <List>
          <ListItem key='Colores' disablePadding>
          <NavLink
              tag={RouterNavLink}
              to="/colores"
              exact
              activeClassName="router-link-exact-active" 
              >
              <ListItemButton className='w-full' >
              
                <ListItemText primary='Colores' className='w-full'/>
                
              </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem key='Tipografia' disablePadding>
            <NavLink
              tag={RouterNavLink}
              to="/tipografia"
              exact
              activeClassName="router-link-exact-active"
              >
              <ListItemButton >
                <ListItemText primary='Tipografía' />
              </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem key='Botones' disablePadding>
            <NavLink
              tag={RouterNavLink}
              to="/botones"
              exact
              activeClassName="router-link-exact-active"
              >
              <ListItemButton href='/botones' >
                <ListItemText primary='Botones' />
              </ListItemButton>
              </NavLink>
            </ListItem>
            
            <ListItem key='Inputs' disablePadding>
            <NavLink
              tag={RouterNavLink}
              to="/inputs"
              exact
              activeClassName="router-link-exact-active"
              >
              <ListItemButton >
                <ListItemText primary='Inputs' />
              </ListItemButton>
              </NavLink>
            </ListItem>
            
            <ListItem key='Formularios' disablePadding>
            <NavLink
              tag={RouterNavLink}
              to="/formularios"
              exact
              activeClassName="router-link-exact-active"
              >
              <ListItemButton >
                <ListItemText primary='Formularios' />
              </ListItemButton>
              </NavLink>
            </ListItem>
            
            {/* <ListItem key='Botones' disablePadding>
            <NavLink
              tag={RouterNavLink}
              to="/botones"
              exact
              activeClassName="router-link-exact-active"
              >
              <ListItemButton href='/botones' >
                <ListItemText primary='Botones' />
              </ListItemButton>
              </NavLink>
            </ListItem> */}
             
          {/* {['Botones', 'Inputs', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        
      </Box> */}
    </Box>
  );
}
