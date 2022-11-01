import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import HeroNew from "../components/HeroNew";

const Home = () => (
  <Fragment>
    <HeroNew />
    <hr />
    <Content />
  </Fragment>
);

export default Home;
