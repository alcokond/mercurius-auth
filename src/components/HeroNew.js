import React from "react";
import logo from "../assets/logo.svg";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faIcons, faPalette, faPenNib, faTypewriter, faArrowRight, facircleuser, faUserCircle } from "@fortawesome/pro-light-svg-icons";
import { RadioGroup, FormControl, Radio, FormGroup, FormControlLabel, Checkbox, FormLabel } from "@mui/material";
import { RadioButtonChecked } from "@mui/icons-material";

const Hero = () => (
  <>
      <section className="header relative pt-16 items-center flex ">
        <div className="container mx-10 items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-normal text-4xl">
                <strong>Crea y desarrolla <br></br><div style={{color:"#4A3CDB"}}>más rápido</div>  </strong>
              </h2>
              <p className="mt-4 mb-4 text-lg leading-relaxed ">
              Mercurius, de Xtrim TVCable es un sistema de diseño que  mejora la experiencia en desarrollo e interacción digital.
              </p>
              <div className="flex flex-wrap mb-4 gap-2 justify-center">
                <button className=" button-main-primary-medium">Ver Componentes <FontAwesomeIcon icon={faArrowRight} /></button>
                <button className=" button-main-secondary-medium">Explorar Plantillas <FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section >
      <div className="container mx-10 pt-16 items-center flex flex-wrap">
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

      </section>

      
      
    </>
);

export default Hero;
