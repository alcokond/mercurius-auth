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

  
  return (
    <Box sx={{ display: 'flex', height:'0' }} className='drawer'>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          marginTop: 1
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar className='alto'/>
        
        <List>
        <ListItemButton >
              <ListItemText>
                <NavLink
                to="/marca"
                exact
                activeClassName="active-sidebar" 
                style={{ textDecoration: 'none' }}
                >Marca</NavLink>
              </ListItemText>
              {open ? <ExpandLess onClick={handleClick} /> : <ExpandMore onClick={handleClick} />}
              </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <NavLink
                      tag={RouterNavLink}
                      to="/objetivo"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }} 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Objetivo' />
                        
                      </ListItemButton>
                    </NavLink>
                    <NavLink
                      tag={RouterNavLink}
                      to="/promesa"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }} 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Promesa' />
                        
                      </ListItemButton>
                    </NavLink>
                    <NavLink
                      tag={RouterNavLink}
                      to="/personalidad"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }} 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Personalidad' />
                        
                      </ListItemButton>
                    </NavLink>
                    
                    
                    
                  </List>
                </Collapse>
              <Divider />
              <ListItemButton >
              <ListItemText>
                <NavLink
                to="/guidelines"
                exact
                activeClassName="active-sidebar" 
                style={{ textDecoration: 'none' }}
                >Guidelines</NavLink>
              </ListItemText>
              {open2 ? <ExpandLess onClick={handleClick2} /> : <ExpandMore onClick={handleClick2} />}
              </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    
                    <NavLink
                      tag={RouterNavLink}
                      to="/colores"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }} 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Colores' />
                        
                      </ListItemButton>
                    </NavLink>
                    
                    
                    
                    <NavLink
                      tag={RouterNavLink}
                      to="/tipografia"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }} 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Tipografía' />
                        
                      </ListItemButton>
                    </NavLink>
                    
                    
                    
                  </List>
                </Collapse>
        </List>
        <Divider />
      </Drawer>
      
    </Box>
  );
}
