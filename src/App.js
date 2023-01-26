import React, {useState} from "react";
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
import Iconografia from "./views/Iconografia";
import Intro from "./views/Intro.jsx";
import IntroAlt from "./views/IntroAlt.tsx";
import Modales from "./views/Modales";
import Button from "./components/Button";


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
  
  const [showOtherComponent, setShowOtherComponent] = useState(true);
  return (
    <Router history={history}>
      
      <div id="app" className="d-flex flex-column h-100">
        
        <NavBar sticky="top" />
        
        <div className="flex-grow-1 ">
        
          <Switch>
            <Route path="/mercurius" exact component={Home} />
            <Route path="/mercurius/intro2" component={IntroAlt} />
            {isAuthenticated && (
            <Fragment>
            <Sidebar />
            <Route path="/mercurius/profile" component={Profile} />
            <Route path="/mercurius/componentes" component={Componentes} />
            <Route path="/mercurius/modales" component={Modales} />
            <Route path="/mercurius/colores" component={Colores} />
            <Route path="/mercurius/guidelines" component={Guidelines} />
            <Route path="/mercurius/espaciado" component={Espaciado} />
            <Route path="/mercurius/tipografia" component={Tipografia} />
            <Route path="/mercurius/marca" component={Marca} />
            <Route path="/mercurius/voz" component={Voz} />
            <Route path="/mercurius/objetivo" component={Mision} />
            <Route path="/mercurius/promesa" component={Promesa} />
            <Route path="/mercurius/personalidad" component={Personalidad} />
            <Route path="/mercurius/contenido" component={Contenido} />
            <Route path="/mercurius/guia" component={Guia} />
            <Route path="/mercurius/escritura" component={Escritura} />
            <Route path="/mercurius/iconografia" component={Iconografia} />
            <Route path="/mercurius/intro" component={Intro} />
            <Route path="/mercurius/button" component={Button} />

            </Fragment>
            )}
          </Switch>
          
        
        </div>
        
        
      </div>
    </Router>
  );
};

export default App;
