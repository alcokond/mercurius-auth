import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faIcons, faPalette, faPenNib, faTypewriter } from "@fortawesome/pro-light-svg-icons";
import {faArrowRight, facircleuser, faUserCircle, faRocket, faUserAstronaut, faHandHeart } from "@fortawesome/pro-light-svg-icons";
import { NavLink } from 'react-router-dom';
import button from "../assets/button.png";

const Button = () => (
  <>
    
  
  <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6" style={{position:"relative"}} >
    <div className="padding-componente flex flex-col">
    <h6 className="text-overline">Acciones</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-3">Button</h3>
    <p className="text-button-1 text-justify">Los botones son parte esencial de la interfaz, actúan como guía para el usuario, ya que indican el proceso a realizar.</p>
    
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
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>La función de los botones es señalar acciones, permitiendo al usuario continuar navegando por la interfaz. Se utilizan también como parte de componentes que ayudan a iniciar y concluir procesos.</p>
    <br></br>
    <p style={{color: "#222D44",fontWeight:600, fontSize:"16px", lineHeight:"22px"}}>¿Qué rol cumplen los botones?</p>      
    <br></br>
    <p>
    <li>Indican la acción que se va a realizar.</li>
    <li>Permiten completar procesos.</li>
    <li>Permiten al usuario avanzar y continuar moviendose por la interfaz.</li>
    <li>Funcionan como un llamado a la acción (call to action).</li>
    <li>Suelen utilizar iconos para reforzar el significado de la acción que indica el botón.</li>
    </p>
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
    
    <li>Botón primario: Señala la acción principal a ejecutar.</li>
    <li>Los botones secundarios se identifican por tener un color menos llamativo o no tener color.</li>
    <li>Los botones tienen medidas distintas según su tamaño (pequeño - mediano - largo), hay que tener en cuenta que las medidas de la altura y largo varían según se usen en la web u aplicaciones móviles. De pequeños a largos miden 32 cm - 48cm - 64cm.</li>
    <li>El texto de los botones debe ser breve y preciso. Es mejor utilizar dos palabras y en casos excepcionales un máximo de 4 palabras cuando es necesario indicar acciones complejas.</li>
    <li>Es necesario utilizar palabras relacionadas con el proceso que se està desarrollando.</li>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Alineación
    </p>
    
    <li>Cuidar el orden y la posición de los botones. Si hay pares correspondientes (“volver” y “aceptar”) el botón primario se alinea a la derecha. Es importante asegurarse que el diseño ponga énfasis en la acción principal.</li>
    <li>Los botones de posición central se usan para indicar la acción que se está por iniciar o concluir.</li>
    <li>Los botones pares con iconos como “volver” y “continuar” que utilizan flechas para aportar dirección, deben señalar el lado indicado según la acción a ejecutarse. Por ejemplo, si la acción es volver al menú anterior la flecha debe señalar a la izquierda.</li>
    <li>El texto de los botones debe ser breve y preciso. Es mejor utilizar dos palabras y en casos excepcionales un máximo de 4 palabras cuando es necesario indicar acciones complejas.</li>
    <li>Es necesario utilizar palabras relacionadas con el proceso que se està desarrollando.</li>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Guidelines de contenido
    </p>
    <br></br>
    <p>Los botones son parte esencial de la interfaz, por esta razón es importante establecer pautas de contenido a seguir para su correcto uso.</p>
    </div>
    
    </div>

    
    

  </div>
  
    </>
);

export default Button;
