import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRocket } from "@fortawesome/pro-light-svg-icons";

const PersonalidadPrincipal = () => (
  <>

  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Marca</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className="mb-2">Personalidad</h3>
    <p className="text-button-1 text-justify">Somos un equipo y trabajamos pensando en otorgar las mejores experiencias a nuestros usuarios, queremos que piensen en nosotros como entretenimiento accesible.</p>
<p>“Convertir procesos en experiencias agradables”, nuestro compromiso con los usuarios define nuestra personalidad.</p>
    </div>
    </div>
    
    <div className=" padding-marca">
    <div style={{fontSize:"31px", fontWeight:"600", marginBottom:"1vh", color:"#000000"}}>Nuestro autoconcepto</div>
    <div>
    <div className="icon-box background-primary text-color-primary-solid-4 mb-1"> <FontAwesomeIcon icon={faRocket} /></div>
    <div style={{fontSize:"16px", fontWeight:"500", textAlign:"justify", color:"#222D44"}}><b>Optimistas</b> <br></br>
 
 <p>Creemos en la innovación y nos mantenemos alineados al contexto actual, establecemos como meta diaria crear ambientes digitales intuitivos y de fácil acceso.</p><br></br>

<p>Sabemos que la innovación digital está en constante cambio y tenemos que ser rápidos para seguir su ritmo.</p><br></br>

<p>Somos optimistas y sabemos que el constante trabajo y la motivación por ser mejores nos ayudará a mantenernos a la altura del acelerado cambio tecnológico.</p><br></br>

</div>
 </div>
    <div>
    <div className="icon-box background-primary text-color-primary-solid-4 mb-1"> <FontAwesomeIcon icon={faRocket} /></div>
    <div style={{fontSize:"16px", fontWeight:"500", textAlign:"justify", color:"#222D44"}}><b>Aliado accesible</b> <br></br>
 
 <p>Acompañamos a los usuarios en cada proceso, si existen dudas estamos listos para responderlas.</p><br></br>

<p>Queremos ser guías, un equipo que siempre los respalde cuando tengan dudas o necesidades por satisfacer.</p><br></br>

<p>Somos aliados accesibles porque somos fáciles de contactar, estamos siempre atentos a las dudas en nuestros canales digitales, nuestra mejor vía es la comunicación directa. 
</p><br></br>

</div>
 </div>
    <div>
    <div className="icon-box background-primary text-color-primary-solid-4 mb-1"> <FontAwesomeIcon icon={faRocket} /></div>
    <div style={{fontSize:"16px", fontWeight:"500", textAlign:"justify", color:"#222D44"}}><b>Sociables</b> <br></br>
 
 <p>Somos positivos, creativos y sociables. Creemos en la cordialidad, queremos ser amigos de nuestros usuarios.
</p><br></br>

<p>Evitamos el exceso de confianza, así logramos mantener un entorno amigable.​</p><br></br>

</div>
 </div>
    </div>
    

  </div>
  
    </>
);

export default PersonalidadPrincipal;