import React from "react";
import voz from "../assets/guides/voz.png";
import jergas from "../assets/guides/jergas.png";
import tecnico from "../assets/guides/tecnico.png";
import lenguaje from "../assets/guides/lenguaje.png";

const GuiaDeEstilo = () => (
  <>
    
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Contenido</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className="mb-2">Guía de estilo</h3>
    <p className="text-button-1 text-justify">Escribir pensando en el usuario, nos permitirá generar “sentido de pertenencia”.<br></br>
Planteamos nuestra comunicación a modo que nos permita establecer cercanía y familiaridad con el usuario. Nos identificamos con su necesidad de velocidad, por eso creamos procesos cortos y ágiles. </p>
    </div>
    </div>
    
    <div className="flex flex-col gap-2 padding-marca">
    <p style={{fontSize: 31, fontWeight: 500, color: "#222D44"}}>Usamos una voz activa</p>
    <p style={{fontSize: 16, fontWeight: 500, color: "#222D44"}}>En la voz activa el sujeto realiza la acción verbal de forma directa, es decir actúa por si solo.
    <br></br>En este caso,  el usuario posee autonomía, tiene libertad de decisión; la accion toma sentido al ser realizada de forma directa por el usuario.
    </p>
    <img
    alt="..."
    src= {voz}
    className=""
    style={{marginBottom:64, maxWidth: 500, alignSelf: "center"}}
    />
    <p style={{fontSize: 31, fontWeight: 500, color: "#222D44"}}>Sin jergas, ni lenguaje técnico</p>
    <p style={{fontSize: 16, fontWeight: 500, color: "#222D44"}}>Nuestra comunicación debe ser clara y fácil de comprender, utilizamos el lenguaje para transmitir empatía y situar al usuario como el centro de nuestra comunicación, a manera que, establecemos a los usuarios como prioridad.
    </p>
    <img
    alt="..."
    src= {jergas}
    className=""
    style={{marginBottom:64, maxWidth: 500, alignSelf: "center"}}
    />
    <img
    alt="..."
    src= {tecnico}
    className=""
    style={{marginBottom:64, maxWidth: 500, alignSelf: "center"}}
    />
    <p style={{fontSize: 31, fontWeight: 500, color: "#222D44"}}>Lenguaje claro, informativo, expositivo</p>
    <p style={{fontSize: 16, fontWeight: 500, color: "#222D44"}}>Informamos en frases cortas, con plabras precisas. El mensaje debe ser explicado en brevedad, pero sin dejar de ser explicativos:<br></br> 
Utilizamos un titulo que advierta cual es el problema, luego en dos o tres lineas de texto nos asegurarnos que el usuario entienda el mensaje. 
    </p>
    
    <img
    alt="..."
    src= {lenguaje}
    className=""
    style={{marginBottom:64, maxWidth: 500, alignSelf: "center"}}
    />
    </div>
    

  </div>
  
    </>
);

export default GuiaDeEstilo;