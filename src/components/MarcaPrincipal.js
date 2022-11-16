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
import Sidebar from "./Sidebar";
import {faArrowRight, facircleuser, faUserCircle, faRocket, faUserAstronaut, faHandHeart } from "@fortawesome/pro-light-svg-icons";

const MarcaPrincipal = () => (
  <>
    
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Marca</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-3">Xtrim</h3>
    <p className="text-button-1 text-justify">Somos usuarios trabajando para usuarios, nuestra marca se identifica con nuestros clientes y sus necesidades, somos fieles a nuestro trabajo “crear nuevas y mejores experiencias de usuario”.  A través de nuestra marca buscamos reflejar nuestra identidad, misión, valores y principios.</p>
    </div>
    </div>
    
    <div className="flex flex-col gap-2 padding-marca">
    <div className="flex flex-row space-evenly flex-wrap ">
        <div className="flex flex-col icon-card-objetivo gap-2">
                    <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Objetivo</div>
                    <div style={{fontWeight: "500", color: "#27344E", fontSize: "16px"}} className="text-justify">Ser fieles a nuestros usuarios diseñando productos de calidad guiados a innovar y establecer interfaces intuitivas, para una interacción más fluida. 
</div>
                  </div>
                  
                  
    </div>
    <div className="flex flex-row space-evenly gap-1  ">
        <div className="flex flex-col icon-card-marca gap-2">
                    <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faHandHeart} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Promesa</div>
                    <div className="text-justify">Otorgar  experiencias memorables en comunicación e interacción, destacando un estilo renovado y único.</div>
                  </div>
                  <div className="flex flex-col icon-card-marca gap-2">
                    <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faHeart} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Identidad</div>
                    <div className="text-justify">Somos un equipo y trabajamos pensando en otorgar las mejores experiencias a nuestros usuarios, queremos que piensen en nosotros como entretenimiento accesible.</div>
                  </div>
                  
    </div>
    </div>
    

  </div>
  
    </>
);

export default MarcaPrincipal;
