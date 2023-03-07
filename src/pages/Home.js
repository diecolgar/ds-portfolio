import React from 'react'
import './Home.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from './components/Footer';

export default function Home() {

    const scrollRef = React.useRef(null);

    function scrollToDiv() {
        const divElement = scrollRef.current;
        if (divElement) {
          divElement.scrollTop = '500px';
        }
      }

  return (
    <>
        <div className='home' >
            <div className='home-hero'>
                <div className='hero-content'>
                    <div className='hero-play' >

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
        <div className='home-content'>
            <div className='section section-ia' id='home-ai'>
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
                    <a className='project-clickable' href='/IAProjectOne'>
                        {/* <div className='project-icon'></div> */}
                        <div className='project-title'>First IA Project</div>
                        <div className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
                        <div className='project-viewmore'>VIEW CASE STUDY</div>
                    </a>
                </div>
                <div className='project second-ia-project'>
                    <div className='project-clickable second'>
                        {/* <div className='project-icon'></div> */}
                        <div className='project-title'>Second IA Project</div>
                        <div className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
                        <div className='project-viewmore'>VIEW CASE STUDY</div>
                    </div>
                </div>
            </div>
            <div className='section section-3d' id='home-3d'>
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
                            {/* <div className='project-icon'></div> */}
                            <div className='project-title'>First 3D Project</div>
                            <div className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
                            <div className='project-viewmore'>VIEW CASE STUDY</div>
                        </div>
                    </div>
                    <div className='project second-3d-project'>
                        <div className='project-clickable second'>
                            {/* <div className='project-icon'></div> */}
                            <div className='project-title'>Second 3D Project</div>
                            <div className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
                            <div className='project-viewmore'>VIEW CASE STUDY</div>
                        </div>
                    </div>                        
                </div>
            </div>
            <Footer></Footer>
        </div>
    </>
  )
}
