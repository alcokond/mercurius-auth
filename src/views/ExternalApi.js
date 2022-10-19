import React, { useState } from "react";

import Highlight from "../components/Highlight";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { getConfig } from "../config";
import Loading from "../components/Loading";
import CodeEditor from '@uiw/react-textarea-code-editor';
import Sidebar from '../components/Sidebar'
import MercButton1 from "../components/input/MercButton1";

export const ExternalApiComponent = () => {

  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (
    <>
      <MercButton1/>

      <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter JS code."
      padding={15}
      style={{
        fontSize: 12,
        backgroundColor: "#f5f5f5",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
    </>
  );
};

export default withAuthenticationRequired(ExternalApiComponent, {
  onRedirecting: () => <Loading />,
});
