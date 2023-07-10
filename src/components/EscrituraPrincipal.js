import React from "react";
import voz from "../assets/guides/voz.png";
import jergas from "../assets/guides/jergas.png";
import tecnico from "../assets/guides/tecnico.png";
import lenguaje from "../assets/guides/lenguaje.png";
import pautas from "../assets/pautas contenido.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faBullseyeArrow, faMapLocation, faMapLocationDot, faMessageSmile, faRocket } from "@fortawesome/pro-light-svg-icons";

const EscrituraPrincipal = () => (
  <>
    
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Contenido</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className="mb-2">Estilo de escritura</h3>
    <p className="text-button-1 text-justify">Planteamos nuestra comunicación de modo que nos permita establecer cercanía y familiaridad con el usuario. Nos identificamos con su necesidad de velocidad, por eso creamos procesos cortos y agiles. <br></br>
    Escribir pensando en el usuario, nos permitirá generar “sentido de pertenencia”.
    </p>
    </div>
    </div>
    <div className="flex flex-col gap-2 padding-marca">
    <p style={{fontSize: 31, fontWeight: 500, color: "#222D44"}}>Consejos de estilo</p>
    <p style={{fontSize: 16, fontWeight: 500, color: "#222D44"}}>Debemos establecer cada proceso a modo de guías que le permitan a los usuarios ejecutar acciones de forma institntivas. Nuestra redacción debe informar y permitir interactuar en periodos cortos de tiempo.</p>

    <div style={{ gridTemplateColumns: "1fr 1fr", gap: "5vh"}} className="grid">
        <div className="flex flex-col icon-card gap-2">
        <div className="icon-box-2" style={{color:"#83378F", backgroundColor:"#FFFFFF"}}> <FontAwesomeIcon icon={faBullhorn} /></div>
        <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Ser Informativo</div>
        <div>A través de nuestra marca buscamos reflejar nuestra identidad, misión, valores y principios, transmitiendo los detalles esenciales.</div>
      </div>
       <div className="flex flex-col icon-card gap-2">
        <div className="icon-box-2" style={{color:"#83378F", backgroundColor:"#FFFFFF"}}> <FontAwesomeIcon icon={faBullseyeArrow} /></div>
        <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Ser conciso</div>
        <div>Escribir de forma directa, comunicar el mensaje en frases cortas. De esta manera los usuarios asimilan rápidamente la información.</div>
      </div>
                  
    </div>
    <div style={{ gridTemplateColumns: "1fr 1fr", gap: "5vh"}} className="grid">
        <div className="flex flex-col icon-card gap-2">
        <div className="icon-box-2" style={{color:"#83378F", backgroundColor:"#FFFFFF"}}> <FontAwesomeIcon icon={faMapLocationDot} /></div>
        <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Ser un guía</div>
        <div> Proporcionar instrucciones paso a paso, que les permitan realizar las tareas de manera fluida e intuitiva.</div>
      </div>
       <div className="flex flex-col icon-card gap-2">
        <div className="icon-box-2" style={{color:"#83378F", backgroundColor:"#FFFFFF"}}> <FontAwesomeIcon icon={faMessageSmile} /></div>
        <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Ser claro</div>
        <div>Sé directo, no utilices palabras rebuscadas, las palabras deben ser las adecuadas para permitirle al usuario realizar su proceso lo más rápido posible.</div>
      </div>
                  
    </div>
    <br></br>
    <p style={{fontSize: 31, fontWeight: 500, color: "#222D44"}}>Pautas de contenido</p>
    <p style={{fontSize: 16, fontWeight: 500, color: "#222D44"}}>Nos centramos en establecer una comunicación que genere cercanía y familiaridad con los usuarios. Estas pautas definen lo que se decimos o lo que no decimos para lograr este objetivo.</p>
    <br></br>
    <img
    alt="..."
    src= {pautas}
    className=""
    style={{marginBottom:64,  alignSelf: "center"}}
    />
    </div>
  </div>
  
    </>
);

export default EscrituraPrincipal;