import React from 'react'


const EvolutionLogo = ({imgEvo, txtEvo}) => {
  return (
    <div className='lg:w-[180px] lg:h-[480px] lg:mt-8'>
        <img className='mx-auto' src={imgEvo} alt=''/>
        <span>{txtEvo}</span>
    </div>
  )
}

export default EvolutionLogo