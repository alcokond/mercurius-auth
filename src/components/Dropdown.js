import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faIcons, faPalette, faPenNib, faTypewriter } from "@fortawesome/pro-light-svg-icons";
import {faArrowRight, facircleuser, faUserCircle, faRocket, faUserAstronaut, faHandHeart } from "@fortawesome/pro-light-svg-icons";
import { NavLink } from 'react-router-dom';
import button from "../assets/button.png";
import dont from "../assets/dont.png";
import dropdownradio from "../assets/dropdownradio.png";
import dropdowncheck from "../assets/dropdowncheck.png";
import dropdownelipsis from "../assets/dropdownelipsis.png";
import dropdownuser from "../assets/dropdownuser.png";
import dropdown from "../assets/anatomiadropdown.png";


const Dropdown = () => (
  <>
    
  
  <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6" style={{position:"relative"}} >
    <div className="padding-componente flex flex-col">
    <h6 className="text-overline">Acciones</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-3">Dropdown</h3>
    <p className="text-button-1 text-justify">El dropdown permite enlistar y agrupar opciones relacionadas a un menú desplegable y mostrarlas.</p>
    
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
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Los dropdown se usan cuando hay más de cinco o más opciones a elegir, su función es mostrar una lista de opciones relacionadas a una misma acción.</p>
    <br></br>
    <p style={{color: "#222D44",fontWeight:600, fontSize:"16px", lineHeight:"22px"}}>¿Cuántas clases de dropdown existen?</p>      
    <p>Existen dos clases:</p>
    <p>
    <p>1. Los que permiten seleccionar una sola opción</p>
    <p>2. Los que permiten seleccionar varias opciones</p>
    </p>
    <br></br>
    <p>1. Menú de radio button: permiten seleccionar una sola opción </p>
    <br />
    <div style={{width:"20%"}}><img src={dropdownradio} alt="" /></div>
    <p>2. Menú de checkbox: permiten seleccionar varias opciones</p>
    <br />
    <div style={{width:"20%"}}><img src={dropdowncheck} alt="" /></div>
    <p>Existen también otras opciones de menú que utilizan un icono como controlador.</p>
    <br />
    <p>1. Dropdowns cuyo controlador es un Icono con elipsis</p>
    <br />
    <div style={{width:"10%"}}><img src={dropdownelipsis} alt="" /></div>
    <p>2. Dropdowns cuyo controlador es un Icono de usuario para usarse en perfiles</p>
    <br />
    <div style={{width:"10%"}}><img src={dropdownuser} alt="" /></div>
    </div>
    <div>
    
    
    </div>
    <div className="flex flex-col">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Anatomía
    </p>
    <div style={{width:"20%", alignSelf:"center", marginTop: "4%"}}>
    <img src={dropdown} ></img></div>
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
    Mejores Prácticas
    </p>
    <br />
    <li>Al organizar la lista se deben colocar primero las opciones más seleccionadas.</li>
    <li>Se pueden utilizar distintos componentes que faciliten al usuario la elección de opciones.</li>
    <li>Si la lista es larga, se deben incluir elementos de menú como casillas de check buttons y radio button. Por ejemplo, el “menú de perfil” que utiliza un icono de usuario como controlador.</li>
    <li>Si existen acciones distintas dentro de un menú, estas deben agruparse por categorías..</li>
    <li>Si utiliza Option list, debe describir cada opción con un título y descripción corto.</li>
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
    <li>El texto de las opciones debe ser breve para captar la atención del usuario.</li>
    <li>El título debe hacer alusión a la acción que se está por realizar, es decir informar al usuario.</li>
    <li>Si no son necesarios, evitar el uso de artículos, para describir las opciones de menú. Por ejemplo, usar “Agregar herramientas” en lugar de “agregar una herramienta”.</li>
    </div>
    <div style={{alignSelf:"center"}}><img src={dont} ></img></div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Accesibilidad
    </p>
    <br></br>
    <li>Incluir texto alternativo en los botones de ícono.</li>
    </div>
    </div>

    
    

  </div>
  
    </>
);

export default Dropdown;
