import React from "react";
import Sidebar from "./Sidebar.js";
import PermanentDrawerLeft from "./PermanentDrawerLeft.js";
import espaciado from "../assets/espaciado/Espaciado.png";
import rejillas from "../assets/espaciado/Rejillas.png";

const EspaciadoPrincipal = () => (
    <>
    
    {/* <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Guidelines</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className="mb-3">Espaciado y rejillas</h3>
    <p className="text-button-1 text-justify">Usamos un espaciado y rejillas especifico porque son fundamentales para establecer una identidad visual única, mejorar la usabilidad, transmitir profesionalidad y calidad, y garantizar una experiencia consistente y adaptada a diferentes dispositivos.</p>
    </div>
    </div>
    <div className="margin-sidebar padding-marca">
    <h5 className=' text-heading-5 '>Espaciado</h5>
      <p>Utilizamos la paleta de opacidades de los colores corporativos como sombra de botones e Imputs. Estos colores crean contraste y efectos que permiten a los usuarios identificar los botones y realizar acciones más rápidas.</p>
    
    <div className="margin-sidebar padding-paleta">
        
        <div className="flex flex-row flex-wrap align-items-end justify-center space-evenly">
            <div className="flex flex-col items-center justify-center space-evenly">
            <div className="square-4 background-primary"></div>
            <div>4px</div>
            </div>
            <div className="flex flex-col items-center justify-center space-evenly">
            <div className="square-8 background-primary"></div>
            <div>8px</div>
            </div>
            <div className="flex flex-col items-center justify-center space-evenly">
            <div className="square-16 background-primary"></div>
            <div>16px</div>
            </div>
            <div className="flex flex-col items-center justify-center space-evenly">
            <div className="square-32 background-primary-solid-1"></div>
            <div>32px</div>
            </div>
            <div className="flex flex-col items-center justify-center space-evenly">
            <div className="square-40 background-primary-solid-1"></div>
            <div>40px</div>
            </div>
            <div className="flex flex-col items-center justify-center space-evenly">
            <div className="square-48 background-primary-solid-1"></div>
            <div>48px</div>
            </div>
            <div className="flex flex-col items-center justify-center space-evenly">
            <div className="square-80 background-primary-solid-1"></div>
            <div>80px</div>
            </div>
            <div className="flex flex-col items-center justify-center space-evenly">
            <div className="square-96 background-primary-solid-1"></div>
            <div>96px</div>
            </div>
            <div className="flex flex-col items-center justify-center space-evenly">
            <div className="square-120 background-primary-solid-1"></div>
            <div>120px</div>
            </div>
            
        </div>
    </div>
    </div>
  
    </div>   */}
        <div className="flex flex-col flex-wrap">
    <div id="colores" className="margin-sidebar size-colores background-grayscale-6 margin-contenido">
    <div className="padding-marca">
    <h6 className="text-overline">Guidelines</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className=" mb-3">Espaciados y rejillas</h3>
    <p className="text-button-1 text-justify">Usamos un espaciado y rejillas especifico porque son fundamentales para establecer una identidad visual única, mejorar la usabilidad, transmitir profesionalidad y calidad, y garantizar una experiencia consistente y adaptada a diferentes dispositivos.</p>
    </div>
    </div>
    <div className="margin-sidebar padding-marca">
            
    <h6 style={{fontSize: 24, fontWeight: 600}}>Espaciados</h6>
        <br/>
      <p>El uso adecuado del espaciado mejora la legibilidad, crea una estructura visual organizada, refuerza la identidad de marca. Es un componente esencial para garantizar una experiencia de usuario efectiva y coherente.</p>
      <div style={{ alignSelf:"center", marginTop: "4%"}}>
      <img src={espaciado} ></img></div>
      <br/>

      <h6 style={{fontSize: 24, fontWeight: 600}}>Rejillas</h6>
        <br/>
      <p>El uso de rejillas proporciona organización visual, consistencia de diseño, escalabilidad, mejora de la usabilidad y nos distingue como una empresa profesional y enfocada en la experiencia del usuario.</p>
      <div style={{ alignSelf:"center", marginTop: "4%"}}>
      <img src={rejillas} ></img></div>
      <br/>    
    </div>
      
  
    </div>  
      </>
  );
  
  export default EspaciadoPrincipal;
  