import React from "react";
import DrawerGuidelines from "./DrawerGuidelines.js";
import PermanentDrawerLeft from "./PermanentDrawerLeft.js";

const EspaciadoPrincipal = () => (
    <>
    <DrawerGuidelines></DrawerGuidelines>
    <div className="flex flex-col ">
    <div className="margin-sidebar padding-paleta">
        <h6 className="text-overline">Guidelines</h6>
        <h3  className="text-heading-3 mb-3">Espaciado</h3>
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
  