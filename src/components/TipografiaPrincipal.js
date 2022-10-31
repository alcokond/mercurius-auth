import React from "react";
import PermanentDrawerLeft from "./PermanentDrawerLeft.js.js";

const TipografiaPrincipal = () => (
    <>
    <PermanentDrawerLeft></PermanentDrawerLeft>
    <div className="flex flex-col ">
    <div className="margin-sidebar padding-paleta">
        <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-3">
                <h1 style={{color: "#4F565C"}} className=" text-subtitle-1">Typeface: Montserrat</h1>
                <div className=" background-primary-opacity-10 rounded-lg px-3 py-2">font-family: Montserrat</div>
                <h1 style={{color: "#4F565C"}} className=" text-subtitle-1">Weights</h1>
                <div className=" background-primary-opacity-10 rounded-lg px-3 py-2 flex flex-row gap-2">
                    <div className="flex flex-col gap-2">
                        <div>Ligth</div>
                        <div>Regular</div>
                        <div>Medium</div>
                        <div>SemiBold</div>
                        <div>Bold</div>
                        

                        
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>Ligth - Italic</div>
                        <div>Regular - Italic</div>
                        <div> Medium - Italic</div>
                        <div> SemiBold - Italic</div>
                        <div><b><i> Bold - Italic</i></b></div>
                    </div>
                    
                    
                </div>
            </div>
            <div className="flex flex-col"></div>
            <div className="flex flex-col"></div>
        </div>
    </div>
      
  
    </div>  
      </>
  );
  
  export default TipografiaPrincipal;
  