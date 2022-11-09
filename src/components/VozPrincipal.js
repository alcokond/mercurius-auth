import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DrawerGuidelines from "./DrawerGuidelines";
import {faArrowRight, facircleuser, faUserCircle, faRocket, faBullhorn, faBullseyeArrow } from "@fortawesome/pro-light-svg-icons";

const VozPrincipal = () => (
  <>
    <DrawerGuidelines></DrawerGuidelines>
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Contenido</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700"}} className="mb-3">Nuestro Tono de Voz</h3>
    <p className="text-button-1 text-justify">A través de nuestra marca buscamos reflejar nuestra identidad, misión, valores y principios.<br></br>  
Establecer nuestra voz y tono nos permiten mantener un estilo de comunicacion acorde a nuestra personalidad. </p>
    </div>
    </div>
    
    <div className="flex flex-col items-center gap-2 padding-marca">
    <div className="flex flex-row space-evenly gap-2 flex-wrap ">
        <div className="flex flex-col icon-card-marca gap-2">
        <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faRocket} /></div>
        <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Voz</div>
        <div>En Xtrim pensamos en los usuarios, en otorgarles la mejor experiencia con nuestros productos y servicios.</div>
      </div>
       <div className="flex flex-col icon-card-marca gap-2">
        <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faRocket} /></div>
        <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Tono</div>
        <div>Nos comunicamos con un tono amigable y respetuoso, mantenemos un lenguaje claro y procuramos que su proceso en nuestras plataformas vistuales sea agradable y fácil.</div>
      </div>
                  
    </div>
    </div>

    {/* <div id="colores" className=" bottom-0 background-neutral-light">
    <div className=" flex flex-row gap-5 padding-voz">
      <div className="flex flex-col justify-center max-w-30">
      <h3 style={{fontSize:"31px", fontWeight:"700"}} className="mb-3 ">Guía de Estilo</h3>
        <p className="text-button-1">Escribir pensando en el usuario. Conocer lo que quiere el usuario y sus necesidades. </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center text-center gap-1">
        <FontAwesomeIcon style={{fontSize:"60px", color:"#4A3CDB"}} icon={faBullhorn} />
        <h1>Ser Informativo</h1>
        </div>
        <div className="flex flex-col items-center text-center gap-1">
        <FontAwesomeIcon style={{fontSize:"60px", color:"#4A3CDB"}} icon={faBullseyeArrow} />
        <h1>Ser Conciso</h1>
        </div>
      </div>
      <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center text-center gap-1">
        <FontAwesomeIcon style={{fontSize:"60px", color:"#4A3CDB"}} icon={faMapLocationDot} />
        <h1>Servir de guía</h1>
        </div>
      <div className="flex flex-col items-center text-center gap-1 ">
        <FontAwesomeIcon style={{fontSize:"60px", color:"#4A3CDB"}} icon={faMessageSmile} />
        <h1>Utilizar lenguaje claro</h1>
        </div>
      </div>
    
    </div>
    </div> */}
    

  </div>
  
    </>
);

export default VozPrincipal;
