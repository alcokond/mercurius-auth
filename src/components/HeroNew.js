import React from "react";
import logo from "../assets/logo.svg";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faIcons, faPalette, faPenNib, faTypewriter, faArrowRight, facircleuser, faUserCircle, faRocket } from "@fortawesome/pro-light-svg-icons";
import { RadioGroup, FormControl, Radio, FormGroup, FormControlLabel, Checkbox, FormLabel } from "@mui/material";
import { RadioButtonChecked } from "@mui/icons-material";
import { motion } from "framer-motion"
import { Router, Route, Switch, NavLink } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";




const Hero = () => (
  <>
    <div className="">
      <section style={{backgroundColor: "#F2F1FC"}} className="header relative pt-16 items-center flex pb-16">
        <div  className=" mx-10 items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-normal text-4xl">
                <strong>Crea y desarrolla <br></br><div style={{color:"#4A3CDB"}}>más rápido</div>  </strong>
              </h2>
              <p className="mt-4 mb-4 text-lg leading-relaxed ">
              Mercurius, de Xtrim TVCable es un sistema de diseño que  mejora la experiencia en desarrollo e interacción digital.
              </p>
              <div className="flex flex-wrap mb-4 gap-2 justify-center">
                
                <NavLink
                      tag={RouterNavLink}
                      to="/componentes"
                      exact
                      style={{ textDecoration: 'none' }}
                      >
                      <button className=" button-main-primary-medium"> 
                      Ver Componentes <FontAwesomeIcon icon={faArrowRight} /></button>
                    </NavLink>
                <button className=" button-main-secondary-medium">Explorar Plantillas <FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section >
      <div className=" mx-10 pt-16 items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">

              <h2 style={{color: "#4A3CDB"}} className=" font-medium">
                COMPONENTES
              </h2>
              <h2 style={{fontSize: "31px"}} className=" font-semibold ">
                Hecha un vistazo a todos nuestros componentes
              </h2>
              <p className="mt-4 mb-4 text-lg leading-relaxed text-blueGray-500">
              Diseñados y usados en los proyectos de Xtrim TVCable. Explora nuestros componentes y personalizalos a tu gusto.
              </p>
              <div className="flex flex-wrap mb-4 gap-2 ">
                <button className=" button-main-terchiary-medium">Explorar Componentes <FontAwesomeIcon icon={faArrowRight} /></button>
                
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="items-center margin-hero component-group flex flex-wrap space-evenly">
                <div className="flex-col flex-wrap">
                    <div className=" flex component-content">
                    <button className=" mx-auto my-auto button-main-primary-medium"> <FontAwesomeIcon icon={faUserCircle} />Button <FontAwesomeIcon icon={faUserCircle} /></button>
                    </div>
                    <div className=" pt-2">Botones</div>
                </div>
                <div className="flex-col flex-wrap">
                    <div className="component-content flex">
                    <div className="mx-auto my-auto">
                   
                    <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Text" />
                    </FormGroup>
                    </div>
                    </div>
                    <div className="pt-2">Checkbox</div>
                </div>
                <div className="flex-col flex-wrap">
                    <div className="component-content flex">
                    <div className="mx-auto my-auto">
                   
                    <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        
                    >
                        <FormControlLabel value="text" control={<Radio />} label="Text" />
                    </RadioGroup>
                    </FormControl>
                   </div>
                    </div>
                    <div className="pt-2">Radiobutton</div>
                </div>
            </div>
      <div className=" mx-10 pt-16 items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">

              <h2 style={{color: "#4A3CDB"}} className=" font-medium">
                TEMPLATES
              </h2>
              <h2 style={{fontSize: "31px"}} className=" font-semibold ">
                La plantilla ideal para cada proceso
              </h2>
              <p className="mt-4 mb-4 text-lg leading-relaxed text-blueGray-500">
              Plantillas con un diseño único y fáciles de personalizar creadas para cada proceso. <br></br>¡Ahora puedes iniciar tu proyecto!.
              </p>
              <div className="flex flex-wrap mb-4 gap-2 ">
                <button className=" button-main-terchiary-medium">Explorar Plantillas <FontAwesomeIcon icon={faArrowRight} /></button>
                
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="items-center margin-hero component-group flex flex-wrap space-evenly">
                <div className="flex-col flex-wrap">
                    <div className=" flex component-content">
                    
                    </div>
                    <div className=" pt-2">Landing</div>
                </div>
                <div className="flex-col flex-wrap">
                    <div className="component-content flex">
                    
                    </div>
                    <div className="pt-2">Inicio de sesión</div>
                </div>
                <div className="flex-col flex-wrap">
                    <div className="component-content flex">
                    
                    </div>
                    <div className="pt-2">Formulario</div>
                </div>
            </div>

      </section>
      <section className=" mb-24">
        <div className="margin-hero pt-16">
            <div className="flex flex-col flex-wrap gap-col">
                <div className="flex flex-row flex-wrap space-evenly">
                  <div className=" max-w-300-px">
              <h2 style={{fontSize: "31px"}} className=" font-semibold ">
                Marca
              </h2>
              <p className="mt-4 mb-4 text-lg leading-relaxed text-blueGray-500">
              Nos preocupamos por la accesibilidad y experiencia del usuario en cada una de nuestras plataformas. 
              </p>
              <div className="flex flex-wrap mb-4 gap-2 ">
                <button className=" button-main-terchiary-medium">Explora nuestra marca <FontAwesomeIcon icon={faArrowRight} /></button>
                
              </div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div className="icon-box background-primary text-color-grayscale-7"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Identidad</div>
                    <div>Somos un equipo y trabajamos para mejorar la accesibilidad de nuestros canales digitales...</div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div className="icon-box background-primary text-color-grayscale-7"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Misión</div>
                    <div>Ofrecer experiencias memorables en comunicación e interacción...</div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div className="icon-box background-primary text-color-grayscale-7"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Visión</div>
                    <div>Mantener un estado de mejora continua para otorgar productos de calidad...</div>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap space-evenly">
                  <div className=" max-w-300-px">
              <h2 style={{fontSize: "31px"}} className=" font-semibold ">
                Contenido
              </h2>
              <p className="mt-4 mb-4 text-lg leading-relaxed text-blueGray-500">
              Nuestro tono de voz nos identifica y nuestras reglas de estilo nos permiten avanzar junto a los usuarios.
              </p>
              <div className="flex flex-wrap mb-4 gap-2 ">
                <button className=" button-main-terchiary-medium">Explorar guía de contenido <FontAwesomeIcon icon={faArrowRight} /></button>
                
              </div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div className="icon-box background-secondary text-color-grayscale-7"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Voz</div>
                    <div>Pensamos en los usuarios, en otorgarles la mejor experiencia con nuestros productos y servicios...</div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div className="icon-box background-secondary text-color-grayscale-7"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Tono</div>
                    <div>Nos comunicamos con un tono amigable y respetuoso, mantenemos un lenguaje claro...</div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div className="icon-box background-secondary text-color-grayscale-7"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Reglas de Estilo</div>
                    <div>Debes escribir pensando en el usuario. Debes conocer lo que quiere el usuario y sus necesidades...</div>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap space-evenly">
                  <div className=" max-w-300-px">
              <h2 style={{fontSize: "31px"}} className=" font-semibold ">
              Guidelines
              </h2>
              <p className="mt-4 mb-4 text-lg leading-relaxed text-blueGray-500">
              Nuestros colores, tipografía e iconos nos representan, nos definen y reflejan nuestra personalidad. 
              </p>
              <div className="flex flex-wrap mb-4 gap-2 ">
                <button className=" button-main-terchiary-medium">Explora nuestros guidelines <FontAwesomeIcon icon={faArrowRight} /></button>
                
              </div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div className="icon-box background-complementary"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Colores</div>
                    <div>Nuestros colores nos representan y distinguen nuestra marca...</div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div className="icon-box background-complementary"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Tipografía</div>
                    <div>Nuestra tipografía nos define. Como escribimos permite identificar lo que somos... </div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div className="icon-box background-complementary"> <FontAwesomeIcon icon={faRocket} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Iconografía</div>
                    <div>Nuestros iconos reflejan la personalidad de Xtrim y como nos comunicamos con los usuarios...</div>
                  </div>
                </div>
                
            </div>
        </div>
      </section>
      </div>
      
      
    </>
);

export default Hero;
