import React from "react";
import logo from "../assets/logo.svg";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faIcons, faPalette, faPenNib, faTypewriter } from "@fortawesome/pro-light-svg-icons";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Row, Col } from "reactstrap";
import PermanentDrawerLeft from "./PermanentDrawerLeft.js";
import DrawerGuidelines from "./DrawerGuidelines";
import {faArrowRight, facircleuser, faUserCircle, faRocket } from "@fortawesome/pro-light-svg-icons";

const MarcaPrincipal = () => (
  <>
    <DrawerGuidelines></DrawerGuidelines>
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Guidelines</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700"}} className="mb-3">Xtrim</h3>
    <p className="text-button-1">Somos usuarios trabajando para usuarios, nuestra marca se identifica con nuestros clientes y sus necesidades, somos fieles a nuestro trabajo “crear nuevas y mejores experiencias de usuario”.  A través de nuestra marca buscamos reflejar nuestra identidad, misión, valores y principios.</p>
    </div>
    </div>
    
    <div className="flex flex-col items-center gap-2 my-4 mx-4">
    <div className="flex flex-row gap-4 flex-wrap ">
        <div className="flex flex-col icon-card gap-2">
                    <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Misión</div>
                    <div>Otorgar  experiencias memorables en comunicación e interacción, destacando un estilo renovado y único.</div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Visión</div>
                    <div>Mantener un estado de mejora continua para otorgar productos de calidad alineados al contexto actual, guiados a establecer innovación.</div>
                  </div>
                  
    </div>
    <div className="flex flex-row gap-4 flex-wrap  ">
        <div className="flex flex-col icon-card gap-2">
                    <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Promesa</div>
                    <div>Otorgar  experiencias memorables en comunicación e interacción, destacando un estilo renovado y único.</div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Identidad</div>
                    <div>Somos un equipo y trabajamos pensando en otorgar las mejores experiencias a nuestros usuarios, queremos que piensen en nosotros como entretenimiento accesible.</div>
                  </div>
                  
    </div>
    </div>
    

  </div>
  
    </>
);

export default MarcaPrincipal;
