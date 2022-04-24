import React from 'react'
import '../css/styles.css';

export const LandingPage = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='flex flex-col'>
          <div className='main-wrapper flex flex-col'>  
            <div className='hero-container-wrapper md:h-[80vh]'>
            <div className='hero-container'>
              <div className='hero-container-bg'>
              </div>
              <div className='hero-container-content'>
                  <div className='hero-content'>
                    <h1>
                      Terapia Psicólogica Profesional
                    </h1>
                    <h5>
                      Agenda tu cita
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fuga, ratione ea perferendis, ab libero quia id amet aut quibusdam nihil. Blanditiis optio quasi quam doloribus tenetur eos, hic natus?
                    </p>
                    <a href="/" className='bg-btn-bg border-btn-bc text-btn-color'>
                      <span>Agenda tu cita</span>
                    </a>
                  </div>
                </div>
            </div>
          </div>
          <div className='slider-wrapper flex flex-col'>
            <div className='slider-container'>
              <div className='slider-icon'>
                <i></i>
              </div>
              <div className='slider-content'>
                <div className='slider-title'>
                  Terapia Psicológica
                </div>
                <div className='silder-description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nesciunt vel consectetur eaque blanditiis qui cum molestias praesentium repellat? Libero nostrum deleniti autem pariatur saepe aliquam eos facere. Nulla, provident?
                </div>
              </div>
            </div>
            <div className='slider-container'>
              <div className='slider-icon'>
                <i></i>
              </div>
              <div className='slider-content'>
                <div className='slider-title'>
                  Terapia Psicológica
                </div>
                <div className='silder-description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nesciunt vel consectetur eaque blanditiis qui cum molestias praesentium repellat? Libero nostrum deleniti autem pariatur saepe aliquam eos facere. Nulla, provident?
                </div>
              </div>
            </div>
            <div className='slider-container'>
              <div className='slider-icon'>
                <i></i>
              </div>
              <div className='slider-content'>
                <div className='slider-title'>
                  Terapia Psicológica
                </div>
                <div className='silder-description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nesciunt vel consectetur eaque blanditiis qui cum molestias praesentium repellat? Libero nostrum deleniti autem pariatur saepe aliquam eos facere. Nulla, provident?
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
