import React from 'react'
import './IAProjectOne.css';


export default function IAProjectOne() {
  return (
    <div>
        <div className='project-landing'>
            <div className='dummy-rectangle'>

            </div>
            <div className='landing-description'>
              A short description of the project and stuff, if possible long enough to cover two lines completely.
            </div>
            <div className='landing-title'>
                First AI Project
            </div>
        </div>
        <div className='project-overview'>
          <div className='overview-container'>
            <div className='dummy-overview-rectangle'>
                
            </div>
            <div className='title'>
                I. Overview
            </div>
            <div className='supportimage'></div>
            <div className='description'>
              A short description of the project and stuff, if possible long enough A short description of the project and stuff, if possible long enough to cover two lines completely. A short description of the project and stuff, if possible long enough to cover two lines completely.
            </div>

          </div>
        </div>
        <div className='project-challenges'>
          <div className='challenges-container'>
            <div className='dummy-overview-rectangle'>
                
            </div>
            <div className='title'>
                II. Challenges
            </div>
            {/* <div className='supportimage'></div> */}
            <div className='challenge first'>
              <div className='challenge-icon'></div>
              A short description of the project and stuff,ff, if possible long enough to cover two lines completely. A short description of the project and stuff, if possible long enough to cover two lines completely.
            </div>
            <div className='challenge second'>
              <div className='challenge-icon second'></div>
              A short description of the project and stuff, if possible long enough A sly. A short description of the project and stuff, if possible long enough to cover two lines completely.
            </div>
            <div className='challenge third'>
              <div className='challenge-icon third'></div>
              A short description of the project and stuff, if possible long enough A short description of the project and stuff, if possible long enough to cover two lines completely. A short description of the project and stuff, if possible long enough to cover two lines completely.
            </div>
          </div>
        </div>
    </div>
  )
}
