import React from 'react'
import '../css/styles.css';
import therapyIcon from '../images/therapy-icon.png';
import selfConf from '../images/self-conf.png';
import iconLotus from '../images/icon-lotus.png';
import iconSchedule from '../images/icon-schedule.png';
import iconNotes from '../images/icon-notes.png';
import iconVideoConference from '../images/icon-videoconference.png';
import iconStress from '../images/icon-stress.png';

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
                  <div className='hero-content-shadow'>
                  </div>
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
                    <a href="/" className='cta-btn border-brand-btn-bc text-brand-btn-color'>
                      <span>Agenda tu cita</span>
                    </a>
                  </div>
                </div>
            </div>
          </div>
          <div className='slider-wrapper flex flex-col'>
            <div className='slider-container flex md:flex-row'>
              <div className='slider-icon'>
                <img src={therapyIcon} alt="" className='img-icon-style'/>
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
              <img src={selfConf} alt="" className='img-icon-style'/>
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
              <img src={iconLotus} alt="" className='img-icon-style'/>
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
          <div className='p-4 bg-brand-btn-bg text-center flex-col'>
          <h2 className='font-semibold p-6 text-2xl'>
            ¿Cómo funciona la Terapia en línea?
          </h2>
          <h2 className='font-normal pb-4'>
            Agenda una terapia en línea que se adapte a tus necesidades y estilo de vida, de manera fácil y segura con PsicologiaMia.pe
          </h2>
          <div className='flex flex-col sm:flex-row justify-center align-center items-center w-full'>
            <a href="/" className='w-full sm:w-1/3 sm:mx-2'>
              <div className='sm:grid flex flex-col w-full p-2'>
                <span className='ml-auto mr-auto'>
                  <span>
                  <img src={iconNotes} className='max-w-[160px]' alt="Agenda tu cita" />
                  </span>
                </span>
                <div className='flex-col place-self-center justify-center align-center items-center'>
                  <span className='w-24 bg-white flex'>
                  </span> 
                  <div className='mr-auto ml-auto'>
                    <span className='rounded-md bg-white text-center leading-8 pl-2 pr-2 pt-1 pb-1 font-medium'>
                    Paso 1
                    </span>
                  </div>
                  </div>
                <h5 className='text-center font-base pb-2 pt-4'>
                  Cuéntanos tus necesidades e inquietudes y nosotros te ayudamos con la búsqueda y selección de los mejores psicólogos en línea para ti
                </h5>
              </div>
            </a>
            <a href="/" className='w-full sm:w-1/3 sm:mx-2'>
              <div className='sm:grid flex flex-col w-full p-2'>
                <span className='ml-auto mr-auto'>
                  <span>
                  <img src={iconSchedule} className='max-w-[160px]' alt="Agenda tu cita" />
                  </span>
                </span>
                <div className=' flex-col place-self-center justify-center align-center items-center'>
                  <span className='w-24 bg-white flex'>
                  </span> 
                  <div className='mr-auto ml-auto'>
                    <span className='rounded-md bg-white text-center leading-8 pl-2 pr-2 pt-1 pb-1 font-medium'>
                    Paso 2
                    </span>
                  </div>
                  </div>
                <h5 className='text-center font-base pb-2 pt-4'>
                Selecciona el horario que mejor se acomode a tu ritmo.
                </h5>
              </div>
            </a>
            <a href="/" className='w-full sm:w-1/3 sm:mx-2'>
              <div className='sm:grid flex flex-col w-full p-2'>
                <span className='ml-auto mr-auto'>
                  <span>
                  <img src={iconVideoConference} className='max-w-[160px]' alt="Agenda tu cita" />
                  </span>
                </span>
                <div className=' flex-col place-self-center justify-center align-center items-center'>
                  <span className='w-24 bg-white flex'>
                  </span> 
                  <div className='mr-auto ml-auto'>
                    <span className='rounded-md bg-white text-center leading-8 pl-2 pr-2 pt-1 pb-1 font-medium'>
                    Paso 3
                    </span>
                  </div>
                  </div>
                <h5 className='text-center font-base pb-2 pt-4'>
                Conéctate a través de videollamada de manera privada y segura.
                </h5>
              </div>
            </a>
          </div>
          <div className='sm:ml-auto sm:mr-auto my-4 sm:mb-4 flex flex-col max-w-[380px]'>
          <a href="/" className='shadow-md font-medium rounded-3xl bg-brand-purple-500 cursos-pointer outline-none text-white py-2 px-8 shadow-brand-purple-500'>
            Quiero comenzar
          </a>
          </div>
        </div>
        <div className='text-center sm:flex sm:flex-col grid my-4'>
          <h2 className='font-medium p-6 text-2xl text-center'>
            Nuestros Servicios
          </h2>
          <h2>
            Conoce alguna de las áreas de especialidad de nuestros psicólogos online
          </h2>
          <div className='sm:flex sm:flex-row flex-col my-4 sm:flex-wrap '>
            <div className='my-6 flex flex-col justify-center align-center items-center sm:w-1/3'>
              <div className=''>
                <span>
                  <img src={iconStress} alt="ansiedad" className='h-32'/>
                </span>
              </div>
              <h5 className='font-medium mt-4'>
                Ansiedad
              </h5>
            </div>
            <div className='my-6 flex flex-col justify-center align-center items-center sm:w-1/3'>
              <div className=''>
                <span>
                  <img src={iconStress} alt="ansiedad" className='h-32'/>
                </span>
              </div>
              <h5 className='font-medium mt-4'>
                Estres
              </h5>
            </div>
            <div className='my-6 flex flex-col justify-center align-center items-center sm:w-1/3'>
              <div className=''>
                <span>
                  <img src={iconStress} alt="ansiedad" className='h-32'/>
                </span>
              </div>
              <h5 className='font-medium mt-4'>
                Ansiedad
              </h5>
            </div>
            <div className='my-6 flex flex-col justify-center align-center items-center sm:w-1/3'>
              <div className=''>
                <span>
                  <img src={iconStress} alt="ansiedad" className='h-32'/>
                </span>
              </div>
              <h5 className='font-medium mt-4'>
                Autoestima
              </h5>
            </div>
            <div className='my-6 flex flex-col justify-center align-center items-center sm:w-1/3'>
              <div className=''>
                <span>
                  <img src={iconStress} alt="ansiedad" className='h-32'/>
                </span>
              </div>
              <h5 className='font-medium mt-4'>
                Problemas de pareja
              </h5>
            </div>
            <div className='my-6 flex flex-col justify-center align-center items-center sm:w-1/3'>
              <div className=''>
                <span>
                  <img src={iconStress} alt="ansiedad" className='h-32'/>
                </span>
              </div>
              <h5 className='font-medium mt-4'>
                Desarrollo personal
              </h5>
            </div>
            <div className='sm:ml-auto sm:mr-auto my-4 sm:mb-4 flex flex-col max-w-[300px]'>
          <a href="/" className='shadow-md font-medium rounded-3xl bg-brand-purple-500 cursos-pointer outline-none text-white py-2 px-8 shadow-brand-purple-500'>
            Quiero comenzar
          </a>
          </div>
          </div>
          <div>
            <div>
              <h2>
                ¿Cuanto cuesta una Sesión Online?
              </h2>
              <div>
                <h5>
                  Sesión individual
                </h5>
                <h2>
                  S/ 80.00
                </h2>
                <p>
                  de 50 minutos de videollamada
                </p>
              </div>
              <div>
                <span>
                  Habla con tu psicólogo cuando lo necesites
                </span>
              </div>
              <div>
                <p>
                  Desde el lugar que estes, toma tus sesiones a precios accesibles
                </p>
              </div>
              <div className='sm:ml-auto sm:mr-auto my-4 sm:mb-4 flex flex-col max-w-[300px]'>
                <a href="/" className='shadow-md font-medium rounded-3xl bg-brand-purple-500 cursos-pointer outline-none text-white py-2 px-8 shadow-brand-purple-500'>
                  Comenzar
                </a>
                </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>
              Testimonios
            </h2>
            <div>
              <p>
                Cientos de personas ya han recuperado su estabilidad emocional que tanto necesitaban en su vida con Psicologiamia.pe
              </p>
            </div>
            <div>
              <span>
                Únete
              </span>
            </div>
            <div className='sm:ml-auto sm:mr-auto my-4 sm:mb-4 flex flex-col max-w-[300px]'>
              <a href="/" className='shadow-md font-medium rounded-3xl bg-brand-purple-500 cursos-pointer outline-none text-white py-2 px-8 shadow-brand-purple-500'>
                Comenzar
              </a>
              </div>
              <div>
                <div>
                  <p>Testimonios.....</p>
                </div>
              </div>
          </div>
        </div>
        <div>
          <p>
            Importante: os servicios disponibles a través de PsicologiaMia.pe son proporcionados
            de forma independiente por profesionales en salud mental certificados.
            PsicologiaMia.pe no proporciona ningún servicio de salud mental u otros de atención médica.
            Los profesionales en salud mental no pre-escriben medicamentos a través de PsicologiaMia.pe.
            Si estás experimentando una crisis o emergencia, por favor comunícate a los servicios de emergencia
            más cercanos a tu localidad.
          </p>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}
