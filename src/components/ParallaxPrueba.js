import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faIcons, faPalette, faPenNib, faTypewriter, faArrowRight, facircleuser, faUserCircle, faRocket, faBullseyeArrow, faHandHeart, faHeart, faBullhorn, faEdit, faBolt, faT, faCircleStar, faText } from "@fortawesome/pro-light-svg-icons";
import { RadioGroup, FormControl, Radio, FormGroup, FormControlLabel, Checkbox, FormLabel } from "@mui/material";
import {  NavLink } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Fade from 'react-reveal/Fade';

(function() {
    window.addEventListener('scroll', function(event) {
      var depth, i, layer, layers, len, movement, topDistance, translate3d;
      topDistance = this.scrollY;
      layers = document.querySelectorAll("[data-type='parallax']");
      for (i = 0, len = layers.length; i < len; i++) {
        layer = layers[i];
        depth = layer.getAttribute('data-depth');
        movement = -(topDistance * depth);
        translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;
      }
    });
  
  }).call(this);


const ParallaxPrueba = () => (
  <>
    {/* <div id='hero'>
  <div className='layer-bg layer' data-depth='0.10' data-type='parallax'></div>
  <div className='layer-1 layer' data-depth='0.20' data-type='parallax'></div>
  <div className='layer-2 layer' data-depth='0.50' data-type='parallax'></div>
  <div className='layer-3 layer' data-depth='0.80' data-type='parallax'></div>
  <div className='layer-overlay layer' data-depth='0.85' data-type='parallax'></div>
  <div className='layer-4 layer' data-depth='1.00' data-type='parallax'></div>
</div>
<div id='hero-mobile'></div> */}
<div id='hero' style={{position:"relative",zIndex:"0"}} >
  <div className='layer-bg layer' data-depth='1' data-type='parallax' ></div>
  <div className='layer-1 layer' data-depth='1' data-type='parallax'></div>
  <div className='layer-2 layer' data-depth='1' data-type='parallax'></div>
  <div className='layer-3 layer' data-depth='-1.40' data-type='parallax'></div>
  <div className='layer-4 layer' data-depth='-1.35' data-type='parallax'></div>
  <div className='layer-5 layer' data-depth='-1.30' data-type='parallax'></div>
  <div className='layer-6 layer' data-depth='-1.25' data-type='parallax'></div>
  <div className='layer-7 layer' data-depth='-1.20' data-type='parallax'></div>
  <div className='layer-8 layer' data-depth='-1.00' data-type='parallax'></div>
  <div className='layer-9 layer' data-depth='-1.00' data-type='parallax'></div>
  {/* <div className='layer-10 layer' data-depth='1.50' data-type='parallax'></div> */}
</div>
<div id='content'>
{/* <div class="parallax-container">
    <div class="parallax-layer layer-0" data-parallax-speed="0.05" data-max-scroll="565"></div>
    <div class="parallax-layer layer-1" data-parallax-speed="0.1" data-max-scroll="565"></div>
    <div class="parallax-layer layer-2" data-parallax-speed="0.3" data-max-scroll="565"></div>
    <div class="parallax-layer layer-3" data-parallax-speed="0.5" data-max-scroll="565"></div>
    <div class="parallax-layer layer-4" data-parallax-speed="0.7" data-max-scroll="565"></div>
    <div class="parallax-layer layer-5" data-parallax-speed="0.9" data-max-scroll="565"></div>
  </div> */}
{/* <div id='hero-mobile'></div> */}
  <div>
  {/* <img src="https://www.xtrim.com.ec/wp-content/uploads/2023/01/IMG_0037.png"></img> */}
  </div>
  
  <div>
    <div style={{zIndex:2}}>
    <Fade left>
    <section style={{backgroundColor: "#F2F1FC"}} className="header relative pt-16 items-center flex pb-16">
        <div  className=" mx-10 items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12-2 xl:w-6/12-2">
            <div className="pt-32 sm:pt-0">
              <h2 style={{fontSize: 61}} className="font-normal">
                <strong>Crea y desarrolla <br></br><div style={{color:"#4A3CDB"}}>más rápido</div>  </strong>
              </h2>
              <p style={{fontSize: 20}} className="mt-4 mb-4 leading-relaxed ">
              Mercurius, de Xtrim es un sistema de diseño que  mejora la experiencia en desarrollo e interacción digital.
              </p>
              <div className="flex flex-wrap mb-4 gap-2">
                
                <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/componentes"
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
    </Fade>
      
    <Fade left>
      <section style={{zIndex:2}} >
      <div style={{zIndex:2}} className=" mx-10 pt-16 items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="pt-32 sm:pt-0">

              <h2 style={{color: "#4A3CDB"}} className=" font-medium">
                COMPONENTES
              </h2>
              <h2 style={{fontSize: "31px"}} className=" font-semibold ">
                Hecha un vistazo a todos nuestros componentes
              </h2>
              <p className="mt-4 mb-4 text-lg leading-relaxed ">
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
                    <div style={{fontSize: 20, fontWeight: 700, color: "#6A7180"}} className=" pt-2">Botones</div>
                </div>
                <div className="flex-col flex-wrap">
                    <div className="component-content flex">
                    <div className="mx-auto my-auto">
                   
                    <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Text" />
                    </FormGroup>
                    </div>
                    </div>
                    <div style={{fontSize: 20, fontWeight: 700, color: "#6A7180"}} className="pt-2">Checkbox</div>
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
                    <div style={{fontSize: 20, fontWeight: 700, color: "#6A7180"}} className="pt-2">Radiobutton</div>
                </div>
            </div>
      <div className=" mx-10 pt-16 items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="pt-32 sm:pt-0">

              <h2 style={{color: "#4A3CDB"}} className=" font-medium">
                TEMPLATES
              </h2>
              <h2 style={{fontSize: "31px"}} className=" font-semibold ">
                La plantilla ideal para cada proceso
              </h2>
              <p className="mt-4 mb-4 text-lg leading-relaxed ">
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
                    <div style={{fontSize: 20, fontWeight: 700, color: "#6A7180"}} className=" pt-2">Landing</div>
                </div>
                <div className="flex-col flex-wrap">
                    <div className="component-content flex">
                    
                    </div>
                    <div style={{fontSize: 20, fontWeight: 700, color: "#6A7180"}} className="pt-2">Inicio de sesión</div>
                </div>
                <div className="flex-col flex-wrap">
                    <div className="component-content flex">
                    
                    </div>
                    <div style={{fontSize: 20, fontWeight: 700, color: "#6A7180"}} className="pt-2">Formulario</div>
                </div>
            </div>

      </section>
      </Fade>
      <Fade right>
      <section className=" mb-24">
        <div className="margin-hero pt-16">
            <div style={{gridTemplateColumns: "33.33333333333333% auto auto auto", columnGap:"1%", rowGap:"2%"}} className="grid">
                
                  <div className=" max-w-400-px">
              <h2 style={{fontSize: "31px"}} className=" font-semibold ">
                Marca
              </h2>
              <p style={{fontSize: 16, fontWeight: 400}} className="mt-4 mb-4 text-lg leading-relaxed ">
              Nos preocupamos por la accesibilidad y experiencia del usuario en cada una de nuestras plataformas. 
              </p>
              <div className="flex flex-wrap mb-4 gap-2 ">
              <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/marca"
                      exact
                      style={{ textDecoration: 'none' }}
                      
                      >
                <button  className=" button-main-terchiary-medium">Explora nuestra marca <FontAwesomeIcon icon={faArrowRight} /></button>
                </NavLink>
              </div>
                  </div>
                  
                  <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/objetivo"
                      exact
                      style={{ textDecoration: 'none' }}
                      className="flex flex-col icon-card gap-2"
                      >
                      
                      <div className="icon-box background-primary text-color-grayscale-7"> <FontAwesomeIcon icon={faBullseyeArrow} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Objetivo</div>
                    <div style={{fontSize: 14, fontWeight: 400, color: "#222D44"}}>Ofrecer experiencias memorables en comunicación e interacción.</div>
                    
                    </NavLink>
                    
                  
                  
                  <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/promesa"
                      exact
                      style={{ textDecoration: 'none' }}
                      className="flex flex-col icon-card gap-2"
                      >
                      
                    <div className="icon-box background-primary text-color-grayscale-7"> <FontAwesomeIcon icon={faHandHeart} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Promesa</div>
                    <div style={{fontSize: 14, fontWeight: 400, color: "#222D44"}}>Mantener un estado de mejora continua para otorgar productos de calidad.</div>
                    
                    </NavLink>
                  
                  
                  
                  <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/personalidad"
                      exact
                      style={{ textDecoration: 'none' }}
                      className="flex flex-col icon-card gap-2"
                      >
                      
                    <div className="icon-box background-primary text-color-grayscale-7"> <FontAwesomeIcon icon={faHeart} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Personalidad</div>
                    <div style={{fontSize: 14, fontWeight: 400, color: "#222D44"}}>Nuestra personalidad define el tono de nuestra comunicación.</div>
                    
                    </NavLink>
                  
                
                
                  <div className=" max-w-400-px">
              <h2 style={{fontSize: "31px"}} className=" font-semibold ">
                Contenido
              </h2>
              <p style={{fontSize: 16, fontWeight: 400}} className="mt-4 mb-4 text-lg leading-relaxed ">
              Nuestro tono de voz nos identifica y nuestras reglas de estilo nos permiten avanzar junto a los usuarios.
              </p>
              <div className="flex flex-wrap mb-4 gap-2 ">
              <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/contenido"
                      exact
                      style={{ textDecoration: 'none' }}
                      
                      >
                <button className=" button-main-terchiary-medium">Explorar guía de contenido <FontAwesomeIcon icon={faArrowRight} /></button>
                </NavLink>
              </div>
                  </div>
                  <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/voz"
                      exact
                      style={{ textDecoration: 'none' }}
                      className="flex flex-col icon-card gap-2"
                      >
                    <div className="icon-box background-secondary text-color-grayscale-7"> <FontAwesomeIcon icon={faBullhorn} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Voz y Tono</div>
                    <div style={{fontSize: 14, fontWeight: 400, color: "#222D44"}}>Definimos nuestros principios de voz y tono de acuerdo a nuestra personalidad como marca.</div>
                    </NavLink>
                    <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/personalidad"
                      exact
                      style={{ textDecoration: 'none' }}
                      className="flex flex-col icon-card gap-2"
                      >
                    <div className="icon-box background-secondary text-color-grayscale-7"> <FontAwesomeIcon icon={faEdit} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Escritura</div>
                    <div style={{fontSize: 14, fontWeight: 400, color: "#222D44"}}>Nuestro estilo de escritura refleja el compromiso de nuestra empresa.</div>
                  </NavLink>
                  <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/personalidad"
                      exact
                      style={{ textDecoration: 'none' }}
                      className="flex flex-col icon-card gap-2"
                      >
                    <div className="icon-box background-secondary text-color-grayscale-7"> <FontAwesomeIcon icon={faBolt} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Guía de Estilo</div>
                    <div style={{fontSize: 14, fontWeight: 400, color: "#222D44"}}>Debes escribir pensando en el usuario. Debes conocer lo que quiere el usuario y sus necesidades.</div>
                  </NavLink>
                
                
                  <div className=" max-w-400-px">
              <h2 style={{fontSize: "31px"}} className=" font-semibold ">
              Guidelines
              </h2>
              <p style={{fontSize: 16, fontWeight: 400}} className="mt-4 mb-4 text-lg leading-relaxed ">
              Nuestros colores, tipografía e iconos nos representan, nos definen y reflejan nuestra personalidad. 
              </p>
              <div className="flex flex-wrap mb-4 gap-2 ">
              <NavLink
                      tag={RouterNavLink}
                      to="/mercurius/guidelines"
                      exact
                      style={{ textDecoration: 'none' }}
                      
                      >
                <button className=" button-main-terchiary-medium">Explora nuestros guidelines <FontAwesomeIcon icon={faArrowRight} /></button>
                </NavLink>
              </div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div style={{color: "#80780F" }} className="icon-box background-complementary"> <FontAwesomeIcon icon={faPalette} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Colores</div>
                    <div style={{fontSize: 14, fontWeight: 400}}>Nuestros colores nos representan y distinguen nuestra marca.</div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div style={{color: "#80780F" }} className="icon-box background-complementary"> <FontAwesomeIcon icon={faText} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Tipografía</div>
                    <div style={{fontSize: 14, fontWeight: 400}}>Nuestra tipografía nos define. Como escribimos permite identificar lo que somos. </div>
                  </div>
                  <div className="flex flex-col icon-card gap-2">
                    <div style={{color: "#80780F" }} className="icon-box background-complementary"> <FontAwesomeIcon icon={faCircleStar} /></div>
                    <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Iconografía</div>
                    <div style={{fontSize: 14, fontWeight: 400}}>Nuestros iconos reflejan la personalidad de Xtrim y como nos comunicamos con los usuarios.</div>
                  </div>
                
                
            </div>
        </div>
      </section>
      </Fade>
      </div>
  </div>
</div>
   
    
      
      
    </>
);

export default ParallaxPrueba;
