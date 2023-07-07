import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

import dropdownradio from "../assets/dropdownradio.png";
import dropdownradio2 from "../assets/dropdownradio-2.png";
import dropdowncheck from "../assets/dropdowncheck.png";
import dropdowncheck2 from "../assets/dropdowncheck-2.png";
import dropdownelipsis from "../assets/dropdownelipsis.png";
import dropdownelipsis2 from "../assets/dropdownelipsis-2.png";
import dropdownuser from "../assets/dropdownuser.png";
import dropdownuser2 from "../assets/dropdownuser-2.png";
import dropdown from "../assets/anatomiadropdown.png";
import dropdown2 from "../assets/anatomiadropdown-2.png";
import dropdowndo from "../assets/dropdown do.svg";
import dropdowndo2 from "../assets/dropdown do-2.svg";
import dropdowndont from "../assets/dropdown dont.svg";
import dropdowndont2 from "../assets/dropdown dont-2.svg";


import { CopyBlock, dracula } from "react-code-blocks";
import TopBar  from "./TopBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronsDown, faChevronUp, faCode, faMinus, faPlus, faPuzzlePiece } from "@fortawesome/pro-light-svg-icons";
import { faChevronDown } from "@fortawesome/pro-duotone-svg-icons";

export const Dropdown = () => {

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
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className="mb-3">Dropdown</h3>
    <p className="text-button-1 text-justify">El dropdown permite enlistar y agrupar opciones relacionadas a un menú desplegable y mostrarlas.</p>
    <br/>
    </div>
    <br/>
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
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Los dropdown se usan cuando hay cinco o más opciones a elegir, su función es mostrar una lista de opciones relacionadas a una misma acción, para facilitar su elección. </p>
    <br></br>
    <p style={{color: "#222D44",fontWeight:600, fontSize:"16px", lineHeight:"22px"}}>Existen varios tipos y se utilizan de acuerdo a la necesidad, las más comunes son:</p>      
    <br />
    
    <p>1. Los que permiten seleccionar una sola opción</p>
    <p>2. Los que permiten seleccionar varias opciones</p>
    <br></br>
    <p>Cuando la lista de opciones es larga y existen muchas opciones iguales que se agrupan por categorías, se utilizan check buttons y radio buttons.</p>
    <br />
    <p>1. Menú de radiobutton: permiten seleccionar una sola opción </p>
    <br />
    <div style={{width:"20%", marginBottom:"2rem"}}><img src={dropdownradio2} alt="" /></div>
    <p>2. Menú de checkbox: permiten seleccionar varias opciones</p>
    <br />
    <div style={{width:"20%", marginBottom:"2rem"}}><img src={dropdowncheck2} alt="" /></div>
    <p>Existen también otras opciones de menú que utilizan un icono como controlador.</p>
    <br />
    <p>1. Dropdowns cuyo controlador es un Icono con elipsis</p>
    <br />
    <div style={{width:"10%", marginBottom:"2rem"}}><img src={dropdownelipsis2} alt="" /></div>
    <p>2. Dropdowns cuyo controlador es un Icono de usuario para usarse en perfiles</p>
    <br />
    <div style={{width:"10%", marginBottom:"2rem"}}><img src={dropdownuser2} alt="" /></div>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Modo de Uso
    </p>
    <br />
    <p style={{color: "#222D44",fontWeight:600, fontSize:"16px", lineHeight:"22px"}}>¿Cuándo usarlos?</p>
    <br></br>
    <p>Los dropdowns se utilizan con frecuencia en formularios, menús y otras interacciones en las que es necesario seleccionar una opción de una lista predeterminada. Al utilizarlos el usuario puede elegir una opción de manera eficiente sin tener que escribir una respuesta o navegar a través de una larga lista de opciones.</p>
    <br />
    <p style={{color: "#222D44",fontWeight:600, fontSize:"16px", lineHeight:"22px"}}>¿Cuándo no usarlos?</p>
    <br />
    <p>No se deben utilizar cuando:</p>
    <br />
    <ul>
    <li style={{marginBottom:"8px"}}>Solo hay una opción para seleccionar</li>
    <li style={{marginBottom:"8px"}}>Hay demasiadas opciones, es mejor usar un sistema de búsqueda o filtrado para ayudar al usuario a encontrar la opción deseada.</li>
    <li style={{marginBottom:"8px"}}>La selección es crítica, un dropdown puede ser poco visible o fácil de olvidar.</li>
    <li style={{marginBottom:"8px"}}>La selección requiere una explicación.</li>
    </ul>
    </div>
    <div className="flex flex-col">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Anatomía
    </p>
    <div style={{width:"30%", alignSelf:"center", marginTop: "4%"}}>
    <img src={dropdown2} ></img></div>
    <div className=" mt-4"></div>
    <p><strong>Título:</strong> Actúa como indicador ya que orienta al usuario.</p>
    <p><strong>Icono de ayuda:</strong> Otorga significado a la acción.</p>
    <p><strong>Trigger:</strong> Activa el despliegue de opciones.</p>
    <p><strong>Menú:</strong> Son las opciones que contiene el dropdown.</p>
    <p><strong>Placeholder:</strong> Texto indicador que permite al usuario saber la acción que debe realizar.</p>

    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Comportamiento
    </p>
    <br></br>
    <p>El dropdown presenta 2 estados,: seleccionado y no seleccionado. En caso de no ser seleccionado se presenta como valor un valor placeholder o un valor predeterminado en caso de ser necesario.</p>
    <br></br>
    <p>Al dar click en el dropdown, se despliega una lista de opciones. Al seleccionar una de las opciones, el valor del dropdown cambiaría al valor de la opcion elegida y mostraría este valor.</p>
    <br></br>
    <p>El dropdown cuenta con un título, un ícono de ayuda, un valor placeholder, un trigger y un menú que se despliega al hacer click en cualquier parte del componente.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Ancho
    </p>
    <br />
    <p>Los elementos del menú no pueden exceder el ancho máximo del componente. Existirán casos en que el texto de una de las opciones de la lista sea más largo que las otras, si esto sucede, el menú crecerá hasta el ancho de la opción más larga, por otro lado, si no cumple con el ancho máximo se ajustará al texto más largo.</p>
    <br /> 
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Posición
    </p>
    <br />
    <p>Estos componentes deben de estar alineados de forma vertical al grid, usualmente con otros componentes de tipo formulario.</p>
    </div>
    <div style={{alignSelf:"center", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3%"}}>
    <img src={dropdowndo2} ></img>
    <img src={dropdowndont2} ></img>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Mejores Prácticas
    </p>
    <br />
    <ul><li style={{marginBottom:"8px"}}>Al organizar la lista se deben colocar primero las opciones más seleccionadas.</li>
    <li style={{marginBottom:"8px"}}>Se pueden utilizar distintos componentes que faciliten al usuario la elección de opciones.</li>
    <li style={{marginBottom:"8px"}}>Si la lista es larga, se deben incluir elementos de menú como casillas de check buttons y radio button. Por ejemplo, el “menú de perfil” que utiliza un icono de usuario como controlador.</li>
    <li style={{marginBottom:"8px"}}>Si existen acciones distintas dentro de un menú, estas deben agruparse por categorías.</li>
    <li style={{marginBottom:"8px"}}>Si utiliza Option list, debe describir cada opción con un título y descripción corto.</li></ul>
    
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Ancho
    </p>
    <br />
    <p>Los elementos del menú no pueden exceder el ancho máximo del componente. Existirán casos en que el texto de una de las opciones de la lista sea más largo que las otras, si esto sucede, el menú crecerá hasta el ancho de la opción más larga, por otro lado, si no cumple con el ancho máximo se ajustará al texto más largo.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Guidelines de contenido
    </p>
    <br></br>
    <ul><li style={{marginBottom:"8px"}}>El texto de las opciones debe ser breve para captar la atención del usuario.</li>
    <li style={{marginBottom:"8px"}}>El título debe hacer alusión a la acción que se está por realizar, es decir, informar al usuario.</li>
    <li style={{marginBottom:"8px"}}>Si no son necesarios, evitar el uso de artículos para describir las opciones de menú. Por ejemplo, usar “Agregar herramientas” en lugar de “Agregar una herramienta”.</li></ul>
    
    </div>
    {/* <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Accesibilidad
    </p>
    <br></br>
    <li style={{marginBottom:"8px"}}>Incluir texto alternativo en los botones de ícono.</li>
    </div> */}
    </div> }
  {isShownCode && 
    <div className="padding-componente flex flex-col gap-4">
    <div><p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Desarrollo
    </p>
    <br></br>
    <p>El Dropdown tiene múltiples componentes: </p>
    <br />
    <ul>
    <li style={{marginBottom:"8px"}}>Un <code>&lt;div&gt;</code> que actúa como contenedor.</li>
    <li style={{marginBottom:"8px"}}>Un <code>&lt;div&gt;</code> que contiene el <code>&lt;input&gt;</code> donde se mostrará la información seleccionada.</li>
    <li style={{marginBottom:"8px"}}>Un <code>&lt;div&gt;</code> que se muestra al hacer click en el contenedor y que muestra las opciones. </li>
    </ul>
    
    </div>
    <div className=" mb-5">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Dropdown
    </p>
    <br></br>
    <h5 className=' text-heading-5 text-color-grayscale-2 mb-3'>Dropdown indicator</h5>
    {/* <div className=" text-subtitle-1 mb-2">Explora otros tamaños: </div> */}
    <p>Muestra un menú desplegable con una lista de opciones que se activan al seleccionar el trigger.</p>
    
    {isMostrarPrimary1 && 
    !isShownPrimary && <> 
    <div style={{display: "flex"}} className=" flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full-drop">
        <div className="mx-auto my-auto">
        <div className="dropdown-component">
          <div id="dropbtn" onClick={toggleDropdown} className={`dropbtn ${selected ? "selected" : ""}`}><input readonly class="dropinput" id="dropinput" value={selectedOption} type="text"></input><div id="dropdown-icon" class={`dropdown-icon ${selected ? "selected" : ""}`}>{!isOpen && <FontAwesomeIcon icon={faChevronDown} />}{isOpen && <FontAwesomeIcon icon={faChevronUp} />}</div></div>
          {isOpen &&
          <div id="myDropdown" className="dropdown-content-react">
            <a onClick={() => setSelectedOption("Opcion 1")}>Opción 1</a>
            <a onClick={() => setSelectedOption("Opcion 2")}>Opción 2</a>
            <a onClick={() => setSelectedOption("Opcion 3")}>Opción 3</a>
          </div> }
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
          text={`<script>
function updateInputValue(option) {
document.getElementById("dropinput").value = option.textContent;
}
        
document.getElementById("dropbtn").addEventListener("click", function() {
  this.classList.toggle("dropdown-clicked");
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("dropdown-icon").style.color= "#83378F";
  document.getElementById("chevron-up").style.display= "block";
  document.getElementById("chevron-down").style.display= "none";
  document.getElementById("dropbtn").style.border= "1.5px solid #B1B5BD!important";
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    document.getElementById("chevron-up").style.display= "none";
    document.getElementById("chevron-down").style.display= "block";
    document.getElementById("dropdown-icon").style.color= "#6A7180";
    document.getElementById("dropbtn").classList.remove("dropdown-clicked");
    document.getElementById("chevron-up").style.display= "none";
    document.getElementById("chevron-down").style.display= "block";
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>
<div class="dropdown">
  <div id="dropbtn" onclick="myFunction()" class="dropbtn"><input readonly class="dropinput" id="dropinput" placeholder="Placeholder" type="text"></input><div id="dropdown-icon" class="dropdown-icon"><i id="chevron-down" class="fa-solid fa-chevron-down" ></i><i id="chevron-up" class="fa-solid fa-chevron-up" style="display:none"></i></div></div>
  <div id="myDropdown" class="dropdown-content">
    <a onclick="updateInputValue(this)">Opción 1</a>
    <a onclick="updateInputValue(this)">Opción 2</a>
    <a onclick="updateInputValue(this)">Opción 3</a>
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

export default withAuthenticationRequired(Dropdown, {
  onRedirecting: () => <Loading />,
});
