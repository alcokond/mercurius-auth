import React, { Fragment } from "react";
import ColoresDisplay from "../components/ColoresDisplay";
import ColoresPrincipal from "../components/ColoresPrincipal";

const Colores = () => (
  <Fragment>
    <ColoresPrincipal />
    <ColoresDisplay />
  </Fragment>
);

export default Colores;