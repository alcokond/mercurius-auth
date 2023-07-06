import React from 'react'
import grid from "../assets/colors/Grid.png";
import Grayscale from "../assets/colors/Grayscale.png";
import tintes from "../assets/colors/Tintes.png";
import tonos from "../assets/colors/Tonos.png";

const ColoresDisplay = () => {
  return (
    <div className=' flex flex-col gap-3 margin-sidebar padding-paleta '>
    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    

    <div className="card-paleta flex flex-col ">
      <div className=" background-primary color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">P500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Eminence</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 p-2">
        <div className='hex_cmyk'>HEX: #83378F</div>
        <div>CMYK: 8, 62, 0, 44</div>
        <div className='rgb_pantone'>RGB: 131, 55, 143, 1</div>
        <div>Pantone: 527 C</div>
        
      </div>
    </div>
    {/* <div className="card-paleta flex flex-col ">
      <div className=" background-secondary color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">P500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Winter Sky</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 p-2">
        <div >HEX: #FF0A6C
        </div>
        <div >RGB: 225, 10, 108
        </div>
        
      </div>
    </div> */}
    <div className="card-paleta flex flex-col ">
      <div className=" background-complementary color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y500</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Jonquil</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 p-2">
        <div className='hex_cmyk'>HEX: #FFCF00</div>
        <div>CMYK: 0, 19, 100, 0</div>
        <div className='rgb_pantone'>RGB: 255, 207, 0, 1</div>
        <div>Pantone: 7405 C</div>
        
        
      </div>
    </div>
    
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#222D44"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">N900</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Space Cadet</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 p-2">
        <div className='hex_cmyk'>HEX: #222D44</div>
        <div>CMYK: 50,34,0,73</div>
        <div className='rgb_pantone'>RGB: 34, 45, 68</div>
        <div>Pantone: 533 C</div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor:"#ffffff"}} className="color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">White</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Light</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 p-2">
        <div className='hex_cmyk'>HEX: #FFFFFF</div>
        <div>CMYK: 0, 0, 0, 0</div>
        <div className='rgb_pantone'>RGB: 255, 255, 255</div>
        <div>Pantone: 7436 C</div>
        
      </div>
    </div>
    
    </div>

    
      <h6 style={{fontSize: 24, fontWeight: 600}} >Opacidades</h6>
      <p>Utilizamos la paleta de opacidades de los colores corporativos como sombra de botones e Imputs. Estos colores crean contraste y efectos que permiten a los usuarios identificar los botones y realizar acciones más rápidas.</p>
    

    <div style={{gridTemplateColumns: "1fr 1fr 1fr auto", gap: "2%"}} className='grid mb-3'>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='pe-60-1' />
    <path d='M0,100 L100,100 100,0z' id='pe-60-2' />
  </svg>
</div>
      <div className=" items-start ">
        <div ><b>Purple Eminence/100%</b>
        </div>
        <div >#83378F99
        </div>
        <div >rgba(131, 55, 143, 0.6)
        </div>
        <div >hsla(292, 44, 39, 0.6)
        </div>
        
      </div>
    </div>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='pe-40-1' />
    <path d='M0,100 L100,100 100,0z' id='pe-40-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Purple-Eminence/40%</b>
        </div>
        <div >#83378F66
        </div>
        <div >rgba(131, 55, 143, 0.4)
        </div>
        <div >hsla(292, 44, 39, 0.4)
        </div>
        
      </div>
    </div>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='pe-20-1' />
    <path d='M0,100 L100,100 100,0z' id='pe-20-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Purple-Eminence/20%</b>
        </div>
        <div >#83378F33
        </div>
        <div >rgba(131, 55, 143, 0.2)
        </div>
        <div >hsla(292, 44, 39, 0.2)
        </div>
        
      </div>
    </div>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='pe-10-1' />
    <path d='M0,100 L100,100 100,0z' id='pe-10-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Purple-Eminence/10%</b>
        </div>
        <div >#83378F1A
        </div>
        <div >rgba(131, 55, 143, 0.1)
        </div>
        <div >hsla(292, 44, 39, 0.1)
        </div>
        
      </div>
    </div>
    {/* <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ws-60-1' />
    <path d='M0,100 L100,100 100,0z' id='ws-60-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Winter-Sky/60%</b>
        </div>
        <div >#FF0A6C99
        </div>
        <div >rgba(255,10,108,0.6)
        </div>
        <div >hsla(336,100,52,0.6)
        </div>
      </div>
    </div>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ws-40-1' />
    <path d='M0,100 L100,100 100,0z' id='ws-40-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Winter-Sky/40%</b>
        </div>
        <div >#FF0A6C66
        </div>
        <div >rgba(255,10,108,0.4)
        </div>
        <div >hsla(336,100,52,0.4)
        </div>
        
      </div>
    </div>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ws-20-1' />
    <path d='M0,100 L100,100 100,0z' id='ws-20-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Winter-Sky/20%</b>
        </div>
        <div >#FF0A6C33
        </div>
        <div >rgba(255,10,108,0.2)
        </div>
        <div >hsla(336,100,52,0.2)
        </div>
        
      </div>
    </div>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ws-10-1' />
    <path d='M0,100 L100,100 100,0z' id='ws-10-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Winter-Sky/10%</b>
        </div>
        <div >#FF0A6C66
        </div>
        <div >rgba(255,10,108,0.1)
        </div>
        <div >hsla(336,100,52,0.1)
        </div>
        
      </div>
    </div> */}
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='yp-60-1' />
    <path d='M0,100 L100,100 100,0z' id='yp-60-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Yellow-Jonquil/60%</b>
        </div>
        <div >#FFCF0099
        </div>
        <div >rgba(255, 207, 0, 0.6)
        </div>
        <div >hsla(49, 100, 50, 0.6)
        </div>
        
      </div>
    </div>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='yp-40-1' />
    <path d='M0,100 L100,100 100,0z' id='yp-40-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Yellow-Jonquil/40%</b>
        </div>
        <div >#FFCF0066
        </div>
        <div >rgba(255, 207, 0, 0.4)
        </div>
        <div >hsla(49, 100, 50, 0.4)
        </div>
        
      </div>
    </div>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='yp-20-1' />
    <path d='M0,100 L100,100 100,0z' id='yp-20-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Yellow-Jonquil/20%</b>
        </div>
        <div >#FFCF0033
        </div>
        <div >rgba(255, 207, 0, 0.2)
        </div>
        <div >hsla(49, 100, 50, 0.2)
        </div>
        
      </div>
    </div>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='yp-10-1' />
    <path d='M0,100 L100,100 100,0z' id='yp-10-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Yellow-Jonquil/10%</b>
        </div>
        <div >#FFCF001A
        </div>
        <div >rgba(255, 207, 0, 0.1)
        </div>
        <div >hsla(49, 100, 50, 0.1)
        </div>
        
      </div>
    </div>
    

    

    </div>

    <h5 className=' text-heading-5 '>Tonos</h5>
    <p>Esta paleta está constituida desde colores oscuros, colores corporativos, hasta los colores claros. Utilizamos los tonos en imputs y botones.</p>
    <img
      alt="..."
      src= {tonos}
      className="w-full align-middle"
    />

    <h5 className=' text-heading-5 '>Tintes y sombras</h5>
    <p>Esta paleta está constituida desde colores oscuros, colores corporativos, hasta los colores claros. Utilizamos los tintes y sombras en imputs y botones.</p>
    <img
      alt="..."
      src= {tintes}
      className="w-full align-middle"
    />
    <h5 className=' text-heading-5 '>Morados</h5>
    <p>Los morados son refrescantes, producen armonía y facilitan la lectura. Utilizamos el color morado “Eminence” para acciones, como botones, links, selectores y texto.</p>

    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#37173C"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <div className='sombra_back1'>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 1.35</h4>
        </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span> 15.55 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">P900</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Dark Purple</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #37173C
        </div>
        <div >RGB: 55, 23, 60
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#481E4F"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <div className='sombra_back1'>
                <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 1.57</h4>
          </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span> 13.94 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">P800</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Russian Violet</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #481E4F
        </div>
        <div >RGB: 72, 30, 79
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#5D2766"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <div className='sombra_back1'>
                <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 1.95</h4>
          </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span> 10.78 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">P700</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Finn</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #5D2766
        </div>
        <div >RGB: 93, 39, 102
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#773282"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <div className='sombra_back1'>
                  <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 2.56</h4>
            </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  8.19 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">P600</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Eminence</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #773282
        </div>
        <div >RGB: 119, 50, 130
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#83378F"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <div className='sombra_back1'>
                    <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 2.91</h4>
              </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  7.22 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">P500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}> Purple Eminence</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #83378F
        </div>
        <div >RGB: 131, 55, 143
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#28125E"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <div className='sombra_back1'>
                      <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 1.34</h4>
                </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span> 15.69 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">P900</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Federal Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #28125E
        </div>
        <div >RGB: 40, 18, 94
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#3F1B6A"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <div className='sombra_back1'>
                        <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 1.58</h4>
                  </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span> 13.32 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">P800</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Persian Indigo</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #3F1B6A
        </div>
        <div >RGB: 63, 27, 106
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#562577"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <div className='sombra_back1'>
                          <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 1.93</h4>
                    </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span> 10.90 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">P700</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Tekhelet</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #562577
        </div>
        <div >RGB: 86, 37, 119
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#6C2E83"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <div className='sombra_back1'>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 2.36</h4>
        </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  8.91 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">P600</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Eminence</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #6C2E83
        </div>
        <div >RGB: 108, 46, 131
        </div>
        
      </div>
    </div>

    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#83378F"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <div className='sombra_back1'>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 2.91</h4>
        </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  7.22 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">P500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Purple Eminence</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #83378F
        </div>
        <div >RGB: 131, 55, 143
        </div>
        
      </div>
    </div>

    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#9F62B0"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_backAA'>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span>  4.85 AAA <span className='sup'>AA</span></h4>
        </div>
        <div className='sombra_backAA'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  4.33 AAA <span className='sup'>AA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">P400</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Purpureus</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #9F62B0
        </div>
        <div >RGB: 159, 98, 176
        </div>
        
      </div>
    </div>

    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#BC8ED1"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_backAA'>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span>  7.93 AAA <span className='sup'>AA</span></h4>
        </div>
        <div className='sombra_backaa'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  2.65 AA </h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">P300</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>African Violet</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #BC8ED1
        </div>
        <div >RGB: 188, 142, 209
        </div>
        
      </div>
    </div>

    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#D8B9F2"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span>  9.50 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  2.21</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">P200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Lilac</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #D8B9F2
        </div>
        <div >RGB: 198, 163, 203 
        </div>
        
      </div>
    </div>

    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#E5D0F6"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 12.61 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.67</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">P100</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Thistle</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #E5D0F6
        </div>
        <div >RGB: 217, 193, 220
        </div>
        
      </div>
    </div>

    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#F2E8FB"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 18.00 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.17</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">P50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Magnolia</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #F2E8FB
        </div>
        <div >RGB: 243, 235, 244
        </div>
        
      </div>
    </div>

    </div>
    {/* <h5 className=' text-heading-5 '>Rosas</h5>
    <p>Utilizamos los colores rosados y fucsias para generar impacto y resaltar textos y componentes, también utilizamos los colores rosados en fondos.</p>

    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#471E4D"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">P900</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Russian Violet</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #471E4D
        </div>
        <div >RGB: 71, 30, 77
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#7E247A"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">P800</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Midnight</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #7E247A
        </div>
        <div >RGB: 126, 36, 122
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#AF218E"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">P700</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Fandango</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #AF218E
        </div>
        <div >RGB: 175, 33, 142
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#DA188A"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">P600</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Barbie Pink</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #DA188A
        </div>
        <div >RGB: 218, 24, 138
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FF0A6C"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">P500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Winter Sky</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FF0A6C
        </div>
        <div >RGB: 34, 45, 68
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FF73AB"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">P300</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Cyclamen</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FF73AB
        </div>
        <div >RGB: 74, 60, 219
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FFA8CB"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">P200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Carnation Pink</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FFA8CB
        </div>
        <div >RGB: 255, 168, 203
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FFDCEA"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">P100</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Mimi Pink</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FFDCEA
        </div>
        <div >RGB: 255, 220, 234
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FFEEF5"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">P50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Lavender Blush</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FFEEF5
        </div>
        <div >RGB: 255, 238, 245
        </div>
        
      </div>
    </div>

    </div> */}

    <h5 className=' text-heading-5 '>Amarillos</h5>
    <p>El color amarillo representa vitalidad y nos permite crear armonía, es un color complementario que utilizamos en textos y fondos para destacar acciones.</p>
    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#42310A"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <div className='sombra_back1'>
                <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 1.68</h4>
          </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span> 12.53 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Y900</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Café Noir</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #42310A
        </div>
        <div >RGB: 66, 49, 10
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#856213"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back1'>
                <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 3.75</h4>
          </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  5.59 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Y800</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Golden Brown</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #856213
        </div>
        <div >RGB: 133, 98, 19
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#C7931D"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span>  7.62 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  2.67</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y700</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Dark Goldenrod</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #C7931D
        </div>
        <div >RGB: 199, 147, 29
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#E3B10F"}} className=" color-card flex flex-col items-center justify-center font-semibold ">
      <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 10.56 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.99</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y600</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Goldenrod</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #E3B10F
        </div>
        <div >RGB: 227, 177, 15
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FFCF00"}} className=" color-card flex flex-col items-center justify-center font-semibold ">
      <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 14.18 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.48</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y500</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Yellow Jonquil</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FFCF00
        </div>
        <div >RGB: 255, 207, 0
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FFD933"}} className=" color-card flex flex-col items-center justify-center text-color-grayscale-1 font-semibold">
      <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 15.22 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.38</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y400</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>School Bus Yellow</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FFD933
        </div>
        <div >RGB: 255, 217, 51
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FFDF54"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 15.94 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.32</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y300</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Mustard</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FFDF54
        </div>
        <div >RGB: 255, 223, 84
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FFE98A"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 17.27 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.22</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Lemon Chiffon</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FFE98A
        </div>
        <div >RGB: 255, 233, 138
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FFF0B0"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 18.34 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.14</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y100</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Vanilla</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FFF0B0
        </div>
        <div >RGB: 255, 240, 176
        </div>
        
      </div>
    </div>

    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FFFAE6"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 20.07 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.05</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Cosmic Latte</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FFFAE6
        </div>
        <div >RGB: 255, 250, 230
        </div>
        
      </div>
    </div>

    </div>

    <h5 className=' text-heading-5 '>Colores Semánticos</h5>
    <p>Describimos el uso que hacemos de cada color y las pautas a tomar en cuenta. El color semántico ayuda a los usuarios a identificar estados, acciones, botones, links y encontrar opciones de ayuda.</p>
    
    <h5 className=' text-heading-5 '>Azules</h5>
    <p>El color azul representa una sensación de calma y fiabilidad. Por tal motivo, usamos el color azul para dar a conocer mensajes de información.</p>

    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#0D58C1"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <div className='sombra_back1'>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 2.21</h4>
        </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  6.60 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">B500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Tang Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 flex flex-col gap-1 p-2">
        <div >HEX: #0D58C1
        </div>
        <div >RGB: 13, 88, 193
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#8AC3FB"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 11.28 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.86</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">B200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Middle Blue Green</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #8AC3FB
        </div>
        <div >RGB: 138, 195, 251
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#E2F0FE"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 18.13 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.16</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">B50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Mint Cream</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #E2F0FE
        </div>
        <div >RGB: 226, 240, 254
        </div>
        
      </div>
    </div>
    </div>
    
    <h5 className=' text-heading-5 '>Verdes</h5>
    <p>El color verde representa energía, positivismo y vitalidad. Utilizamos el color verde para denotar procesos de éxito.</p>

    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#019155"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back1'>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 5.18</h4>
        </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  4.05 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">G500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Sea Green</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 flex flex-col gap-1 p-2">
        <div >HEX: #019155
        </div>
        <div >RGB: 1, 145, 85
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#99D8B5"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"2px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 12.84 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px", width:"36px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.63 </h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">G200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Celadon</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #99D8B5
        </div>
        <div >RGB: 153, 216, 181
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#E5F6ED"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"3px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 18.74 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.12</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">G50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Honeydew</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #E5F6ED
        </div>
        <div >RGB: 229, 246, 237
        </div>
        
      </div>
    </div>
    </div>

    <h5 className=' text-heading-5 '>Rojo</h5>
    <p>Es un color que llama la atención, utilizamos el color rojo para denotar procesos erróneos.</p>

    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#BD033B"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back1'>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 3.24</h4>
        </div>
        <div className='sombra_back2'>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  6.48 AAA <span className='sup'>AAA</span></h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-7 ">R500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 " style={{marginBottom:"45px"}}>Bright Maroon</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #BD033B
        </div>
        <div >RGB: 189, 3, 59
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#E59AB1"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"3px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span>  9.59 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  2.19</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">R200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Amaranth Pink</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #E59AB1
        </div>
        <div >RGB: 229, 154, 177
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#F8E6EB"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"3px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 17.51 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.20</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">R50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Lavander Blush</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #F8E6EB
        </div>
        <div >RGB: 248, 230, 235
        </div>
        
      </div>
    </div>
    </div>

    <h5 className=' text-heading-5 '>Amarillo</h5>
    <p>Nuestro color amarillo es de tonalidad clara y vibrante, es difícil pasarlo desapercibido. En Xtrim lo usamos en alertas.</p>

    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#F9B100"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"3px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 11.32 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.86</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">H500</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Honey Yellow</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #F9B100
        </div>
        <div >RGB: 249, 177, 0
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FDE099"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"3px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 16.30 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.29</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">H200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Peach Yellow</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FDE099
        </div>
        <div >RGB: 253, 224, 153
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FEF7E5"}} className=" color-card flex flex-col items-center justify-center font-semibold">
      <div className='sombra_back2' style={{marginTop:"3px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_black"></span> 19.65 AAA <span className='sup'>AAA</span></h4>
        </div>
        <div className='sombra_back1' style={{marginTop:"3px"}}>
              <h4 style={{fontSize:"8px"}}><span class="dot_white"></span>  1.07</h4>
        </div>
        <h5 className=" text-button-1 text-color-grayscale-1 ">H50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 " style={{marginBottom:"45px"}}>Latte</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FEF7E5
        </div>
        <div >RGB: 254, 247, 229
        </div>
        
      </div>
    </div>
    </div>

    <h5 style={{fontSize: 31, fontWeight: 500}}>Colores Neutrales</h5>
    <p>Dentro de esta categoría de colores se hallan el negro, el gris, el blanco y el beige, a su vez, estos se dividen en fríos y cálidos.</p>
    <div style={{gridTemplateColumns: "33% 33% ", gap: "2%"}} className="grid">
    <div style={{backgroundColor: "#222D44"}} className="card-paleta flex flex-col ">
      <div className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">Neutral</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">#222D44</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Space Cadet</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 flex flex-col gap-1 p-2">
        <div >HEX: 222D44
        </div>
        <div >RGB: 34, 45, 68
        </div>
        
      </div>
    </div>
    <div style={{backgroundColor: "#FFFFFF"}} className="card-paleta flex flex-col">
    <div className=" color-card-border flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">Neutral</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">#FFFFFF</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Ligth</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 flex flex-col gap-1 p-2 ">
        <div >HEX: FFFFFF
        </div>
        <div >RGB: 255, 255, 255
        </div>
        
      </div>
    </div>

    </div>
    <img
      alt="..."
      src= {Grayscale}
      className="w-full align-middle "
    />
<h5 className=' text-heading-5 '>Neutros Oscuros</h5>
    <p>Los neutros oscuros se ajustan a colores con tonos similares, los utilizamos en fondos menos llamativos, se combinan con otros colores fríos.</p>

<div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
<div className="card-paleta flex flex-col ">
  <div style={{backgroundColor: "#222D44"}} className=" color-card flex flex-col items-center justify-center font-semibold">
    <h5 className=" text-button-1 text-color-grayscale-7 ">N900</h5>
    <h5 className=" text-button-1 text-color-grayscale-7 ">Space Cadet</h5>
    
  </div>
  <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
    <div >HEX: #222D44
    </div>
    <div >RGB: 34, 45, 68
    </div>
    
  </div>
</div>
<div className="card-paleta flex flex-col ">
  <div style={{backgroundColor: "#3A4458"}} className=" color-card flex flex-col items-center justify-center font-semibold">
    <h5 className=" text-button-1 text-color-grayscale-7 ">N800</h5>
    <h5 className=" text-button-1 text-color-grayscale-7 ">Independence</h5>
    
  </div>
  <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
    <div >HEX: #3A4458
    </div>
    <div >RGB: 58, 68, 88
    </div>
    
  </div>
</div>
<div className="card-paleta flex flex-col ">
  <div style={{backgroundColor: "#525A6C"}} className=" color-card flex flex-col items-center justify-center font-semibold">
    <h5 className=" text-button-1 text-color-grayscale-7 ">N700</h5>
    <h5 className=" text-button-1 text-color-grayscale-7 ">Black Coral</h5>
    
  </div>
  <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
    <div >HEX: #525A6C
    </div>
    <div >RGB: 82, 90, 108
    </div>
    
  </div>
</div>
<div className="card-paleta flex flex-col ">
  <div style={{backgroundColor: "#6A7180"}} className=" color-card flex flex-col items-center justify-center font-semibold">
    <h5 className=" text-button-1 text-color-grayscale-7 ">N600</h5>
    <h5 className=" text-button-1 text-color-grayscale-7 ">Slate Gray</h5>
    
  </div>
  <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
    <div >HEX: #6A7180
    </div>
    <div >RGB: 106, 113, 128
    </div>
    
  </div>
</div>
</div>
<h5 className=' text-heading-5 '>Neutros Medios</h5>
    <p>Los neutros medios nos permiten crear sombra y contraste, pero debemos evitar usarlos como fondos o escribir sobre ellos porque tienen poca legibilidad.</p>

<div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
<div className="card-paleta flex flex-col ">
  <div style={{backgroundColor: "#828894"}} className=" color-card flex flex-col items-center justify-center font-semibold">
    <h5 className=" text-button-1 text-color-grayscale-7 ">N500</h5>
    <h5 className=" text-button-1 text-color-grayscale-7 ">Roman Silver</h5>
    
  </div>
  <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
    <div >HEX: #828894
    </div>
    <div >RGB: 130, 136, 148
    </div>
    
  </div>
</div>
<div className="card-paleta flex flex-col ">
  <div style={{backgroundColor: "#999EA9"}} className=" color-card flex flex-col items-center justify-center font-semibold">
    <h5 className=" text-button-1 text-color-grayscale-7 ">N400</h5>
    <h5 className=" text-button-1 text-color-grayscale-7 ">Manatee</h5>
    
  </div>
  <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
    <div >HEX: #999EA9
    </div>
    <div >RGB: 153, 158, 169
    </div>
    
  </div>
</div>
<div className="card-paleta flex flex-col ">
  <div style={{backgroundColor: "#B1B5BD"}} className=" color-card flex flex-col items-center justify-center font-semibold">
    <h5 className=" text-button-1 text-color-grayscale-7 ">N300</h5>
    <h5 className=" text-button-1 text-color-grayscale-7 ">Cadet Blue Crayola</h5>
    
  </div>
  <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
    <div >HEX: #B1B5BD
    </div>
    <div >RGB: 177, 181, 189
    </div>
    
  </div>
</div>

</div>
<h5 className=' text-heading-5 '>Neutros Claros</h5>
    <p>Usamos los neutros claros en fondos, en texto, en interacciones e ilustraciones. Los neutros claros permiten que un diseño se vea impecable y delicado.</p>


<div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
<div className="card-paleta flex flex-col ">
  <div style={{backgroundColor: "#D7DAE1"}} className=" color-card flex flex-col items-center justify-center font-semibold">
    <h5 className=" text-button-1 text-color-grayscale-1 ">N200</h5>
    <h5 className=" text-button-1 text-color-grayscale-1 ">Light Gray</h5>
    
  </div>
  <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
    <div >HEX: #D7DAE1
    </div>
    <div >RGB: 215, 218, 225
    </div>
    
  </div>
</div>
<div className="card-paleta flex flex-col ">
  <div style={{backgroundColor: "#EBECF0"}} className=" color-card flex flex-col items-center justify-center font-semibold">
    <h5 className=" text-button-1 text-color-grayscale-1 ">N100</h5>
    <h5 className=" text-button-1 text-color-grayscale-1 ">Cultured 2</h5>
    
  </div>
  <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
    <div >HEX: #EBECF0
    </div>
    <div >RGB: 235, 236, 240
    </div>
    
  </div>
</div>
<div className="card-paleta flex flex-col ">
  <div style={{backgroundColor: "#F9F9F9"}} className=" color-card flex flex-col items-center justify-center font-semibold">
    <h5 className=" text-button-1 text-color-grayscale-1 ">N50</h5>
    <h5 className=" text-button-1 text-color-grayscale-1 ">Cultured 2</h5>
    
  </div>
  <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
    <div >HEX: #F9F9F9
    </div>
    <div >RGB: 249, 249, 249
    </div>
    
  </div>
</div>
<div className="card-paleta flex flex-col ">
  <div style={{backgroundColor: "#FFFFFF"}} className=" color-card-border flex flex-col items-center justify-center font-semibold">
    <h5 className=" text-button-1 text-color-grayscale-1 ">Light</h5>
    
  </div>
  <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
    <div >HEX: #FFFFFF
    </div>
    <div >RGB: 255, 255, 255
    </div>
    
  </div>
</div>

</div>
<h5 className=' text-heading-5 '>Linear Gradients</h5>

<div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid ">
<div className="card-paleta flex flex-col ">
  <div className="background-gradient-1 color-card flex flex-col items-center justify-center font-semibold">
    
  </div>
  <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-3 items-center">
    <div >Corporative
    </div>
    
  </div>
</div>
<div className="card-paleta flex flex-col ">
  <div className=" background-gradient-2 color-card flex flex-col items-center justify-center font-semibold">

    
  </div>
  <div className="background-grayscale-5 items-center justify-center text-button-1  flex flex-col gap-1 p-3">
    <div >Outstanding
    </div>
    
  </div>
</div>
<div className="card-paleta flex flex-col ">
  <div  className=" background-gradient-3 color-card flex flex-col items-center justify-center font-semibold">
    
  </div>
  <div className="background-grayscale-5 items-center justify-center text-button-1  flex flex-col gap-1 p-3">
    <div >Button
    </div>
    
  </div>
</div>

<div className="card-paleta flex flex-col ">
  <div className=" background-gradient-4 color-card-border flex flex-col items-center justify-center font-semibold">
    
  </div>
  <div className="background-grayscale-5 items-center justify-center text-button-1 flex flex-col gap-1 p-3">
    <div >Decorative - Opacity
    </div>

    
  </div>
</div>
<div className="card-paleta flex flex-col ">
  <div className=" background-gradient-5 color-card-border flex flex-col items-center justify-center font-semibold">
    
  </div>
  <div className="background-grayscale-5 items-center justify-center text-button-1 flex flex-col gap-1 p-3">
    <div >Solid
    </div>

    
  </div>
</div>

</div>



<h5 className=' text-heading-5 '>Semantic Colors</h5>
<div style={{gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", gap: "2%"}} className='grid'>

<div className='circle-box self-center my-auto'>Actions</div>

    <div className='flex flex-col'>
    <div className='flex flex-col circle-box'>
      <div className=' self-center circle background-primary'></div>
      <div className='self-center'>Primary</div>
    </div>
  
    </div>
    <div className='flex flex-col'>
    <div className='flex flex-col circle-box'>
      <div className=' self-center circle background-grayscale-5'></div>
      <div className='self-center'>Secondary</div>
      </div>
    
    
    </div>
    <div className='flex flex-col'>
    <div className='flex flex-col circle-box'>
      <div className=' self-center circle background-success-primary'></div>
      <div className='self-center'>Confirm</div>
    </div>
    
    </div>
    <div className='flex flex-col'>
    <div className='flex flex-col circle-box'>
      <div className=' self-center circle background-warning-primary'></div>
      <div className='self-center'>Warning</div>
    </div>
  
    </div>
    <div className='flex flex-col circle-box'>
      <div className=' self-center circle background-error-primary'></div>
      <div className='self-center'>Cancel</div>
    </div>
    
    <div className=' self-center circle-box my-auto'>Messages</div>
<div className='flex flex-col circle-box'>
      <div className=' self-center circle background-primary'></div>
      <div className='self-center'>Primary</div>
    </div>
<div className='flex flex-col circle-box'>
      <div className=' self-center circle background-grayscale-5'></div>
      <div className='self-center'>Secondary</div>
    </div>
<div className='flex flex-col circle-box'>
      <div className=' self-center circle background-success-primary'></div>
      <div className='self-center'>Success</div>
    </div>
<div className='flex flex-col circle-box'>
      <div className=' self-center circle background-warning-primary'></div>
      <div className='self-center'>Warning</div>
    </div>
<div className='flex flex-col circle-box'>
      <div className=' self-center circle background-error-primary'></div>
      <div className='self-center'>Error</div>
    </div>




</div>
</div>
    
  )
}

export default ColoresDisplay