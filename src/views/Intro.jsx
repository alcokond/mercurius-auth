import { useRef } from 'react';


import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Intro() {
  const ref = useRef();

  return (
    <div >
    <Parallax  >
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url("https://www.xtrim.com.ec/wp-content/uploads/2023/01/cielonocturno.jpg")`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
          style={{
            marginTop: '4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
        >

          <img src='https://www.xtrim.com.ec/wp-content/uploads/2023/01/Planeta.png'
          style={{ height: '100%' }}>

          </img>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={2}
          factor={1}
          style={{
            marginTop: '30%',
            
          }}
        >
          <img src='https://www.xtrim.com.ec/wp-content/uploads/2023/01/terreno1.png'
          style={{width: '100%'}}></img>
        </ParallaxLayer>

        {/* <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src= 'https://www.xtrim.com.ec/wp-content/uploads/2023/01/Cohete-volteado-gif.gif' />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        ></ParallaxLayer> */}
      </Parallax>
      </div>
  
);
        }
export default Intro;