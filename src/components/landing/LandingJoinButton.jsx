import React from 'react'

export const LandingJoinButton = ({buttonText, urlLink}) => {
  return (
    <div className='sm:ml-auto sm:mr-auto my-8 sm:mb-4 flex flex-col max-w-[380px]'>
      <a href={urlLink} className='text-center shadow-md font-medium rounded-3xl bg-brand-purple-500 cursos-pointer outline-none text-white py-2 px-8 shadow-brand-purple-500'>
        {buttonText}
      </a>
    </div>
  )
}
