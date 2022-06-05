import React from 'react';
import { Navbar } from '../landing/Navbar';
import Collapse from 'rc-collapse';
import { AccordionFaq } from './AccordionFaq';
import { GenericFooter } from '../landing/Partials/GenericFooter';
require('rc-collapse/assets/index.css');

export const Faqs = () => {
  const faqArray = [
    {
        title: 'Conociendo Psicologia Mia',
        faqList: [
          {
            title: '¿Qué es PsicologíaMía y como funciona?',
            description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
          },
          {
            title: '¿Qué servicios de terapia ofrecen?',
            description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
          },
          {
            title: '¿Cuánto cuesta y qué métodos de pago aceptan?',
            description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
          },
          {
            title: '¿Como agendo mi primera cita en Psicologia Mia?',
            description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
          },
          {
            title: '¿Como tomar mi primera cita en Psicologia Mia?',
            description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
          },
          {
            title: '¿Las consultas online son efectivas?',
            description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
          },
        ]
    },
    {
      title: 'Uso de la plataforma',
      faqList: [
        {
          title: '¿Cómo me contecto a mi cita?',
          description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
        },
        {
          title: '¿Como me conecto a mi cita de pareja?',
          description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
        },
        {
          title: '¿Cómo puedo cancelar o reprogramar mi cita?',
          description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
        },
        {
          title: '¿Como agendar un paquete de citas?',
          description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
        },
        {
          title: '¿Puedo solicitar factura de mis citas?',
          description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
        },
        {
          title: '¿Cuales son las políticas de cancelación?',
          description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
        },
      ]
  },
  {
    title: 'Seguridad',
    faqList: [
      {
        title: '¿Es seguro tomar terapia en Psicologia Mia?',
        description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
      },
      {
        title: '¿Los pagos son seguros?',
        description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
      },
      {
        title: '¿Se graban las sesiones?',
        description:'PsicologiaMia es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria.'
      },
    ]
}

  ]

  return (
    <>
    <Navbar/>
    {
      faqArray.map((category,index) => (
        <div
        key={index}
        className='p-4 border-2 rounded-lg border-gray-200 m-4'
        >
          <div className='px-2 pt-2 pb-4'>
            <h2 className='font-medium'>
              {category.title}
            </h2>
          </div>
          <div>
            {
              category.faqList.map((faq, index)=>(
                <AccordionFaq
                  key={index}
                  title={faq.title}
                  description={faq.description}
                />
                ))
            }
          </div>
        </div>
      ))
    }
    <GenericFooter/>
    </>
  )
}
