import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faRocket, faUserAstronaut, faHandHeart } from "@fortawesome/pro-light-svg-icons";
import Sidebar from "./Sidebar";

const ContenidoPrincipal = () => (
  <>
    
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-3">Contenido</h3>
    <p className="text-button-1 text-justify">En nuestra guía de contenido encontrarás nuestro voz y tono, consejos de estilo y gramática. Usamos un lenguaje claro, preciso para que nuestras palabras sean exactas y entendibles.</p>
    </div>
    </div>
    
    <div style={{gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", rowGap: "4%", columnGap: "2%"}} className="grid padding-marca">
    
    <div className="flex flex-col icon-card gap-2">
    <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faRocket} /></div>
    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Voz y Tono</div>
    <div style={{fontWeight: "500", color: "#27344E", fontSize: "16px"}} className="text-justify">A través de nuestra marca buscamos reflejar nuestra identidad, misión, valores y principios.</div>
    </div>
    <div className="flex flex-col icon-card gap-2">
    <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faHandHeart} /></div>
    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Guía de estilo</div>
    <div style={{fontWeight: "500", color: "#27344E", fontSize: "16px"}} className="text-justify">Escribir pensando en el usuario.</div>
    </div>
                  
                  
    
    
        
    <div className="flex flex-col icon-card gap-2">
    <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faHeart} /></div>
    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Estilo de escritura</div>
    <div style={{fontWeight: "500", color: "#27344E", fontSize: "16px"}} className="text-justify">Nuestro estilo de escritura refleja el compromiso de nuestra empresa, su misión y visión, además, destaca nuestra voz y tono.</div>
    </div>
                  
    
    </div>
    

  </div>
  
    </>
);

export default ContenidoPrincipal;
