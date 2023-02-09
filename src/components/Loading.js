import React from "react";
import loading from "../assets/loading.svg";

const Loading = () => (
  <div className="spinner" style={{position:"fixed",top:"50%",left:"50%", width:"5vw"}}>
    <div><img src={loading} alt="Loading" /></div>
  </div>
);

export default Loading;
