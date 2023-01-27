import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faIcons, faPalette, faPenNib, faTypewriter } from "@fortawesome/pro-light-svg-icons";
import {faArrowRight, facircleuser, faUserCircle, faRocket, faUserAstronaut, faHandHeart } from "@fortawesome/pro-light-svg-icons";
import { NavLink } from 'react-router-dom';
import button from "../assets/button.png";
import dont from "../assets/dont.png";
import input from "../assets/input.png";
import checkbox from "../assets/checkbox.png";

const Checkbox = () => (
  <>
  <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6" style={{position:"relative"}} >
    <div className="padding-componente flex flex-col">
    <h6 className="text-overline">Acciones</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-3">Checkbox</h3>
    <p className="text-button-1 text-justify">Los checkbox son inputs que facilitan al usuario la selección de varias opciones. Se pueden seleccionar opciones que se encuentre agrupadas en categorías diferentes.</p>
    
    </div>
    <div className=" selector-componente" style={{borderBottom:"solid 4px #EBECF0", width:"100%"}}>
      <div className="padding-componente flex flex-row gap-2" style={{marginBottom:"-3px"}}>
        <button className="size-2 size-option-focused" >Uso</button>
        <button className="size-2 size-option">Código</button>
      </div>
      
    </div>
    </div>
    
    <div className=" padding-marca flex flex-col" style={{gap:"40px"}}>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Uso
    </p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Los checkbox se usan cuando hay varios elementos en el menú. Permite seleccionar desde cero a múltiples opciones.</p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Son comúnmente usados en casillas de verificación, formularios, en términos y condiciones. se usan en formularios, que pueden encontrarse dentro de páginas completas y modales.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Variantes
    </p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Los estados de check y uncheck definen si una opción esta selecciona o no. Al realizar la selección los estados varian.</p>
    <br></br>
    <div className="grid mt-2" style={{gridTemplateColumns:"30% 70%", gap:"2rem"}}>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Initial</div>
      <div>Cuando la información es una sola línea de texto.</div>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Hover</div>
      <div>Para que el usuario ingrese consultas de búsqueda.</div>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Focus</div>
      <div>Para ingresar y editar direcciones de correo electrónico.</div>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Disable</div>
      <div>Se muestra cuando el checkbox está deshabilitado.</div>


    </div>
    <br></br>
    </div>
    <div className="flex flex-col">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Anatomía
    </p>
    <div style={{width:"40%", alignSelf:"center", marginTop: "4%"}}>
    <img src={checkbox} ></img></div>
    <div className=" mt-4"></div>
    <p><strong>Casilla:</strong> Control de selección.</p>
    <p><strong>Texto:</strong> Indica la acción que define a cada opción.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Comportamiento
    </p>
    <br></br>
    <p>Los inputs pueden ser utilizados tanto para retroalimentar información tangible como para ingresar información. Son estilos aplicados sobre el HTML tag <code>&lt;input&gt;</code>, por lo que heredan sus estados y características.</p>
    <br></br>
    <p>Para mostrar un input que solo deba ser leído y que muestre información que es tangible solo por el sitio web o servidor, se utiliza el modificador readonly, mientras que para bloquear el ingreso de información que si puede ser ingresada en otras situaciones, se utiliza el modificador disabled.</p>
    <br></br>
    <p>En caso de ser utilizado para contraseñas, el input presenta un botón para visualizar la contraseña ingresada.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Alineación
    </p>
    
    <li>Las casillas de verificación se encuentran alineadas a la izquierda, de tal modo que el texto se alinea a la derecha.</li>
    <li>Cuando las casillas de verificación se encuentran agrupadas, se pueden distribuir vertical u horizontalmente según la estructura de la interfaz.</li>
    <li>Es recomendable organizar los grupos de casillas de verificación verticalmente porque facilita la lectura del usuario.</li>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Guidelines de contenido
    </p>
    <br></br>
    <li>El texto que se encuentra junto a la casilla de verificación debe ser breve y descriptivo.</li>
    <li>La primera letra del texto junto a la casilla de verificación debe escribirse con letra mayúscula.</li>
    <li>El texto descriptivo no incluye punto final.</li>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Accesibilidad
    </p>
    <br></br>
    <li>Cuando se usan encima de un fondo con colores fuertes, la casilla de verificación utiliza un color que contraste con el fondo.</li>
    </div>
    </div>

    
    

  </div>
  
    </>
);

export default Checkbox;
