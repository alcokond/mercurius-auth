import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faStarShooting, faFaceSmile,faHandshake,faUserGroup } from "@fortawesome/pro-light-svg-icons";

const PersonalidadPrincipal = () => (
  <>

  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Marca</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className="mb-2">Personalidad</h3>
    <p className="text-button-1 text-justify">Nuestra personalidad define el tono de nuestra comunicación. Cada proceso expresa nuestro objetivo “Convertir procesos en experiencias agradables”, un compromiso con el usuario que va acorde a los valores que nos definen.</p>
    </div>
    </div>
    
    <div className=" padding-marca">
    <div style={{fontSize:"31px", fontWeight:"500", marginBottom:"1vh", color:"#222D44"}}>Nuestro autoconcepto</div>
    <p className="text-button-1 text-justify">Nuestra esencia son los valores, en Xtrim nos definimos por ser optimistas, accesibles, sociales  y comporometidos con nuestros usuarios</p>
    <br></br>
    <div>
    <div className="icon-box background-primary text-color-grayscale-7 mb-1"> <FontAwesomeIcon icon={faStarShooting} /></div>
    <div style={{fontSize:"16px", fontWeight:"400", textAlign:"justify", color:"#222D44"}}><b>Optimistas</b> <br></br>
 
 <p>Nos mantenemos alineados al contexto actual, establecemos como meta diaria crear ambientes digitales de fácil acceso.</p><br></br>

<p>Sabemos que la innovación digital está en constante cambio y tenemos que ser rápidos para seguir su ritmo.</p><br></br>

<p>Sabemos que el constante trabajo y la motivación nos ayudará a mantenernos a la altura del acelerado cambio tecnológico.</p><br></br>

</div>
 </div>
    <div>
    <div className="icon-box background-primary text-color-grayscale-7 mb-1"> <FontAwesomeIcon icon={faUserGroup} /></div>
    <div style={{fontSize:"16px", fontWeight:"400", textAlign:"justify", color:"#222D44"}}><b>Aliado accesible</b> <br></br>
 
 <p>Acompañamos a los usuarios en cada proceso, si existen dudas estamos listos para responderlas.</p><br></br>

<p>Somos un equipo que siempre los respalda cuando tienen dudas o necesidades por satisfacer.</p><br></br>

<p>Los canales de atención de Xtrim están abiertos para los usuarios, porque nuestra mejor vía es la comunicación directa. </p><br></br>

<p>Gracias a nuestro equipo de trabajo, quienes se encargan de establecer experiencias agradables para nuestros usuarios. </p><br></br>

</div>
 </div>
    <div>
    <div className="icon-box background-primary text-color-grayscale-7 mb-1"> <FontAwesomeIcon icon={faFaceSmile} /></div>
    <div style={{fontSize:"16px", fontWeight:"400", textAlign:"justify", color:"#222D44"}}><b>Sociables</b> <br></br>
 
 <p>Somos positivos, creativos y sociables. Creemos en la cordialidad, queremos crear afinidad con  nuestros usuarios.</p><br></br>

<p>Evitamos el exceso de confianza, así logramos mantener un entorno amigable.</p><br></br>

</div>
 </div>

 <div>
    <div className="icon-box background-primary text-color-grayscale-7 mb-1"> <FontAwesomeIcon icon={faHandshake} /></div>
    <div style={{fontSize:"16px", fontWeight:"400", textAlign:"justify", color:"#222D44"}}><b>Comprometidos</b> <br></br>
 
 <p>Nos preocupamos por crea canales digitales más accesibles, y hacer de tu visita fácil y productiva.
</p><br></br>


</div>
 </div>
 <div style={{fontSize:"31px", fontWeight:"500", marginBottom:"1vh", color:"#222D44"}}>¿Cómo aplicamos nuestra personalidad en el trabajo?</div>
    <p className="text-button-1 text-justify">Nuestra personalidad es más confiable cuando los hechos la respaldan, por eso seguimos en constante cambio, renovando nuestros productos y canales digitales. <br></br> <br></br>
    Nuestra personalidad hace identificable nuestro trabajo.
    </p>
    <br></br>
    </div>
    

  </div>
  
    </>
);

export default PersonalidadPrincipal;