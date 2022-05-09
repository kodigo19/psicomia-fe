import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';
import { TestimonialCard } from './TestimonialCard';


export const CommentCarousel = () => {
  const testimonials = [
    {
      experience: "Mi experiencia en la cita fue un ambiente agradable y confiable. El terapeuta me hizo sentir comodo y confiado.",
      name: "Paul",
      date: "Mayo, 2021"
    },
    {
      experience: "Confiable y seguro",
      name: "Monica",
      date: "Abril, 2022"
    },
  ]
  return (
    <div className="border rounded-xl my-6 bg-slate-100 border-slate-300">
      <Swiper
          style={{
            'width':'400px',
            '--swiper-navigation-size': '14px',
            '--swiper-navigation-color': '#318b94',
            'paddingLeft': '3rem',
            'paddingRight': '3rem',
            'paddingTop': '1.8rem',
            'paddingBottom': '1.8rem'
          }}
          slidesPerView={1}
          spaceBetween={50}
          navigation={true}
          className="mySwiper"
        >
          {
            testimonials.length === 0 ? (<></>) : (
              testimonials.map((testimonial, key) => (
                <SwiperSlide key={key}>
                  <TestimonialCard key={key} name={testimonial.name} experience={testimonial.experience} date={testimonial.date}/>
                </SwiperSlide>
              ))
            )
          }
      </Swiper>
    </div>
  )
}
