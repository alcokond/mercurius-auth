import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";
import {faArrowRight, facircleuser, faUserCircle, faRocket, faBullhorn, faBullseyeArrow } from "@fortawesome/pro-light-svg-icons";

const VozPrincipal = () => (
  <>
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6">
    <div className="padding-marca">
    <h6 className="text-overline">Contenido</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987" }} className="mb-3">Nuestro Tono de Voz</h3>
    <p className="text-button-1 text-justify">A través de nuestra marca buscamos reflejar nuestra identidad, misión, valores y principios.<br></br>  
Establecer nuestra voz y tono nos permiten mantener un estilo de comunicacion acorde a nuestra personalidad. </p>
    </div>
    </div>
    
    <div className="flex flex-col gap-5 padding-marca">
    <div style={{ gridTemplateColumns: "1fr 1fr", gap: "5vh"}} className="grid">
        <div className="flex flex-col icon-card gap-2">
        <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faRocket} /></div>
        <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Voz</div>
        <div>En Xtrim pensamos en los usuarios, en otorgarles la mejor experiencia con nuestros productos y servicios.</div>
      </div>
       <div className="flex flex-col icon-card gap-2">
        <div className="icon-box background-primary text-color-primary-solid-4"> <FontAwesomeIcon icon={faRocket} /></div>
        <div style={{fontWeight: "700", color: "#525A6C", fontSize: "20px"}}>Tono</div>
        <div>Nos comunicamos con un tono amigable y respetuoso, mantenemos un lenguaje claro y procuramos que su proceso en nuestras plataformas vistuales sea agradable y fácil.</div>
      </div>
                  
    </div>
    <div className="flex flex-col gap-2" >
    <p>Utilizamos nuestra voz en cada proceso de Xtrim y es la base de nuestro lenguaje, está constituida por los rasgos de nuestra personalidad.</p>

<p>Nuestra voz siempre se mantiene igual, nos permite mantener una comunicación coherente en todos nuestros canales de comunicación.</p>

<p>Nuestro tono, es la forma en la cual comunicamos nuestra voz, el tono se puede ajustar para dirigirnos a diferentes usuarios o transmitir distintos eventos.</p>
</div>
    <div className="flex flex-col gap-2" >
    <div style={{fontSize:"31px", color:"#000000", fontWeight:"600"}}><p>¿Qué es nuestra Voz?</p></div>

<p>Nuestra voz nunca cambia, nos define y marca nuestra identidad. </p>

<p>Es nuestra personalidad, actuamos acorde a la voz establecida. </p>

<p>Nos importa establecer familiaridad con nuestros usuarios y crear momentos y experiencias  únicas.</p>
</div>
    <div className="flex flex-col gap-2" >
    <div style={{fontSize:"31px", color:"#000000", fontWeight:"600"}}><p>¿Qué es nuestro Tono?</p></div>

<p>El Tono es la forma en la cual nos comunicamos y como expresamos nuestra personalidad.</p>

<p>En Xtrim utilizamos un tono empático, informativo y conciso, utilizamos el lenguaje para transmitir sentimientos positivos y establecer una comunicación entendible.</p>

</div>
    <div className="flex flex-col gap-2" >
    <div style={{fontSize:"31px", color:"#000000", fontWeight:"600"}}><p>¿Por qué establecemos nuestro Tono de voz?</p></div>

<p>Establecer una voz y un tono nos permite mantener una comunicación precisa entre todos los colaboradores de Xtrim y nuestros distintos canales.</p>

<p>Mantenemos nuestra voz y tono en todos nuestros canales y comunicaciones, tanto internas como externas. </p>

<p>Todos los Xtrimers trabajamos de acuerdo a los principios de voz y tono establecidos, esto nos permite mantener una comunicación alineada a nuestra personalidad. </p>

</div>
    <div className="flex flex-col gap-2" >
    <div style={{fontSize:"31px", color:"#000000", fontWeight:"600"}}><p>Principios de Voz y Tono</p></div>

<p>Definimos pautas a seguir en nuestra escritura, las cuales deben trabajarse según la voz establecida. El tono siempre dependerá de lo que estamos comunicando.</p>

<p>Continuo a nuestra voz y tono, establecemos consejos de estilo que nos permitirán conservar concordancia entre nuestra gramática y lenguaje. </p>

</div>


    </div>
    

  </div>
  
    </>
);

export default VozPrincipal;
