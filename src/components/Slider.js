import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

import breadcrumbs from "../assets/breadcrumbs.png";
import slideranatomia from "../assets/slider-anatomia.svg";
import slider1 from "../assets/slider-1.svg";
import sliderdoble from "../assets/slider-doble.svg";

import { CopyBlock, dracula } from "react-code-blocks";
import TopBar  from "./TopBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronsDown, faChevronUp, faCode, faMinus, faPlus, faPuzzlePiece, faCheckCircle, faExclamationCircle, faInfoCircle, faXmarkCircle } from "@fortawesome/pro-light-svg-icons";
import { faChevronDown } from "@fortawesome/pro-duotone-svg-icons";


export const Slider = () => {

  const [rangeOneValue, setRangeOneValue] = useState(10);
  const [rangeTwoValue, setRangeTwoValue] = useState(90);
  const handleRangeOneChange = (e) => {
    let value=parseInt(e.target.value);
    if (value < rangeTwoValue){
      setRangeOneValue(value);
    }
    

  };

  const handleRangeTwoChange = (e) => {
    let value=parseInt(e.target.value);
    if (value>rangeOneValue){
      setRangeTwoValue(value);
    }
    

  };

  const inclRangeStyle = {
    width: Math.abs(parseInt(rangeOneValue) - parseInt(rangeTwoValue)) / 100 * 100 + '%',
    left: parseInt(rangeOneValue) <= parseInt(rangeTwoValue) ? parseInt(rangeOneValue) / 100 * 100 + '%' : parseInt(rangeTwoValue) / 100 * 100 + '%',
    
  };

  const outputOneStyle = {
    left: rangeOneValue / 100 * 100 + '%',
  };

  const outputTwoStyle = {
    left: rangeTwoValue / 100 * 100 + '%',
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (!event.target.matches('.dropdown') && isOpen) {
      toggleDropdown();
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Placeholder");
  const [selected, setSelected] = useState(false);
  const [isShownToggle, setIsShownToggle] = useState(false);

  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSelected(!selected);
  }

  const selectOption = (option) => {
    setSelectedOption(option.value);
    toggleDropdown();
  }
  const [isShownUso, setIsShownUso] = useState(true);
  const [isShownCode, setIsShownCode] = useState(false);

  const [isShownPrimary, setIsShownPrimary] = useState(false);
  const [isMostrarPrimary1, setIsMostrarPrimary1] = useState(true);
  const handleClickToggle = event => {
    setIsShownToggle(current => !current);

  };

  const handleClickTab = event => {
    const ps = document.getElementsByClassName('tab-select');
    for (let item of ps) {
      item.classList.remove('tab-focused');
      item.classList.add('tab');
    }
    event.currentTarget.classList.add('tab-focused');
    event.currentTarget.classList.remove('tab');
  };


  const handleClickMostrarUso = event => {
    setIsShownUso(current => true);
    setIsShownCode(current => false);
    const ps = document.getElementsByClassName('size-component');
    for (let item of ps) {
      item.classList.remove('size-option-component-focused');
      item.classList.add('size-option-component');
    }
    event.currentTarget.classList.add('size-option-component-focused');
    event.currentTarget.classList.remove('size-option-component');
  };

  const handleClickMostrarCode = event => {
    setIsShownUso(current => false);
    setIsShownCode(current => true);
    const ps = document.getElementsByClassName('size-component');
    for (let item of ps) {
      item.classList.remove('size-option-component-focused');
      item.classList.add('size-option-component');
    }
    event.currentTarget.classList.add('size-option-component-focused');
    event.currentTarget.classList.remove('size-option-component');
  };
  

  const handleClickMostrarPrimary1 = event => {
    setIsMostrarPrimary1(current => true);
    setIsMostrarPrimary2(current => false);
    setIsMostrarPrimary3(current => false);
    const ps = document.getElementsByClassName('size-1');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');
    
    

  };
  const handleClickMostrarPrimary2 = event => {
    setIsMostrarPrimary1(current => false);
    setIsMostrarPrimary2(current => true);
    setIsMostrarPrimary3(current => false);
    const ps = document.getElementsByClassName('size-1');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPrimary3 = event => {
    setIsMostrarPrimary1(current => false);
    setIsMostrarPrimary2(current => false);
    setIsMostrarPrimary3(current => true);
    const ps = document.getElementsByClassName('size-1');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarSecondary1 = event => {
    setIsMostrarSecondary1(current => true);
    setIsMostrarSecondary2(current => false);
    setIsMostrarSecondary3(current => false);
    const ps = document.getElementsByClassName('size-2');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarSecondary2 = event => {
    setIsMostrarSecondary1(current => false);
    setIsMostrarSecondary2(current => true);
    setIsMostrarSecondary3(current => false);
    const ps = document.getElementsByClassName('size-2');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarSecondary3 = event => {
    setIsMostrarSecondary1(current => false);
    setIsMostrarSecondary2(current => false);
    setIsMostrarSecondary3(current => true);
    const ps = document.getElementsByClassName('size-2');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarSubtle1 = event => {
    setIsMostrarSubtle1(current => true);
    setIsMostrarSubtle2(current => false);
    setIsMostrarSubtle3(current => false);
    const ps = document.getElementsByClassName('size-3');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarSubtle2 = event => {
    setIsMostrarSubtle1(current => false);
    setIsMostrarSubtle2(current => true);
    setIsMostrarSubtle3(current => false);
    const ps = document.getElementsByClassName('size-3');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarSubtle3 = event => {
    setIsMostrarSubtle1(current => false);
    setIsMostrarSubtle2(current => false);
    setIsMostrarSubtle3(current => true);
    const ps = document.getElementsByClassName('size-3');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarOutstanding1 = event => {
    setIsMostrarOutstanding1(current => true);
    setIsMostrarOutstanding2(current => false);
    setIsMostrarOutstanding3(current => false);
    const ps = document.getElementsByClassName('size-4');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarOutstanding2 = event => {
    setIsMostrarOutstanding1(current => false);
    setIsMostrarOutstanding2(current => true);
    setIsMostrarOutstanding3(current => false);
    const ps = document.getElementsByClassName('size-4');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarOutstanding3 = event => {
    setIsMostrarOutstanding1(current => false);
    setIsMostrarOutstanding2(current => false);
    setIsMostrarOutstanding3(current => true);
    const ps = document.getElementsByClassName('size-4');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPink1 = event => {
    setIsMostrarPink1(current => true);
    setIsMostrarPink2(current => false);
    setIsMostrarPink3(current => false);
    const ps = document.getElementsByClassName('size-5');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPink2 = event => {
    setIsMostrarPink1(current => false);
    setIsMostrarPink2(current => true);
    setIsMostrarPink3(current => false);
    const ps = document.getElementsByClassName('size-5');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPink3 = event => {
    setIsMostrarPink1(current => false);
    setIsMostrarPink2(current => false);
    setIsMostrarPink3(current => true);
    const ps = document.getElementsByClassName('size-5');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPinkSecondary1 = event => {
    setIsMostrarPinkSecondary1(current => true);
    setIsMostrarPinkSecondary2(current => false);
    setIsMostrarPinkSecondary3(current => false);
    const ps = document.getElementsByClassName('size-6');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPinkSecondary2 = event => {
    setIsMostrarPinkSecondary1(current => false);
    setIsMostrarPinkSecondary2(current => true);
    setIsMostrarPinkSecondary3(current => false);
    const ps = document.getElementsByClassName('size-6');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickMostrarPinkSecondary3 = event => {
    setIsMostrarPinkSecondary1(current => false);
    setIsMostrarPinkSecondary2(current => false);
    setIsMostrarPinkSecondary3(current => true);
    const ps = document.getElementsByClassName('size-6');
    for (let item of ps) {
      item.classList.remove('size-option-focused');
      item.classList.add('size-option');
    }
    event.currentTarget.classList.add('size-option-focused');
    event.currentTarget.classList.remove('size-option');

  };
  const handleClickPrimary = event => {
    setIsShownPrimary(current => !current);

  };
  const handleClickSecondary = event => {
    setIsShownSecondary(current => !current);

  };
  const handleClickSubtle = event => {
    setIsShownSubtle(current => !current);

  };
  const handleClickOutstanding = event => {
    setIsShownOutstanding(current => !current);

  };
  const handleClickPink = event => {
    setIsShownPink(current => !current);

  };
  const handleClickPinkSecondary = event => {
    setIsShownPinkSecondary(current => !current);

  };

  return (
    
    <div className="flex flex-col margin-sidebar margin-contenido">
    <div id="colores" className=" background-grayscale-6" style={{position:"relative"}} >
    <div className="padding-componente flex flex-col">
    <h6 className="text-overline">Acciones</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className="mb-3">Slider</h3>
    <p className="text-button-1 text-justify">El slider conocido como control deslizante, es un elemento que permite seleccionar un valor de un rango de valores al deslizar un controlador a lo largo de una línea o una escala.</p>
    
    </div>
    <div className=" selector-componente" style={{borderBottom:"solid 4px #EBECF0", width:"100%"}}>
      <div className=" flex flex-row gap-40" style={{marginBottom:"-3px", paddingLeft:"5vw"}}>
        <button className="size-component size-option-component-focused" onClick={handleClickMostrarUso}>Uso</button>
        <button className="size-component size-option-component" onClick={handleClickMostrarCode}>Código</button>
      </div>
      
    </div>
    </div>
    {isShownUso && 
    <div className=" padding-marca flex flex-col" style={{gap:"40px"}}>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Uso
    </p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Los sliders se pueden utilizar para controlar diversas características, como el volumen, la velocidad y la luminosidad. Permiten a los usuarios seleccionar un valor entre un mínimo y un máximo dentro de un rango determinado, utilizando un mando o palanca que se mueve horizontalmente.</p>
    </div>
    <div><p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Modo de Uso
    </p>
    <br />
    <p style={{color: "#222D44",fontWeight:600, fontSize:"16px", lineHeight:"22px"}}>¿Cuándo usarlos?</p>
    <br></br>
    <p>Debe usarse para aumentar o disminuir una entrada. Por ejemplo, aumentar el brillo en una pantalla. el usuario desliza el controlador hacia la derecha o hacia la izquierda para aumentar o disminuir el valor seleccionado.</p>
    <br />
    <p style={{color: "#222D44",fontWeight:600, fontSize:"16px", lineHeight:"22px"}}>¿Cuándo no usarlos?</p>
    <br />
    <p>No debe usarse si los valores disponibles son conocidos y limitados.
Cuando la selección es compleja, es decir, si es necesario seleccionar valores con una precisión específica, un componente slider puede no ser la mejor opción.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Variantes
    </p>
    <br></br>
    <p style={{fontWeight:400, fontSize:"16px", lineHeight:"22px"}}>Las variantes del Slider indican en qué estado se encuentra.</p>
    <br />
    <div className="grid mt-2" style={{gridTemplateColumns:"30% 70%"}}>
      <div className=" justify-center flex" style={{alignItems:"center", placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Initial</div>
      <div style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Muestra el estado por defecto del Slider.</div>
      <div className=" justify-center flex" style={{alignItems:"center",placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Hover</div>
      <div style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Cuando el cursor se encuentra encima del Slider sin seleccionarlo.</div>
      <div className=" justify-center flex" style={{alignItems:"center",placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Focus</div>
      <div style={{placeSelf:"stretch", paddingTop:"2rem", paddingBottom:"2rem"}}>Este estado se muestra cuando el usuario pasa de mantener el cursor encima del slider a seleccionarlo.</div>
      <div className=" justify-center flex" style={{alignItems:"center",placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Sliding</div>
      <div style={{placeSelf:"stretch", backgroundColor:"#F9F9F9", paddingTop:"2rem", paddingBottom:"2rem"}}>Muestra una etiqueta de valor actual.</div>
    </div>
    </div>
    <div className="flex flex-col">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Estilo
    </p>
    <br />
    <p>Tiene dos estilos que se distinguen según la función que se este realizando.</p>
    
    <img style={{width:"30%", alignSelf:"center", marginTop: "4%"}} src={slider1} ></img>
    <div className=" mt-4"></div>
    <p style={{fontWeight:700}}>
      Double
    </p>
    <br />
    <img style={{width:"30%", alignSelf:"center", marginTop: "4%"}} src={sliderdoble} ></img></div>
    <div className="flex flex-col">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Anatomía
    </p>
    <img style={{width:"30%", alignSelf:"center", marginTop: "4%"}} src={slideranatomia} ></img>
    <div className=" mt-4"></div>
    <p><strong>Track:</strong> Representa la cantidad.</p>
    <p><strong>Contenedor:</strong> Contiene tanto al track como al controlador y determina su longitud dependiendo del espacio disponible.</p>
    <p><strong>Controlador:</strong> Controla al track y permite avanzar sobre el contenedor.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
      Comportamiento
    </p>
    <br></br>
    <p>El controlador se mueve cuando es arrastrado, además se muestra el valor seleccionado encima del controlador dentro de una burbuja de texto cuando este es arrastrado.</p>
    <br />
    <p>En la variante doble, los 2 controladores cumplen la función de límites, por lo tanto, el primer controlador siempre se mantendrá a la izquierda del segundo controlador, y nunca se podrá arrastrarlo hacia su derecha y viceversa. Los valores de ambos controladores pueden accedidos.</p>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Mejores Prácticas
    </p>
    <br />
    <li>El controlador debe tener una etiqueta que indique a que valor se está cambiando, mientras va avanzando.</li>
    <li>Utilizar un rango de valores para describir los valores en números.</li>
    <li>Las etiquetas no deben contener valores extremadamente grandes.</li>
    <li>Las etiquetas no deben contener valores excesivamente pequeños.</li>
    <li>El controlador debe utilizarse como indicador de carga.</li>
    </div>
    <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Guidelines de contenido
    </p>
    <br></br>
    <li>El controlador se encuentra alineado a la izquierda.</li>
    <li>Un slider puede tener características adicionales, como una escala numérica, una representación gráfica de los valores disponibles, y una etiqueta que señale el valor seleccionado.</li>
    </div>
    {/* <div>
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Accesibilidad
    </p>
    <br></br>
    <li>Incluir texto alternativo en los botones de ícono.</li>
    </div> */}
    </div> 
    
    }
  {isShownCode && 
    <div className="padding-componente flex flex-col gap-4">
    <div style={{border: "1px solid #F9B100", background: "#FFFFFF", borderRadius:"8px", gap:"2%", height:"79px"}} className="flex flex-row">
          <div style={{width: "2%", backgroundColor: "#F9B100"}}></div>
          <div style={{color:"#F9B100", alignSelf:"center", fontSize:"24px"}}><FontAwesomeIcon icon={faExclamationCircle} /></div>
          <div style={{alignSelf:"center"}}>Este componente se encuentra en desarrollo.</div>
          {/* <div style={{alignSelf:"center", marginRight:"2%", marginLeft:"auto"}}><FontAwesomeIcon icon={faMinus} /></div> */}
    </div>
    <div><p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Desarrollo
    </p>
    <br></br>
    <p>Los sliders constan de 2 span que pueden ser arrastrados para definir los límites del rango. Los valores de estos son mostrados dentro de 2 </p>
    <br />
    <p>Para acceder a los valores mínimo y máximo deberás acceder mediante el atributo value de los inputs rangOne y rangeTwo, respectivamente. </p>
    </div>
    <div className=" mb-5">
    <p style={{fontWeight:500, fontSize:"31px", lineHeight:"36px"}}>
    Slider
    </p>
    <br></br>
    {isMostrarPrimary1 && 
    !isShownPrimary && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Código <FontAwesomeIcon icon={faCode} /></button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
        <div>
      <section className="range-slider">
        <span id="outputOne" className="output outputOne" style={outputOneStyle}>{rangeOneValue}</span>
        <span id="outputTwo" className="output outputTwo" style={outputTwoStyle}>{rangeTwoValue}</span>
        <span id="full-range" className="full-range"></span>
        <span id="incl-range" className="incl-range" style={inclRangeStyle}></span>
        <input className="range1" name="rangeOne" value={rangeOneValue} min="0" max="100" step="1" type="range" onChange={handleRangeOneChange} />
        <input className="range1" name="rangeTwo" value={rangeTwoValue} min="0" max="100" step="1" type="range" onChange={handleRangeTwoChange} />
      </section>

    </div>
        </div>
    </div>
    </div>
    
     </>  }
     {isMostrarPrimary1 && 
    isShownPrimary &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className="text-color-primary text-weight-semibold" onClick={handleClickPrimary}>Ver Componente <FontAwesomeIcon icon={faPuzzlePiece} /></button> 
    </div>
    <div style={{minHeight: "25vh", backgroundColor:"rgb(40, 42, 54)", borderRadius:"8px" }}>
     <CopyBlock 
          language="html"
          text={`<script>
    var rangeOne = document.querySelector('input[name="rangeOne"]'),
		rangeTwo = document.querySelector('input[name="rangeTwo"]'),
		outputOne = document.querySelector('.outputOne'),
		outputTwo = document.querySelector('.outputTwo'),
		inclRange = document.querySelector('.incl-range'),
		updateView = function () {
			if (this.getAttribute('name') === 'rangeOne') {
				outputOne.innerHTML = this.value;
				outputOne.style.left = this.value / this.getAttribute('max') * 100 + '%';
			} else {
				outputTwo.style.left = this.value / this.getAttribute('max') * 100 + '%';
				outputTwo.innerHTML = this.value
			}
			if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
				inclRange.style.width = (rangeOne.value - rangeTwo.value) / this.getAttribute('max') * 100 + '%';
				inclRange.style.left = rangeTwo.value / this.getAttribute('max') * 100 + '%';
			} else {
				inclRange.style.width = (rangeTwo.value - rangeOne.value) / this.getAttribute('max') * 100 + '%';
				inclRange.style.left = rangeOne.value / this.getAttribute('max') * 100 + '%';
			}
		};

	document.addEventListener('DOMContentLoaded', function () {
		updateView.call(rangeOne);
		updateView.call(rangeTwo);
		$('input[type="range"]').on('mouseup', function() {
			this.blur();
		}).on('mousedown input', function () {
			updateView.call(this);
		});
	});
</script>
<section class="range-slider container">
  <span class="output outputOne"></span>
  <span class="output outputTwo"></span>
  <span class="full-range"></span>
  <span class="incl-range"></span>
  <input name="rangeOne" value="10" min="0" max="100" step="1" type="range">
  <input name="rangeTwo" value="90" min="0" max="100" step="1" type="range">
</section>`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
        </div>
    </div> }
    
    </div>
    

    </div>
  }
    
    

  </div>
  
   
  );
};

export default withAuthenticationRequired(Slider, {
  onRedirecting: () => <Loading />,
});
