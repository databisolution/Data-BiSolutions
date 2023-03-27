import React from 'react'
import MultiSecteurs from "./assets/images/MultiSecteurs.PNG"
import Indicateurs from "./assets/images/INDICATEURS.PNG"
import MainImage from './assets/images/accueil.png'
import { Link } from 'react-router-dom'



const MainPage=() => {
    return (
        <main>
        <div className=' mx-auto z-0 w-full px-1'>
            <div data-aos="zoom-in" data-aos-duration="1000">
            <img src={MainImage} alt="mainImage" className=' mx-auto pb-8 pt-32 h-[250px] w-[400px] object-cover '/>  {/*py-32 h-[600px] w-[1400px] object-cover*/}
            </div>
        <div className='h-full mx-auto mb-10 ' > {/*h-full w-[1200px] mx-auto mb-10*/}
            <p className='text-3xl' data-aos="zoom-in" data-aos-duration="1500">Des informations multi-sources, 
            multi-formats collectées et centralisées pour une analyse précise et globale de votre activité</p>
            <div className='border-b-[2px] mx-auto w-52 p-4' data-aos="zoom-in-down"  data-aos-duration="1800"></div>
            <div data-aos="zoom-in-down" data-aos-duration="2000">
            <img className='mx-auto py-4' alt='multiSecteurs' src={MultiSecteurs}/>
            <p className='text-3xl'>La centralisation de la donnée offre de grandes possibilités d’analyse</p>
            </div>
            <div className='border-b-[2px] mx-auto w-52 p-4'></div>
            </div>   
        <div className='h-full  mx-auto mb-10'> {/*h-full w-[1200px] border-2 mx-auto mb-10*/}
        <p className='text-3xl' data-aos="fade-up" data-aos-duration="1000">Evolution, répartition et autres indicateurs clés sont accessibles. 
        Nous nous chargeons de faire interagir vos données pour vous mettre à disposition des rapports précis. 
        Développons ensemble les outils dédiés à votre activité et vos besoins pour vous accompagner dans votre stratégie et vos décisions.</p>
        <div className='border-b-[2px] mx-auto w-52 p-4'></div>
        <img className='mx-auto py-4' alt='multiSecteurs' src={Indicateurs} data-aos="fade-up" data-aos-duration="1500"/>
        </div>   

        <div className='h-full mx-auto mb-10' data-aos="fade-up" data-aos-duration="1000"> {/*h-full w-[1200px] border-2 mx-auto mb-10*/}
        <p className='text-4xl'>Réaliser votre projet</p>
        <div className='border-b-[2px] mx-auto w-52 p-4'></div>
        <p className='text-3xl py-5'>Des entreprises comme la vôtre réalise chaque jour des projets BI pour améliorer leur quotidien</p>
        <Link to='/contact'>
        <button className=' text-3xl bg-blue-400 rounded-full my-10 p-8 px-20 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-300' data-aos="zoom-out" data-aos-duration="1200">Allons-Y</button>
        </Link>
        </div>   
        </div>
        </main>
    )
}

export default MainPage
