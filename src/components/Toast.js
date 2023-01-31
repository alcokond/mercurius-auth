import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

import toast from "../assets/toast.png";

import { CopyBlock, dracula } from "react-code-blocks";
import TopBar  from "./TopBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheckCircle, faChevronsDown, faChevronUp, faCode, faExclamationCircle, faInfoCircle, faMinus, faPlus, faPuzzlePiece, faXmarkCircle } from "@fortawesome/pro-light-svg-icons";
import { faChevronDown } from "@fortawesome/pro-duotone-svg-icons";
import { CheckCircle } from "@mui/icons-material";

export const Toast = () => {

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

  const handleClickTab = event => {
    const ps = document.getElementsByClassName('tab-select');
    for (let item of ps) {
      item.classList.remove('tab-focused');
      item.classList.add('tab');
    }
    event.currentTarget.classList.add('tab-focused');
    event.currentTarget.classList.remove('tab');
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
    
    <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6 flex flex-col" style={{position:"relative"}} >
    <div className="padding-componente flex flex-col">
    <h6 className="text-overline">Acciones</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-3">Toast</h3>
    <p className="text-button-1 text-justify"> Los toast son notificaciones que muestran al usuario información destacada en mensajes cortos, que desaparecen después de segundos.</p>
    
    </div>
    <div  style={{borderBottom:"solid 4px #EBECF0", width:"100%", marginTop:"auto"}}>
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
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Usar toast para mostrar información sustancial sobre el proceso que se esta realizando, los mensajes de notificación son cruciales porque muestran el estado del proceso.</p>
    <br></br>
    <p>Los toast por lo general aparecen en la parte superior de la página, se muestran por poco tiempo y luego desaparecen automáticamente.</p>
    </div>
    <br />
    <div><p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Modo de Uso
    </p></div>
    
    <div className="flex flex-col gap-4">
      <div className="flex" style={{backgroundColor:"#EBF6F2", borderBottom: "4px solid #38A57E", height:"15vh", alignItems:"center", justifyContent:"center", padding:"5%"}}>
        <p>Se utilizan para dar información adicional sobre un proceso que por lo general indica actualizaciones o cambios en el estado del sistema. Se utilizan también para proporcionar comentarios o indicaciones cortas e instantáneos.</p>
       </div>

    </div>

    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Variantes
    </p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Los Toast tienen varios estados que se definen según el tipo de mensaje que se muestre. Por ejemplo:</p>
    <br />
    <div className="flex flex-col gap-4">
      <div>
      <strong>Información</strong>
    <div style={{border: "1px solid #4A3CDB", background: "#FFFFFF", borderRadius:"8px", gap:"2%", height:"79px"}} className="flex flex-row">
          <div style={{width: "2%", backgroundColor: "#4A3CDB"}}></div>
          <div style={{color:"#4A3CDB", alignSelf:"center", fontSize:"24px"}}><FontAwesomeIcon icon={faInfoCircle} /></div>
          <div style={{alignSelf:"center"}}>Muestran información adicional que ayuda a conocer más 
sobre el proceso que se está realizando.</div>
          <div style={{alignSelf:"center", marginRight:"2%", marginLeft:"auto"}}><FontAwesomeIcon icon={faMinus} /></div>
        </div>
        </div> 
    <div>
    <strong>Éxito</strong>
    <div style={{border: "1px solid #38A57E", background: "#FFFFFF", borderRadius:"8px", gap:"2%", height:"79px"}} className="flex flex-row">
          <div style={{width: "2%", backgroundColor: "#38A57E"}}></div>
          <div style={{color:"#38A57E", alignSelf:"center", fontSize:"24px"}}><FontAwesomeIcon icon={faCheckCircle} /></div>
          <div style={{alignSelf:"center"}}>Cuando se logra concluir una acción de forma positiva.</div>
          <div style={{alignSelf:"center", marginRight:"2%", marginLeft:"auto"}}><FontAwesomeIcon icon={faMinus} /></div>
        </div>
    </div>
    <div>
    <strong>Error</strong>
    <div style={{border: "1px solid #BD033B", background: "#FFFFFF", borderRadius:"8px", gap:"2%", height:"79px"}} className="flex flex-row">
          <div style={{width: "2%", backgroundColor: "#BD033B"}}></div>
          <div style={{color:"#BD033B", alignSelf:"center", fontSize:"24px"}}><FontAwesomeIcon icon={faXmarkCircle} /></div>
          <div style={{alignSelf:"center"}}>Indica el error de una acción que no se ha logrado concluir.</div>
          <div style={{alignSelf:"center", marginRight:"2%", marginLeft:"auto"}}><FontAwesomeIcon icon={faMinus} /></div>
        </div>
    </div>
    <div>
    <strong>Advertencia</strong>
    <div style={{border: "1px solid #F9B100", background: "#FFFFFF", borderRadius:"8px", gap:"2%", height:"79px"}} className="flex flex-row">
          <div style={{width: "2%", backgroundColor: "#F9B100"}}></div>
          <div style={{color:"#F9B100", alignSelf:"center", fontSize:"24px"}}><FontAwesomeIcon icon={faExclamationCircle} /></div>
          <div style={{alignSelf:"center"}}>Muestra mensajes de aviso que previenen al usuario e indican acciones no permitidas.</div>
          <div style={{alignSelf:"center", marginRight:"2%", marginLeft:"auto"}}><FontAwesomeIcon icon={faMinus} /></div>
        </div>
    </div>
    
    </div>
    </div>
    <div className="flex flex-col">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Anatomía
    </p>
    <div style={{width:"60%", alignSelf:"center", marginTop: "4%"}}>
    <img src={toast} ></img></div>
    <div className=" mt-4"></div>
    <p><strong>Icono:</strong> Representan el estado del mensaje, aportan significado.</p>
    <p><strong>Mensaje:</strong> Es la información que se muestra. Debe ser breve y aportar ayuda para guiar al usuario.</p>
    <p><strong>Dismissible:</strong> Permite al usuario cerrar el toast.</p>
    <p><strong>Contenedor:</strong> Contiene el mensaje y muestra su estado mediante el uso de colores.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Comportamiento
    </p>
    <br></br>
    <p>Los Toast tienen un boton Dismissible que sirve para cerrar el toast. Pueden mostrar texto y tienen un icono que depende de su tipo. Se renderizan como resultado de una acción de parte del usuario o como respuesta del servidor.</p>
    <br></br>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Mejores Prácticas
    </p>
    <br />
    <ul>
    <li style={{marginBottom:"8px"}}>Las notificaciones no deben ser utilizadas de forma recurrente porque pueden interrumpir el flujo de trabajo del usuario.</li>
    <li style={{marginBottom:"8px"}}>La información importante debe ser visible al instante.</li>
    <li style={{marginBottom:"8px"}}>El texto debe ser corto y preciso, además de incluir información adicional que proporcione al usuario posibles soluciones.</li>
    </ul>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Guidelines de contenido
    </p>
    <br></br>
    <ul>
    <li style={{marginBottom:"8px"}}>Los Toast pueden o no incluir en la parte inferior del contenedor una marca de tiempo que muestre la hora en que se envió la notificación.</li>
    <li style={{marginBottom:"8px"}}>La altura de los Toast depende de la longitud del mensaje.</li>
    <li style={{marginBottom:"8px"}}>Los Toast aparecen en la parte superior de la pantalla y se deslizan hacia adentro y hacia afuera.</li>
    </ul>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Accesibilidad
    </p>
    <br></br>
    <ul>
    <li style={{marginBottom:"8px"}}>Los usuarios deben poder acceder a los Toast después de que estos hayan desaparecido, lo que permite al usuario acceder a esa información cuando quiera.</li>
    <li style={{marginBottom:"8px"}}>Agregar elementos interactivos dentro del Toast que creen accesos directos a una nueva pagina donde el usuario pueda resolver el problema fácilmente y continuar con su proceso.</li>
    </ul>
    </div> 
    </div> 
    
    }
  {isShownCode && 
    <div className="padding-componente flex flex-col gap-4">
    <div><p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Desarrollo
    </p>
    <br></br>
    <p>Los toast constan de un <code>div</code> que contiene el icono, el texto y el dismissible. Se utiliza un contenedor Flexbox.</p>
    </div>
    <div className=" mb-5">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Toast
    </p>
    <br></br>
    {isMostrarPrimary1 && 
    !isShownPrimary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full-noflex flex flex-col" style={{justifyContent:"center"}}>
        <div >
        <div style={{border: "1px solid #38A57E", background: "#FFFFFF", borderRadius:"8px", gap:"2%", height:"79px"}} className="flex flex-row">
          <div style={{width: "2%", backgroundColor: "#38A57E"}}></div>
          <div style={{color:"#38A57E", alignSelf:"center", fontSize:"24px"}}><FontAwesomeIcon icon={faCheckCircle} /></div>
          <div style={{alignSelf:"center"}}>Notificación de éxito: texto con información</div>
          <div style={{alignSelf:"center", marginRight:"2%", marginLeft:"auto"}}><FontAwesomeIcon icon={faMinus} /></div>
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
          text={`<div style={{border: "1px solid #38A57E", background: "#FFFFFF", borderRadius:"8px", gap:"2%", height:"79px"}} className="flex flex-row">
  <div style={{width: "2%", backgroundColor: "#38A57E"}}></div>
  <div style={{color:"#38A57E", alignSelf:"center", fontSize:"24px"}}><FontAwesomeIcon icon={faCheckCircle} /></div>
  <div style={{alignSelf:"center"}}>Notificación de éxito: texto con información</div>
  <div style={{alignSelf:"center", marginRight:"2%", marginLeft:"auto"}}><FontAwesomeIcon icon={faMinus} /></div>
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
  
   
  );
};

export default withAuthenticationRequired(Toast, {
  onRedirecting: () => <Loading />,
});
