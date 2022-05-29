import React, { useState } from 'react'
import { Navbar } from '../landing/Navbar'
import { PricingBenefitCard } from './PricingBenefitCard';
import { PackageStep } from './PackageStep';
import { PricingCard } from './PricingCard';
import { GenericFooter } from '../landing/Partials/GenericFooter';

export const Pricing = () => {
  const [activeButton, setActiveButton] = useState('citas');
  return (
    <>
    <Navbar/>
    <div className='bg-slate-100 py-4 sm:py-8'>
      <div className='py-4 sm:py-4'>
        <div className='grid justify-center mb-16 gap-y-8 mt-4 mx-4'>
          <h1 className='text-2xl sm:text-3xl font-semibold text-center text-brand-purple-500'>
            La terapia es un proceso que te cambia la vida
          </h1>
          {
          activeButton === 'citas' &&
            <p className='text-lg sm:text-xl text-center'>
             Date la oportunidad de alcanzar tu mejor versión
            </p>
          }
          {
          activeButton === 'paquetes' &&
            <p className='texxt-lg sm:text-xl text-center'>
             Agenda 5 citas y obtén <strong className='text-brand-purple-400'>5% de descuento</strong> al realizar tu pago
            </p>
          }
          <div className='grid sm:gap-x-8 gap-y-8 sm:grid-cols-[auto_auto] align-center items-center place-content-center self-center'>
            <button onClick={() => setActiveButton('citas')} className={`w-40 text-center shadow-md font-medium rounded-3xl ${activeButton === 'citas' ? 'bg-brand-purple-500 text-white ' : 'bg-white border-brand-purple-500 text-brand-purple-500 '} cursos-pointer outline-none py-2 px-8 shadow-brand-purple-500`}>
              Citas
            </button>
            <button onClick={() => setActiveButton('paquetes')} className={`w-40 text-center shadow-md font-medium rounded-3xl ${activeButton === 'paquetes' ? 'bg-brand-purple-500 text-white ' : 'bg-white border-brand-purple-500 text-brand-purple-500'} cursos-pointer outline-non py-2 px-8 shadow-brand-purple-500`}>
              Paquetes
            </button>
          </div>
        </div>
        <div>
          {
            activeButton === 'citas' &&
            <div className='mb-16 grid gap-y-8 sm:grid-cols-[296px_296px] sm:gap-x-10 justify-center'>
              <PricingCard type="citas" title="Cita Individual" strPrice="S/ 90.00" description="1 cita por videollamada de 50 min. para 1 persona" productCode="CIU01"/>
              <PricingCard type="citas" title="Cita de Pareja" strPrice="S/ 120.00" description="1 cita por videollamada de 50 min. para 2 personas" productCode="CPU01"/>
            </div>
          }
          {
            activeButton === 'paquetes' &&
            <div className='mb-16 grid gap-y-8 sm:grid-cols-[296px_296px] sm:gap-x-10 justify-center'>
              <PricingCard type="paquetes" title="Cita Individual" strPrice="S/ 427.50" description="5 citas por videollamada de 50 min. para 1 persona" productCode="CIP01"/>
              <PricingCard type="paquetes" title="Cita de Pareja" strPrice="S/ 570.00" description="5 citas por videollamada de 50 min. para 2 personas" productCode="CPP01"/>
            </div>
          }
        </div>
        <div className='grid gap-y-16 mb-16'>
          <h3 className='text-2xl sm:text-3xl font-bold text-center'>
            ¿Cómo funcionan los paquetes?
          </h3>
          <div className='grid justify-center sm:grid-cols-[232px_auto_auto] sm:gap-x-24 gap-y-4'>
            <PackageStep img_icon="cash" description="Compra tu paquete" />
            <PackageStep
              img_icon="email"
              description="Por correo electrónico recibirás un código y las instrucciones para agendar tus citas."
            />
            <PackageStep
              img_icon="schedule"
              description="Utiliza el código que recibiste por email para agendar tus  citas cuando quieras."
            />
          </div>
        </div>
        <div className='grid justify-center mb-8 gap-y-16 mt-4 mx-4 max-w-3xl sm:mx-auto'>
          <h3 className='text-2xl sm:text-3xl font-bold text-center'>
            Disfruta de nuestros beneficios adicionales desde donde te encuentres
          </h3>
          <PricingBenefitCard
              img_icon="lotus"
              title="Clases de yoga"
              description="Donde aprenderás a conectar con tu cuerpo y mente a través del movimiento consciente."
            />
            <PricingBenefitCard
              img_icon="mind"
              title="Sesiones semanales de mindfulness"
              description="Donde aprenderás a vivir en el presente y tener una mejor relación con tus pensamientos y emociones."
            />
        </div>
      </div>
      <div className='grid sm:mt-4 pb-8 mt-2 px-8 sm:w-7/12 w-11/12 mx-auto justify-center'>
        <h2 className='font-bold text-2xl mb-8 sm:text-3xl text-center'>
          Decide cambiar tu vida hoy, regálate un espacio para cuidar de ti
        </h2>
        <a href="/" className='mx-auto bg-brand-purple-500 w-64 h-14 text-center text-white grid content-center rounded-md text-xl'>
          Comenzar
        </a>
      </div>
    </div>
    <GenericFooter/>
    </>
  )
}
