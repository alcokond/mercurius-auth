import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faIcons, faPalette, faPenNib, faTypewriter } from "@fortawesome/pro-light-svg-icons";
import {faArrowRight, facircleuser, faUserCircle, faRocket, faUserAstronaut, faHandHeart } from "@fortawesome/pro-light-svg-icons";
import { NavLink } from 'react-router-dom';
import button from "../assets/button.png";
import dont from "../assets/dont.png";
import input from "../assets/input.png";

const Input = () => (
  <>
    
  
  <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6" style={{position:"relative"}} >
    <div className="padding-componente flex flex-col">
    <h6 className="text-overline">Acciones</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-3">Inputs</h3>
    <p className="text-button-1 text-justify">Permite a los usuarios ingresar y editar datos de texto. Existen inputs largos, medianos y cortos según la cantidad de texto requerida.</p>
    
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
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>La clase de input que se utilice deberá reflejar su longitud en función del contenido requerido. Por lo general se encuentran dentro de un formulario, y deberán usarse para permitir ingresar datos de usuario únicos.</p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Hay varios tipos de inputs, los más comunes son los utilizados para permitir el ingreso de nombres de usuario, correos electrónicos, direcciones, descripciones y búsqueda de texto.</p>
    
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Estilo
    </p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Su apariencia cambiará acorde al proceso que se vaya a realizar.</p>
    <br></br>
    <div className="grid mt-2" style={{gridTemplateColumns:"30% 70%", gap:"2rem"}}>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Standard</div>
      <div>Cuando la información es una sola línea de texto.</div>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Search</div>
      <div>Para que el usuario ingrese consultas de búsqueda.</div>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Login</div>
      <div>Para ingresar y editar direcciones de correo electrónico.</div>


    </div>
    <br></br>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Estados
    </p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Determinan el estado de la información ingresada en el input. Por ejemplo le indican al usuario si sus datos son correctos o incorectos.</p>
    <br></br>
    <div className="grid mt-2" style={{gridTemplateColumns:"30% 70%", gap:"2rem"}}>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Default</div>
      <div>Es el estado normal del componente que se muestra cuando el usuario no ha interactuado con él.</div>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Active</div>
      <div>Cuando el usuario ingresa contenido dentro del componente este se muestra activo.</div>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Block</div>
      <div>Cuando el componente se encuentra bloqueado presenta información que no se puede editar.</div>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Disabled</div>
      <div>Cuando el componente se encuentra desactivado y no se puede seleccionar.</div>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Error</div>
      <div>Cuando la información ingresada es incorrecta, el componente presenta un mensaje de error.</div>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Success</div>
      <div>Cuando la información ingresada es correcta, el componente presenta un estado y mensaje de éxito.</div>


    </div>
    <br></br>
    </div>
    <div className="flex flex-col">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Anatomía
    </p>
    <div style={{width:"40%", alignSelf:"center", marginTop: "4%"}}>
    <img src={input} ></img></div>
    <div className=" mt-4"></div>
    <p><strong>Icono:</strong> Representa la acción a realizar.</p>
    <p><strong>Label:</strong> Es el texto o información que el usuario debe ingresar.</p>
    <p><strong>Icono de información:</strong> Le muestra al usuario indicaciones adicionales.</p>
    <p><strong>Texto ayuda:</strong> Indica el estado de la información, también funciona como una guía para el usuario.</p>
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
    
    <li>Alinear el label a la izquierda, al igual que la etiqueta que va encima del input para indicar que tipo de información requiere el campo.</li>
    <li>Alinear los contenedores de campo con la cuadricula y el resto de componentes del formulario.</li>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Guidelines de contenido
    </p>
    <br></br>
    <li>Cuando la información ingresada sea incorrecta, se deberá proporcionar ejemplos que indiquen como ingresar los datos correctamente.</li>
    <li>La etiqueta de texto sobre el input debe ser claro y conciso; las variantes de estado deben indicar claramente si la información ingresada es válida. Por ejemplo “ingresa un correo electrónico válido”. </li>
    </div>
    <div style={{alignSelf:"center"}}><img src={dont} ></img></div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Accesibilidad
    </p>
    <br></br>
    <li>Incluir texto alternativo en los botones de ícono.</li>
    <li>Utilizar fuentes, tamaño y color de texto legibles.</li>
    </div>
    </div>

    
    

  </div>
  
    </>
);

export default Input;
