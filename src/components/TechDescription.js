import React from 'react'

const TechDescription = ({techObjectif,imgDesc}) => {
  return (
    <>
          <div className="mx-auto flex flex-wrap lg:flex-nowrap xl:w-[1200px] 2xl:w-[1440px] mt-20">
            <p className="py-5 my-auto mx-auto leading-10 text-3xl lg:text-justify px-5">
            {techObjectif}
            </p>
            <img
              className="mx-auto py-4"
              src={imgDesc}
              alt="imgDesc"
              data-aos="zoom-in-down"
              data-aos-duration="1800"
            />
          </div>
    </>
  )
}

export default TechDescription