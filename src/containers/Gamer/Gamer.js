import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './styles.css' // // Icons made by Freepik from www.flaticon.com
import {WOW} from 'wowjs';
import Typed from 'react-typed';


// Import all images at once
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/', false, /\.(png|jpe?g|svg)$/));
// <img src={images['cpu_amd.png']} />

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans = (x, y) => `translate3d(${x / 15}px,${y / 12 - 300}px,0)`
const transA = (x, y) => `translate3d(${x / 15}px,${y / 10}px,0)`
const transB = (x, y) => `translate3d(${x / 9}px,${y / 12}px,0)`
const transC = (x, y) => `translate3d(${x / 100}px,${y / 100 + 170}px,0)`
const transD = (x, y) => `translate3d(${x / 8}px,${y / 8 + 140}px,0)`
const transE = (x, y) => `translate3d(${x / 5}px,${y / 5}px,0)`

new WOW().init();



function Gamer() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (

    <div class="header_container wow fadeInDown" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} >

     <animated.div id="title" class="cardHeader" style={{ transform: props.xy.interpolate(trans) }} >
        <Typed 
          strings={['PC BUILDING 101']}
          typeSpeed={100}
        />
      </animated.div>

      <animated.div class="cardHeader" style={{ transform: props.xy.interpolate(transA) }} >
        <img src={images['chair.png']} />
      </animated.div>

      <animated.div class="cardHeader" style={{ transform: props.xy.interpolate(transB) }} >
        <img src={images['gamer.png']} />
      </animated.div>

      <animated.div class="cardHeader" style={{ transform: props.xy.interpolate(transC) }} >
        <img src={images['desk_final2.png']} />
      </animated.div>

      <animated.div class="cardHeader" style={{ transform: props.xy.interpolate(transD) }} >
        <img src={images['hands.png']} />
      </animated.div>
   
      <animated.div class="cardHeader wow zoomIn" style={{ transform: props.xy.interpolate(transE) }} >
        <img src={images['hud.png']} />
      </animated.div>

    </div>
  )
}

export default Gamer;
