import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Componentes from "./views/Componentes";
import Colores from "./views/Colores";
import Espaciado from "./views/Espaciado";
import Guidelines from "./views/Guidelines";
import Voz from "./views/Voz";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";



// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";

import Tipografia from "./views/Tipografia";
import Marca from "./views/Marca";
import Mision from "./views/Mision"
import Promesa from "./views/Promesa";
import Personalidad from "./views/Personalidad";
import Contenido from "./views/Contenido";
import Sidebar from "./components/Sidebar";
import Guia from "./views/Guia";
import { Fragment } from "react";
import Escritura from "./views/Escritura";


initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  
  const {
    isAuthenticated,
  } = useAuth0();
  
  return (
    <Router history={history}>
      
      <div id="app" className="d-flex flex-column h-100">
        
        <NavBar sticky="top" />
        <div className="flex-grow-1 margin-contenido ">
        
          <Switch>
            <Route path="/" exact component={Home} />
            {isAuthenticated && (
            <Fragment>
            <Sidebar />
            <Route path="/profile" component={Profile} />
            <Route path="/componentes" component={Componentes} />
            <Route path="/colores" component={Colores} />
            <Route path="/guidelines" component={Guidelines} />
            <Route path="/espaciado" component={Espaciado} />
            <Route path="/tipografia" component={Tipografia} />
            <Route path="/marca" component={Marca} />
            <Route path="/voz" component={Voz} />
            <Route path="/objetivo" component={Mision} />
            <Route path="/promesa" component={Promesa} />
            <Route path="/personalidad" component={Personalidad} />
            <Route path="/contenido" component={Contenido} />
            <Route path="/guia" component={Guia} />
            <Route path="/escritura" component={Escritura} />
            </Fragment>
            )}
          </Switch>
        
        </div>
        
        
      </div>
    </Router>
  );
};

export default App;
