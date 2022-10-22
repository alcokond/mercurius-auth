import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import CodeEditor from '@uiw/react-textarea-code-editor';
import MercButton1 from "../components/input/MercButton1";
import MercButton2 from "../components/input/MercButton2";
import MercButton3 from "../components/input/MercButton3";
import { TextareaAutosize } from "@mui/base";
import { Label } from "reactstrap";

export const ExternalApiComponent = () => {

  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (
    <>
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
      </div>
      
    </>
  );
};

export default withAuthenticationRequired(ExternalApiComponent, {
  onRedirecting: () => <Loading />,
});
