import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
    <div className=' mx-auto pt-52' data-aos="fade-left">
        <div className=' mx-auto mb-10'>
            <div className=''>
            <h1 className='text-3xl font-bold text-blue-800'>Contact</h1>
            <div className='border-b-[1px] mx-auto w-52 p-4'></div>
            </div>
             <p className='text-3xl mt-10'>Une idée, un projet… N’hésitez pas à nous contacter aux coordonnées ci-après ou envoyez-nous un message en remplissant le formulaire.</p>
        </div>
        <div className='flex flex-col justify-around py-10'>
        <div className=' h-96 bg-red-900'>
        <h2>Envoyez-nous un message</h2>
        </div>
        <div className=' h-96 bg-blue-900'>
          <h2 className='text-3xl font-bold'>Contactez-nous</h2>
          <p className='text-3xl'>275 Chemin de Hurbé
             33670 LA SAUVE
             France</p>
             <button onClick={() => window.location = 'g.ramu@databisolutions.fr'}>g.ramu@databisolutions.fr</button>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Contact