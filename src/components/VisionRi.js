import React from "react";
import styled from "styled-components";


const VisionRi = ({MainDiv, title, img, el1, el2, el3, el4}) => {
  return (
    <div className={MainDiv}>
      <div className="">
        <img
          className="object-cover sx:absolute max-sx:mt-48 max-sx:mx-auto sx:right-[-45px] sx:mt-[630px] w-[290px] slg:w-[300px] md:w-[350px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[420px] h-[320px] bg-slate-900 rounded-md"
          src={img}
          alt=""
        />
      </div>
      <div className="p-12 max-sx:top-[800px] max-xm:mx-auto max-xm:px-10 text-left w-full absolute sx:left-[-40px] sx:mt-[665px] sx:w-[400px] md:w-[500px] 2xl:h-[350px] 2xl:leading-8 sm:leading-4 leading-4 text-sm 2xl:text-md h-[250px] bg-slate-100 rounded-md shadow-xl">
        <h2 className="font-semibold mb-2 md:mb-5">{title}</h2>
        <ul className="list-disc" >
          <li>{el1}</li>
          <li>{el2}</li>
          <li>{el3}</li>
          <li>{el4}</li>
        </ul>
      </div>
    </div>
  );
};

export default VisionRi;
