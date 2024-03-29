import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import CodeEditor from '@uiw/react-textarea-code-editor';
import CodeBox from "../components/CodeBox";
import MercButton1 from "../components/input/MercButton1";
import MercButton2 from "../components/input/MercButton2";
import MercButton3 from "../components/input/MercButton3";
import { TextareaAutosize } from "@mui/base";
import { Label } from "reactstrap";
import PermanentDrawerLeft from "../components/PermanentDrawerLeft.js";
import { CopyBlock, dracula } from "react-code-blocks";
import TopBar  from "../components/TopBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCode, faMinus, faPlus, faPuzzlePiece } from "@fortawesome/pro-light-svg-icons";
import {  NavLink } from "react-router-dom";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import breadcrumbs from "../assets/Breadcrumbs.svg";
import checkbox from "../assets/Checkbox.svg";
import dropdown from "../assets/Dropdown.svg";
import input from "../assets/Input.svg";
import radiobutton from "../assets/Radiobutton.svg";
import tab from "../assets/Tab.svg";
import toast from "../assets/Toast.svg";
import slider from "../assets/Slider.svg";
import toggle from "../assets/Toggle.svg";



export const Componentes = () => {

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  function openOptions() {
    document.getElementById("options").style.display ="block";
  }

  function closeOptions() {
    document.getElementById("options").style.display ="none";
  }

  
  function selectOption(option) {
    document.getElementById("inputField").value = option.innerHTML;
  }

  function incrementCounter() {
    document.getElementById("number").value ++;
    if(document.getElementById("number").value>0){
    document.getElementById("minus").classList.remove("grayed");
    }
  }

  function decrementCounter() {
    if(document.getElementById("number").value>0){
    document.getElementById("number").value --;
    
    }
    if (document.getElementById("number").value==0){
    document.getElementById("minus").classList.add("grayed");
    }
    console.log(document.getElementById("number").value);
  }
  const {
    isAuthenticated,
  } = useAuth0();

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
  const handleClickSquare = event => {
    setIsShownSquare(current => !current);

  };
  const handleClickSquareNeutral = event => {
    setIsShownSquareNeutral(current => !current);

  };
  const handleClickContador = event => {
    setIsShownContador(current => !current);

  };
  const handleClickTextarea1 = event => {
    setIsShownTextarea1(current => !current);

  };
  const handleClickToggle = event => {
    setIsShownToggle(current => !current);

  };
 
  return (
    <>
    
    <div id="colores" className="margin-sidebar background-grayscale-6 margin-contenido">
    <div className="padding-marca">
    <h6 className="text-overline">Codificación</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className=" mb-3">Empieza a desarrollar</h3>
    <p className="text-button-1 text-justify">Simplifica el proceso de desarrollo de tu proyecto al tener acceso a todo el contenido de Mercurius. De esta manera puedes empezar tu próximo proyecto de manera rápida y eficiente.</p>
    </div>
    
    </div>
    <div className=" margin-sidebar padding-paleta">

    <section className="">
        <div  >
          <div >
            <div >
              <p style={{fontWeight:500, fontSize:"36px", lineHeight:"40px"}}>Documentación</p>
              <br />
              <p>Agrega la librería y nuestro Kit de Font Awesome a tu proyecto para utilizar todos nuestros iconos.</p>
              <br />
            </div>
            <div style={{ backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px", marginBottom:"1rem" }}>
              <CopyBlock 
          language="html"
          text={`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" 
integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" 
crossorigin="anonymous" 
referrerpolicy="no-referrer" />
<script src="https://kit.fontawesome.com/c2c6803cc4.js" crossorigin="anonymous"></script>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
          wrapLines={true}
        
        />
              </div>
            <div>
              <p >Adquiere las Cascade Style Sheets con el estilo y comportamientos de los componentes de Mercurius y visualízalos en acción en Figma.</p>
              <br />
              <div className="flex flex-wrap mb-4 gap-2">
              <a style={{textDecoration:"none", color:"#fff !important"}} className="button-main-secondary-medium" href="https://www.figma.com/file/hMC9MlsjacrgewN5yBKhZG/Mercurius-Design-System?node-id=2344%3A4663&t=6ro4CQpSIiAJvl52-1" target="_blank">Explorar Figma<FontAwesomeIcon className="icon-button" icon={faArrowRight}/></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Modo de Uso
    </p>
    <br />
    <p>Descarga o importa el siguiente archivo .css en tu proyecto.</p>
    <br />
    <div className="flex">
    <a style={{textDecoration:"none !important", color:"#fff !important"}} className=" button-main-primary-medium" href="https://xtrim.com.ec/mercuriuscss/mercurius.css" target="_blank"> Cascade Style Sheets<FontAwesomeIcon className="icon-button" icon={faArrowRight} /></a>
    </div>
    <br />
    <p>Explora los componentes, copia su código html e insertalo en tu proyecto.</p>
    <br />
    <p style={{fontSize:"12px"}}>*Muchos de nuestros componentes hacen uso de JavaScript, por lo que tendrás que adecuar las funciones con los selectores, Ids y clases que estás utilizando, el código es para ejemplizar como debe funcionar el componente.</p>
    <br />
    <p>También puedes utilizar los componentes directamente instalándolos en tu proyecto. Estos ya se encuentran con los diseños, y colores utilizados.<br></br> Usa el siguiente comando en la terminal de tu proyecto para instalar el paquete de componentes:</p>
    <br />
    <div style={{ backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px", marginBottom:"1rem" }}>
              <CopyBlock 
          language="html"
          text={`npm i mercurius-ang`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
          wrapLines={true}
        
        />
              </div>
    <br/>
    <p style={{fontSize:"12px"}}>*La descarga de componentes se encuentra en desarrollo. Existen algunos componentes átomos que se encuentran listos para ser usados. Los componentes se iran actualizando eventualmente. Los componentes pueden implementar en aplicaciones desarrolladas en Angular</p>
    <br/>

    </div>
      </section>
      <section>
        <div>
          <p style={{fontSize:"36px"}}>Revisa nuestra galería de componentes</p>
          <br />
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", height:"calc(100svh - 80px)", gap:"clamp(1rem, 2.5vw, 2rem)"}}>
          <Link
            tag={RouterNavLink}
            to="/mercurius/breadcrumbs"
            exact
            className="card-componente" style={{position:"relative",background:"#EBECF0", borderRadius:"8px", display:"flex", flexDirection:"column", border:"3px solid #f9f9f9", alignItems:"center"}}
            >
            
              <div style={{display:"flex"}} className="mx-auto my-auto">
          <img src={breadcrumbs} alt="" />            
        </div>
        <div className="card-componente-name" style={{width:"100%",position:"absolute", left:"auto", bottom:"0", background:"#ffffff",display:"flex", borderBottomLeftRadius:"8px", borderBottomRightRadius:"8px", color:"#222D44", fontWeight:"600", paddingTop:"0.5rem", paddingBottom:"0.5rem"}}> <p style={{ marginTop:"1rem", marginBottom:"1rem", alignSelf:"center"}} className="mx-auto my-auto">Breadcrumbs</p> </div>
              
            </Link>
        
              <Link
              tag={RouterNavLink}
              to="/mercurius/button"
              exact
               className="card-componente" style={{position:"relative",background:"#EBECF0", borderRadius:"8px", display:"flex", flexDirection:"column", border:"3px solid #f9f9f9", alignItems:"center"}}>
              <div style={{display:"flex"}} className="mx-auto my-auto">
          <button className="button-main-primary-small ">Button</button>            
        </div>
        <div className="card-componente-name" style={{width:"100%",position:"absolute", left:"auto", bottom:"0", background:"#ffffff",display:"flex", borderBottomLeftRadius:"8px", borderBottomRightRadius:"8px", color:"#222D44", fontWeight:"600", paddingTop:"0.5rem", paddingBottom:"0.5rem"}}> <p style={{ marginTop:"1rem", marginBottom:"1rem", alignSelf:"center"}} className="mx-auto my-auto">Botones</p> </div>
              </Link>
              <Link
              tag={RouterNavLink}
              to="/mercurius/checkbox"
              exact 
              className="card-componente" style={{position:"relative",background:"#EBECF0", borderRadius:"8px", display:"flex", flexDirection:"column", border:"3px solid #f9f9f9", alignItems:"center"}}>
              <div style={{display:"flex"}} className="mx-auto my-auto">
          <img src={checkbox} alt="" />
        </div>
        <div className="card-componente-name" style={{width:"100%",position:"absolute", left:"auto", bottom:"0", background:"#ffffff",display:"flex", borderBottomLeftRadius:"8px", borderBottomRightRadius:"8px", color:"#222D44", fontWeight:"600", paddingTop:"0.5rem", paddingBottom:"0.5rem"}}> <p style={{ marginTop:"1rem", marginBottom:"1rem", alignSelf:"center"}} className="mx-auto my-auto">Checkbox</p> </div>
              </Link>
              <Link 
              tag={RouterNavLink}
              to="/mercurius/dropdown"
              exact 
              className="card-componente" style={{position:"relative",background:"#EBECF0", borderRadius:"8px", display:"flex", flexDirection:"column", border:"3px solid #f9f9f9", alignItems:"center"}}>
              <div style={{display:"flex"}} className="mx-auto my-auto">
          <img src={dropdown} alt="" style={{width:"150px"}} />
        </div>
        <div className="card-componente-name" style={{width:"100%",position:"absolute", left:"auto", bottom:"0", background:"#ffffff",display:"flex", borderBottomLeftRadius:"8px", borderBottomRightRadius:"8px", color:"#222D44", fontWeight:"600", paddingTop:"0.5rem", paddingBottom:"0.5rem"}}> <p style={{ marginTop:"1rem", marginBottom:"1rem", alignSelf:"center"}} className="mx-auto my-auto">Dropdown</p> </div>
              </Link>
              <Link
              tag={RouterNavLink}
              to="/mercurius/input"
              exact 
              className="card-componente" style={{position:"relative",background:"#EBECF0", borderRadius:"8px", display:"flex", flexDirection:"column", border:"3px solid #f9f9f9", alignItems:"center"}}>
              <div style={{display:"flex"}} className="mx-auto my-auto">
          <img src={input} alt="" style={{width:"150px"}} /> 
        </div>
        <div className="card-componente-name" style={{width:"100%",position:"absolute", left:"auto", bottom:"0", background:"#ffffff",display:"flex", borderBottomLeftRadius:"8px", borderBottomRightRadius:"8px", color:"#222D44", fontWeight:"600", paddingTop:"0.5rem", paddingBottom:"0.5rem"}}> <p style={{ marginTop:"1rem", marginBottom:"1rem", alignSelf:"center"}} className="mx-auto my-auto">Input</p> </div>
              </Link>
              <Link 
              tag={RouterNavLink}
              to="/mercurius/radiobutton"
              exact 
              className="card-componente" style={{position:"relative",background:"#EBECF0", borderRadius:"8px", display:"flex", flexDirection:"column", border:"3px solid #f9f9f9", alignItems:"center"}}>
              <div style={{display:"flex"}} className="mx-auto my-auto">
          <img src={radiobutton} alt="" />
        </div>
        <div className="card-componente-name" style={{width:"100%",position:"absolute", left:"auto", bottom:"0", background:"#ffffff",display:"flex", borderBottomLeftRadius:"8px", borderBottomRightRadius:"8px", color:"#222D44", fontWeight:"600", paddingTop:"0.5rem", paddingBottom:"0.5rem"}}> <p style={{ marginTop:"1rem", marginBottom:"1rem", alignSelf:"center"}} className="mx-auto my-auto">Radiobutton</p> </div>
              </Link>
              <Link
              tag={RouterNavLink}
              to="/mercurius/tab"
              exact 
              className="card-componente" style={{position:"relative",background:"#EBECF0", borderRadius:"8px", display:"flex", flexDirection:"column", border:"3px solid #f9f9f9", alignItems:"center"}}>
              <div style={{display:"flex"}} className="mx-auto my-auto">
          <img src={tab} alt="" style={{width:"100px"}}/>
        </div>
        <div className="card-componente-name" style={{width:"100%",position:"absolute", left:"auto", bottom:"0", background:"#ffffff",display:"flex", borderBottomLeftRadius:"8px", borderBottomRightRadius:"8px", color:"#222D44", fontWeight:"600", paddingTop:"0.5rem", paddingBottom:"0.5rem"}}> <p style={{ marginTop:"1rem", marginBottom:"1rem", alignSelf:"center"}} className="mx-auto my-auto">Tab</p> </div>
              </Link>
              <Link
              tag={RouterNavLink}
              to="/mercurius/toast"
              exact 
              className="card-componente" style={{position:"relative",background:"#EBECF0", borderRadius:"8px", display:"flex", flexDirection:"column", border:"3px solid #f9f9f9", alignItems:"center"}}>
              <div style={{display:"flex"}} className="mx-auto my-auto">
          <img src={toast} alt="" />
        </div>
        <div className="card-componente-name" style={{width:"100%",position:"absolute", left:"auto", bottom:"0", background:"#ffffff",display:"flex", borderBottomLeftRadius:"8px", borderBottomRightRadius:"8px", color:"#222D44", fontWeight:"600", paddingTop:"0.5rem", paddingBottom:"0.5rem"}}> <p style={{ marginTop:"1rem", marginBottom:"1rem", alignSelf:"center"}} className="mx-auto my-auto">Toast</p> </div>
              </Link>
              <Link
              tag={RouterNavLink}
              to="/mercurius/slider"
              exact 
              className="card-componente" style={{position:"relative",background:"#EBECF0", borderRadius:"8px", display:"flex", flexDirection:"column", border:"3px solid #f9f9f9", alignItems:"center"}}>
              <div style={{display:"flex"}} className="mx-auto my-auto">
          <img src={slider} alt="" style={{width:"150px"}} />
        </div>
        <div className="card-componente-name" style={{width:"100%",position:"absolute", left:"auto", bottom:"0", background:"#ffffff",display:"flex", borderBottomLeftRadius:"8px", borderBottomRightRadius:"8px", color:"#222D44", fontWeight:"600", paddingTop:"0.5rem", paddingBottom:"0.5rem"}}> <p style={{ marginTop:"1rem", marginBottom:"1rem", alignSelf:"center"}} className="mx-auto my-auto">Slider</p> </div>
              </Link>
              <Link
              tag={RouterNavLink}
              to="/mercurius/toggle"
              exact 
              className="card-componente" style={{position:"relative",background:"#EBECF0", borderRadius:"8px", display:"flex", flexDirection:"column", border:"3px solid #f9f9f9", alignItems:"center"}}>
              <div style={{display:"flex"}} className="mx-auto my-auto">
          <img src={toggle} alt="" style={{width:"50px"}}/>
        </div>
        <div className="card-componente-name" style={{width:"100%",position:"absolute", left:"auto", bottom:"0", background:"#ffffff",display:"flex", borderBottomLeftRadius:"8px", borderBottomRightRadius:"8px", color:"#222D44", fontWeight:"600", paddingTop:"0.5rem", paddingBottom:"0.5rem"}}> <p style={{ marginTop:"1rem", marginBottom:"1rem", alignSelf:"center"}} className="mx-auto my-auto">Toggle</p> </div>
              </Link>
              
              
          </div>
        </div>
      </section>
    {/* <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Empieza a desarrollar
    </p>
    <br />
    <p>Accede al archivo .css que contiene colores, estilos, comportamientos y efectos para </p>
    </div> */}

    {/* <div className="mb-5">
    <h5 className=' text-heading-3 '>Botones</h5>
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 mb-3'>Boton Primario</h5>

    
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
    <h5 className=' text-heading-5 mb-3'>Boton Secundario</h5>
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
    <h5 className=' text-heading-5 mb-3'>Boton Subtle</h5>
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
    <h5 className=' text-heading-5 mb-3'>Boton Destacado</h5>
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
    <h5 className=' text-heading-5 mb-3'>Boton Pink</h5>
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
    <h5 className=' text-heading-5 mb-3'>Boton Pink Secundario</h5>
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
    <div className=" mb-5">
    <h5 className=' text-heading-5 mb-3'>Boton Square</h5>
    
    {!isShownSquare && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSquare}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-square "><FontAwesomeIcon icon={faArrowLeft } /></button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isShownSquare &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSquare}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-square "></button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> } 
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 mb-3'>Boton Square Neutral</h5>
    
    {!isShownSquareNeutral && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSquareNeutral}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button className="button-square-neutral"><FontAwesomeIcon icon={faArrowLeft } /></button>            
        </div>
    </div>
    </div>
    
     </>  }
     {isShownSquareNeutral &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickSquareNeutral}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<button class="button-square-neutral"></button>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> } 
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 mb-3'>Contador</h5>
    
    {!isShownContador && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickContador}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
        <div className="counter">
          <button id="minus" style={{color: "#83378F"}} onClick={decrementCounter}><FontAwesomeIcon icon={faMinus} /></button>
          <input value="1" className="counter-number" id="number" readOnly />
          <button id="plus" style={{color: "#83378F"}} onClick={incrementCounter}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        </div>
    </div>
    </div>
    
     </>  }
     {isShownContador &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className="text-color-primary text-weight-semibold" onClick={handleClickContador}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<script>
function incrementCounter() {
  document.getElementById("number").value ++;
  if(document.getElementById("number").value>0){
    document.getElementById("minus").classList.remove("grayed");
  }
}

function decrementCounter() {
  if(document.getElementById("number").value>0){
    document.getElementById("number").value --;
  }
  if (document.getElementById("number").value==0){
    document.getElementById("minus").classList.add("grayed");
  }
}
</script>

<div className="counter">
    <button style={{color: "#83378F"}} onClick={decrementCounter()}><i class="fak fa-minus"></i></button>
    <input value="0" class="counter-number" id="number" readonly>
    <button style={{color: "#83378F"}} onClick={incrementCounter()}><i class="fak fa-plus"></i></button>
</div>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> } 
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 mb-3'>Text Area</h5>
    
    {!isShownTextarea1 && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickTextarea1}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
        <textarea className="textarea" placeholder="Placeholder"></textarea>
        </div>
    </div>
    </div>
    
     </>  }
     {isShownTextarea1 &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className="text-color-primary text-weight-semibold" onClick={handleClickTextarea1}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<textarea className="textarea" placeholder="Placeholder"></textarea>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> } 
    </div>
    <div className=" mb-5">
    <h5 className=' text-heading-5 mb-3'>Toggle</h5>
    
    {!isShownToggle && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickToggle}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
        <label className="switch">
  <input type="checkbox"></input>
  <span className="slider round"></span>
</label>
        </div>
    </div>
    </div>
    
     </>  }
     {isShownToggle &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className="text-color-primary text-weight-semibold" onClick={handleClickToggle}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<label class="switch">
  <input type="checkbox"></input>
  <span class="slider"></span>
</label>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> } 
    </div> */}
    {/* <div className=" mb-5">
    <h5 className=' text-heading-5 mb-3'>Text Area</h5>
    
    {!isShownTextarea1 && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickTextarea1}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
        <div class="dropdown">
  <input type="text" placeholder="Select an option" onfocus="this.select()" id="inputField"></input>
  <div class="dropdown-content">
    <a href="#" value="1" onclick="selectOption(this)">Option 1</a>
    <a href="#" value="2" onclick="selectOption(this)">Option 2</a>
    <a href="#" value="3" onclick="selectOption(this)">Option 3</a>
  </div>
</div>

<div>
      <input
        type="text"
        placeholder="Select an option"
        value={selectedOption}
        onFocus={openOptions}
        readOnly
      />
      <div id="options" style={{ display: "none" }}>
        <a onClick={() => handleOptionSelect("Option 1")}>Option 1</a>
        <a onClick={() => handleOptionSelect("Option 2")}>Option 2</a>
        <a onClick={() => handleOptionSelect("Option 3")}>Option 3</a>
      </div>
    </div>
        </div>
    </div>
    </div>
    
     </>  }
     {isShownTextarea1 &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className="text-color-primary text-weight-semibold" onClick={handleClickTextarea1}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<textarea className="textarea" placeholder="Placeholder"></textarea>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> } 
    </div> */}
    
    {/* <div className="mb-5">
    <CodeBox
      component={<MercButton1 />}
      htmlCode="<div>My component</div>"
    />
    </div> */}
</div>    
    </>
  );
};

export default withAuthenticationRequired(Componentes, {
  onRedirecting: () => <Loading />,
});
