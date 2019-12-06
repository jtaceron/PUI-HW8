import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Typed from 'react-typed';
import Gamer from '../Gamer/Gamer';
import PC from '../PC/PC';
import './styles.css' 

// Import all images at once
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/', false, /\.(png|jpe?g|svg)$/));


class ParallaxContainer extends React.Component {

  render() {
    return (
  
    <div className="row">
    <Parallax ref={ref => (this.parallax = ref)} pages={10} >
        <div className="type-wrap">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </div>

        {/*Page Dividers*/}
        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#44549C' }} />
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#FFFFFF' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#FFFFFF' }} />
        <ParallaxLayer offset={5} speed={1} style={{ backgroundColor: '#FFFFFF' }} />
        <ParallaxLayer offset={7} speed={1} style={{ backgroundColor: '#FFFFFF' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#FFFFFF' }} />
        <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#FFFFFF' }} />
        <ParallaxLayer offset={6} speed={1} style={{ backgroundColor: '#FFFFFF' }} />
        <ParallaxLayer offset={7} speed={1} style={{ backgroundColor: '#FFFFFF' }} />
        <ParallaxLayer offset={8} speed={1} style={{ backgroundColor: '#FFFFFF' }} />
        <ParallaxLayer offset={9} speed={1} style={{ backgroundColor: '#FFFFFF' }} />



        {/*Backgroud elements*/}    
        <ParallaxLayer className="dots" offset={1.05} speed={1} factor={5} style={{ opacity: .7 }} />
        <ParallaxLayer className="dots" offset={2.05} speed={1} factor={5} style={{ opacity: .7 }} />
        <ParallaxLayer className="dots" offset={3.05} speed={1} factor={5} style={{ opacity: .7 }} />
        <ParallaxLayer className="dots" offset={4.05} speed={1} factor={5} style={{ opacity: .7 }} />
        <ParallaxLayer className="dots" offset={5.05} speed={1} factor={5} style={{ opacity: .7 }} />
        <ParallaxLayer className="dots" offset={6.05} speed={1} factor={5} style={{ opacity: .7 }} />
        <ParallaxLayer className="dots" offset={7.05} speed={1} factor={5} style={{ opacity: .7 }} />
        <ParallaxLayer className="dots" offset={8.05} speed={1} factor={5} style={{ opacity: .7 }} />
        <ParallaxLayer className="dots" offset={9.05} speed={.9} factor={5} style={{ opacity: .7 }} />


        <ParallaxLayer offset={1} speed={1.2} factor={3} style={{ opacity: .2 }} >
          <img src={images['circuit_long.png']} style={{ width: '60%', marginLeft: '5%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.3} speed={-.06} factor={3} style={{ opacity: .5 }} >
          <img src={images['server.png']} style={{ maxWidth: '2%', marginLeft: '7%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={.7} factor={3} style={{ opacity: .5 }} >
          <img src={images['server_mini.png']} style={{ maxWidth: '4%', marginLeft: '35%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.7} speed={-.1} factor={3} style={{ opacity: .5 }} >
          <img src={images['server.png']} style={{ maxWidth: '2%', marginLeft: '10%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={1.5} factor={3} style={{ opacity: .5 }} >
          <img src={images['server_mini.png']} style={{ maxWidth: '4%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={4.1} speed={1.7} factor={3} style={{ opacity: .5 }} >
          <img src={images['server_mini.png']} style={{ maxWidth: '2%', marginLeft: '5%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={4.7} speed={-.2} factor={3} style={{ opacity: .5 }} >
          <img src={images['server_mini.png']} style={{ maxWidth: '3%', marginLeft: '28%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={5.1} speed={-.3} factor={3} style={{ opacity: .5 }} >
          <img src={images['server.png']} style={{ maxWidth: '2%', marginLeft: '7%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={5.7} speed={1.4} factor={3} style={{ opacity: .5 }} >
          <img src={images['server_mini.png']} style={{ maxWidth: '4%', marginLeft: '35%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={6.3} speed={1.4} factor={3} style={{ opacity: .5 }} >
          <img src={images['server.png']} style={{ maxWidth: '2%', marginLeft: '7%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={6.7} speed={.6} factor={3} style={{ opacity: .5 }} >
          <img src={images['server.png']} style={{ maxWidth: '3%', marginLeft: '45%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={7.7} speed={1.3} factor={3} style={{ opacity: .5 }} >
          <img src={images['server_mini.png']} style={{ maxWidth: '3%', marginLeft: '8%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={7.1} speed={-.2} factor={3} style={{ opacity: .5 }} >
          <img src={images['server_mini.png']} style={{ maxWidth: '3%', marginLeft: '47%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={8.7} speed={1.4} factor={3} style={{ opacity: .5 }} >
          <img src={images['server_mini.png']} style={{ maxWidth: '2%', marginLeft: '10%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={8.98} speed={1.2} factor={3} style={{ opacity: .5 }} >
          <img src={images['server_mini.png']} style={{ maxWidth: '4%', marginLeft: '40%' }} />
        </ParallaxLayer>



        {/*CPU*/}
        <div className="row">
          <div className="col-sm-12 col-md-6">
                <ParallaxLayer offset={2.5} speed={1.5} style={{ opacity: 1 }} >
                    <img src={images['cpu_up.png']} style={{ maxWidth: '25%', paddingLeft: '6%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={2.15} speed={.6} style={{ opacity: 1 }} >
                    <img src={images['cpu_fan.png']} style={{ maxWidth: '35%' }} />
                </ParallaxLayer>
              
          </div>

            <div className="col-sm-12 col-md-6">
                <div className="row ">
                  <ParallaxLayer className="col-12" offset={2.2} speed={1.5} style={{ opacity: 1 }} >
                    <h1 className="text-center">
                        <Typed 
                            strings={['Central Processing Unit', 'CPU']}
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={500}
                            startDelay={1000}
                            loop={true}
                        />
                    </h1>
                  </ParallaxLayer>
                
                  <ParallaxLayer className="col-12" offset={2.3} speed={.7} style={{ opacity: 1 }} >
                      <img src={images['terminal_cpu.png']} style={{  }} />
                  </ParallaxLayer>
                </div>
            </div>

            <ParallaxLayer offset={2.89} speed={1} style={{ opacity: 1 }} >
              <div className="arrow bounce" onClick={() => this.parallax.scrollTo(3)}></div>
            </ParallaxLayer>
        </div>


        {/*GPU*/}
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <ParallaxLayer offset={3.35} speed={1.5} style={{ opacity: 1 }} >
                <img src={images['gpu.png']} style={{ maxWidth: '60%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={3.25} speed={1.1} style={{ opacity: 1 }} >
                <img src={images['gpu.png']} style={{ maxWidth: '60%' }} />
                </ParallaxLayer>
            </div>

            <div className="col-sm-12 col-md-6">
                <div className="row ">
                    <ParallaxLayer className="col-12" offset={3.2} speed={1.5} style={{ opacity: 1 }} >
                    <h1 className="text-center">
                        <Typed 
                            strings={['Graphics Processing Unit', 'GPU']}
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={500}
                            startDelay={1000}
                            loop={true}
                        />
                    </h1>
                    </ParallaxLayer>
                    <ParallaxLayer className="col-12" offset={3.3} speed={.7} style={{ opacity: 1 }} >
                        <img src={images['terminal_gpu.png']} style={{ }} />
                    </ParallaxLayer>
                </div>
            </div>

            <ParallaxLayer offset={3.89} speed={1} style={{ opacity: 1 }} >
              <div className="arrow bounce" onClick={() => this.parallax.scrollTo(4)}></div>
            </ParallaxLayer>
        </div>


        {/*RAM*/}
        <div className="row">
            <div className="col-sm-12 col-md-6">
                    <ParallaxLayer offset={4.2} speed={.9} style={{ opacity: 1 }} >
                       <img src={images['ram_big.png']} style={{ maxWidth: '40%', marginLeft: '20%' }} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={4.27} speed={1} style={{ opacity: 1 }} >
                        <img src={images['ram_big.png']} style={{ maxWidth: '40%', marginLeft: '30%' }} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={4.34} speed={1.1} style={{ opacity: 1 }} >
                        <img src={images['ram_big.png']} style={{ maxWidth: '40%', marginLeft: '40%' }} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={4.41} speed={1.2} style={{ opacity: 1 }} >
                        <img src={images['ram_big.png']} style={{ maxWidth: '40%', marginLeft: '50%' }} />
                    </ParallaxLayer>
            </div>

            <div className="col-sm-12 col-md-6">
                <div className="row ">
                    <ParallaxLayer className="col-12" offset={4.2} speed={1.5} style={{ opacity: 1 }} >
                    <h1 className="text-center">
                        <Typed 
                            strings={['Random Access Memory', 'RAM']}
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={500}
                            startDelay={1000}
                            loop={true}
                        />
                    </h1>
                    </ParallaxLayer>
                    <ParallaxLayer className="col-12" offset={4.3} speed={.7} style={{ opacity: 1 }} >
                        <img src={images['terminal_ram.png']} style={{ }} />
                    </ParallaxLayer>
                </div>
            </div>

            <ParallaxLayer offset={4.89} speed={1} style={{ opacity: 1 }} >
              <div className="arrow bounce" onClick={() => this.parallax.scrollTo(5)}></div>
            </ParallaxLayer>
        </div>


        {/*MOBO*/}
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <ParallaxLayer offset={5.1} speed={.6} style={{ opacity: 1 }} >
                    <img src={images['mobo3.png']} style={{ maxWidth: '35%', marginLeft: '40%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={5.15} speed={.8} style={{ opacity: 1 }} >
                    <img src={images['mobo1.png']} style={{ maxWidth: '35%', marginLeft: '30%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={5.2} speed={1.1} style={{ opacity: 1 }} >
                    <img src={images['mobo2.png']} style={{ maxWidth: '35%', marginLeft: '20%' }} />
                </ParallaxLayer>

            </div>

            <div className="col-sm-12 col-md-6">
                <div className="row ">
                    <ParallaxLayer className="col-12" offset={5.2} speed={1.5} style={{ opacity: 1 }} >
                    <h1 className="text-center">
                        <Typed 
                            strings={['Motherboard', 'MOBO']}
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={500}
                            startDelay={1000}
                            loop={true}
                        />
                    </h1>
                    </ParallaxLayer>
                    <ParallaxLayer offset={5.3} speed={.7} style={{ opacity: 1 }} >
                        <img src={images['terminal_mobo.png']} style={{ }} />
                    </ParallaxLayer>
                </div>
            </div>

            <ParallaxLayer offset={5.89} speed={1} style={{ opacity: 1 }} >
              <div className="arrow bounce" onClick={() => this.parallax.scrollTo(6)}></div>
            </ParallaxLayer>
        </div>


        {/*STORAGE*/}
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <ParallaxLayer offset={6.2} speed={.6} style={{ opacity: 1 }} >
                    <img src={images['hdd.png']} style={{ maxWidth: '40%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={6.45} speed={.8} style={{ opacity: 1 }} >
                    <img src={images['ssd.png']} style={{ maxWidth: '40%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={6.65} speed={1.1} style={{ opacity: 1 }} >
                    <img src={images['nvme.png']} style={{ maxWidth: '40%' }} />
                </ParallaxLayer>
            </div>

            <div className="col-sm-12 col-md-6">
                <div className="row ">
                    <ParallaxLayer className="col-12" offset={6.2} speed={1.5} style={{ opacity: 1 }} >
                    <h1 className="text-center">
                        <Typed 
                            strings={['Storage', 'HDD', 'SSD']}
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={500}
                            startDelay={1000}
                            loop={true}
                        />
                    </h1>
                    </ParallaxLayer>
                    <ParallaxLayer offset={6.3} speed={.7} style={{ opacity: 1 }} >
                        <img src={images['terminal_storage.png']} style={{ }} />
                    </ParallaxLayer>
                </div>
            </div>

            <ParallaxLayer offset={6.89} speed={1} style={{ opacity: 1 }} >
              <div className="arrow bounce" onClick={() => this.parallax.scrollTo(7)}></div>
            </ParallaxLayer>
        </div>


        {/*PSU*/}
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <ParallaxLayer offset={7.3} speed={.6} style={{ opacity: 1 }} >
                    <img src={images['psu.png']} style={{ maxWidth: '50%' }} />
                </ParallaxLayer>
            </div>

            <div className="col-sm-12 col-md-6">
                <div className="row ">
                    <ParallaxLayer className="col-12" offset={7.2} speed={1.5} style={{ opacity: 1 }} >
                    <h1 className="text-center">
                        <Typed 
                            strings={['Power Supply', 'PSU']}
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={500}
                            startDelay={1000}
                            loop={true}
                        />
                    </h1>
                    </ParallaxLayer>
                    <ParallaxLayer offset={7.3} speed={.7} style={{ opacity: 1 }} >
                        <img src={images['terminal_psu.png']} style={{ }} />
                    </ParallaxLayer>
                </div>
            </div>

            <ParallaxLayer offset={7.89} speed={1} style={{ opacity: 1 }} >
              <div className="arrow bounce" onClick={() => this.parallax.scrollTo(8)}></div>
            </ParallaxLayer>
        </div>

         {/*Last page, full pc layout*/}
        <PC/>

        {/*TOP layer page dividers*/}
        <ParallaxLayer offset={8.99} speed={1} style={{ backgroundColor: '#273366' }} />

        {/*CASES*/}
        [<div className="row">
            <div className="col-sm-12 col-md-6">
                <ParallaxLayer offset={8.2} speed={.6} style={{ opacity: 1 }} >
                    <img src={images['case4.png']} style={{ maxWidth: '35%' }} />
                </ParallaxLayer>
            </div>

            <div className="col-sm-12 col-md-6">
                <div className="row ">
                    <ParallaxLayer className="col-12" offset={8.2} speed={1.5} style={{ opacity: 1 }} >
                    <h1 className="text-center">
                        <Typed 
                            strings={['Case', 'Chassis']}
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={500}
                            startDelay={1000}
                            loop={true}
                        />
                    </h1>
                    </ParallaxLayer>
                    <ParallaxLayer offset={8.3} speed={.7} style={{ opacity: 1 }} >
                        <img src={images['terminal_case.png']} style={{ }} />
                    </ParallaxLayer>
                </div>
            </div>

            <ParallaxLayer offset={8.85} speed={1} style={{ opacity: 1 }} >
              <div className="arrow bounce" onClick={() => this.parallax.scrollTo(9)}></div>
            </ParallaxLayer>
        </div>]


        {/*Table of Contents*/}
        <ParallaxLayer offset={1.25} speed={.2} style={{ opacity: 1 }}  >
            <div className="row" >
                <h1 className="col-12 text-center">
                    <Typed 
                        strings={['Table of Contents', 'ToC']}
                        typeSpeed={100}
                        backSpeed={50}
                        backDelay={500}
                        startDelay={1000}
                        loop={true}
                    />
                </h1>
            </div>
            <br/>
            <br/>

            <div className="row justify-content-center">
                <div className="col-md-1 col-3">
                    <img className="toc zoom " src={images['cpu_xl.png']} style={{  }} onClick={() => this.parallax.scrollTo(2)}  />
                </div>
                <div className="col-md-2 col-3">
                    <img className="toc zoom " src={images['gpu_big.png']} style={{ maxWidth: '80%' }} onClick={() => this.parallax.scrollTo(3)}  />
                </div>
                <div className="col-md-2 col-3">
                    <img className="toc zoom" src={images['ram_big.png']} style={{ maxWidth: '70%' }} onClick={() => this.parallax.scrollTo(4)} />
                </div>
                <div className="col-md-1 col-3">
                    <img className="toc zoom" src={images['mobo2.png']} style={{  }} onClick={() => this.parallax.scrollTo(5)} />
                </div>
                <div className="col-md-2 col-3">
                    <img className="toc zoom" src={images['hdd.png']} style={{ maxWidth: '70%' }} onClick={() => this.parallax.scrollTo(6)} />
                </div>
                <div className="col-md-1 col-3">
                    <img className="toc zoom" src={images['psu.png']} style={{  }} onClick={() => this.parallax.scrollTo(7)} />
                </div>
                <div className="col-md-1 col-3">
                    <img className="toc zoom" src={images['case1.png']} style={{  }} onClick={() => this.parallax.scrollTo(8)} />
                </div>
            </div>
        </ParallaxLayer>


        <ParallaxLayer offset={0.95} speed={1} style={{ backgroundColor: '#273366' }} />

        <ParallaxLayer  offset={.075} speed={1} style={{ pointerEvents: 'auto' }}>
            <Gamer/>
        </ParallaxLayer>

    
      </Parallax>

      </div>

      
    )
  }
}

export default ParallaxContainer;
