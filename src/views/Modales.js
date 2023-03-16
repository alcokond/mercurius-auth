import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import { CopyBlock, dracula } from "react-code-blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCode, faHeart, faMinus, faPlus, faPuzzlePiece } from "@fortawesome/pro-light-svg-icons";


export const Componentes = () => {

  const {
    isAuthenticated,
  } = useAuth0();

  const [isShownModalNoBoton, setIsShownModalNoBoton] = useState(false);
  
  const handleClickModalNoBoton = event => {
    setIsShownModalNoBoton(current => !current);

  };
  
 
  return (
    <>
    
    <div id="colores" className="margin-sidebar background-grayscale-6 margin-contenido">
    <div className="padding-marca">
    <h6 className="text-overline">Codificación</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className=" mb-3">Modales</h3>
    <p className="text-button-1 text-justify">Mercurius contiene una extensa librería de componentes elaborados a la medida de Xtrim. Permiten agilizar el desarrollo, promover la consistencia y aumentar la escalabilidad de nuestras páginas web y aplicaciones.</p>
    </div>
    
    </div>
    <div className=" margin-sidebar padding-paleta">
    
    <div className=" mb-5">
    <h5 className=' text-heading-5 mb-3'>Modal sin X</h5>
    
    {!isShownModalNoBoton && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickModalNoBoton}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-modales flex">
        <div className=" my-5 mx-auto">
        <div class="notification-card">
            <div className="notification-icon"><FontAwesomeIcon icon={faHeart} /></div>
            <div className="text-heading-4 text-color-primary-shade-2">Title</div>
            <div className="text-body-1">Mewing large azkaban honeydukes lies will swiveling impedimenta. Grim harry basilisk banges grindylows robes smile</div>
            <div className="flex gap-inherit"><button className="button-main-subtle-medium">Button</button><button className="button-main-primary-medium">Button</button></div>
        </div>
        </div>
    </div>
    </div>
    
     </>  }
     {isShownModalNoBoton &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className="text-color-primary text-weight-semibold" onClick={handleClickModalNoBoton}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<div class="notification-card">
    <div class="notification-icon"><FontAwesomeIcon icon={faHeart} /></div>
    <div class="text-heading-4 text-color-primary-shade-2">Title</div>
    <div class="text-body-1">Mewing large azkaban honeydukes lies will swiveling impedimenta. Grim harry basilisk banges grindylows robes smile</div>
    <div class="flex gap-inherit"><button class="button-main-subtle-medium">Button</button><button class="button-main-primary-medium">Button</button></div>
</div>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> } 
    </div>
    
</div>    
    </>
  );
};

export default withAuthenticationRequired(Componentes, {
  onRedirecting: () => <Loading />,
});