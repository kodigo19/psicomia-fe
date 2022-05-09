import React from 'react'

export const LandingBenefitCard = ({icon,title,description}) => {
  return (
    <div className='slider-container flex md:flex-row'>
              <div className='w-1/3 table-cell text-md text-brand-gray content-center place-content-center place-items-center items-center self-center justify-center transition-all duration-300 ease-linear'>
                <img src={icon} alt="" className='h-20 sm:h-28 self-center ml-auto mr-auto'/>
              </div>
              <div className='w-2/3 flex flex-col p-2'>
                <div className='slider-title'>
                  {title}
                </div>
                <div className='silder-description'>
                  {description}
                </div>
              </div>
            </div>
  )
}
