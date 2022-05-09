import React from 'react'

export const TestimonialCard = ({experience, name, date}) => {
  return (
    <div className='my-4'>
      <div className=''>
        <p className='mb-4 text-md'>
          {experience}
        </p>
        <p className=''>
          {name}          
        </p>
        <p className=''>
          {date}
        </p>
      </div>
    </div>
  )
}
