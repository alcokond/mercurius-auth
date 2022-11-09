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

const PromesaPrincipal = () => (
  <>
    <DrawerGuidelines></DrawerGuidelines>
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Marca</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-2">Promesa</h3>
    <p className="text-button-1 text-justify">Nuestra promesa es seguir mejorando nuestra comunicación, nuestro trabajo y nuestros canales de compra y atención. 
<br></br>Permitir a los usuarios accesos más rápidos, fáciles y explicativos.<br></br>
Crear interacciones memorables en comunicación y diseño procurando establecer familiaridad con los usuarios. </p>
    </div>
    </div>
    
    <div className=" padding-marca">
    <div style={{fontSize:"31px", fontWeight:"600", marginBottom:"1vh", color:"#000000"}}>¿Cómo aplicamos nuestra promesa?</div>
    <div style={{fontSize:"16px", fontWeight:"500", textAlign:"justify", color:"#222D44"}}><p>Lo que hacemos debe cumplir nuestra promesa, debe ser la base sobre la cual trabajemos y avancemos.</p> <br></br>
 
 <p>Debemos analizar cada situación y preguntarnos si el proceso que realizamos, aunque nos permita avanzar rompe nuestra promesa, si es así, debemos replantearnos lo que hacemos.</p><br></br>
 
 <p>Nuestra promesa siempre será una guía importante en el cambio, no podemos cambiar un aspecto que nos desligue de lo que somos, cada proceso debe estar alineado a nuestra promesa.</p> 
 </div>
    </div>
    

  </div>
  
    </>
);

export default PromesaPrincipal;