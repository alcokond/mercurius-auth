import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faIcons, faPalette, faPenNib, faTypewriter, faArrowRight, facircleuser, faUserCircle, faRocket, faBullseyeArrow, faHandHeart, faHeart, faBullhorn, faEdit, faBolt, faT, faCircleStar, faText } from "@fortawesome/pro-light-svg-icons";
import { RadioGroup, FormControl, Radio, FormGroup, FormControlLabel, Checkbox, FormLabel } from "@mui/material";
import {  NavLink } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
const Hero = () => (
  <>
    <div>
    <Parallax pages={4.5} >
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url("https://www.xtrim.com.ec/wp-content/uploads/2023/01/cielonocturno.jpg")`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.05}
          factor={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
        >

          <img src='https://www.xtrim.com.ec/wp-content/uploads/2023/01/Planeta.png'
          style={{ height: '60%' }}>

          </img>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.2}
          factor={1}
          style={{
            marginTop: '30%',
            
          }}
        >
          <img src='https://www.xtrim.com.ec/wp-content/uploads/2023/01/terreno1.png'
          style={{width: '100%'}}></img>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          factor={2}
        >
          <div className="">
      <section style={{backgroundColor: "#F2F1FC"}} className="header relative pt-16 items-center flex pb-16">
        <div  className=" mx-10 items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12-2 xl:w-6/12-2">
            <div className="pt-32 sm:pt-0">
              <h2 style={{fontSize: 61}} className="font-normal">
                <strong>Crea y desarrolla <br></br><div style={{color:"#83378F"}}>más rápido</div>  </strong>
              </h2>
              <p style={{fontSize: 20}} className="mt-4 mb-4 leading-relaxed ">
              Mercurius de Xtrim es un sistema de diseño que  mejora la experiencia en desarrollo e interacción digital.
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

      <section >
      <div className=" mx-10 pt-16 items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="pt-32 sm:pt-0">

              <h2 style={{color: "#83378F"}} className=" font-medium">
                COMPONENTES
              </h2>
              <h2 style={{fontSize: "31px"}} className=" font-semibold ">
                Hecha un vistazo a todos nuestros componentes
              </h2>
              <p className="mt-4 mb-4 text-lg leading-relaxed ">
              Diseñados y usados en los proyectos de Xtrim. Explora nuestros componentes y personalizalos a tu gusto.
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

              <h2 style={{color: "#83378F"}} className=" font-medium">
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
      </div>
        </ParallaxLayer>

        {/* <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src= 'https://www.xtrim.com.ec/wp-content/uploads/2023/01/Cohete-volteado-gif.gif' />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        ></ParallaxLayer> */}
      </Parallax>
      </div>
    
      
      
    </>
);

export default Hero;
