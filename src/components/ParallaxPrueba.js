import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faIcons, faPalette, faPenNib, faTypewriter, faArrowRight, facircleuser, faUserCircle, faRocket, faBullseyeArrow, faHandHeart, faHeart, faBullhorn, faEdit, faBolt, faT, faCircleStar, faText } from "@fortawesome/pro-light-svg-icons";
import { RadioGroup, FormControl, Radio, FormGroup, FormControlLabel, Checkbox, FormLabel } from "@mui/material";
import {  NavLink } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Fade from 'react-reveal/Fade';
import logo from "../assets/logo.png";
import bgcohete from "../assets/bg-cohete-2.svg";
import cohete2 from "../assets/cohete.png";
import astronauta from "../assets/astronauta hero.png";
import astronauta2 from "../assets/inFO-ASTRO.png"
import { useAuth0 } from "@auth0/auth0-react";


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
(function() {
    window.addEventListener('scroll', function(event) {
      var depth, i, layer, layers, len, movement, topDistance, translate3d;
      topDistance = this.scrollY;
      layers = document.querySelectorAll("[data-type='parallax-persona']");
      for (i = 0, len = layers.length; i < len; i++) {
        layer = layers[i];
        depth = layer.getAttribute('data-depth');
        movement = -(topDistance * depth);
        if(movement <190){
        translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;
      }
      else {
        topDistance= topDistance-350;
        depth=1;
        movement = -(topDistance * depth);
        translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;
      }
      }
    });
  
  }).call(this);


const ParallaxPrueba = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  
return(
  <>
<div id='hero' style={{position:"relative",zIndex:"-1"}} >
  <div className='layer-bg layer' data-depth='1' data-type='parallax' ></div>
  <div className='layer-2 layer' data-depth='1' data-type='parallax'></div>
  <div className='layer-3 layer' data-depth='-2.90' data-type='parallax'></div>
  <div className='layer-4 layer' data-depth='-2.35' data-type='parallax'></div>
  <div className='layer-5 layer' data-depth='-2.00' data-type='parallax'></div>
  <div className='layer-6 layer' data-depth='-1.65' data-type='parallax'></div>
  <div className='layer-7 layer' data-depth='-1.30' data-type='parallax-persona'></div>
  <div className='layer-8 layer' data-depth='-1.00' data-type='parallax'></div>
  <div className='layer-9 layer' data-depth='-1.00' data-type='parallax'></div>
</div>
<div id='content' >

  <div>
  </div>
  
  <div>
    <div style={{zIndex:2}}>
      <section>
        <div style={{height:"100vh", background:"linear-gradient(180deg, #0B0A0E 0%, #37173C 100%)", paddingTop:"10vh",paddingLeft:"20vw",paddingRight:"20vw"}}>
        
          <div style={{display:"flex",flexDirection:"column",alignItems:"center", height:"100%"}}>
          <Fade up>
            <h1 style={{color:"#B1B5BD",fontWeight:"500",fontSize:"32px",alignSelf:"center"}}>Xtrim presenta</h1>
            <img src={logo} alt="" style={{width:"25vw"}}/>
            <p style={{fontSize:"21px",textAlign:"center",width:"40vw",marginTop:"4rem",color:"#B1B5BD"}}>Un sistema de diseño que mejora la experiencia en desarrollo e interacción digital.</p>
          </Fade>
            <img src={astronauta2} alt="" style={{width:"50vw", marginTop:"auto", marginBottom:"-3vw"}}/>
          </div>
        </div>
      </section>
      <section>
        <div style={{height:"100vh", background:"#EBECF0", paddingTop:"10vh",paddingLeft:"20vw",paddingRight:"20vw"}}>
        <Fade left>
          <div style={{display:"flex",flexDirection:"column", height:"100%", justifyContent:"center"}}>
            <h1 style={{color:"#222D44",fontWeight:"500",fontSize:"50px"}}> Desarrolla proyectos <br />en <span style={{color:"#83378F", fontWeight:"700"}}>menos tiempo</span> <br /></h1>
            <div style={{fontSize:"32px"}}><p>Nuestra galería de componentes te ayudará a agilizar tus proyectos.</p></div>
            
            
          </div>
        </Fade>
        </div>
      </section>
      <section>
        <div style={{ backgroundImage: "linear-gradient(0deg, #773282 0%, #AF3BB1 100%)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div style={{height:"100vh", paddingTop:"10vh",paddingLeft:"20vw",paddingRight:"20vw",backgroundImage:`url(${cohete2})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <Fade up>
          <div style={{display:"flex",flexDirection:"column", height:"100%", justifyContent:"center", alignItems:"center", filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", textAlign:"center", gap:"2rem"}}>
            <h1 style={{color:"#FFFFFF",fontWeight:"500",fontSize:"76px"}}> Descubre <span style={{color:"#F9E100", fontWeight:"700"}}>Mercurius</span></h1>
           <div style={{color:"#F9F9F9",fontSize:"25px",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)", textAlign:"center"}}>Mercurius de Xtrim es un sistema de diseño que mejora la experiencia en desarrollo e interacción digital.</div>
            <div className="flex gap-3">
            {isAuthenticated && (
            <NavLink
            tag={RouterNavLink}
            to="/mercurius/componentes"
            exact
            style={{ textDecoration: 'none' }}
            >
            <button className="button-main-secondary-large">Explorar Componentes</button>
            </NavLink>
            )}
            {!isAuthenticated && (
              
            <button className="button-main-secondary-large" onClick={() => loginWithRedirect()}>Explorar Componentes</button>
            
            )}
            </div>
           
          </div>
        </Fade>
        </div>
        </div>
      </section>
    
      </div>
  </div>
</div>

    
      

    </>)
};

export default ParallaxPrueba;
