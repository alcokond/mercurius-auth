import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faIcons, faPalette, faPenNib, faTypewriter } from "@fortawesome/pro-light-svg-icons";
import {faArrowRight, facircleuser, faUserCircle, faRocket, faUserAstronaut, faHandHeart } from "@fortawesome/pro-light-svg-icons";
import { NavLink } from 'react-router-dom';


const MarcaPrincipal = () => (
  <>
    
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Marca</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#5D2766"}} className="mb-3">Xtrim</h3>
    <p className="text-button-1 text-justify">Somos usuarios trabajando para usuarios. Como marca nos identificamos con nuestros clientes y sus necesidades, somos fieles al trabajo que realizamos “crear nuevas y mejores experiencias de usuario”.</p>
    </div>
    </div>
    
    <div className=" padding-marca">
    <div style={{gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr"}}  className=" grid-container-marca ">
      <div  style={{gridArea: "header"}}>
      <NavLink
                to="/mercurius/objetivo"
                exact
                style={{ textDecoration: 'none' }}
                >
        <div className="flex flex-col icon-card gap-2">
        <div className="icon-box background-primary text-color-grayscale-7"> <FontAwesomeIcon icon={faRocket} /></div>
        <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Objetivo</div>
        <div style={{fontWeight: "500", color: "#27344E", fontSize: "16px"}} className="text-justify">Diseñar productos de calidad, guiados a establecer interfaces intuitivas que permitan interacciones más fluidas.</div>
  </div>
  </NavLink>
  </div>
    <div style={{gridArea: "one"}}>
    <NavLink
                to="/mercurius/promesa"
                exact
                style={{ textDecoration: 'none' }}
                >
        <div  className="flex flex-col icon-card gap-2">
          <div className="icon-box background-primary text-color-grayscale-7"> <FontAwesomeIcon icon={faHandHeart} /></div>
          <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Promesa</div>
          <div style={{fontWeight: "500", color: "#27344E", fontSize: "16px"}} className="text-justify">Mantener un estado de mejora continua, que nos permita otorgar productos de calidad.</div>
        </div>
        </NavLink>
        </div>
        <div style={{gridArea: "two"}}>
        <NavLink
                to="/mercurius/personalidad"
                exact
                style={{ textDecoration: 'none' }}
                >
        <div  className="flex flex-col icon-card gap-2">
          <div className="icon-box background-primary text-color-grayscale-7"> <FontAwesomeIcon icon={faHeart} /></div>
          <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Personalidad</div>
          <div style={{fontWeight: "500", color: "#27344E", fontSize: "16px"}} className="text-justify">Nuestra personalidad define el tono de nuestra comunicación. Cada proceso expresa nuestros valores.</div>
        </div>
        </NavLink>
        </div>
        </div>          
    
    </div>
    

  </div>
  
    </>
);

export default MarcaPrincipal;
