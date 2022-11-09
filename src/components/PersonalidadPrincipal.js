import React from "react";
import logo from "../assets/logo.svg";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faIcons, faPalette, faPenNib, faTypewriter } from "@fortawesome/pro-light-svg-icons";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Row, Col } from "reactstrap";
import PermanentDrawerLeft from "./PermanentDrawerLeft.js";
import DrawerGuidelines from "./DrawerGuidelines";
import {faArrowRight, facircleuser, faUserCircle, faRocket, faUserAstronaut, faHandHeart } from "@fortawesome/pro-light-svg-icons";

const PersonalidadPrincipal = () => (
  <>
    <DrawerGuidelines></DrawerGuidelines>
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Marca</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-2">Personalidad</h3>
    <p className="text-button-1 text-justify">Somos un equipo y trabajamos pensando en otorgar las mejores experiencias a nuestros usuarios, queremos que piensen en nosotros como entretenimiento accesible.</p>
<p>“Convertir procesos en experiencias agradables”, nuestro compromiso con los usuarios define nuestra personalidad.</p>
    </div>
    </div>
    
    <div className=" padding-marca">
    <div style={{fontSize:"31px", fontWeight:"600", marginBottom:"1vh", color:"#000000"}}>Nuestro autoconcepto</div>
    <div>
    <div className="icon-box background-primary text-color-primary-solid-4 mb-1"> <FontAwesomeIcon icon={faRocket} /></div>
    <div style={{fontSize:"16px", fontWeight:"500", textAlign:"justify", color:"#222D44"}}><b>Optimistas</b> <br></br>
 
 <p>Creemos en la innovación y nos mantenemos alineados al contexto actual, establecemos como meta diaria crear ambientes digitales intuitivos y de fácil acceso.</p><br></br>

<p>Sabemos que la innovación digital está en constante cambio y tenemos que ser rápidos para seguir su ritmo.</p><br></br>

<p>Somos optimistas y sabemos que el constante trabajo y la motivación por ser mejores nos ayudará a mantenernos a la altura del acelerado cambio tecnológico.</p><br></br>

</div>
 </div>
    <div>
    <div className="icon-box background-primary text-color-primary-solid-4 mb-1"> <FontAwesomeIcon icon={faRocket} /></div>
    <div style={{fontSize:"16px", fontWeight:"500", textAlign:"justify", color:"#222D44"}}><b>Aliado accesible</b> <br></br>
 
 <p>Acompañamos a los usuarios en cada proceso, si existen dudas estamos listos para responderlas.</p><br></br>

<p>Queremos ser guías, un equipo que siempre los respalde cuando tengan dudas o necesidades por satisfacer.</p><br></br>

<p>Somos aliados accesibles porque somos fáciles de contactar, estamos siempre atentos a las dudas en nuestros canales digitales, nuestra mejor vía es la comunicación directa. 
</p><br></br>

</div>
 </div>
    </div>
    

  </div>
  
    </>
);

export default PersonalidadPrincipal;