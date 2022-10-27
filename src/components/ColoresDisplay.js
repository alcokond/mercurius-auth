import React from 'react'

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
      <div className="background-primary color-card-sm flex flex-col items-center justify-center ">
        
        
      </div>
      <div className="background-grayscale-5 items-center justify-center text-button-1 color-card-sm flex flex-col gap-1 p-2">
        <div >HEX: 4A3CDB
        </div>
        <div >RGB: 74, 60, 219
        </div>
        
      </div>
    </div>
    <div className=" flex flex-col ">
    <div className="background-secondary color-card-sm flex flex-col items-center justify-center ">
        
        
      </div>
      <div className="background-grayscale-5 items-center justify-center text-button-1 color-card-sm flex flex-col gap-1 p-2">
        <div >HEX: FF0A6C
        </div>
        <div >RGB: 225, 10, 108
        </div>
        
      </div>
    </div>
    <div className=" flex flex-col ">
        <div className="background-complementary color-card-sm flex flex-col items-center justify-center ">
        
      </div>
      <div className="background-grayscale-5 items-center justify-center text-button-1 color-card-sm flex flex-col gap-1 p-2">
        <div >HEX: F9E100
        </div>
        <div >RGB: 249, 225, 0
        </div>
        
      </div>
    </div>

    <div className=" flex flex-col ">
        <div className="background-complementary color-card-sm flex flex-col items-center justify-center ">
        
      </div>
      <div className="background-grayscale-5 items-center justify-center text-button-1 color-card-sm flex flex-col gap-1 p-2">
        <div >HEX: F9E100
        </div>
        <div >RGB: 249, 225, 0
        </div>
        
      </div>
    </div>

    <div className=" flex flex-col ">
        <div className="background-complementary color-card-sm flex flex-col items-center justify-center ">
        
      </div>
      <div className="background-grayscale-5 items-center justify-center text-button-1 color-card-sm flex flex-col gap-1 p-2">
        <div >HEX: F9E100
        </div>
        <div >RGB: 249, 225, 0
        </div>
        
      </div>
    </div>

    </div>

    </div>
  )
}

export default ColoresDisplay