import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faIcons, faPalette, faPenNib, faTypewriter } from "@fortawesome/pro-light-svg-icons";
import {faArrowRight, facircleuser, faUserCircle, faRocket, faUserAstronaut, faHandHeart } from "@fortawesome/pro-light-svg-icons";
import { NavLink } from 'react-router-dom';
import button from "../assets/button.png";

const Button = () => (
  <>
    
  
  <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6" style={{position:"relative"}} >
    <div className="padding-componente flex flex-col">
    <h6 className="text-overline">Acciones</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-3">Button</h3>
    <p className="text-button-1 text-justify">Los botones son parte esencial de la interfaz, actúan como guía para el usuario, ya que indican el proceso a realizar.</p>
    
    </div>
    <div className=" selector-componente" style={{borderBottom:"solid 4px #EBECF0", width:"100%"}}>
      <div className="padding-componente flex flex-row gap-2" style={{marginBottom:"-3px"}}>
        <button className="size-2 size-option-focused" >Uso</button>
        <button className="size-2 size-option">Código</button>
      </div>
      
    </div>
    </div>
    
    <div className=" padding-marca">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Uso
    </p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>La función de los botones es señalar acciones, permitiendo al usuario continuar navegando por la interfaz. Se utilizan también como parte de componentes que ayudan a iniciar y concluir procesos.</p>
    <br></br>
    <p style={{color: "#222D44",fontWeight:600, fontSize:"16px", lineHeight:"22px"}}>¿Qué rol cumplen los botones?</p>      
    <br></br>
    <p>
    <li>Indican la acción que se va a realizar.</li>
    <li>Permiten completar procesos.</li>
    <li>Permiten al usuario avanzar y continuar moviendose por la interfaz.</li>
    <li>Funcionan como un llamado a la acción (call to action).</li>
    <li>Suelen utilizar iconos para reforzar el significado de la acción que indica el botón.</li>
    </p>
    <br></br>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Anatomía
    </p>
    <div></div>
    <img src={button}></img>
    </div>

    
    

  </div>
  
    </>
);

export default Button;
