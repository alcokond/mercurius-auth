import React from "react";
import Sidebar from "./Sidebar.js";
import PermanentDrawerLeft from "./PermanentDrawerLeft.js";

const TipografiaPrincipal = () => (
    <>
    <div className="flex flex-col flex-wrap">
    <div id="colores" className="margin-sidebar size-colores background-grayscale-6 margin-contenido">
    <div className="padding-marca">
    <h6 className="text-overline">Guidelines</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className=" mb-3">Tipografía</h3>
    <p className="text-button-1 text-justify">Usamos un estilo de fuente acorde a nuestra voz y tono, un estilo que sea legible y transmita confianza a los usuarios en cada etapa de su recorrido por nuestros canales digitales.</p>
    </div>
    </div>
    <div className="margin-sidebar padding-marca">
        <div style={{fontSize: "31px", fontWeight: 600, }}>Estilos de fuente</div>
        
        <div style={{gridTemplateColumns:"1fr 1fr"}} className="grid gap-4">
            
            <div className="">
            <div>WEB Scale: Major third - 16px</div>
            <div style={{gridTemplateColumns:"155px 250px 35px 250px"}} className=" background-primary-opacity-10 rounded-lg grid gap-2">
            {/* <div style={{fontSize: "61px", textAlign: "end"}}>61</div>
            <div style={{fontWeight: "700", fontSize: "61px"}} >Heading 1</div> */}
            <div style={{fontSize: "48.83px", textAlign: "end"}}>48.83</div>
            <div style={{fontWeight: "500", fontSize: "48.83px"}} >Heading 1</div>
            <div style={{fontSize: "48.83px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "300", fontSize: "48.83px"}} >Heading 1</div>
            <div style={{fontSize: "39.06px", textAlign: "end"}}>39.06</div>
            <div style={{fontWeight: "500", fontSize: "39.06px"}} >Heading 2</div>
            <div style={{fontSize: "39.06px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "300", fontSize: "39.06px"}} >Heading 2</div>
            <div style={{fontSize: "31.25px", textAlign: "end"}}>31.25</div>
            <div style={{fontWeight: "500", fontSize: "31.25px"}} >Heading 3</div>
            <div style={{fontSize: "31.25px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "300", fontSize: "31.25px"}} >Heading 3</div>
            <div style={{fontSize: "25px", textAlign: "end"}}>25</div>
            <div style={{fontWeight: "500", fontSize: "25px"}} >Heading 4</div>
            <div style={{fontSize: "25px", textAlign: "end"}}></div>
            <div style={{fontWeight: "300", fontSize: "25px"}} >Heading 4</div>
            <div style={{fontSize: "20px", textAlign: "end"}}>20</div>
            <div style={{fontWeight: "500", fontSize: "20px"}} >Heading 5</div>
            <div style={{fontSize: "20px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "400", fontSize: "20px"}} >HEADING 5</div>
            <div style={{fontSize: "16px", textAlign: "end"}}>16</div>
            <div style={{fontWeight: "600", fontSize: "16px"}} >Subtitle 1</div>
            <div style={{fontSize: "16px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "400", fontSize: "16px"}} >Subtitle 1</div>
            <div style={{fontSize: "16px", textAlign: "end"}}>14</div>
            <div style={{fontWeight: "600", fontSize: "14px"}} >Subtitle 2</div>
            <div style={{fontSize: "14px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "400", fontSize: "14px"}} >Subtitle 2</div>
            <div style={{fontSize: "16px", textAlign: "end"}}>16</div>
            <div style={{fontWeight: "600", fontSize: "16px"}} >Button 1</div>
            <div style={{fontSize: "16px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "400", fontSize: "16px"}} >Button 1</div>
            {/* <div style={{fontSize: "16px", textAlign: "end"}}>16</div>
            <div style={{fontWeight: "600", fontSize: "16px"}} >Button 2</div>
            <div style={{fontSize: "16px", textAlign: "end"}}>16</div>
            <div style={{fontWeight: "400", fontSize: "16px"}} >Body 1</div>
            <div style={{fontSize: "14px", textAlign: "end"}}>14</div>
            <div style={{fontWeight: "400", fontSize: "14px"}} >Body 2</div>
            <div style={{fontSize: "12.8px", textAlign: "end"}}>12.8</div>
            <div style={{fontWeight: "500", fontSize: "12.8px"}} >Caption</div>
            <div style={{fontSize: "10.24px", textAlign: "end"}}>10.24</div>
            <div style={{fontWeight: "400", fontSize: "10.24px"}} >OVERLINE</div> */}
            </div>
            </div>
            <br/>
            <div className="">
            <div>WEB Scale: Major third - 16px</div>
            <div style={{gridTemplateColumns:"155px 250px 35px 250px"}} className=" background-primary-opacity-10 rounded-lg grid gap-2">
            {/* <div style={{fontSize: "39px", textAlign: "end"}}>39</div>
            <div style={{fontWeight: "700", fontSize: "39px"}} >Heading 1</div>
            <div style={{fontSize: "31px", textAlign: "end"}}>31</div>
            <div style={{fontWeight: "500", fontSize: "31px"}} >Heading 2</div>
            <div style={{fontSize: "25px", textAlign: "end"}}>25</div>
            <div style={{fontWeight: "500", fontSize: "25px"}} >Heading 3</div>
            <div style={{fontSize: "20px", textAlign: "end"}}>20</div>
            <div style={{fontWeight: "600", fontSize: "20px"}} >Heading 4</div>
            <div style={{fontSize: "16px", textAlign: "end"}}>16</div>
            <div style={{fontWeight: "700", fontSize: "16px"}} >Subtitle 1</div>
            <div style={{fontSize: "16px", textAlign: "end"}}>16</div>
            <div style={{fontWeight: "600", fontSize: "16px"}} >Subtitle 2</div>
            <div style={{fontSize: "16px", textAlign: "end"}}>16</div>
            <div style={{fontWeight: "600", fontSize: "16px"}} >Button 1</div>
            <div style={{fontSize: "16px", textAlign: "end"}}>16</div>
            <div style={{fontWeight: "600", fontSize: "16px"}} >Button 2</div>
            <div style={{fontSize: "16px", textAlign: "end"}}>16</div>
            <div style={{fontWeight: "600", fontSize: "16px"}} >Body</div>
            <div style={{fontSize: "12.8px", textAlign: "end"}}>12.8</div>
            <div style={{fontWeight: "500", fontSize: "12.8px"}} >Caption</div>
            <div style={{fontSize: "10.24px", textAlign: "end"}}>10.24</div>
            <div style={{fontWeight: "400", fontSize: "10.24px"}} >OVERLINE</div> */}

<div style={{fontSize: "48.83px", textAlign: "end"}}>48.83</div>
            <div style={{fontWeight: "500", fontSize: "48.83px"}} >Heading 1</div>
            <div style={{fontSize: "48.83px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "300", fontSize: "48.83px"}} >Heading 1</div>
            <div style={{fontSize: "39.06px", textAlign: "end"}}>39.06</div>
            <div style={{fontWeight: "500", fontSize: "39.06px"}} >Heading 2</div>
            <div style={{fontSize: "39.06px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "300", fontSize: "39.06px"}} >Heading 2</div>
            <div style={{fontSize: "31.25px", textAlign: "end"}}>31.25</div>
            <div style={{fontWeight: "500", fontSize: "31.25px"}} >Heading 3</div>
            <div style={{fontSize: "31.25px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "300", fontSize: "31.25px"}} >Heading 3</div>
            <div style={{fontSize: "25px", textAlign: "end"}}>25</div>
            <div style={{fontWeight: "500", fontSize: "25px"}} >Heading 4</div>
            <div style={{fontSize: "25px", textAlign: "end"}}></div>
            <div style={{fontWeight: "300", fontSize: "25px"}} >Heading 4</div>
            <div style={{fontSize: "20px", textAlign: "end"}}>20</div>
            <div style={{fontWeight: "500", fontSize: "20px"}} >Heading 5</div>
            <div style={{fontSize: "20px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "400", fontSize: "20px"}} >HEADING 5</div>
            <div style={{fontSize: "16px", textAlign: "end"}}>16</div>
            <div style={{fontWeight: "600", fontSize: "16px"}} >Subtitle 1</div>
            <div style={{fontSize: "16px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "400", fontSize: "16px"}} >Subtitle 1</div>
            <div style={{fontSize: "16px", textAlign: "end"}}>14</div>
            <div style={{fontWeight: "600", fontSize: "14px"}} >Subtitle 2</div>
            <div style={{fontSize: "14px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "400", fontSize: "14px"}} >Subtitle 2</div>
            <div style={{fontSize: "16px", textAlign: "end"}}>16</div>
            <div style={{fontWeight: "600", fontSize: "16px"}} >Button 1</div>
            <div style={{fontSize: "16px", textAlign: "end"}}> </div>
            <div style={{fontWeight: "400", fontSize: "16px"}} >Button 1</div>
    
            </div>
            </div>
            <div className="flex flex-col"></div>
        </div>
            <br/>
        <div>Usamos la fuente Ubuntu en todos los procesos relacionados con Xtrim. Elegimos ser leales a nuestro tono y voz. Nos aseguramos de utilizar una escritura que sea legible para todos los usuarios.</div>
    </div>
      
  
    </div>  
      </>
  );
  
  export default TipografiaPrincipal;
  