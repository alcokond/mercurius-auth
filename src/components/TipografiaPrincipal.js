import React from "react";
import DrawerGuidelines from "./DrawerGuidelines.js";
import PermanentDrawerLeft from "./PermanentDrawerLeft.js.js";

const TipografiaPrincipal = () => (
    <>
    <DrawerGuidelines></DrawerGuidelines>
    <div className="flex flex-col flex-wrap">
    <div className="margin-sidebar padding-paleta">
        <div className="flex flex-row flex-wrap gap-3">
            <div className="flex flex-col flex-wrap gap-3">
                <h1 style={{color: "#4F565C"}} className=" text-subtitle-1">Typeface: Montserrat</h1>
                <div className=" background-primary-opacity-10 rounded-lg px-3 py-2">font-family: Montserrat</div>
                <h1 style={{color: "#4F565C"}} className=" text-subtitle-1">Weights</h1>
                <div className=" background-primary-opacity-10 rounded-lg px-3 py-2 flex flex-row gap-2 flex-wrap">
                    <div className="flex flex-col gap-2 flex-wrap">
                    <div style={{fontWeight: "300"}}>Ligth</div>
                    <div style={{fontWeight: "400"}}>Regular</div>
                    <div style={{fontWeight: "500"}}>Medium</div>
                    <div style={{fontWeight: "600"}}>SemiBold</div>
                    <div style={{fontWeight: "700"}}>Bold</div>
                    </div>
                    <div className="flex flex-col gap-2 flex-wrap">
                    <div style={{fontWeight: "300"}}><i>Ligth - Italic</i></div>
                    <div style={{fontWeight: "400"}}><i>Regular - Italic</i></div>
                    <div style={{fontWeight: "500"}}><i>Medium - Italic</i></div>
                    <div style={{fontWeight: "600"}}><i>SemiBold - Italic</i></div>
                    <div style={{fontWeight: "700"}}><i> Bold - Italic</i></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-wrap gap-3">
            <div>WEB Scale: Major third - 16px</div>
            <div className=" background-primary-opacity-10 rounded-lg px-3 py-2 flex flex-wrap gap-3">
            <div id="sizes" className=" flex-col align-items-end text-right flex-wrap">
            <div style={{fontSize: "61px"}}>61</div>
            <div style={{fontSize: "48px"}}>48</div>
            <div style={{fontSize: "31px"}}>31</div>
            <div style={{fontSize: "25px"}}>25</div>
            <div style={{fontSize: "20px"}}>20</div>
            <div style={{fontSize: "16px"}}>16</div>
            <div style={{fontSize: "14px"}}>14</div>
            <div style={{fontSize: "16px"}}>16</div>
            <div style={{fontSize: "16px"}}>16</div>
            <div style={{fontSize: "16px"}}>16</div>
            <div style={{fontSize: "14px"}}>14</div>
            <div style={{fontSize: "12.8px"}}>12.8</div>
            <div style={{fontSize: "10.24px"}}>10.24</div>
            

            </div>
            <div id="sizes" className=" flex-col flex-wrap">
            <div style={{fontWeight: "700", fontSize: "61px"}} >Heading 1</div>
            <div style={{fontWeight: "500", fontSize: "48px"}} >Heading 2</div>
            <div style={{fontWeight: "500", fontSize: "31px"}} >Heading 3</div>
            <div style={{fontWeight: "600", fontSize: "25px"}} >Heading 4</div>
            <div style={{fontWeight: "700", fontSize: "20px"}} >Heading 5</div>
            <div style={{fontWeight: "600", fontSize: "16px"}} >Subtitle 1</div>
            <div style={{fontWeight: "600", fontSize: "14px"}} >Subtitle 2</div>
            <div style={{fontWeight: "600", fontSize: "16px"}} >Button 1</div>
            <div style={{fontWeight: "600", fontSize: "16px"}} >Button 2</div>
            <div style={{fontWeight: "400", fontSize: "16px"}} >Body 1</div>
            <div style={{fontWeight: "400", fontSize: "14px"}} >Body 2</div>
            <div style={{fontWeight: "500", fontSize: "12.8px"}} >Caption</div>
            <div style={{fontWeight: "400", fontSize: "10.24px"}} >OVERLINE</div>
            </div>
            </div>
            </div>
            <div className="flex flex-col"></div>
        </div>
    </div>
      
  
    </div>  
      </>
  );
  
  export default TipografiaPrincipal;
  