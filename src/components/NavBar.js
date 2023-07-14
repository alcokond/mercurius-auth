import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom';

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: "https://www.xtrim.com.ec/mercurius/",
      //returnTo: "http://localhost:3001/mercurius",
    });
  const location = useLocation();
  return (
    
    <div className="nav-container no-margin z-3 nav-sticky w-full">
      <Navbar className="bg-navbar"  sticky="top" light expand="md">
      {/* {isAuthenticated && (
        <MuiSidebar />
        )} */}
        
        <Container className="no-margin">
          
          <NavbarBrand className="logo-mercurius" href="/mercurius"/>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              
              
              
              {isAuthenticated && (
                <>
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/mercurius/marca"
                    exact
                    activeClassName="text-navbar-focused"
                    className="text-navbar"
                  >
                    Marca
                  </NavLink>
                </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/mercurius/guidelines"
                  exact
                  activeClassName=" text-navbar-focused"
                  className="text-navbar"
                >
                  Guidelines
                </NavLink>
              </NavItem>
                <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/mercurius/contenido"
                  exact
                  activeClassName="text-navbar-focused"
                  className="text-navbar"
                >
                  Contenido
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/mercurius/componentes"
                  exact
                  activeClassName=" text-navbar-focused"
                  className="text-navbar"
                >
                  Componentes
                </NavLink>
              </NavItem>
              </>
                
              )}


              
              
            </Nav>
            <Nav className="d-none d-md-block nav right-nav" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="transparent"
                    className="button-main-primary-medium2"
                    onClick={() => loginWithRedirect()}
                  >
                    Iniciar sesión
                  </Button>
                </NavItem>
              )}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar  >
                  <DropdownToggle nav caret id="profileDropDown" >
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="30"
                    />
                  </DropdownToggle>
                  <DropdownMenu style={{marginRight: "170"}}>
                    <DropdownItem header>{user.name}</DropdownItem>
                    
                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Cerrar sesión
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isAuthenticated && (
              <Nav className="d-md-none" navbar>
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Ingresar
                  </Button>
                </NavItem>
              </Nav>
            )}
            {isAuthenticated && (
            
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170, marginRight: "auto" }}
              >
                <NavItem >
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                    />
                    <h6 className="d-inline-block">{user.name}</h6>
                  </span>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="power-off" className="mr-3" />
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Cerrar sesión
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
    
  );
};

export default NavBar;
