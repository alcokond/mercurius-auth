import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

import toggle from "../assets/toggle.png";
import radiobutton from "../assets/radiobutton.png";
import checkbox from "../assets/checkbox.png";
import checkbox2 from "../assets/checkbox2.png";
import { CopyBlock, dracula } from "react-code-blocks";
import TopBar  from "./TopBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronsDown, faChevronUp, faCode, faMinus, faPlus, faPuzzlePiece } from "@fortawesome/pro-light-svg-icons";
import { faChevronDown } from "@fortawesome/pro-duotone-svg-icons";

export const Checkbox = () => {

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (!event.target.matches('.dropdown') && isOpen) {
      toggleDropdown();
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Placeholder");
  const [selected, setSelected] = useState(false);
  const [isShownToggle, setIsShownToggle] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSelected(!selected);
  }

  const selectOption = (option) => {
    setSelectedOption(option.value);
    toggleDropdown();
  }
  const [isShownUso, setIsShownUso] = useState(true);
  const [isShownCode, setIsShownCode] = useState(false);

  const [isShownPrimary, setIsShownPrimary] = useState(false);
  const [isMostrarPrimary1, setIsMostrarPrimary1] = useState(true);
  const handleClickToggle = event => {
    setIsShownToggle(current => !current);

  };


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
    <h6 className="text-overline">selector</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className="mb-3">Checkbox</h3>
    <p className="text-button-1 text-justify">Los checkbox facilitan al usuario seleccionar varias opciones al mismo tiempo. Se pueden seleccionar opciones que se encuentren agrupadas en categorías diferentes.</p>
    <br/>
    </div>
    <br/>
    <div className=" selector-componente" style={{borderBottom:"solid 4px #EBECF0", width:"100%"}}>
      <div className="padding-componente flex flex-row gap-40" style={{marginBottom:"-3px"}}>
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
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Los checkbox permiten seleccionar varios elementos del menú. Permite seleccionar desde una a múltiples opciones.</p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Son comúnmente usados en casillas de verificación, formularios, en términos y condiciones. se usan en formularios, que pueden encontrarse dentro de páginas completas y modales.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Modo de Uso
    </p>
    <br />
    <p style={{color: "#222D44",fontWeight:600, fontSize:"16px", lineHeight:"22px"}}>¿Cuándo usarlos?</p>
    <br></br>
    <p>Se utilizan para cambiar de forma rápidamente de un estado a otro. Solo puede cambiarse entre dos estados posibles con acciones opuestas como encender/apagar.</p>
    <br />
    <p style={{color: "#222D44",fontWeight:600, fontSize:"16px", lineHeight:"22px"}}>¿Cuándo no usarlos?</p>
    <br />
    <p>No se debe usar checkbox cuando:</p>
    <br />
    <ul>
    <li style={{marginBottom:"8px"}}>Solo se permite seleccionar una opción.</li>
    <li style={{marginBottom:"8px"}}>La información no es verificable.</li>
    <li style={{marginBottom:"8px"}}>Se requiere realizar selecciones más complejas o para recopilar información adicional.</li>
    </ul>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Variantes
    </p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Los estados de check y uncheck definen si una opción esta selecciona o no. Al realizar la selección los estados varian.</p>
    <br></br>
    <div className="grid mt-2" style={{gridTemplateColumns:"30% 70%"}}>
      <div className=" justify-center flex" style={{alignItems:"center",placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Default</div>
      <div style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Refleja el estado normal del checkbox. Tiene dos estilos Check cuando la interacción ha iniciado y uncheck cuando la interacción no se ha realizado.</div>
      <div className=" justify-center flex" style={{alignItems:"center",placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Hover</div>
      <div style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Cuando no se ha seleccionado la opción, pero el cursor esta encima del checkbox.</div>
      <div className=" justify-center flex" style={{alignItems:"center",placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Focus</div>
      <div style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Cuando el usuario mantiene presionado el checkbox mientras estaba hover.</div>
      <div className=" justify-center flex" style={{alignItems:"center",placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Disable</div>
      <div style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Se muestra cuando el checkbox está deshabilitado.</div>


    </div>
    <br></br>
    </div>
    <div className="flex flex-col">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Anatomía
    </p>
    <div style={{width:"20%", alignSelf:"center", marginTop: "4%"}}>
    <img src={checkbox2} className="mb-4" ></img></div>
    <div className=" mt-4"></div>
    <p><strong>Casilla:</strong> Control de selección.</p>
    <p><strong>Texto:</strong> Indica la acción que define a cada opción.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Comportamiento
    </p>
    <br></br>
    <p>Los checkbox funcionan como mecanismo para seleccionar 1, 0 o múltiples opciones entre una lista. Al seleccionar una opción, el icono inmediato a la izquierda se torna de color Ocean Blue y se muestra con el icono Check. Volver a seleccionar la opción la devuelve a su estado anterior.</p>
    <br></br>
    <p>Todos los elementos que tengan el icono Check se consideran como ‘selected’ o seleccionados.</p>
    <br></br>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Alineación
    </p>
    <br />
    <ul>
    <li style={{marginBottom:"8px"}}>Las casillas de verificación se encuentran alineadas a la izquierda, de tal modo que el texto se alinea a la derecha.</li>
    <li style={{marginBottom:"8px"}}>Cuando las casillas de verificación se encuentran agrupadas, se pueden distribuir vertical u horizontalmente según la estructura de la interfaz.</li>
    <li style={{marginBottom:"8px"}}>Es recomendable organizar los grupos de casillas de verificación verticalmente porque facilita la lectura del usuario.</li>
    </ul>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Guidelines de contenido
    </p>
    <br></br>
    <ul>
    <li style={{marginBottom:"8px"}}>El texto que se encuentra junto a la casilla de verificación debe ser breve y descriptivo.</li>
    <li style={{marginBottom:"8px"}}>La primera letra del texto junto a la casilla de verificación debe escribirse con letra mayúscula.</li>
    <li style={{marginBottom:"8px"}}>El texto descriptivo no incluye punto final.</li>
    </ul>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Accesibilidad
    </p>
    <br></br>
    <li style={{marginBottom:"8px"}}>Cuando se usan encima de un fondo con colores fuertes, la casilla de verificación utiliza un color que contraste con el fondo.</li>
    </div>
    </div> }
  {isShownCode && 
    <div className="padding-componente flex flex-col gap-4">
    <div><p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Desarrollo
    </p>
    <br></br>
    <p>El checkbox es una variante de los <code>&lt;input type="checkbox"&gt;</code> por lo cual heredan las cualidades de los mismos.</p>
    <br />
    <p>Se utilizan usualmente en contenedores con la propiedad display: flex y flex-direction: column, para mostrarse en columna, uno debajo de otro.</p>
    </div>
    <div className=" mb-5">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Checkbox
    </p>
    <br></br>
    
    {isMostrarPrimary1 && 
    !isShownPrimary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
        <div className="flex flex-col">
        <label className="checkbox">
    <input className="checkbox-input" type="checkbox" ></input>
    <div className="checkbox-box"></div>
    <div className="checkbox-text">One</div>
    </label>
    <label className="checkbox">
    <input className="checkbox-input" type="checkbox"></input>
    <div className="checkbox-box"></div>
    <div className="checkbox-text">Two</div>
    </label>
        </div>
    
    
    </div>
    </div>
    </div>
     </>  }
     {isMostrarPrimary1 && 
    isShownPrimary &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className="text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<div class="flex flex-col">
  <label class="checkbox">
    <input class="checkbox-input" type="checkbox" ></input>
    <div class="checkbox-box"></div>
    <div class="checkbox-text">One</div>
  </label>
  <label class="checkbox">
    <input class="checkbox-input" type="checkbox"></input>
    <div class="checkbox-box"></div>
    <div class="checkbox-text">Two</div>
  </label>
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

export default withAuthenticationRequired(Checkbox, {
  onRedirecting: () => <Loading />,
});
