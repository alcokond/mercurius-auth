import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

import button from "../assets/button.png";
import aceptarbien from "../assets/aceptar bien.png";
import aceptarmal from "../assets/aceptar mal.png";
import editarbien from "../assets/editar bien.png";
import editarmal from "../assets/editar mal.png";
import iniciarbien from "../assets/iniciar bien.png";
import iniciarmal from "../assets/iniciar mal.png";
import dont from "../assets/dont.png";

import { CopyBlock, dracula } from "react-code-blocks";
import TopBar  from "../components/TopBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCode, faMinus, faPlus, faPuzzlePiece } from "@fortawesome/pro-light-svg-icons";

export const Button = () => {

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

  const handleClickMostrarUso = event => {
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
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-3">Button</h3>
    <p className="text-button-1 text-justify">Los botones son parte esencial de la interfaz, actúan como guía para el usuario, ya que indican el proceso a realizar.</p>
    
    </div>
    <div className=" selector-componente" style={{borderBottom:"solid 4px #EBECF0", width:"100%"}}>
      <div className=" flex flex-row gap-40" style={{marginBottom:"-3px", paddingLeft:"5vw"}}>
        <button className="size-component size-option-component-focused" onClick={handleClickMostrarUso} >Uso</button>
        <button className="size-component size-option-component" onClick={handleClickMostrarCode}>Código</button>
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
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>La función de los botones es señalar acciones, permitiendo al usuario continuar navegando por la interfaz. Se utilizan también como parte de componentes que ayudan a iniciar y concluir procesos.</p>
    <br></br>
    <p style={{color: "#222D44",fontWeight:600, fontSize:"16px", lineHeight:"22px"}}>¿Qué rol cumplen los botones?</p>      
    <br></br>
    <ul>
    <li style={{marginBottom:"8px"}}>Indican la acción que se va a realizar.</li>
    <li style={{marginBottom:"8px"}}>Permiten completar procesos.</li>
    <li style={{marginBottom:"8px"}}>Permiten al usuario avanzar y continuar moviendose por la interfaz.</li>
    <li style={{marginBottom:"8px"}}>Funcionan como un llamado a la acción (call to action).</li>
    <li style={{marginBottom:"8px"}}>Suelen utilizar iconos para reforzar el significado de la acción que indica el botón.</li>
    </ul>
    <br></br>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Variantes
    </p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Los botones tienen diferente apariencia según el uso que se requiera. Es importante que cada una de las variantes se implemente de manera consistente en todos los productos.</p>
    <br></br>
    <div className="grid mt-2" style={{gridTemplateColumns:"30% 70%"}}>
      <div className=" justify-center flex" style={{alignItems:"center", placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Primario</div>
      <div style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Para hacer un llamado a la acción. Indica acciones principales.</div>
      <div className=" justify-center flex" style={{alignItems:"center",placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Secundario</div>
      <div style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Para indicar acciones, comúnmente negativas, en segundo plano. Suelen usarse junto a un botón principal.</div>
      <div className=" justify-center flex" style={{alignItems:"center",placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Subtle</div>
      <div style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Para indicar acciones en tercer plano. Por lo general se usan junto a un botón principal.</div>


    </div>
    <br></br>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Tamaños de Botones
    </p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Tienen un tamaño determinado para diferentes situaciones y según la aplicación en que se usen. En la siguiente tabla se encuentran definidos los casos de uso para cada tamaño según el botón.</p>
    <br></br>
    <div className="grid mt-2" style={{gridTemplateColumns:"30% 70%"}}>
      <div className=" justify-center flex" style={{alignItems:"center",placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Small</div>
      <div style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Se utiliza en áreas reducidas, cuando no hay espacio suficiente para el tamaño predeterminado.</div>
      <div className=" justify-center flex" style={{alignItems:"center",placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Medium</div>
      <div style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem", backgroundColor:"#F9F9F9"}}>Tienen un tamaño estándar por lo que son utilizados con regularidad.</div>
      <div className=" justify-center flex" style={{alignItems:"center",placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Large</div>
      <div style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Los utilizamos para páginas de un solo botón, landing pages y call to action.</div>


    </div>
    <br></br>
    </div>
    <div className="flex flex-col">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Anatomía
    </p>
    <div style={{width:"20%", alignSelf:"center", marginTop: "4%"}}>
    <img src={button} ></img></div>
    <div className=" mt-4"></div>
    <p><strong>Icono:</strong> Representa la acción a realizar.</p>
    <p><strong>Label:</strong> Es el texto que indica la acción que realiza el botón.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Comportamiento
    </p>
    <br></br>
    <p>Las clases de botones son ingresadas en el atributo class de elementos de tipo <code>&lt;button&gt;</code> de HTML. Los botones tienen apariencia y comportamientos similares, con variaciones de tamaño, colores y bordes.</p>
    <br></br>
    <p>Las clases de botones heredan el comportamiento y los atributos del elemento <code>&lt;button&gt;</code>. Cada clase de botón tiene un efecto de hover, de click y un estado deshabilitado específico, para utilizar el estado deshabilitado de un botón es suficiente con utilizar el atributo disabled en el <code>&lt;button&gt;</code>.</p>
    <br></br>
    <p>El comportamiento del puntero al desplazarse sobre el botón es especificado por el navegador por razones de usabilidad.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Mejores Prácticas
    </p>
    <br></br>
    <ul>
    <li style={{marginBottom:"8px"}}>Botón primario: Señala la acción principal a ejecutar.</li>
    <li style={{marginBottom:"8px"}}>Los botones secundarios se identifican por tener un color menos llamativo o no tener color.</li>
    <li style={{marginBottom:"8px"}}>Los botones tienen medidas distintas según su tamaño (pequeño - mediano - largo), hay que tener en cuenta que las medidas de la altura y largo varían según se usen en la web u aplicaciones móviles. De pequeños a largos miden 32px - 48px - 64px.</li>
    <li style={{marginBottom:"8px"}}>El texto de los botones debe ser breve y preciso. Es mejor utilizar dos palabras y en casos excepcionales un máximo de 4 palabras cuando es necesario indicar acciones complejas.</li>
    <li style={{marginBottom:"8px"}}>Es necesario utilizar palabras relacionadas con el proceso que se està desarrollando.</li>
    </ul>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Alineación
    </p>
    <br></br>
    <ul>
    <li style={{marginBottom:"8px"}}>Cuidar el orden y la posición de los botones. Si hay pares correspondientes (“volver” y “aceptar”) el botón primario se alinea a la derecha. Es importante asegurarse que el diseño ponga énfasis en la acción principal.</li>
    <li style={{marginBottom:"8px"}}>Los botones de posición central se usan para indicar la acción que se está por iniciar o concluir.</li>
    <li style={{marginBottom:"8px"}}>Los botones pares con iconos como “volver” y “continuar” que utilizan flechas para aportar dirección, deben señalar el lado indicado según la acción a ejecutarse. Por ejemplo, si la acción es volver al menú anterior la flecha debe señalar a la izquierda.</li>
    <li style={{marginBottom:"8px"}}>El texto de los botones debe ser breve y preciso. Es mejor utilizar dos palabras y en casos excepcionales un máximo de 4 palabras cuando es necesario indicar acciones complejas.</li>
    <li style={{marginBottom:"8px"}}>Es necesario utilizar palabras relacionadas con el proceso que se està desarrollando.</li>
    </ul>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Guidelines de contenido
    </p>
    <br></br>
    <p>Los botones son parte esencial de la interfaz, por esta razón es importante establecer pautas de contenido a seguir para su correcto uso.</p>
    </div>
    <div className="mb-5" style={{height:"100%",alignSelf:"center", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3%"}}>
      <img src={aceptarbien}></img>
      <img src={aceptarmal}></img>
      <img src={editarbien}></img>
      <img src={editarmal}></img>
      <img src={iniciarbien}></img>
      <img src={iniciarmal}></img>
    </div>
    <div style={{marginTop:"16px",display: "block",position:"relative"}}>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Accesibilidad
    </p>
    <br></br>
    <ul>
    <li style={{marginBottom:"8px"}}>Incluir texto alternativo en los botones de ícono.</li>
    <li style={{marginBottom:"8px"}}>Utilizar fuentes, tamaño y color de texto legibles.</li>
    </ul>
    </div>
    </div>}
  {isShownCode && 
    <div className="padding-componente flex flex-col gap-4">
    <div><p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Desarrollo
    </p>
    <br></br>
    <p>Para utilizar los distintos botones, es suficiente con ingresar su identificador dentro del atributo class de un HTML tag de tipo <code>&lt;button&gt;</code>.</p>
    </div>
    <div className=" mb-5">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Botón Principal
    </p>
    <br></br>
    <p>Este botón con todas sus variantes se usa con frecuencia en la mayoría de los productos.</p>
    <br></br>
    <h5 className=' text-heading-5 text-color-grayscale-2 mb-3'>Variante Primary</h5>
    {/* <div className=" text-subtitle-1 mb-2">Explora otros tamaños: </div> */}
    <div className="flex flex-row items-center gap-2">
      <button className="size-1 size-option-focused" onClick={handleClickMostrarPrimary1}>Small</button>
      <button className="size-1 size-option" onClick={handleClickMostrarPrimary2}>Medium</button>
      <button className="size-1 size-option" onClick={handleClickMostrarPrimary3}>Large</button>
    </div>
    
    {isMostrarPrimary1 && 
    !isShownPrimary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-main-primary-small ">Button</button>            
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
          text={`<button class="button-main-primary-small ">Button</button>`}
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
          <button className="button-main-primary-medium ">Button</button>            
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
          text={`<button class="button-main-primary-medium ">Button</button>`}
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
          <button className="button-main-primary-large ">Button</button>            
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
          text={`<button class="button-main-primary-large ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 text-color-grayscale-2 mb-3'>Variante Secondary</h5>
    <div className="flex flex-row gap-2">
      <button className="size-2 size-option-focused" onClick={handleClickMostrarSecondary1}>Small</button>
      <button className="size-2 size-option" onClick={handleClickMostrarSecondary2}>Medium</button>
      <button className="size-2 size-option" onClick={handleClickMostrarSecondary3}>Large</button>
    </div>
    {isMostrarSecondary1 && 
    !isShownSecondary && <> 
    
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSecondary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-main-secondary-small ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarSecondary1 && 
    isShownSecondary &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSecondary}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-main-secondary-small ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarSecondary2 && 
    !isShownSecondary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSecondary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-main-secondary-medium ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarSecondary2 && 
    isShownSecondary &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSecondary}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-main-secondary-medium ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarSecondary3 && 
    !isShownSecondary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSecondary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-main-secondary-large ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarSecondary3 && 
    isShownSecondary &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSecondary}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-main-secondary-large ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 text-color-grayscale-2 mb-3'>Botón Subtle</h5>
    <div className="flex flex-row gap-2">
      <button className="size-3 size-option-focused" onClick={handleClickMostrarSubtle1}>Small</button>
      <button className="size-3 size-option" onClick={handleClickMostrarSubtle2}>Medium</button>
      <button className="size-3 size-option" onClick={handleClickMostrarSubtle3}>Large</button>
    </div>
    {isMostrarSubtle1 && 
    !isShownSubtle && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSubtle}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-main-subtle-small ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarSubtle1 && 
    isShownSubtle &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSubtle}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-main-subtle-small ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarSubtle2 && 
    !isShownSubtle && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSubtle}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-main-subtle-medium ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarSubtle2 && 
    isShownSubtle &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSubtle}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-main-subtle-medium ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarSubtle3 && 
    !isShownSubtle && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSubtle}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-main-subtle-large ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarSubtle3 && 
    isShownSubtle &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSubtle}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-main-subtle-large ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    </div>
    <div className=" mb-5">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Botón Destacado
    </p>
    <br></br>
    <p>El botón destacado se utiliza cuando es necesario destacar una opción.</p>
    <br></br>
    {/* <h5 className=' text-heading-5 text-color-grayscale-2 mb-3'>Variante Outstanding</h5> */}
    <div className="flex flex-row gap-2">
      <button className="size-4 size-option-focused" onClick={handleClickMostrarOutstanding1}>Small</button>
      <button className="size-4 size-option" onClick={handleClickMostrarOutstanding2}>Medium</button>
      <button className="size-4 size-option" onClick={handleClickMostrarOutstanding3}>Large</button>
    </div>
    {isMostrarOutstanding1 && 
    !isShownOutstanding && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickOutstanding}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-outstanding-small ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarOutstanding1 && 
    isShownOutstanding &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickOutstanding}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-outstanding-small ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarOutstanding2 && 
    !isShownOutstanding && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickOutstanding}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-outstanding-medium ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarOutstanding2 && 
    isShownOutstanding &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickOutstanding}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-outstanding-medium ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarOutstanding3 && 
    !isShownOutstanding && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickOutstanding}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-outstanding-large ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarOutstanding3 && 
    isShownOutstanding &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickOutstanding}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-outstanding-large ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    </div>
    <div className=" mb-5">
    <p  style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Botón Auxiliar
    </p>
    <br />
    <p>Se utiliza el botón auxiliar cuando el fondo sobre el cual se esta trabajando es lila y no queremos que se pierda.</p>
    <br />
    <h5 className=' text-heading-5 text-color-grayscale-2 mb-3'>Botón Pink Primary</h5>
    <div className="flex flex-row gap-2">
      <button className="size-5 size-option-focused" onClick={handleClickMostrarPink1}>Small</button>
      <button className="size-5 size-option" onClick={handleClickMostrarPink2}>Medium</button>
      <button className="size-5 size-option" onClick={handleClickMostrarPink3}>Large</button>
    </div>
    {isMostrarPink1 && 
    !isShownPink && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPink}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-pink-primary-small ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarPink1 && 
    isShownPink &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPink}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-pink-primary-small ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarPink2 && 
    !isShownPink && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPink}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-pink-primary-medium ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarPink2 && 
    isShownPink &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPink}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-pink-primary-medium ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarPink3 && 
    !isShownPink && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPink}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-pink-primary-large ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarPink3 && 
    isShownPink &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPink}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-pink-primary-large ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 text-color-grayscale-2 mb-3'>Boton Pink Secondary</h5>
    <div className="flex flex-row gap-2">
      <button className="size-6 size-option-focused" onClick={handleClickMostrarPinkSecondary1}>Small</button>
      <button className="size-6 size-option" onClick={handleClickMostrarPinkSecondary2}>Medium</button>
      <button className="size-6 size-option" onClick={handleClickMostrarPinkSecondary3}>Large</button>
    </div>
    {isMostrarPinkSecondary1 && 
    !isShownPinkSecondary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPinkSecondary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-pink-secondary-small ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarPinkSecondary1 && 
    isShownPinkSecondary &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPinkSecondary}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-pink-secondary-small ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarPinkSecondary2 && 
    !isShownPinkSecondary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPinkSecondary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-pink-secondary-medium ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarPinkSecondary2 && 
    isShownPinkSecondary &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPinkSecondary}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-pink-secondary-medium ">Button</button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    {isMostrarPinkSecondary3 && 
    !isShownPinkSecondary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPinkSecondary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-pink-secondary-large ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarPinkSecondary3 && 
    isShownPinkSecondary &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPinkSecondary}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-pink-secondary-large ">Button</button>`}
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

export default withAuthenticationRequired(Button, {
  onRedirecting: () => <Loading />,
});
