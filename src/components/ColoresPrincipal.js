import React from "react";
import logo from "../assets/logo.svg";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faIcons, faPalette, faPenNib, faTypewriter } from "@fortawesome/pro-light-svg-icons";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Row, Col } from "reactstrap";
import PermanentDrawerLeft from "./PermanentDrawerLeft.js";
import Sidebar from "./Sidebar";

const ColoresPrincipal = () => (
  <>
  
  {/* <div className="box-colors-1"></div> */}
  <div className="flex flex-col ">
    <div id="colores" className="margin-sidebar size-colores background-grayscale-6">
    <div className="padding-paleta">
    <h6 className="text-overline">Guidelines</h6>
    <h3 style={{fontSize:"36px", fontWeight:"700", color:"#221987"}} className=" mb-3">Colores</h3>
    <p className="text-button-1">Nuestros colores en conjunto representan la identidad de Xtrim. Usamos colores que reflejan el trabajo que estamos construyendo como marca. Elegimos colores que permiten a los usuarios acceder a procesos fáciles y entendibles, nuestros colores deben actuar como guías para el usuario resaltando la información importante.</p>
    </div>
    </div>
    <div id="paleta-primaria" className="margin-sidebar padding-paleta text-justify">
      <h6 className="text-heading-5 pb-4" >Paleta Principal</h6>
      <p>Nuestros colores deben actuar como guías para el usuario resaltando la información importante.</p>
    </div>

    {/* <div className="flex flex-row flex-wrap margin-sidebar padding-tarjetas space-evenly rounded">
    
    <div className="card-paleta flex flex-col ">
      <div className="background-primary color-card flex flex-row items-center justify-center gap-4 ">
        <h5 className="text-heading-3">A</h5>
        <h5 className="text-heading-3 text-color-grayscale-7">A</h5>
      </div>
      <div className="background-grayscale-5 color-card flex flex-col p-3">
        <p><strong>NAME</strong> <br></br>
          B500 - Ocean Blue <br></br>
          <strong>HEX</strong> <br></br>
          #4A3CDB
        </p>
      </div>
    
    </div>
    <div className="card-paleta flex flex-col ">
      <div className=" background-complementary color-card flex flex-row items-center justify-center gap-4 ">
        <h5 className="text-heading-3">A</h5>
        <h5 className="text-heading-3 text-color-grayscale-7">A</h5>
      </div>
      <div className="background-grayscale-5 color-card flex flex-col p-3">
        <p><strong>NAME</strong> <br></br>
          Y500 - Yellow Pantone <br></br>
          <strong>HEX</strong> <br></br>
          #F9E100
        </p>
      </div>
    </div>
    <div className="card-paleta flex flex-col ">
      <div style={{backgroundColor: "#222D44"}}  className=" color-card flex flex-row items-center justify-center gap-4 ">
        <h5 className="text-heading-3">A</h5>
        <h5 className="text-heading-3 text-color-grayscale-7">A</h5>
      </div>
      <div className="background-grayscale-5 color-card flex flex-col p-3">
        <p><strong>NAME</strong> <br></br>
          P500 - Erie Black <br></br>
          <strong>HEX</strong> <br></br>
          #222D44
        </p>
      </div>
    </div>
    

    </div> */}

  </div>




































{/*       
      <section className="container header relative pt-16 items-center flex ">
        <div className=" justify-center flex flex-wrap gap-20">
        <Card sx={{ maxWidth: 440 }}>
      <CardMedia
        component="img"
        height="140"
        image={require('../assets/colors/Primary.png')}
        alt="primary"
      />
      <CardContent>
      <Row className="d-flex  mb-3"> 
            <Col >
              <h6 >
              HEX: 4A3CDB
              </h6>
              
            </Col>
            <Col >
              <h6 >
              CMYK: 80, 77, 0, 0
              </h6>
              
            </Col> 
        </Row>
        <Row className="d-flex "> 
            <Col >
              <h6 >
              RGB: 74, 60, 219
              </h6>
              
            </Col>
            <Col >
              <h6 >
              PANTONE: 80, 77, 0, 0
              </h6>
              
            </Col> 
        </Row>
        <Typography variant="body2" color="text.secondary">
          HEX: 4A3CDB
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 440 }}>
      <CardMedia
        component="img"
        height="140"
        image={require('../assets/colors/Secondary.png')}
        alt="green iguana"
      />
      <CardContent>
      <Row className="d-flex  mb-3"> 
            <Col >
              <h6 >
              HEX: 4A3CDB
              </h6>
              
            </Col>
            <Col >
              <h6 >
              CMYK: 80, 77, 0, 0
              </h6>
              
            </Col> 
        </Row>
        <Row className="d-flex "> 
            <Col >
              <h6 >
              RGB: 74, 60, 219
              </h6>
              
            </Col>
            <Col >
              <h6 >
              PANTONE: 80, 77, 0, 0
              </h6>
              
            </Col> 
        </Row>
        <Typography variant="body2" color="text.secondary">
          HEX: 4A3CDB
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 440 }}>
      <CardMedia
        component="img"
        height="140"
        image={require('../assets/colors/Complementary.png')}
        alt="green iguana"
      />
      <CardContent>
      <Row className="d-flex  mb-3"> 
            <Col >
              <h6 >
              HEX: 4A3CDB
              </h6>
              
            </Col>
            <Col >
              <h6 >
              CMYK: 80, 77, 0, 0
              </h6>
              
            </Col> 
        </Row>
        <Row className="d-flex "> 
            <Col >
              <h6 >
              RGB: 74, 60, 219
              </h6>
              
            </Col>
            <Col >
              <h6 >
              PANTONE: 80, 77, 0, 0
              </h6>
              
            </Col> 
        </Row>
        <Typography variant="body2" color="text.secondary">
          HEX: 4A3CDB
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-500-px"
          src={require("assets/img/mercurius.png").default}
          alt="..."
        />
      </section> */}

      

      
      
    </>
);

export default ColoresPrincipal;
