import React from "react";
import Sidebar from "./Sidebar.js";
import PermanentDrawerLeft from "./PermanentDrawerLeft.js";

const EspaciadoPrincipal = () => (
    <>
    
    <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Guidelines</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className="mb-3">Espaciado y rejillas</h3>
    <p className="text-button-1 text-justify">Usamos un espaciado y rejillas especifico porque son fundamentales para establecer una identidad visual única, mejorar la usabilidad, transmitir profesionalidad y calidad, y garantizar una experiencia consistente y adaptada a diferentes dispositivos.</p>
    </div>
    </div>
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
      </>
  );
  
  export default EspaciadoPrincipal;
  