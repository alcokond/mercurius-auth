import React, { useState } from "react";


import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import CodeEditor from '@uiw/react-textarea-code-editor';
import MercButton1 from "../components/input/MercButton1";
import { TextareaAutosize } from "@mui/base";

export const ExternalApiComponent = () => {

  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (
    <>
      <MercButton1/>
      <TextareaAutosize></TextareaAutosize>
      
    </>
  );
};

export default withAuthenticationRequired(ExternalApiComponent, {
  onRedirecting: () => <Loading />,
});
