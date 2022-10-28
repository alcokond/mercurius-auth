import React from 'react'
import grid from "../assets/colors/Grid.png";

const ColoresDisplay = () => {
  return (
    <div className=' flex flex-col gap-3 margin-sidebar padding-paleta '>
    <h5 className=' text-heading-5 '>Corporativos</h5>
    <div className="flex flex-row flex-wrap space-evenly">
    <div className="card-paleta flex flex-col ">
      <div className="background-primary color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">Primary</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">#4A3CDB</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Ocean Blue</h5>
        
      </div>
      <div className="background-grayscale-5 items-center justify-center text-button-1 color-card flex flex-col gap-1 p-2">
        <div >HEX: 4A3CDB
        </div>
        <div >RGB: 74, 60, 219
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
    <div className="background-secondary color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">Secondary</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">#FF0A6C</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Winter Sky</h5>
        
      </div>
      <div className="background-grayscale-5 items-center justify-center text-button-1 color-card flex flex-col gap-1 p-2">
        <div >HEX: FF0A6C
        </div>
        <div >RGB: 225, 10, 108
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
        <div className="background-complementary color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-1 ">Complementary</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">#F9E100</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Yellow Pantone</h5>
        
      </div>
      <div className="background-grayscale-5 items-center justify-center text-button-1 color-card flex flex-col gap-1 p-2">
        <div >HEX: F9E100
        </div>
        <div >RGB: 249, 225, 0
        </div>
        
      </div>
    </div>

    </div>

    <h5 className=' text-heading-5 '>Opacity</h5>

    <div className=' flex flex-row flex-wrap gap-1 '>
    <div className=" flex flex-col ">
    <div class='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ob-60-1' />
    <path d='M0,100 L100,100 100,0z' id='ob-60-2' />
  </svg>
</div>
      <div className=" items-start text-button-1  flex flex-col gap-0 p-2">
        <div ><b>Ocean-Blue/60%</b>
        </div>
        <div >#4A3CDB99
        </div>
        <div >rgba(74, 60, 219, 0.6)
        </div>
        <div >hsla(245, 69, 55, 0.6)
        </div>
        
      </div>
    </div>
    <div className=" flex flex-col ">
    <div class='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ob-40-1' />
    <path d='M0,100 L100,100 100,0z' id='ob-40-2' />
  </svg>
</div>
      <div className=" items-start text-button-1  flex flex-col gap-0 p-2">
        <div ><b>Ocean-Blue/40%</b>
        </div>
        <div >#4A3CDB66
        </div>
        <div >rgba(74, 60, 219, 0.4)
        </div>
        <div >hsla(245, 69, 55, 0.4)
        </div>
        
      </div>
    </div>
    <div className=" flex flex-col ">
    <div class='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ob-20-1' />
    <path d='M0,100 L100,100 100,0z' id='ob-20-2' />
  </svg>
</div>
      <div className=" items-start text-button-1  flex flex-col gap-0 p-2">
        <div ><b>Ocean-Blue/20%</b>
        </div>
        <div >#4A3CDB33
        </div>
        <div >rgba(74, 60, 219, 0.2)
        </div>
        <div >hsla(245, 69, 55, 0.2)
        </div>
        
      </div>
    </div>
    <div className=" flex flex-col ">
    <div class='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ob-10-1' />
    <path d='M0,100 L100,100 100,0z' id='ob-10-2' />
  </svg>
</div>
      <div className=" items-start text-button-1  flex flex-col gap-0 p-2">
        <div ><b>Ocean-Blue/10%</b>
        </div>
        <div >#4A3CDB1A
        </div>
        <div >rgba(74, 60, 219, 0.1)
        </div>
        <div >hsla(245, 69, 55, 0.1)
        </div>
        
      </div>
    </div>
    <div className=" flex flex-col ">
    <div class='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ws-60-1' />
    <path d='M0,100 L100,100 100,0z' id='ws-60-2' />
  </svg>
</div>
      <div className=" items-start text-button-1  flex flex-col gap-0 p-2">
        <div ><b>Winter-Sky/60%</b>
        </div>
        <div >#FF0A6C99
        </div>
        <div >rgba(255, 10, 108, 0.6)
        </div>
        <div >hsla(336, 100, 52, 0.6)
        </div>
        
      </div>
    </div>
    <div className=" flex flex-col ">
    <div class='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ws-40-1' />
    <path d='M0,100 L100,100 100,0z' id='ws-40-2' />
  </svg>
</div>
      <div className=" items-start text-button-1  flex flex-col gap-0 p-2">
        <div ><b>Winter-Sky/40%</b>
        </div>
        <div >#FF0A6C66
        </div>
        <div >rgba(255, 10, 108, 0.4)
        </div>
        <div >hsla(336, 100, 52, 0.4)
        </div>
        
      </div>
    </div>
    <div className=" flex flex-col ">
    <div class='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ws-20-1' />
    <path d='M0,100 L100,100 100,0z' id='ws-20-2' />
  </svg>
</div>
      <div className=" items-start text-button-1  flex flex-col gap-0 p-2">
        <div ><b>Winter-Sky/20%</b>
        </div>
        <div >#FF0A6C33
        </div>
        <div >rgba(255, 10, 108, 0.2)
        </div>
        <div >hsla(336, 100, 52, 0.2)
        </div>
        
      </div>
    </div>
    <div className=" flex flex-col ">
    <div class='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='ws-10-1' />
    <path d='M0,100 L100,100 100,0z' id='ws-10-2' />
  </svg>
</div>
      <div className=" items-start text-button-1  flex flex-col gap-0 p-2">
        <div ><b>Winter-Sky/10%</b>
        </div>
        <div >#FF0A6C66
        </div>
        <div >rgba(255, 10, 108, 0.1)
        </div>
        <div >hsla(336, 100, 52, 0.1)
        </div>
        
      </div>
    </div>
    <div className=" flex flex-col ">
    <div class='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='yp-60-1' />
    <path d='M0,100 L100,100 100,0z' id='yp-60-2' />
  </svg>
</div>
      <div className=" items-start text-button-1  flex flex-col gap-0 p-2">
        <div ><b>Yellow-Pantone/60%</b>
        </div>
        <div >#F9E10099
        </div>
        <div >rgba(249, 225, 0, 0.6)
        </div>
        <div >hsla(54, 100, 49, 0.6)
        </div>
        
      </div>
    </div>
    <div className=" flex flex-col ">
    <div class='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='yp-40-1' />
    <path d='M0,100 L100,100 100,0z' id='yp-40-2' />
  </svg>
</div>
      <div className=" items-start text-button-1  flex flex-col gap-0 p-2">
        <div ><b>Yellow-Pantone/40%</b>
        </div>
        <div >#F9E10066
        </div>
        <div >rgba(249, 225, 0, 0.4)
        </div>
        <div >hsla(54, 100, 49, 0.4)
        </div>
        
      </div>
    </div>
    <div className=" flex flex-col ">
    <div class='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='yp-20-1' />
    <path d='M0,100 L100,100 100,0z' id='yp-20-2' />
  </svg>
</div>
      <div className=" items-start text-button-1  flex flex-col gap-0 p-2">
        <div ><b>Yellow-Pantone/20%</b>
        </div>
        <div >#F9E10033 
        </div>
        <div >rgba(249, 225, 0, 0.2)
        </div>
        <div >hsla(54, 100, 49, 0.2)
        </div>
        
      </div>
    </div>
    <div className=" flex flex-col ">
    <div class='bg'>
  <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
    <path d='M0,0 L0,100 100,0z' id='yp-10-1' />
    <path d='M0,100 L100,100 100,0z' id='yp-10-2' />
  </svg>
</div>
      <div className=" items-start text-button-1  flex flex-col gap-0 p-2">
        <div ><b>Yellow-Pantone/10%</b>
        </div>
        <div >#F9E1001A
        </div>
        <div >rgba(249, 225, 0, 0.1)
        </div>
        <div >hsla(54, 100, 49, 0.1)
        </div>
        
      </div>
    </div>
    

    

    </div>

    <h5 className=' text-heading-5 '>Tints & Shades</h5>
    <img
                  alt="..."
                  src= {grid}
                  className="w-full align-middle rounded-t-lg"
                />
    <h5 className=' text-heading-5 '>Ocean Blue</h5>

    <div className="flex flex-row flex-wrap space-evenly">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#090622"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B900</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Xiketic</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #090622
        </div>
        <div >RGB: 9, 6, 34
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#151055"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B800</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Midnight Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #151055
        </div>
        <div >RGB: 21, 16, 85
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#221987"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B700</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Phthalo Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #221987
        </div>
        <div >RGB: 34, 25, 135
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#2F22BA"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B600</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Medium Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #2F22BA
        </div>
        <div >RGB: 47, 34, 186
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#2F22BA"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Ocean Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #2F22BA
        </div>
        <div >RGB: 34, 45, 68
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#9890EB"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B300</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Maximum Blue Purple</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #9890EB
        </div>
        <div >RGB: 152, 144, 235
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#BEBAF2"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-1 ">B200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Blue Purple</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #BEBAF2
        </div>
        <div >RGB: 190, 186, 242
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#E5E3FA"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-1 ">B100</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Lavender Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #E5E3FA
        </div>
        <div >RGB: 229, 227, 250
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#F2F1FC"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-1 ">B50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Magnolia</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #F2F1FC
        </div>
        <div >RGB: 242, 241, 252
        </div>
        
      </div>
    </div>

    </div>
    <h5 className=' text-heading-5 '>Winter Sky</h5>

    <div className="flex flex-row flex-wrap space-evenly">
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#471E4D"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">P900</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Russian Violet</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #471E4D
        </div>
        <div >RGB: 71, 30, 77
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#7E247A"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">P800</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Midnight</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #7E247A
        </div>
        <div >RGB: 126, 36, 122
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#AF218E"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">P700</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Fandango</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #AF218E
        </div>
        <div >RGB: 175, 33, 142
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#DA188A"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">P600</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Barbie Pink</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #DA188A
        </div>
        <div >RGB: 218, 24, 138
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#FF0A6C"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">P500</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Winter Sky</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #FF0A6C
        </div>
        <div >RGB: 34, 45, 68
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#222D44"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-7 ">B200</h5>
        <h5 className=" text-button-1 text-color-grayscale-7 ">Maximum Blue Purple</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #222D44
        </div>
        <div >RGB: 152, 144, 235
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#BEBAF2"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-1 ">B200</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Blue Purple</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #BEBAF2
        </div>
        <div >RGB: 190, 186, 242
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#E5E3FA"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-1 ">B100</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Lavender Blue</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #E5E3FA
        </div>
        <div >RGB: 229, 227, 250
        </div>
        
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#F2F1FC"}} className=" color-card flex flex-col items-center justify-center ">
        <h5 className=" text-button-1 text-color-grayscale-1 ">B50</h5>
        <h5 className=" text-button-1 text-color-grayscale-1 ">Magnolia</h5>
        
      </div>
      <div className="background-grayscale-5 justify-center text-button-1 rounded-lg flex flex-col gap-1 p-2">
        <div >HEX: #F2F1FC
        </div>
        <div >RGB: 242, 241, 252
        </div>
        
      </div>
    </div>

    </div>
    </div>
    
  )
}

export default ColoresDisplay