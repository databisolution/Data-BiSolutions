import React from "react";


const VisionLi = ({ MainDiv, title, img, el1, el2, el3, el4 }) => {
  return (
    <div className={MainDiv}>
      <div data-aos="fade-down" data-aos-duration="1200">
        <img
          className="object-cover sx:absolute max-sx:mt-10 max-sx:mx-auto sx:left-[-45px] sx:mt-[130px] w-[290px] slg:w-[300px] md:w-[350px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[420px] h-[320px] bg-slate-900 rounded-md"
          src={img}
          alt=""
        />
      </div>
      <div data-aos="fade-up" data-aos-duration="1200" className="p-12 max-sx:top-[190px] max-xm:mx-auto max-xm:px-10 text-left w-full absolute sx:right-[-40px] sx:mt-[165px] sx:w-[400px] md:w-[500px] 2xl:h-[350px] 2xl:leading-8 sm:leading-4 leading-4 2xl:text-md text-sm h-[250px] bg-slate-100 rounded-md shadow-xl">
        <h2 className="font-semibold mb-2 md:mb-5">{title}</h2>
        <ul className="list-disc">
          <li>{el1}</li>
          <li>{el2}</li>
          <li>{el3}</li>
          <li>{el4}</li>
        </ul>
      </div>
    </div>
  );
};

export default VisionLi;
