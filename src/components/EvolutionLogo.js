import React from 'react'


const EvolutionLogo = ({imgEvo, txtEvo}) => {
  return (
    <div className='lg:w-[180px] lg:h-[480px] lg:mt-8'>
        <img className='mx-auto my-2 2xl:w-[60px] 3xl:w-[90px]' src={imgEvo} alt=''/>
        <span className='text-xl font-semibold 2xl:text-[14px] 3xl:text-xl'>{txtEvo}</span>
    </div>
  )
}

export default EvolutionLogo