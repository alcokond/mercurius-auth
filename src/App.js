import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/Componentes";
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
            <div>
            <Sidebar />
            <Route path="/profile" component={Profile} />
            <Route path="/codificacion" component={ExternalApi} />
            <Route path="/colores" component={Colores} />
            <Route path="/guidelines" component={Guidelines} />
            <Route path="/espaciado" component={Espaciado} />
            <Route path="/tipografia" component={Tipografia} />
            <Route path="/marca" component={Marca} />
            <Route path="/voz" component={Voz} />
            <Route path="/mision" component={Mision} />
            <Route path="/promesa" component={Promesa} />
            <Route path="/personalidad" component={Personalidad} />
            <Route path="/contenido" component={Contenido} />

            </div>
          </Switch>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
