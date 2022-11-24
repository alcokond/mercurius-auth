import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faRocket, faUserAstronaut, faHandHeart } from "@fortawesome/pro-light-svg-icons";
import Sidebar from "./Sidebar";

const GuiaDeEstilo = () => (
  <>
    
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Contenido</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-2">Guía de estilo</h3>
    <p className="text-button-1 text-justify">Escribir pensando en el usuario, nos permitirá generar “sentido de pertenencia”.<br></br>
Planteamos nuestra comunicación a modo que nos permita establecer cercanía y familiaridad con el usuario. Nos identificamos con su necesidad de velocidad, por eso creamos procesos cortos y ágiles. </p>
    </div>
    </div>
    
    <div className="flex flex-col gap-2 padding-marca">
    
    
    </div>
    

  </div>
  
    </>
);

export default GuiaDeEstilo;