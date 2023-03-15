import React from 'react'
import grid from "../assets/colors/Grid.png";
import Grayscale from "../assets/colors/Grayscale.png";

const ColoresDisplay = () => {
  return (
    <div className=' flex flex-col gap-3 margin-sidebar padding-paleta '>
    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    

    <div className="card-paleta flex flex-col ">
      <div className=" background-primary color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Ocean Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 p-2">
        <div >HEX: #83378F
        </div>
        <div >RGB: 74, 60, 219
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
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
    </div>
    <div className="card-paleta flex flex-col ">
      <div className=" background-complementary color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y500</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Yellow Pantone</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 p-2">
        <div >HEX: #F9E100
        </div>
        <div >RGB: 249, 225, 0
        </div>
        
      </div>
    </div>
    
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#222D44"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">N900</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Space Cadet</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 p-2">
        <div >HEX: #222D44
        </div>
        <div >RGB: 34, 45, 68
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor:"#ffffff"}} className="color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">White</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Light</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 p-2">
        <div >HEX: #FFFFFF
        </div>
        <div >RGB: 255, 255, 255
        </div>
        
      </div>
    </div>
    
    </div>

    
      <h6 style={{fontSize: 24, fontWeight: 600}} >Opacidades</h6>
      <p>Utilizamos la paleta de opacidades de los colores corporativos como sombra de botones e Imputs. Estos colores crean contraste y efectos que permiten a los usuarios identificar los botones y realizar acciones más rápidas.</p>
    

    <div style={{gridTemplateColumns: "1fr 1fr 1fr auto", gap: "2%"}} className='grid mb-3'>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ob-60-1' />
    <path d='M0,100 L100,100 100,0z' id='ob-60-2' />
  </svg>
</div>
      <div className=" items-start ">
        <div ><b>Ocean-Blue/60%</b>
        </div>
        <div >#83378F99
        </div>
        <div >rgba(74,60,219,0.6)
        </div>
        <div >hsla(245,69,55,0.6)
        </div>
        
      </div>
    </div>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ob-40-1' />
    <path d='M0,100 L100,100 100,0z' id='ob-40-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Ocean-Blue/40%</b>
        </div>
        <div >#83378F66
        </div>
        <div >rgba(74,60,219,0.4)
        </div>
        <div >hsla(245,69,55,0.4)
        </div>
        
      </div>
    </div>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ob-20-1' />
    <path d='M0,100 L100,100 100,0z' id='ob-20-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Ocean-Blue/20%</b>
        </div>
        <div >#83378F33
        </div>
        <div >rgba(74,60,219,0.2)
        </div>
        <div >hsla(245,69,55,0.2)
        </div>
        
      </div>
    </div>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ob-10-1' />
    <path d='M0,100 L100,100 100,0z' id='ob-10-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Ocean-Blue/10%</b>
        </div>
        <div >#83378F1A
        </div>
        <div >rgba(74,60,219,0.1)
        </div>
        <div >hsla(245,69,55,0.1)
        </div>
        
      </div>
    </div>
    <div className=" ">
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
    </div>
    <div className=" ">
    <div className='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='yp-60-1' />
    <path d='M0,100 L100,100 100,0z' id='yp-60-2' />
  </svg>
</div>
      <div className=" items-start text-button-1">
        <div ><b>Yellow-Pantone/60%</b>
        </div>
        <div >#F9E10099
        </div>
        <div >rgba(249,225,0,0.6)
        </div>
        <div >hsla(54,100,49,0.6)
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
        <div ><b>Yellow-Pantone/40%</b>
        </div>
        <div >#F9E10066
        </div>
        <div >rgba(249,225,0,0.4)
        </div>
        <div >hsla(54,100,49,0.4)
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
        <div ><b>Yellow-Pantone/20%</b>
        </div>
        <div >#F9E10033 
        </div>
        <div >rgba(249,225,0,0.2)
        </div>
        <div >hsla(54,100,49,0.2)
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
        <div ><b>Yellow-Pantone/10%</b>
        </div>
        <div >#F9E1001A
        </div>
        <div >rgba(249,225,0,0.1)
        </div>
        <div >hsla(54,100,49,0.1)
        </div>
        
      </div>
    </div>
    

    

    </div>

    <h5 className=' text-heading-5 '>Tintes y sombras</h5>
    <p>Esta paleta está constituida desde colores oscuros, colores corporativos, hasta los colores claros. Utilizamos los tintes y sombras en imputs y botones.</p>
    <img
      alt="..."
      src= {grid}
      className="w-full align-middle"
    />
    <h5 className=' text-heading-5 '>Azules</h5>
    <p>Los azules son refrescantes, producen armonía y facilitan la lectura. Utilizamos el color azul “Ocean Blue” para acciones, como botones, links, selectores y texto.</p>

    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#090622"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B900</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Xiketic</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #090622
        </div>
        <div >RGB: 9, 6, 34
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#151055"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B800</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Midnight Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #151055
        </div>
        <div >RGB: 21, 16, 85
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#221987"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B700</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Phthalo Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #221987
        </div>
        <div >RGB: 34, 25, 135
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#2F22BA"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B600</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Medium Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #2F22BA
        </div>
        <div >RGB: 47, 34, 186
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#2F22BA"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Ocean Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #2F22BA
        </div>
        <div >RGB: 34, 45, 68
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#9890EB"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B300</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Maximum Blue Purple</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #9890EB
        </div>
        <div >RGB: 152, 144, 235
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#BEBAF2"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">B200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Blue Purple</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #BEBAF2
        </div>
        <div >RGB: 190, 186, 242
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#E5E3FA"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">B100</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Lavender Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #E5E3FA
        </div>
        <div >RGB: 229, 227, 250
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#F2F1FC"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">B50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Magnolia</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1   flex flex-col gap-1 p-2">
        <div >HEX: #F2F1FC
        </div>
        <div >RGB: 242, 241, 252
        </div>
        
      </div>
    </div>

    </div>
    <h5 className=' text-heading-5 '>Rosas</h5>
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

    </div>

    <h5 className=' text-heading-5 '>Amarillos</h5>
    <p>El color amarillo representa vitalidad y nos permite crear armonía, es un color complementario que utilizamos en textos y fondos para destacar acciones.</p>
    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#80780F"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">Y900</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Olive</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #80780F
        </div>
        <div >RGB: 128, 120, 15
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#A2960A"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">Y800</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Citron</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #A2960A
        </div>
        <div >RGB: 162, 150, 10
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#C3B205"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">Y700</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Old Gold</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #C3B205
        </div>
        <div >RGB: 175, 33, 142
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#E0CB00"}} className=" color-card flex flex-col items-center justify-center font-semibold ">
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y600</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Citrine</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #E0CB00
        </div>
        <div >RGB: 224, 203, 0
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#F9E100"}} className=" color-card flex flex-col items-center justify-center font-semibold ">
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y500</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Yellow Pantone</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #F9E100
        </div>
        <div >RGB: 249, 225, 0
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FFF06A"}} className=" color-card flex flex-col items-center justify-center text-color-grayscale-1 font-semibold">
        <h5 className=" text-button-1 ">Y300</h5>
        <h5 className=" text-button-1 ">Corn</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FFF06A
        </div>
        <div >RGB: 255, 240, 106
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FFF6A2"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Green Yellow Crayola</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FFF6A2
        </div>
        <div >RGB: 255, 246, 162
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FEF9CC"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y100</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Lemon Chiffon</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FEF9CC
        </div>
        <div >RGB: 254, 249, 204
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FFFDEC"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">Y50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Ivory</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FFFDEC
        </div>
        <div >RGB: 255, 253, 236
        </div>
        
      </div>
    </div>

    </div>

    <h5 className=' text-heading-5 '>Colores Semánticos</h5>
    <p>Describimos el uso que hacemos de cada color y las pautas a tomar en cuenta. El color semántico ayuda a los usuarios a identificar estados, acciones, botones, links y encontrar opciones de ayuda.</p>
    <h5 className=' text-heading-5 '>Verdes</h5>
    <p>El color verde representa energía, positivismo y vitalidad. Utilizamos el color verde para denotar procesos de éxito.</p>

    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#38A57E"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">G500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Jungle Green</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 flex flex-col gap-1 p-2">
        <div >HEX: #38A57E
        </div>
        <div >RGB: 56, 165, 126
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#AFDBCB"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">G200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Middle Blue Green</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #AFDBCB
        </div>
        <div >RGB: 175, 219, 203
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#EBF6F2"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">G50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Mint Cream</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #EBF6F2
        </div>
        <div >RGB: 235, 246, 242
        </div>
        
      </div>
    </div>
    </div>

    <h5 className=' text-heading-5 '>Naranja</h5>
    <p>Nuestro color naranja es de tonalidad clara y vibrante, es difícil pasarlo desapercibido. En Xtrim lo usamos en alertas.</p>

    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#F9B100"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">H500</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Honey Yellow</h5>
        
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
        <h5 className=" text-button-1 text-color-grayscale-1 ">H200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Jazmine</h5>
        
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
        <h5 className=" text-button-1 text-color-grayscale-1 ">H50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Cosmic Latte</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #FEF7E5
        </div>
        <div >RGB: 246, 223, 230
        </div>
        
      </div>
    </div>
    </div>

    <h5 className=' text-heading-5 '>Rojo</h5>
    <p>Es un color que llama la atención, utilizamos el color rojo para denotar procesos erróneos.</p>

    <div style={{gridTemplateColumns: "1fr 1fr 1fr", gap: "2%"}} className="grid">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#BD033B"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-7 ">R500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Bright Maroon</h5>
        
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
        <h5 className=" text-button-1 text-color-grayscale-1 ">R200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Amaranth Pink</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #E59AB1
        </div>
        <div >RGB: 229, 154, 177
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#F6DFE6"}} className=" color-card flex flex-col items-center justify-center font-semibold">
        <h5 className=" text-button-1 text-color-grayscale-1 ">R50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Piggy Pink</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1  flex flex-col gap-1 p-2">
        <div >HEX: #F6DFE6
        </div>
        <div >RGB: 246, 223, 230
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