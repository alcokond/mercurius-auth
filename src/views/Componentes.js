import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import CodeEditor from '@uiw/react-textarea-code-editor';
import MercButton1 from "../components/input/MercButton1";
import MercButton2 from "../components/input/MercButton2";
import MercButton3 from "../components/input/MercButton3";
import { TextareaAutosize } from "@mui/base";
import { Label } from "reactstrap";
import PermanentDrawerLeft from "../components/PermanentDrawerLeft.js";
import { CopyBlock, dracula } from "react-code-blocks";
import TopBar  from "../components/TopBar"


export const Componentes = () => {

  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  const {
    isAuthenticated,
  } = useAuth0();

  const [isShownPrimary, setIsShownPrimary] = useState(false);
  const [isShownSecondary, setIsShownSecondary] = useState(false);
  const [isShownSubtle, setIsShownSubtle] = useState(false);
  const [isShownOutstanding, setIsShownOutstanding] = useState(false);
  const [isShownPink, setIsShownPink] = useState(false);
  const [isShownPinkSecondary, setIsShownPinkSecondary] = useState(false);
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
  
  const handleClickMostrarPrimary1 = event => {
    setIsMostrarPrimary1(current => true);
    setIsMostrarPrimary2(current => false);
    setIsMostrarPrimary3(current => false);

  };
  const handleClickMostrarPrimary2 = event => {
    setIsMostrarPrimary1(current => false);
    setIsMostrarPrimary2(current => true);
    setIsMostrarPrimary3(current => false);

  };
  const handleClickMostrarPrimary3 = event => {
    setIsMostrarPrimary1(current => false);
    setIsMostrarPrimary2(current => false);
    setIsMostrarPrimary3(current => true);

  };
  const handleClickMostrarSecondary1 = event => {
    setIsMostrarSecondary1(current => true);
    setIsMostrarSecondary2(current => false);
    setIsMostrarSecondary3(current => false);

  };
  const handleClickMostrarSecondary2 = event => {
    setIsMostrarSecondary1(current => false);
    setIsMostrarSecondary2(current => true);
    setIsMostrarSecondary3(current => false);

  };
  const handleClickMostrarSecondary3 = event => {
    setIsMostrarSecondary1(current => false);
    setIsMostrarSecondary2(current => false);
    setIsMostrarSecondary3(current => true);

  };
  const handleClickMostrarSubtle1 = event => {
    setIsMostrarSubtle1(current => true);
    setIsMostrarSubtle2(current => false);
    setIsMostrarSubtle3(current => false);

  };
  const handleClickMostrarSubtle2 = event => {
    setIsMostrarSubtle1(current => false);
    setIsMostrarSubtle2(current => true);
    setIsMostrarSubtle3(current => false);

  };
  const handleClickMostrarSubtle3 = event => {
    setIsMostrarSubtle1(current => false);
    setIsMostrarSubtle2(current => false);
    setIsMostrarSubtle3(current => true);

  };
  const handleClickMostrarOutstanding1 = event => {
    setIsMostrarOutstanding1(current => true);
    setIsMostrarOutstanding2(current => false);
    setIsMostrarOutstanding3(current => false);

  };
  const handleClickMostrarOutstanding2 = event => {
    setIsMostrarOutstanding1(current => false);
    setIsMostrarOutstanding2(current => true);
    setIsMostrarOutstanding3(current => false);

  };
  const handleClickMostrarOutstanding3 = event => {
    setIsMostrarOutstanding1(current => false);
    setIsMostrarOutstanding2(current => false);
    setIsMostrarOutstanding3(current => true);

  };
  const handleClickMostrarPink1 = event => {
    setIsMostrarPink1(current => true);
    setIsMostrarPink2(current => false);
    setIsMostrarPink3(current => false);

  };
  const handleClickMostrarPink2 = event => {
    setIsMostrarPink1(current => false);
    setIsMostrarPink2(current => true);
    setIsMostrarPink3(current => false);

  };
  const handleClickMostrarPink3 = event => {
    setIsMostrarPink1(current => false);
    setIsMostrarPink2(current => false);
    setIsMostrarPink3(current => true);

  };
  const handleClickMostrarPinkSecondary1 = event => {
    setIsMostrarPinkSecondary1(current => true);
    setIsMostrarPinkSecondary2(current => false);
    setIsMostrarPinkSecondary3(current => false);

  };
  const handleClickMostrarPinkSecondary2 = event => {
    setIsMostrarPinkSecondary1(current => false);
    setIsMostrarPinkSecondary2(current => true);
    setIsMostrarPinkSecondary3(current => false);

  };
  const handleClickMostrarPinkSecondary3 = event => {
    setIsMostrarPinkSecondary1(current => false);
    setIsMostrarPinkSecondary2(current => false);
    setIsMostrarPinkSecondary3(current => true);

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
    
    <div id="colores" className="margin-sidebar background-grayscale-6">
    <div className="padding-colores">
    <h6 className="text-overline">Codificación</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700"}} className=" mb-3">Componentes</h3>
    <p className="text-button-1"></p>
    </div>
    
    </div>
    <div className=" margin-sidebar padding-paleta">
    <div className="mb-5">
    <h5 className=' text-heading-3 '>Botones</h5>
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 '>Boton Primario</h5>
    
    {isMostrarPrimary1 && 
    !isShownPrimary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" " onClick={handleClickPrimary}>Ver Código</button>
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
    <button className=" " onClick={handleClickPrimary}>Ver Componente</button> 
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
    <button className=" " onClick={handleClickPrimary}>Ver Código</button>
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
    <button className=" " onClick={handleClickPrimary}>Ver Componente</button> 
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
    <button className=" " onClick={handleClickPrimary}>Ver Código</button>
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
    <button className=" " onClick={handleClickPrimary}>Ver Componente</button> 
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
    <div>Explora otros tamaños: </div>
    <div className="flex flex-row gap-2">
      <button onClick={handleClickMostrarPrimary1}>Small</button>
      <button onClick={handleClickMostrarPrimary2}>Medium</button>
      <button onClick={handleClickMostrarPrimary3}>Large</button>
    </div>
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 '>Boton Secundario</h5>
    
    {isMostrarSecondary1 && 
    !isShownSecondary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" " onClick={handleClickSecondary}>Ver Código</button>
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
    <button className=" " onClick={handleClickSecondary}>Ver Componente</button> 
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
    <button className=" " onClick={handleClickSecondary}>Ver Código</button>
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
    <button className=" " onClick={handleClickSecondary}>Ver Componente</button> 
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
    <button className=" " onClick={handleClickSecondary}>Ver Código</button>
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
    <button className=" " onClick={handleClickSecondary}>Ver Componente</button> 
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
    <div>Explora otros tamaños: </div>
    <div className="flex flex-row gap-2">
      <button onClick={handleClickMostrarSecondary1}>Small</button>
      <button onClick={handleClickMostrarSecondary2}>Medium</button>
      <button onClick={handleClickMostrarSecondary3}>Large</button>
    </div>
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 '>Boton Subtle</h5>
    
    {isMostrarSubtle1 && 
    !isShownSubtle && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" " onClick={handleClickSubtle}>Ver Código</button>
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
    <button className=" " onClick={handleClickSubtle}>Ver Componente</button> 
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
    <button className=" " onClick={handleClickSubtle}>Ver Código</button>
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
    <button className=" " onClick={handleClickSubtle}>Ver Componente</button> 
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
    <button className=" " onClick={handleClickSubtle}>Ver Código</button>
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
    <button className=" " onClick={handleClickSubtle}>Ver Componente</button> 
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
    <div>Explora otros tamaños: </div>
    <div className="flex flex-row gap-2">
      <button onClick={handleClickMostrarSubtle1}>Small</button>
      <button onClick={handleClickMostrarSubtle2}>Medium</button>
      <button onClick={handleClickMostrarSubtle3}>Large</button>
    </div>
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 '>Boton Destacado</h5>
    
    {isMostrarOutstanding1 && 
    !isShownOutstanding && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" " onClick={handleClickOutstanding}>Ver Código</button>
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
    <button className=" " onClick={handleClickOutstanding}>Ver Componente</button> 
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
    <button className=" " onClick={handleClickOutstanding}>Ver Código</button>
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
    <button className=" " onClick={handleClickOutstanding}>Ver Componente</button> 
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
    <button className=" " onClick={handleClickOutstanding}>Ver Código</button>
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
    <button className=" " onClick={handleClickOutstanding}>Ver Componente</button> 
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
    <div>Explora otros tamaños: </div>
    <div className="flex flex-row gap-2">
      <button onClick={handleClickMostrarOutstanding1}>Small</button>
      <button onClick={handleClickMostrarOutstanding2}>Medium</button>
      <button onClick={handleClickMostrarOutstanding3}>Large</button>
    </div>
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 '>Boton Pink</h5>
    
    {isMostrarPink1 && 
    !isShownPink && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" " onClick={handleClickPink}>Ver Código</button>
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
    <button className=" " onClick={handleClickPink}>Ver Componente</button> 
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
    <button className=" " onClick={handleClickPink}>Ver Código</button>
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
    <button className=" " onClick={handleClickPink}>Ver Componente</button> 
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
    <button className=" " onClick={handleClickPink}>Ver Código</button>
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
    <button className=" " onClick={handleClickPink}>Ver Componente</button> 
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
    <div>Explora otros tamaños: </div>
    <div className="flex flex-row gap-2">
      <button onClick={handleClickMostrarPink1}>Small</button>
      <button onClick={handleClickMostrarPink2}>Medium</button>
      <button onClick={handleClickMostrarPink3}>Large</button>
    </div>
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 '>Boton Pink Secundario</h5>
    
    {isMostrarPinkSecondary1 && 
    !isShownPinkSecondary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" " onClick={handleClickPinkSecondary}>Ver Código</button>
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
    <button className=" " onClick={handleClickPinkSecondary}>Ver Componente</button> 
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
    <button className=" " onClick={handleClickPinkSecondary}>Ver Código</button>
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
    <button className=" " onClick={handleClickPinkSecondary}>Ver Componente</button> 
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
    <button className=" " onClick={handleClickPinkSecondary}>Ver Código</button>
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
    <button className=" " onClick={handleClickPinkSecondary}>Ver Componente</button> 
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
    <div>Explora otros tamaños: </div>
    <div className="flex flex-row gap-2">
      <button onClick={handleClickMostrarPinkSecondary1}>Small</button>
      <button onClick={handleClickMostrarPinkSecondary2}>Medium</button>
      <button onClick={handleClickMostrarPinkSecondary3}>Large</button>
    </div>
    </div>
    
    
      {/* <div id="cards">
  <div class="card">
    <div class="card-content">
      <div class="card-image">
        <i class="fa-duotone fa-apartment"></i>
      </div>
      <div class="card-info-wrapper">
        <div class="card-info">
          <i class="fa-duotone fa-apartment"></i>
          <div class="card-info-title">
            <h3>Botón primario mediano</h3>  
            <TextareaAutosize className="textarea-code" readOnly value="<button class='button-main-primary-medium' >Button</button>">
            </TextareaAutosize>
          </div>    
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <div class="card-image">
        <i class="fa-duotone fa-unicorn"></i>
      </div>
      <div class="card-info-wrapper">
        <div class="card-info">
          <i class="fa-duotone fa-unicorn"></i>
          <div class="card-info-title">
            <h3>Unicorns</h3>  
            <h4>A single corn. Er, I mean horn.</h4>
          </div>    
        </div>  
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <div class="card-image">
        <i class="fa-duotone fa-blender-phone"></i>
      </div>
      <div class="card-info-wrapper">
        <div class="card-info">
          <i class="fa-duotone fa-blender-phone"></i>
          <div class="card-info-title">
            <h3>Blender Phones</h3>  
            <h4>These absolutely deserve to exist.</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <div class="card-image">
        <i class="fa-duotone fa-person-to-portal"></i>
      </div>
      <div class="card-info-wrapper">
        <div class="card-info">
          <i class="fa-duotone fa-person-to-portal"></i>
          <div class="card-info-title">
            <h3>Adios</h3>  
            <h4>See you...</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <div class="card-image">
        <i class="fa-duotone fa-person-from-portal"></i>
      </div>
      <div class="card-info-wrapper">
        <div class="card-info">
          <i class="fa-duotone fa-person-from-portal"></i>
          <div class="card-info-title">
            <h3>I mean hello</h3>  
            <h4>...over here.</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <div class="card-image">
        <i class="fa-duotone fa-otter"></i>
      </div>
      <div class="card-info-wrapper">
        <div class="card-info">
          <i class="fa-duotone fa-otter"></i>
          <div class="card-info-title">
            <h3>Otters</h3>  
            <h4>Look at me, imma cute lil fella.</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
</div> */}
</div>



{/* 
      <div className="flex flex-wrap gap-20">
      <div>
      <Label>Botón primario mediano</Label>
      <MercButton1/>
      <TextareaAutosize className="textarea-code" readOnly value="<button class='button-main-primary-medium' >Button</button>">
      
      </TextareaAutosize>
      </div>
      <div>
      <Label>Botón secundario mediano</Label>
      <MercButton2/>
      <TextareaAutosize className="textarea-code" readOnly value="<button class='button-main-secondary-medium' >Button</button>">
      
      </TextareaAutosize>
      </div>
      <div>
      <Label>Botón sutil mediano</Label>
      <MercButton3/>
      <TextareaAutosize className="textarea-code" readOnly value="<button class='button-main-subtle-medium' >Button</button>">
      
      </TextareaAutosize>
      </div>
      </div> */}
      
    </>
  );
};

export default withAuthenticationRequired(Componentes, {
  onRedirecting: () => <Loading />,
});
