import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

import toggle from "../assets/toggle.png";
import radiobutton from "../assets/radiobutton.png";

import { CopyBlock, dracula } from "react-code-blocks";
import TopBar  from "./TopBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronsDown, faChevronUp, faCode, faMinus, faPlus, faPuzzlePiece } from "@fortawesome/pro-light-svg-icons";
import { faChevronDown } from "@fortawesome/pro-duotone-svg-icons";

export const Radiobutton = () => {

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
    <h6 className="text-overline">Acciones</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-3">Radio Button</h3>
    <p className="text-button-1 text-justify">Los radio buttons permiten a los usuarios seleccionar solo una opción a la vez entre varias. Al seleccionar otra opción la primera se deselecciona.</p>
    
    </div>
    <div className=" selector-componente" style={{borderBottom:"solid 4px #EBECF0", width:"100%"}}>
      <div className=" flex flex-row gap-40" style={{marginBottom:"-3px", paddingLeft:"5vw"}}>
        <button className="size-component size-option-component-focused" onClick={handleClickMostrarUso}>Uso</button>
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
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Se utilizan cuando dentro del menú hay grupo de opciones mutuamente excluyentes o en opciones de menú donde la acción sea cambiar de una configuración a otra. Por lo general se usan para seleccionar opciones de una solo elección.</p>
    <br></br>
    
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Variantes
    </p>
    <br />
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Los estados de on y off indican cuando una de las opciones del menú se encuentra seleccionada y cuando no lo está.</p>
    <br />
    <div className="grid mt-2" style={{gridTemplateColumns:"30% 70%"}}>
      <div className=" justify-center flex" style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Initial</div>
      <div style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Muestra el estado normal del radio button. Se encuentra en on cuando la interacción ha sido realizada y en off cuando no se ha iniciado la interacción con el botón.</div>
      <div className=" justify-center flex" style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Hover</div>
      <div style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Cuando el cursor se encuentra encima del radio button sin seleccionar la opción.</div>
      <div className=" justify-center flex" style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Focus</div>
      <div style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Cuando el usuario mantiene presionado el radio button mientras está en hover.</div>
      <div className=" justify-center flex" style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Disable</div>
      <div style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Indica que el radio button está deshabilitado.</div>


    </div>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Estilo
    </p>
    <br />
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>El radio button tienes dos estilos que determinan su apariencia e indican cuando una opción ha sido seleccionada y en qué estado se encuentra.</p>
    <br />
    <div className="grid mt-2" style={{gridTemplateColumns:"30% 70%"}}>
      <div className=" justify-center flex" style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>On</div>
      <div style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Indica selección, muestra cuando una opción ha sido elegida.</div>
      <div className=" justify-center flex" style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Off</div>
      <div style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Muestra el estado normal del radio button.</div>
      


    </div>
    </div>
    <div className="flex flex-col">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Anatomía
    </p>
    <div style={{width:"30%", alignSelf:"center", marginTop: "4%"}}>
    <img src={radiobutton} ></img></div>
    <div className=" mt-4"></div>
    <p><strong>Casilla:</strong> Control de selección.</p>
    <p><strong>Texto:</strong> Indica la acción que define a cada opción.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Comportamiento
    </p>
    <br></br>
    <p>Los radio buttons funcionan como mecanismo para seleccionar 1 opción entre una lista. Al seleccionar una opción, el icono inmediato a la izquierda se torna de color blanco con un círculo color Ocean Blue.</p>
    <br></br>
    <p>A diferencia del checkbox, solo 1 opción puede ser seleccionada, y dar click en ella nuevamente no la deselecciona.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Mejores Prácticas
    </p>
    <br />
    <ul>
    <li style={{marginBottom:"8px"}}>Organizar las opciones en un orden lógico.</li>
    <li style={{marginBottom:"8px"}}>Las opciones que presenten menor riesgo van primeras en la lista.</li>
    <li style={{marginBottom:"8px"}}>Las opciones que representen operaciones mas complejas van ultimas en la lista.</li>
    <li style={{marginBottom:"8px"}}>Deben enlistarse primero las opciones mas simples.</li>
    <li style={{marginBottom:"8px"}}>Deben ordenarse según la probabilidad de selección.</li>
    <li style={{marginBottom:"8px"}}>Agregar un estado no seleccionado con la opción “ninguno”.</li>
    <li style={{marginBottom:"8px"}}>Agregar la opción “otro” para permitir al usuario añadir observaciones.</li>
    <li style={{marginBottom:"8px"}}>Evite organizar las opciones en orden alfabético.</li>
    </ul>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Alineación
    </p>
    <br />
    <ul>
    <li style={{marginBottom:"8px"}}>Las casillas de verificación se encuentran alineadas a la izquierda.</li>
    <li style={{marginBottom:"8px"}}>El texto se encuentra alineado a la derecha del radio button.</li>
    <li style={{marginBottom:"8px"}}>Cuando las casillas de verificación se encuentran agrupadas, se pueden distribuir vertical u horizontalmente. Es recomendable organizar los grupos de casillas de verificación verticalmente porque facilita la lectura del usuario.</li>
    </ul>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Guidelines de contenido
    </p>
    <br></br>
    <ul>
    <li style={{marginBottom:"8px"}}>Las etiquetas deben ser breves, explicativas y proporcionar contexto acerca de la opción que funcione a modo de guía para el usuario.</li>
    </ul>
    </div>
    </div> }
  {isShownCode && 
    <div className="padding-componente flex flex-col gap-4">
    <div><p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Desarrollo
    </p>
    <br></br>
    <p>El radiobutton de una variante de los inputs, por lo que hereda las características de los <code>&lt;input type="radio"&gt;</code> </p>
    </div>
    <div className=" mb-5">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Radiobutton
    </p>
    <br></br>
    
    {isMostrarPrimary1 && 
    !isShownPrimary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto" style={{backgroundColor:"#ffffff", padding: "16px", borderRadius:"8px"}}>
        <label className="label-radiobutton">
    <input type="radio" name="genero" value="hombre" checked disabled></input>
    <span class="design-radiobutton"></span>
    <span class="value-radiobutton">Hombre</span>
  </label>
  <label className="label-radiobutton">
    <input type="radio" name="genero" value="mujer" disabled></input>
    <span class="design-radiobutton"></span>
    <span class="value-radiobutton">Mujer</span>
  </label>
  <label className="label-radiobutton">
    <input type="radio" name="genero" value="otro"></input>
    <span class="design-radiobutton"></span>
    <span class="value-radiobutton">Otro</span>
  </label>
   

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
          text={`<label class="label-radiobutton">
  <input type="radio" name="genero" value="hombre" checked disabled></input>
  <span class="design-radiobutton"></span>
  <span class="value-radiobutton">Hombre</span>
</label>
<label class="label-radiobutton">
  <input type="radio" name="genero" value="mujer" disabled></input>
  <span class="design-radiobutton"></span>
  <span class="value-radiobutton">Mujer</span>
</label>
<label class="label-radiobutton">
  <input type="radio" name="genero" value="otro"></input>
  <span class="design-radiobutton"></span>
  <span class="value-radiobutton">Otro</span>
</label>`}
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

export default withAuthenticationRequired(Radiobutton, {
  onRedirecting: () => <Loading />,
});
