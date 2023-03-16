import React from "react";
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faRocket, faUserAstronaut, faHandHeart, faPalette, faText, faCircleStar } from "@fortawesome/pro-light-svg-icons";

const GuidelinesPrincipal = () => (
    <>
    <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className="mb-3">Guidelines</h3>
    <p className="text-button-1 text-justify">Encontrarás los elementos visuales necesarios para empezar a desarrollar experiencias de usuario accesibles e intuitivas. Establecimos nuestros colores, tipografía, iconografía y accesibilidad.</p>
    </div>
    </div>
    
    <div style={{gridTemplateColumns: "1fr 1fr", gap: "5vh"}} className="grid padding-marca">
    <NavLink
                to="/mercurius/colores"
                exact
                style={{ textDecoration: 'none' }}
                >
    <div className="flex flex-col icon-card gap-2">
    <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faPalette} /></div>
    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Colores</div>
    <div style={{fontWeight: "500", color: "#27344E", fontSize: "16px"}} className="text-justify">Los colores nos representan, nos distinguen y nos permiten crear una marca fuerte y reconocida.</div>
    </div>
    </NavLink>
    <NavLink
                to="/mercurius/tipografia"
                exact
                style={{ textDecoration: 'none' }}
                >
    <div className="flex flex-col icon-card gap-2">
    <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faText} /></div>
    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Tipografía</div>
    <div style={{fontWeight: "500", color: "#27344E", fontSize: "16px"}} className="text-justify">Usamos un estilo de fuente acorde a nuestra voz y tono.</div>
    </div>
    </NavLink>            
    <NavLink
                to="/mercurius/iconografia"
                exact
                style={{ textDecoration: 'none' }}
                >
    <div className="flex flex-col icon-card gap-2">
    <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faCircleStar} /></div>
    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Iconografía</div>
    <div style={{fontWeight: "500", color: "#27344E", fontSize: "16px"}} className="text-justify">Utilizamos los iconos para representar emociones y acciones que se puedan y no se pueden efectuar.</div>
    </div>
    </NavLink>             
    
    </div>
    

  </div>
    </>
  );
  
  export default GuidelinesPrincipal;
  