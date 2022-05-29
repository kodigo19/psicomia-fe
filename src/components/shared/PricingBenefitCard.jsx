import React from 'react'
import { GiLotus } from "react-icons/gi";
import { FaBrain } from "react-icons/fa";

export const PricingBenefitCard = ({img_icon, title, description}) => {
  return (
    <div className='grid grid-cols-[130px_auto] text-left'>
      <div className='grid justify-center max-h-24'>
        {
          img_icon === "lotus" &&
          <GiLotus className='h-24 w-24'/>

        }
        {
          img_icon === "mind" &&
          <FaBrain className='h-24 w-24'/>
        }
      </div>
      <div className='py-2 px-2'>
        <p className='font-semibold text-lg sm:text-xl mb-4'>
          {title}
        </p>
        <p className='text-sm sm:text-base'>
          {description}
        </p>
      </div>
    </div>
  )
}