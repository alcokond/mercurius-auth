import React from "react";
import Sidebar from "./Sidebar.js";
import PermanentDrawerLeft from "./PermanentDrawerLeft.js";

const EspaciadoPrincipal = () => (
    <>
    
    <div className="flex flex-col ">
    <div id="colores" className="margin-sidebar size-colores background-grayscale-6">
    <div className="padding-colores">
    <h6 className="text-overline">Guidelines</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700"}} className=" mb-3">Espaciado</h3>
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
  