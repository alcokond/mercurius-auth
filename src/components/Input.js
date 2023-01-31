import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

import button from "../assets/button.png";
import dont from "../assets/dont.png";
import input from "../assets/input.png";

import { CopyBlock, dracula } from "react-code-blocks";
import TopBar  from "../components/TopBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCode, faMinus, faPlus, faPuzzlePiece } from "@fortawesome/pro-light-svg-icons";

export const Input = () => {

  const [isShownUso, setIsShownUso] = useState(true);
  const [isShownCode, setIsShownCode] = useState(false);

  const [isShownPrimary, setIsShownPrimary] = useState(false);
  const [isShownSecondary, setIsShownSecondary] = useState(false);
  const [isShownSubtle, setIsShownSubtle] = useState(false);
  const [isShownOutstanding, setIsShownOutstanding] = useState(false);
  const [isShownPink, setIsShownPink] = useState(false);
  const [isShownPinkSecondary, setIsShownPinkSecondary] = useState(false);
  const [isShownSquare, setIsShownSquare] = useState(false);
  const [isShownSquareNeutral, setIsShownSquareNeutral] = useState(false);
  const [isShownContador, setIsShownContador] = useState(false);
  const [isShownTextarea1, setIsShownTextarea1] = useState(false);
  const [isShownToggle, setIsShownToggle] = useState(false);

  const [isMostrarPrimary1, setIsMostrarPrimary1] = useState(true);
  const [isMostrarSecondary1, setIsMostrarSecondary1] = useState(true);
  const [isMostrarSubtle1, setIsMostrarSubtle1] = useState(true);
  const [isMostrarOutstanding1, setIsMostrarOutstanding1] = useState(true);
  const [isMostrarPink1, setIsMostrarPink1] = useState(true);
  const [isMostrarPinkSecondary1, setIsMostrarPinkSecondary1] = useState(true);
  const [isMostrarPrimary2, setIsMostrarPrimary2] = useState(false);
  const [isMostrarSecondary2, setIsMostrarSecondary2] = useState(false);
  const [isMostrarSubtle2, setIsMostrarSubtle2] = useState(false);
  const [isMostrarOutstanding2, setIsMostrarOutstanding2] = useState(false);
  const [isMostrarPink2, setIsMostrarPink2] = useState(false);
  const [isMostrarPinkSecondary2, setIsMostrarPinkSecondary2] = useState(false);
  const [isMostrarPrimary3, setIsMostrarPrimary3] = useState(false);
  const [isMostrarSecondary3, setIsMostrarSecondary3] = useState(false);
  const [isMostrarSubtle3, setIsMostrarSubtle3] = useState(false);
  const [isMostrarOutstanding3, setIsMostrarOutstanding3] = useState(false);
  const [isMostrarPink3, setIsMostrarPink3] = useState(false);
  const [isMostrarPinkSecondary3, setIsMostrarPinkSecondary3] = useState(false);
  const [isMostrarPrimary4, setIsMostrarPrimary4] = useState(false);
  const [isMostrarPrimary5, setIsMostrarPrimary5] = useState(false);
  
  const [emailSuccess, setEmailSuccess] = useState("user@mercurius.com");
  const [emailFail, setEmailFail] = useState("usermercurius.com");
  const [isValidSuccess, setIsValidSuccess] = useState(true);
  const [isValidFail, setIsValidFail] = useState(false);

  const handleChange = (event) => {
    setEmailSuccess(event.target.value);
    setEmailFail(event.target.value);
    setIsValidSuccess(event.target.checkValidity());
    setIsValidFail(event.target.checkValidity());
  };

  const handleClickMostrarUso = event => {
    
    document.getElementById("email").addEventListener("input", function() {
      let email = this.value;
      let messagesuccess = document.getElementById("message-success");
      let messageerror = document.getElementById("message-error");
      
      if (email.checkValidity()) {
        messagesuccess.style.display = "block";
        messageerror.style.display = "none";
      } else {
        messagesuccess.style.display = "none";
        messageerror.style.display = "block";
      }
    });


    setIsShownUso(current => true);
    setIsShownCode(current => false);
    const ps = document.getElementsByClassName('size-component');
    for (let item of ps) {
      item.classList.remove('size-option-component-focused');
      item.classList.add('size-option-component');
    }
    event.currentTarget.classList.add('size-option-component-focused');
    event.currentTarget.classList.remove('size-option-component');
  };

  const handleClickMostrarCode = event => {
    setIsShownUso(current => false);
    setIsShownCode(current => true);
    const ps = document.getElementsByClassName('size-component');
    for (let item of ps) {
      item.classList.remove('size-option-component-focused');
      item.classList.add('size-option-component');
    }
    event.currentTarget.classList.add('size-option-component-focused');
    event.currentTarget.classList.remove('size-option-component');
  };
  

  const handleClickMostrarPrimary1 = event => {
    setIsMostrarPrimary1(current => true);
    setIsMostrarPrimary2(current => false);
    setIsMostrarPrimary3(current => false);
    setIsMostrarPrimary4(current => false);
    setIsMostrarPrimary5(current => false);
    const ps = document.getElementsByClassName('size-1');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');
    
    

  };
  const handleClickMostrarPrimary2 = event => {
    setIsMostrarPrimary1(current => false);
    setIsMostrarPrimary2(current => true);
    setIsMostrarPrimary3(current => false);
    setIsMostrarPrimary4(current => false);
    setIsMostrarPrimary5(current => false);
    const ps = document.getElementsByClassName('size-1');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPrimary3 = event => {
    setIsMostrarPrimary1(current => false);
    setIsMostrarPrimary2(current => false);
    setIsMostrarPrimary3(current => true);
    setIsMostrarPrimary4(current => false);
    setIsMostrarPrimary5(current => false);
    const ps = document.getElementsByClassName('size-1');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPrimary4 = event => {
    setIsMostrarPrimary1(current => false);
    setIsMostrarPrimary2(current => false);
    setIsMostrarPrimary3(current => false);
    setIsMostrarPrimary4(current => true);
    setIsMostrarPrimary5(current => false);
    const ps = document.getElementsByClassName('size-1');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPrimary5 = event => {
    setIsMostrarPrimary1(current => false);
    setIsMostrarPrimary2(current => false);
    setIsMostrarPrimary3(current => false);
    setIsMostrarPrimary4(current => false);
    setIsMostrarPrimary5(current => true);
    const ps = document.getElementsByClassName('size-1');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarSecondary1 = event => {
    setIsMostrarSecondary1(current => true);
    setIsMostrarSecondary2(current => false);
    setIsMostrarSecondary3(current => false);
    const ps = document.getElementsByClassName('size-2');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarSecondary2 = event => {
    setIsMostrarSecondary1(current => false);
    setIsMostrarSecondary2(current => true);
    setIsMostrarSecondary3(current => false);
    const ps = document.getElementsByClassName('size-2');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarSecondary3 = event => {
    setIsMostrarSecondary1(current => false);
    setIsMostrarSecondary2(current => false);
    setIsMostrarSecondary3(current => true);
    const ps = document.getElementsByClassName('size-2');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarSubtle1 = event => {
    setIsMostrarSubtle1(current => true);
    setIsMostrarSubtle2(current => false);
    setIsMostrarSubtle3(current => false);
    const ps = document.getElementsByClassName('size-3');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarSubtle2 = event => {
    setIsMostrarSubtle1(current => false);
    setIsMostrarSubtle2(current => true);
    setIsMostrarSubtle3(current => false);
    const ps = document.getElementsByClassName('size-3');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarSubtle3 = event => {
    setIsMostrarSubtle1(current => false);
    setIsMostrarSubtle2(current => false);
    setIsMostrarSubtle3(current => true);
    const ps = document.getElementsByClassName('size-3');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarOutstanding1 = event => {
    setIsMostrarOutstanding1(current => true);
    setIsMostrarOutstanding2(current => false);
    setIsMostrarOutstanding3(current => false);
    const ps = document.getElementsByClassName('size-4');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarOutstanding2 = event => {
    setIsMostrarOutstanding1(current => false);
    setIsMostrarOutstanding2(current => true);
    setIsMostrarOutstanding3(current => false);
    const ps = document.getElementsByClassName('size-4');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarOutstanding3 = event => {
    setIsMostrarOutstanding1(current => false);
    setIsMostrarOutstanding2(current => false);
    setIsMostrarOutstanding3(current => true);
    const ps = document.getElementsByClassName('size-4');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPink1 = event => {
    setIsMostrarPink1(current => true);
    setIsMostrarPink2(current => false);
    setIsMostrarPink3(current => false);
    const ps = document.getElementsByClassName('size-5');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPink2 = event => {
    setIsMostrarPink1(current => false);
    setIsMostrarPink2(current => true);
    setIsMostrarPink3(current => false);
    const ps = document.getElementsByClassName('size-5');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPink3 = event => {
    setIsMostrarPink1(current => false);
    setIsMostrarPink2(current => false);
    setIsMostrarPink3(current => true);
    const ps = document.getElementsByClassName('size-5');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPinkSecondary1 = event => {
    setIsMostrarPinkSecondary1(current => true);
    setIsMostrarPinkSecondary2(current => false);
    setIsMostrarPinkSecondary3(current => false);
    const ps = document.getElementsByClassName('size-6');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPinkSecondary2 = event => {
    setIsMostrarPinkSecondary1(current => false);
    setIsMostrarPinkSecondary2(current => true);
    setIsMostrarPinkSecondary3(current => false);
    const ps = document.getElementsByClassName('size-6');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPinkSecondary3 = event => {
    setIsMostrarPinkSecondary1(current => false);
    setIsMostrarPinkSecondary2(current => false);
    setIsMostrarPinkSecondary3(current => true);
    const ps = document.getElementsByClassName('size-6');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickPrimary = event => {
    setIsShownPrimary(current => !current);

  };
  const handleClickSecondary = event => {
    setIsShownSecondary(current => !current);

  };
  const handleClickSubtle = event => {
    setIsShownSubtle(current => !current);

  };
  const handleClickOutstanding = event => {
    setIsShownOutstanding(current => !current);

  };
  const handleClickPink = event => {
    setIsShownPink(current => !current);

  };
  const handleClickPinkSecondary = event => {
    setIsShownPinkSecondary(current => !current);

  };

  return (

   

<>
    
  
  <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6" style={{position:"relative"}} >
    <div className="padding-componente flex flex-col">
    <h6 className="text-overline">Acciones</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-3">Inputs</h3>
    <p className="text-button-1 text-justify">Permite a los usuarios ingresar y editar datos de texto. Existen inputs largos, medianos y cortos según la cantidad de texto requerida.</p>
    
    </div>
    <div className=" selector-componente" style={{borderBottom:"solid 4px #EBECF0", width:"100%"}}>
      <div className=" flex flex-row gap-40" style={{marginBottom:"-3px", paddingLeft:"5vw"}}>
        <button className="size-component size-option-component-focused" onClick={handleClickMostrarUso} >Uso</button>
        <button className="size-component size-option-component" onClick={handleClickMostrarCode} >Código</button>
      </div>
      
    </div>
    </div>
    {isShownUso &&
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
    <div className="grid mt-2" style={{gridTemplateColumns:"30% 70%"}}>
      <div className=" justify-center flex" style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Standard</div>
      <div style={{paddingTop:"2rem", paddingBottom:"2rem",placeSelf:"stretch"}}>Cuando la información es una sola línea de texto.</div>
      <div className=" justify-center flex" style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Search</div>
      <div style={{paddingTop:"2rem", paddingBottom:"2rem", backgroundColor:"#F9F9F9",placeSelf:"stretch"}}>Para que el usuario ingrese consultas de búsqueda.</div>
      <div className=" justify-center flex" style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Login</div>
      <div style={{paddingTop:"2rem", paddingBottom:"2rem", placeSelf:"stretch"}}>Para ingresar y editar direcciones de correo electrónico.</div>


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
    <div className="grid mt-2" style={{gridTemplateColumns:"30% 70%"}}>
      <div className=" justify-center flex" style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Default</div>
      <div style={{paddingTop:"2rem", paddingBottom:"2rem",placeSelf:"stretch"}}>Es el estado normal del componente que se muestra cuando el usuario no ha interactuado con él.</div>
      <div className=" justify-center flex" style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Active</div>
      <div style={{paddingTop:"2rem", paddingBottom:"2rem", backgroundColor:"#F9F9F9",placeSelf:"stretch"}}>Cuando el usuario ingresa contenido dentro del componente este se muestra activo.</div>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Block</div>
      <div style={{paddingTop:"2rem", paddingBottom:"2rem",placeSelf:"stretch"}}>Cuando el componente se encuentra bloqueado presenta información que no se puede editar.</div>
      <div className=" justify-center flex" style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Disabled</div>
      <div style={{paddingTop:"2rem", paddingBottom:"2rem", backgroundColor:"#F9F9F9",placeSelf:"stretch"}}>Cuando el componente se encuentra desactivado y no se puede seleccionar.</div>
      <div className=" justify-center flex" style={{alignItems:"center"}}>Error</div>
      <div style={{paddingTop:"2rem", paddingBottom:"2rem",placeSelf:"stretch"}}>Cuando la información ingresada es incorrecta, el componente presenta un mensaje de error.</div>
      <div className=" justify-center flex" style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Success</div>
      <div style={{paddingTop:"2rem", paddingBottom:"2rem", backgroundColor:"#F9F9F9",placeSelf:"stretch"}}>Cuando la información ingresada es correcta, el componente presenta un estado y mensaje de éxito.</div>


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
    <p>Aparte del input con clase input-standard, es necesario utilizar un <code>&lt;div&gt;</code> con clase input-frame y un <code>&lt;div&gt;</code> con clase input-standard-label</p>
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
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Accesibilidad
    </p>
    <br></br>
    <li>Iconos de información para mostrar al usuario indicaciones adicionales sin influir directamente en el formulario. El icono presenta la información al pasar el cursor por encima.</li>
    <li>Los colores del input varían según el fondo que se use. Si el fondo es lila, utilizamos una alternativa más llamativa para captar la atención del usuario.</li>
    </div>
    </div>
    }
    
    
    {isShownCode && 
        <div className="padding-componente flex flex-col gap-4">
        <div><p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Desarrollo
    </p>
    <br></br>
    <p>Para utilizar los distintos inputs, es suficiente con ingresar su identificador dentro del atributo class de un HTML tag de tipo <code>&lt;input&gt;</code>.</p>
    </div>
    <div className=" mb-5">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Input Standard
    </p>
    <br></br>
    <p>Este input se utiliza para formularios de registro.</p>
    <br></br>
    <h5 className=' text-heading-5 text-color-grayscale-2 mb-3'>Input Standard</h5>
    {/* <div className=" text-subtitle-1 mb-2">Explora otros tamaños: </div> */}
    <div className="flex flex-row items-center gap-2">
      <button className="size-1 size-option-focused" onClick={handleClickMostrarPrimary1}>Default</button>
      <button className="size-1 size-option" onClick={handleClickMostrarPrimary2}>Blocked</button>
      <button className="size-1 size-option" onClick={handleClickMostrarPrimary3}>Disabled</button>
      <button className="size-1 size-option" onClick={handleClickMostrarPrimary4}>Success</button>
      <button className="size-1 size-option" onClick={handleClickMostrarPrimary5}>Failure</button>
    </div>
    
    {isMostrarPrimary1 && 
    !isShownPrimary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
        <div class="input-frame">
                <div class="input-standard-label">Label name</div>
                <div class="info-message-group">
                  <div><input type="text" placeholder="Placeholder" class="input-standard"></input></div>
                </div>
    </div>          
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarPrimary1 && 
    isShownPrimary &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<div class="input-frame">
    <div class="input-standard-label">Label name</div>
    <div class="info-message-group">
        <div><input type="text" placeholder="Placeholder" class="input-standard"></input></div>
    </div>
  </div>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarPrimary2 && 
    !isShownPrimary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
        <div class="input-frame">
                <div class="input-standard-label">Label name</div>
                <input value="Value" class="input-standard" readonly ></input>
              </div>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarPrimary2 && 
    isShownPrimary &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<div class="input-frame">
  <div class="input-standard-label">Label name</div>
  <input value="Value" class="input-standard" readonly ></input>
</div>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarPrimary3 && 
    !isShownPrimary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
              <div class="input-frame">
                <div class="input-standard-label">Label name</div>
                <input type="text" placeholder="Placeholder" class="input-standard" disabled ></input>
              </div>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarPrimary3 && 
    isShownPrimary &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<div class="input-frame">
  <div class="input-standard-label">Label name</div>
  <input type="text" placeholder="Placeholder" class="input-standard" disabled ></input>
</div>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarPrimary4 && 
    !isShownPrimary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
              <div className="input-frame">
                <div className="input-standard-label">Email</div>
                <div className="info-message-frame">
               <div><input value="user@mercurius.com" id="email" type="email" placeholder="Ingresar correo" onChange={handleChange} className="input-standard" required ></input></div>
                <div id="message-success" className="input-standard-successmsg" >Success message</div>
                </div>
              </div>    
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarPrimary4 && 
    isShownPrimary &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<script>
  document.getElementById("email").addEventListener("input", function() {
    let email = document.getElementById("email");
    let messagesuccess = document.getElementById("messagesuccess");
    let messageerror = document.getElementById("messageerror");
          
    if (email.checkValidity()) {
      messagesuccess.style.display = "block";
      messageerror.style.display = "none";
    } else {
      messagesuccess.style.display = "none";
      messageerror.style.display = "block";
    }
  });
</script>

<div class="input-frame">
  <div class="input-standard-label">Email</div>
  <div class="info-message-frame">
    <div><input id="email" type="email" placeholder="Ingresar correo" class="input-standard" required ></input></div>
    <div id="messagesuccess" class="input-standard-successmsg" style="display:none">Success message</div>
    <div id="messageerror" class="input-standard-errormsg" style="display:none">Error message</div>
  </div>
</div>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarPrimary5 && 
    !isShownPrimary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
        <div className="input-frame">
                <div className="input-standard-label">Email</div>
                <div className="info-message-frame">
               <div><input value="usermercurius.com" id="email" type="email" placeholder="Ingresar correo" className="input-standard" required ></input></div>
                <div id="message-error" className="input-standard-errormsg" >Error message</div> 
                </div>
              </div>  
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarPrimary5 && 
    isShownPrimary &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<div class="input-frame">
  <div class="input-standard-label">Email</div>
  <div class="info-message-frame">
    <input type="email" value="mercurius@xtrim.com.ec" placeholder="mercurius@xtrim.com.ec" class="input-standard" required ></input>
    <div class="input-standard-successmsg">Success message</div> 
  </div>
              </div>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    </div>
    
        </div>
    }
  </div>
  
    </>

);
};

export default withAuthenticationRequired(Input, {
  onRedirecting: () => <Loading />,
}); 