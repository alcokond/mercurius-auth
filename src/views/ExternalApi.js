import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import CodeEditor from '@uiw/react-textarea-code-editor';
import MercButton1 from "../components/input/MercButton1";
import MercButton2 from "../components/input/MercButton2";
import MercButton3 from "../components/input/MercButton3";
import { TextareaAutosize } from "@mui/base";
import { Label } from "reactstrap";
import PermanentDrawerLeft from "../components/PermanentDrawerLeft.js";
import { CopyBlock, dracula } from "react-code-blocks";
import TopBar  from "../components/TopBar"


export const ExternalApiComponent = () => {

  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  const {
    isAuthenticated,
  } = useAuth0();

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);

  };
  return (
    <>
    {isAuthenticated && (
        <PermanentDrawerLeft />
        )}
    <div className=" margin-sidebar padding-paleta">
    {!isShown && <> 
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" " onClick={handleClick}>Ver Código</button>
    </div>
    <div className="component-content-full flex">
        <div className="mx-auto my-auto">
          <button class="button-main-primary-medium ">Button</button>            
        </div>
    </div>
    </div>
    
     </>  }
    {isShown &&
    <div className="flex flex-col ">
    <div style={{alignSelf: "flex-end"}}>
    <button className=" " onClick={handleClick}>Ver Componente</button> 
    </div>
    
     <CopyBlock
          language="html"
          text={`<button class="button-main-primary-medium ">Button</button>
          
          
          
          `}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        
        />
    </div> }
      {/* <div id="cards">
  <div class="card">
    <div class="card-content">
      <div class="card-image">
        <i class="fa-duotone fa-apartment"></i>
      </div>
      <div class="card-info-wrapper">
        <div class="card-info">
          <i class="fa-duotone fa-apartment"></i>
          <div class="card-info-title">
            <h3>Botón primario mediano</h3>  
            <TextareaAutosize className="textarea-code" readOnly value="<button class='button-main-primary-medium' >Button</button>">
            </TextareaAutosize>
          </div>    
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <div class="card-image">
        <i class="fa-duotone fa-unicorn"></i>
      </div>
      <div class="card-info-wrapper">
        <div class="card-info">
          <i class="fa-duotone fa-unicorn"></i>
          <div class="card-info-title">
            <h3>Unicorns</h3>  
            <h4>A single corn. Er, I mean horn.</h4>
          </div>    
        </div>  
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <div class="card-image">
        <i class="fa-duotone fa-blender-phone"></i>
      </div>
      <div class="card-info-wrapper">
        <div class="card-info">
          <i class="fa-duotone fa-blender-phone"></i>
          <div class="card-info-title">
            <h3>Blender Phones</h3>  
            <h4>These absolutely deserve to exist.</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <div class="card-image">
        <i class="fa-duotone fa-person-to-portal"></i>
      </div>
      <div class="card-info-wrapper">
        <div class="card-info">
          <i class="fa-duotone fa-person-to-portal"></i>
          <div class="card-info-title">
            <h3>Adios</h3>  
            <h4>See you...</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <div class="card-image">
        <i class="fa-duotone fa-person-from-portal"></i>
      </div>
      <div class="card-info-wrapper">
        <div class="card-info">
          <i class="fa-duotone fa-person-from-portal"></i>
          <div class="card-info-title">
            <h3>I mean hello</h3>  
            <h4>...over here.</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <div class="card-image">
        <i class="fa-duotone fa-otter"></i>
      </div>
      <div class="card-info-wrapper">
        <div class="card-info">
          <i class="fa-duotone fa-otter"></i>
          <div class="card-info-title">
            <h3>Otters</h3>  
            <h4>Look at me, imma cute lil fella.</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
</div> */}
</div>



{/* 
      <div className="flex flex-wrap gap-20">
      <div>
      <Label>Botón primario mediano</Label>
      <MercButton1/>
      <TextareaAutosize className="textarea-code" readOnly value="<button class='button-main-primary-medium' >Button</button>">
      
      </TextareaAutosize>
      </div>
      <div>
      <Label>Botón secundario mediano</Label>
      <MercButton2/>
      <TextareaAutosize className="textarea-code" readOnly value="<button class='button-main-secondary-medium' >Button</button>">
      
      </TextareaAutosize>
      </div>
      <div>
      <Label>Botón sutil mediano</Label>
      <MercButton3/>
      <TextareaAutosize className="textarea-code" readOnly value="<button class='button-main-subtle-medium' >Button</button>">
      
      </TextareaAutosize>
      </div>
      </div> */}
      
    </>
  );
};

export default withAuthenticationRequired(ExternalApiComponent, {
  onRedirecting: () => <Loading />,
});
