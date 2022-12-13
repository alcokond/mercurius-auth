import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCameraHome, faHeart, faIcons, faPalette, faPenNib, faTypewriter } from "@fortawesome/pro-light-svg-icons";
import {faArrowRight, facircleuser, faUserCircle, faRocket, faUserAstronaut, faHandHeart } from "@fortawesome/pro-light-svg-icons";

const IconografiaPrincipal = () => (
  <>
  <head>
  <script src="https://kit.fontawesome.com/c2c6803cc4.js" crossorigin="anonymous"></script>
  </head>
    
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Guidelines</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-3">Iconografía</h3>
    <p className="text-button-1 text-justify">Utilizamos los iconos para representar emociones y acciones que se puedan y no se pueden efectuar a modo de advertencia, también los utilizamos para hacer que una acción sea más dinámica y reconocible.</p>
    </div>
    </div>
    
    <div className="padding-marca">
        <div className="mb-3">El uso de iconos facilita la comprensión y nos permite utilizar una cantidad menor de texto, además, los iconos nos permiten llamar la atención de los usuarios sobre una acción o interacción. </div>        
        <div style={{justifyContent: "center", padding:"5%", gap:"10%", marginLeft:"20%", marginRight:"20%"}} className="flex flex-row background-grayscale-4 mb-3">
            <div style={{fontSize: "48px"}}><i class="fak fa-camera-dome-outline"></i></div>
            <div style={{fontSize: "48px"}}><i class="fak fa-camera-dome-filled"></i></div>

        </div>
        <div>Nuestros iconos son ligeros, poseen variaciones que les permiten desempeñar funciones de acuerdo a la acción solicitada, se encuentran ordenados según las acciones que se llevaran a cabo. Puedes encontrar nuestros iconos en nuestra librería de Font Awesome.</div>
        <div style={{fontSize: 31, fontWeight: 600, }}>Tamaño</div>
    </div>
    

  </div>
  
    </>
);

export default IconografiaPrincipal;
