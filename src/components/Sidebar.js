import * as React from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const drawerWidth = 240;

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };

  function handleClick()

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
              <ListItemButton onClick={handleClick}>
              <ListItemText primary="Guidelines" />
              {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/colores"
                      exact
                      activeClassName="router-link-exact-active" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Colores' />
                        
                      </ListItemButton>
                    </NavLink>
                    
                    </ListItem>
                    <ListItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/tipografia"
                      exact
                      activeClassName="router-link-exact-active" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Tipografía' />
                        
                      </ListItemButton>
                    </NavLink>
                    
                    </ListItem>
                    
                  </List>
                </Collapse>
              <ListItemButton onClick={handleClick2}>
              <ListItemText primary="Acciones" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/botones"
                      exact
                      activeClassName="router-link-exact-active" 
                      
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Botones' />
                        
                      </ListItemButton>
                    </NavLink>
                    
                    </ListItem>
                    
                  </List>
                </Collapse>
            <ListItem key='Tipografía' disablePadding>
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

            <ListItem key='Espaciado' disablePadding>
            <NavLink
              tag={RouterNavLink}
              to="/espaciado"
              exact
              activeClassName="router-link-exact-active"
              >
              <ListItemButton >
                <ListItemText primary='Espaciado' />
              </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem key='Voz' disablePadding>
            <NavLink
              tag={RouterNavLink}
              to="/voz"
              exact
              activeClassName="router-link-exact-active"
              >
              <ListItemButton >
                <ListItemText primary='Voz' />
              </ListItemButton>
              </NavLink>
            </ListItem>

        </List>
        <Divider />
      </Drawer>
      
    </Box>
  );
}
