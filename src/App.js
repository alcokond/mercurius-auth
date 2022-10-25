import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import Colores from "./views/Colores";
import Guidelines from "./views/Guidelines";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import Sidebar from "./components/Sidebar";
import MuiSidebar from "./components/MuiSidebar";


// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import { ProSidebarProvider } from "react-pro-sidebar";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft.js";
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
        
        {/* {isAuthenticated && (
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        )} */}
        <div className="flex-grow-1 margin-contenido ">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/codificacion" component={ExternalApi} />
            <Route path="/colores" component={Colores} />
            <Route path="/guidelines" component={Guidelines} />


          </Switch>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
