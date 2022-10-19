import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useAuth0 } from "@auth0/auth0-react";

export default props => {
  return (

  
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/acciones">
        Acciones
      </a>
      <a className="menu-item" href="/formularios">
        Formularios
      </a>
    </Menu>
  );
};