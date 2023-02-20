import React from 'react'
import './Home.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'



export default function Home() {

  return (
    <Parallax pages={3} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={0}>
            <div className='home' >
                <div className='home-hero'>
                    <div className='hero-content'>
                        <div className='hero-play'>

                        </div>
                        <div className='hero-title'>
                            Design Studios Digital Portfolio
                        </div>
                        <div className='hero-subtitle'>
                            bringing your creative dreams to reality.
                        </div>
                        <div className='hero-contact'>
                            CONTACT US
                        </div>
                    </div>
                    <div className='hero-scrolldown'>
                        <div className='scrolldown-animation'>

                        </div>
                    </div>
                </div>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9999999} speed={1}>
            <div className='home-content'>
                <div className='section section-ia'>
                    <div className='section-description'>
                        <div className='description-text'>
                            <div className='text-title'>AI</div>
                            <div className='text-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
                        </div>
                        <div className='description-image'>
                            <div className='image'></div>
                        </div>
                    </div>
                    <div className='project first-ia-project'>
                        <div className='project-clickable'>
                            <div className='project-clickable-parallax'></div>
                        </div>
                    </div>
                    <div className='project second-ia-project'>
                        <div className='project-clickable second'>
                            <div className='project-clickable-parallax'></div>
                        </div>
                    </div>
                </div>
                <div className='section section-3d'>
                    <div>
                    <div className='section-description'>
                        <div className='description-text'>
                            <div className='text-title'>3D</div>
                            <div className='text-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
                        </div>
                        <div className='description-image'>
                            <div className='image'></div>
                        </div>
                    </div>
                        <div className='project first-3d-project'>
                            <div className='project-clickable'>
                                <div className='project-clickable-parallax'></div>
                            </div>
                        </div>
                        <div className='project second-3d-project'>
                            <div className='project-clickable second'>
                                <div className='project-clickable-parallax '></div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </ParallaxLayer>
        
    </Parallax>
  )
}
