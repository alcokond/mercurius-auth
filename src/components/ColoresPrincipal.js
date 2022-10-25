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

const ColoresPrincipal = () => (
  <>
  <PermanentDrawerLeft></PermanentDrawerLeft>
  <div className="box-colors-1"></div>
  <div className="flex flex-col p-4 margin-sidebar margin-right">
    <h6 className="text-overline">Guidelines</h6>
    <h3  className="text-heading-3 mb-3">Colores</h3>
    <p className="text-button-1">Los colores nos definen y distinguen nuestra marca y nos ayudan a crear una marca fuerte e identificable en todas nuestras plataformas.</p>
    

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
