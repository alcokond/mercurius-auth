import React from "react";
import voz from "../assets/guides/voz.png";
import jergas from "../assets/guides/jergas.png";
import tecnico from "../assets/guides/tecnico.png";
import lenguaje from "../assets/guides/lenguaje.png";

const EscrituraPrincipal = () => (
  <>
    
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Contenido</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-2">Estilo de escritura</h3>
    <p className="text-button-1 text-justify">Planteamos nuestra comunicación de modo que nos permita establecer cercanía y familiaridad con el usuario. Nos identificamos con su necesidad de velocidad, por eso creamos procesos cortos y agiles. 
Escribir pensando en el usuario, nos permitirá generar “sentido de pertenencia”.</p>
    </div>
    </div>
    <div className="flex flex-col gap-2 padding-marca">
    <p style={{fontSize: 31, fontWeight: 500, color: "#222D44"}}>Usamos una voz activa</p>
    <p style={{fontSize: 16, fontWeight: 500, color: "#222D44"}}>En la voz activa el sujeto realiza la acción verbal de forma directa, es decir actúa por si solo.
    <br></br>En este caso,  el usuario posee autonomía, tiene libertad de decisión; la accion toma sentido al ser realizada de forma directa por el usuario.
    </p>
    
    </div>
  </div>
  
    </>
);

export default EscrituraPrincipal;