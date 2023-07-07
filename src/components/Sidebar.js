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
  const [open4, setOpen4] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
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
                to="/mercurius/marca"
                exact
                activeClassName="active-sidebar" 
                style={{ textDecoration: 'none' }}
                className="navlink"
                >Marca</NavLink>
              </ListItemText>
              {open ? <ExpandLess onClick={handleClick} /> : <ExpandMore onClick={handleClick} />}
              </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/objetivo"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Objetivo' />
                        
                      </ListItemButton>
                    </NavLink>
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/promesa"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Promesa' />
                        
                      </ListItemButton>
                    </NavLink>
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/personalidad"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
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
                to="/mercurius/guidelines"
                exact
                activeClassName="active-sidebar" 
                style={{ textDecoration: 'none' }}
                className="navlink"
                >Guidelines</NavLink>
              </ListItemText>
              {open2 ? <ExpandLess onClick={handleClick2} /> : <ExpandMore onClick={handleClick2} />}
              </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/colores"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Colores' />
                        
                      </ListItemButton>
                    </NavLink>
                    
                    
                    
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/espaciado"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Espaciado y rejillas' />
                        
                      </ListItemButton>
                    </NavLink>

                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/tipografia"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Tipografía' />
                        
                      </ListItemButton>
                    </NavLink>

                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/iconografia"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Iconografía' />
                        
                      </ListItemButton>
                    </NavLink>
                    
                    
                    
                  </List>
                </Collapse>
              <Divider />
              <ListItemButton >
              <ListItemText>
                <NavLink
                to="/mercurius/contenido"
                exact
                activeClassName="active-sidebar" 
                style={{ textDecoration: 'none' }}
                className="navlink"
                >Contenido</NavLink>
              </ListItemText>
              {open3 ? <ExpandLess onClick={handleClick3} /> : <ExpandMore onClick={handleClick3} />}
              </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/voz"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Voz y Tono' />
                        
                      </ListItemButton>
                    </NavLink>
                    
                    
                    
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/guia"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Guía de estilo' />
                        
                      </ListItemButton>
                    </NavLink>

                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/escritura"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Estilo de escritura' />
                        
                      </ListItemButton>
                    </NavLink>
                    
                    
                    
                  </List>
                </Collapse>
                <Divider />
                <ListItemButton >
              <ListItemText>
                <NavLink
                to="/mercurius/componentes"
                exact
                activeClassName="active-sidebar" 
                style={{ textDecoration: 'none' }}
                className="navlink"
                >Componentes</NavLink>
              </ListItemText>
              {open4 ? <ExpandLess onClick={handleClick4} /> : <ExpandMore onClick={handleClick4} />}
              </ListItemButton>
            <Collapse in={open4} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/breadcrumbs"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Breadcrumbs' />
                        
                      </ListItemButton>
                    </NavLink>
                    
                    
                    
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/button"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Button' />
                        
                      </ListItemButton>
                    </NavLink>

                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/checkbox"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Checkbox' />
                        
                      </ListItemButton>
                    </NavLink>
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/dropdown"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Dropdown' />
                        
                      </ListItemButton>
                    </NavLink>
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/input"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Input' />
                        
                      </ListItemButton>
                    </NavLink>
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/radiobutton"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Radiobutton' />
                        
                      </ListItemButton>
                    </NavLink>
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/tab"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Tab' />
                        
                      </ListItemButton>
                    </NavLink>
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/toast"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Toast' />
                        
                      </ListItemButton>
                    </NavLink>
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/slider"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Slider' />
                        
                      </ListItemButton>
                    </NavLink>
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/toggle"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton sx={{ pl: 4 }} >
                      
                        <ListItemText primary='Toggle' />
                        
                      </ListItemButton>
                    </NavLink>
                    
                    
                    
                  </List>
                </Collapse>
                {/* <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/toast"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton >
                      
                        <ListItemText primary='Breadcrumbs' />
                        
                      </ListItemButton>
                    </NavLink>
                    <Divider />
                <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/button"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton >
                      
                        <ListItemText primary='Button' />
                        
                      </ListItemButton>
                    </NavLink>
                    <Divider />
                <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/checkbox"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton >
                      
                        <ListItemText primary='Checkbox' />
                        
                      </ListItemButton>
                    </NavLink>
                    <Divider />
                <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/dropdown"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton >
                      
                        <ListItemText primary='Dropdown' />
                        
                      </ListItemButton>
                    </NavLink>
                    <Divider />
                <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/input"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton >
                      
                        <ListItemText primary='Input' />
                        
                      </ListItemButton>
                    </NavLink>
                    <Divider />
                <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/radiobutton"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton >
                      
                        <ListItemText primary='Radiobutton' />
                        
                      </ListItemButton>
                    </NavLink>
                    <Divider />
                <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/toast"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton >
                      
                        <ListItemText primary='Toast' />
                        
                      </ListItemButton>
                    </NavLink>
                    <Divider />
                <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/slider"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton >
                      
                        <ListItemText primary='Slider' />
                        
                      </ListItemButton>
                    </NavLink>
                    <Divider />
                <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/toggle"
                      exact
                      activeClassName="active-sidebar" 
                      style={{ textDecoration: 'none' }}
                className="navlink" 
                      >
                      <ListItemButton >
                      
                        <ListItemText primary='Toggle' />
                        
                      </ListItemButton>
                    </NavLink> */}
                    

        </List>
        <Divider />
      </Drawer>
      
    </Box>
  );
}
