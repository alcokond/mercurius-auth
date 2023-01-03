import React, {  Fragment } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/web'


const Intro = () => (
    <Parallax pages={4} >
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: url('https://www.xtrim.com.ec/wp-content/uploads/2023/01/Tierra-mitad-2.jpg'),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: url('https://www.xtrim.com.ec/wp-content/uploads/2023/01/Mercurio.jpg'),
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src= 'https://www.xtrim.com.ec/wp-content/uploads/2023/01/Cohete-volteado-gif.gif' />
        </ParallaxLayer>
      </Parallax>
  
);

export default Intro;