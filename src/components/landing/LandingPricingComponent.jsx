import React from 'react'

export const LandingPricingComponent = ({title, price, description}) => {
  return (
    <div className='mt-4 sm:mt-0 py-4 px-8 sm:px-16 bg-purple-400 mx-4 rounded-xl'>
      <h5 className='text-xl sm:text-xl font-medium'>
        {title}
      </h5>
      <h2 className='text-3xl my-2 font-base'>
        {price}
      </h2>
      <p className='text-md font-base sm:text-md'>
        {description}
      </p>
    </div>
  )
}
