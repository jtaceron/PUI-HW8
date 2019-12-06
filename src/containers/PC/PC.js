import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import './styles.css' // // Icons made by Freepik from www.flaticon.com

// Import all images at once
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/', false, /\.(png|jpe?g|svg)$/));
// <img src={images['cpu_amd.png']} />

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans = (x, y) => `translate3d(${x / 15 - 150}px,${y / 12}px,0)`
const transA = (x, y) => `translate3d(${x / 12 - 130}px,${y / 9 - 20}px,0)`
const transB = (x, y) => `translate3d(${x / 9 - 20}px,${y / 12 + 200}px,0)`
const transC = (x, y) => `translate3d(${x / 10 + 220}px,${y / 20 - 100}px,0)`
const transD = (x, y) => `translate3d(${x / 7 + 90}px,${y / 8 - 80}px,0)`
const transE = (x, y) => `translate3d(${x / 9 + 220}px,${y / 9 - 210}px,0)`


function PC() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}  style={{ pointerEvents: 'auto' }} >

    <ParallaxLayer offset={9} speed={-.1} class="header_container" >
     <animated.div class="cardPC" style={{ transform: props.xy.interpolate(trans) }} >
        <img src={images['monitor.png']} />
      </animated.div>
    </ParallaxLayer>

    <ParallaxLayer offset={9} speed={-.2} class="header_container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}  style={{ pointerEvents: 'auto' }}>
      <animated.div class="cardPC" style={{ transform: props.xy.interpolate(transA) }} >
        <img src={images['monitor_hud.png']} />
      </animated.div>
    </ParallaxLayer>

    <ParallaxLayer offset={9} speed={.8} class="header_container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}  style={{ pointerEvents: 'auto' }}>
      <animated.div class="cardPC" style={{ transform: props.xy.interpolate(transB) }} >
        <img src={images['keeb_mouse.png']} />
      </animated.div>
    </ParallaxLayer>

    <ParallaxLayer offset={9} speed={.35} class="header_container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}  style={{ pointerEvents: 'auto' }}>
      <animated.div class="cardPC" style={{ transform: props.xy.interpolate(transC) }} >
        <img src={images['pc_case.png']} />
      </animated.div>
    </ParallaxLayer>

    <ParallaxLayer offset={9} speed={-.1} class="header_container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}  style={{ pointerEvents: 'auto' }}>
      <animated.div class="cardPC" style={{ transform: props.xy.interpolate(transD) }} >
        <img src={images['pc_core.png']} />
      </animated.div>
    </ParallaxLayer>
   
    <ParallaxLayer offset={9} speed={.2} class="header_container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}  style={{ pointerEvents: 'auto' }}>
      <animated.div class="cardPC" style={{ transform: props.xy.interpolate(transE) }} >
        <img src={images['fan_top.png']} />
      </animated.div>
    </ParallaxLayer>

    </div>

  )
}

export default PC;
