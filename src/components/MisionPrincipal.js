import React from "react";
import logo from "../assets/logo.svg";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandshake, faHeart, faIcons, faPalette, faPenNib, faTypewriter } from "@fortawesome/pro-light-svg-icons";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Row, Col } from "reactstrap";
import PermanentDrawerLeft from "./PermanentDrawerLeft.js";
import Sidebar from "./Sidebar";
import {faArrowRight, facircleuser, faUserCircle, faRocket, faUserAstronaut, faHandHeart } from "@fortawesome/pro-light-svg-icons";

const MisionPrincipal = () => (
  <>
    
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Marca</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-2">Objetivo</h3>
    <p className="text-button-1 text-justify">Otorgar experiencias memorables en comunicación e interacción.<br></br><br></br>Diseñamos experiencias que permitan a los usuarios sentirse seguros al realizar procesos digitales e interactivos. </p>
    </div>
    </div>
    
    <div className=" padding-marca">
    <div style={{fontSize:"31px", fontWeight:"500", marginBottom:"1vh"}}>Nuestros Productos <FontAwesomeIcon icon={faHandshake} /> Nuestra meta</div>
    <div style={{fontSize:"16px", fontWeight:"500", textAlign:"justify", color:"#222D44"}}><p>Diseñamos experiencias que permitan a los usuarios sentirse seguros al realizar procesos digitales e interactivos.<br></br>
Nuestros productos y misión van tomados de la mano, se corresponden entre sí. </p><br></br>
<ul>
<li style={{margin: 16 }}>Nuestra misión es crear experiencias digitales atractivas para los usuarios, quienes deben asociar un producto Xtrim con momentos significativos.</li>

<li style={{margin: 16 }}>Somos guías, debemos permitir que los procesos digitales sean intuitivos y no confusos.</li>

<li style={{margin: 16 }}>Somos los primeros usuarios de nuestros productos. Nos aseguramos de ofrecer calidad e innovación.</li>

<li style={{margin: 16 }}>Procuramos establecer una comunicación entendible.</li>
</ul></div>
    </div>
    

  </div>
  
    </>
);

export default MisionPrincipal;
