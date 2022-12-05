import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
      returnTo: window.location.origin,
    });

  return (
    
    <div style={{height:"20%"}} className="nav-container no-margin z-3 nav-sticky w-full">
      <Navbar className="bg-navbar " sticky="top" light expand="md">
      {/* {isAuthenticated && (
        <MuiSidebar />
        )} */}
        
        <Container className="no-margin">
          
          <NavbarBrand className="logo-mercurius" href="/"/>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              
              
              
              {isAuthenticated && (
                <>
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/marca"
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
                  to="/contenido"
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
                  to="/guidelines"
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
                  to="/componentes"
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
            <Nav className="d-none d-md-block nav" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin"
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
                style={{ minHeight: 170 }}
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
