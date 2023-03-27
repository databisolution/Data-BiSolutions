import React from 'react'
import Techno from "./assets/images/technologies.PNG"
import PowerBi from "./assets/images/PowerBi.png"
import Azure from "./assets/images/Azure.png"

const Technologies = () => {
  return (
    <section className='pt-52' data-aos="">
         <div className=' mx-auto z-0'>
            <h1 className='text-3xl font-bold text-blue-800'>Technologies</h1>
            <div className='border-b-[1px] mx-auto w-52 p-4'></div>
            <img className='mx-auto py-4 ' src={Techno} alt='technologies'/>
            <h2 className='text-3xl'>Les apports de Microsoft POWER BI et Microsoft AZURE SYNAPSE</h2>
            <div className='border-b-[2px] mx-auto w-52 p-4'></div>
            <div>
              <h3>Microsoft POWER BI</h3>
              <p className='mx-auto py-4 text-3xl'>Les avantages de Power BI sont nombreux pour aider les équipes de direction à faire des choix rapides sans compromettre la rentabilité de leur entreprise. 
                Power BI facilite la visualisation des données. Avec ces options de présentation sous forme de tableaux, 
                de diagramme ou encore de jauges ou de cartes, il donne une vision complète des données de l’entreprise sous forme visuelle pour faciliter l’utilisation des données en équipe.</p>
                <img className='mx-auto py-4 ' src={PowerBi} alt='powerBi'/>
                <p className='mx-auto py-4 text-3xl'>Power BI est une plateforme unique disponible depuis l’ensemble de ses appareils avec une seule connexion.</p>
                <p className='mx-auto py-4 text-3xl'>Grâce à l’accessibilité et la présentation visuelle, 
                  Power BI est un outil d’aide à la décision de taille qui fait la différence entre une entreprise normale et une entreprise productive, agile et réactive.</p>
              </div>
              <div>
                <h3>Microsoft AZURE SYNAPSE ANALYTICS</h3>
                <img className='mx-auto py-4 ' src={Azure} alt='Azure'/>
                <p className='mx-auto py-2 text-3xl'>C’est l’outil qui facilite le circuit de traitement de la donnée. 
                  Il permettra de synchroniser l’ensemble de vos sources de données (quelle qu’elle soit) et de réaliser avec précision les calculs pour préparer la donnée à diffuser dans POWER BI.</p>
                <p className='mx-auto py-6 text-3xl'>Il n’existe pas de méthode unique pour réaliser un projet BI. 
                  Le choix des outils et de l’architecture à mettre en place repose sur un diagnostic de l’Organisation. 
                  Notre expérience nous permet de vous conseiller et vous proposer le modèle adapté à votre structure.</p>
              </div>
              <button className="text-3xl p-8 bg-blue-400 rounded-full my-10 p-3 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-300 ">Contactez-nous</button>
            
        </div>
    </section>
  )
}

export default Technologies