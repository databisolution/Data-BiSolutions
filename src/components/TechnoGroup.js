import React from "react";
import sage from "../containers/assets/images/sage.png"
import saleforce from "../containers/assets/images/salesforce.png"
import sharepoint from "../containers/assets/images/sharepoint.png"
import sql from "../containers/assets/images/sql.png"
import synapse from "../containers/assets/images/synapse.png"
import pbi from "../containers/assets/images/Pbi.png"
import verizon from "../containers/assets/images/verizon.png"
import oracle from "../containers/assets/images/oracle.png"
import Azure from "../containers/assets/images/Azure.png";


const TechnoGroup = () => {
  return (
    <>
    <div id="techGlobal" className="max-xlx:h-[0px] xlx:h-[800px] mb-16 relative mx-auto flex flex-wrap">
      <div className="flex justify-evenly w-full" >
        <div className="xlx:h-[150px] w-[150px] top-12 relative" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500">
          <img className="max-xlx:h-[0px]" src={saleforce} alt=""/>
        </div>
        <div className="xlx:h-[150px] w-[150px] top-8 relative" data-aos="zoom-in" data-aos-delay="650" data-aos-duration="500">
        <img className="max-xlx:h-[0px]" src={Azure} alt=""/>
        </div>
        <div className="xlx:h-[150px] w-[150px] top-20 relative" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="500">
        <img className="max-xlx:h-[0px]" src={sage} alt=""/>
        </div>
      </div>
      <div className="flex justify-evenly left-10 w-full relative" data-aos="zoom-in" data-aos-delay="1550" data-aos-duration="500">
        <div className="xlx:h-[150px] w-[150px]  relative">
        <img className="max-xlx:h-[0px]" src={sharepoint} alt=""/>
        </div>
        <div className="xlx:h-[150px] w-[150px] bottom-5  relative" data-aos="zoom-in" data-aos-delay="1700" data-aos-duration="500">
        <img className="max-xlx:h-[0px]" src={synapse} alt=""/>
        </div>
        <div className="xlx:h-[150px] w-[150px] top-10 relative" data-aos="zoom-in" data-aos-delay="1850" data-aos-duration="500">
        <img className="max-xlx:h-[0px]" src={pbi} alt=""/>
        <p className="max-xlx:collapse text-yellow-400 font-semibold pt-7">POWER BI Desktop</p>
        </div>
        <div className="xlx:h-[150px] w-[150px] top-5 relative" data-aos="zoom-in" data-aos-delay="950" data-aos-duration="500">
        <img className="max-xlx:h-[0px]" src={sql} alt=""/>
        </div>
      </div>
      <div className="flex justify-around w-full">
        <div className="xlx:h-[150px] w-[150px]  00 relative" data-aos="zoom-in" data-aos-delay="1400" data-aos-duration="500">
        <img className="max-xlx:h-[0px]" src={oracle} alt=""/>
        </div>
        <div className="xlx:h-[150px] w-[150px] top-20 relative" data-aos="zoom-in" data-aos-delay="1250" data-aos-duration="500">
        <img className="max-xlx:h-[0px]" src={Azure} alt=""/>
        </div>
        <div className="xlx:h-[150px] w-[150px] relative" data-aos="zoom-in" data-aos-delay="1100" data-aos-duration="500">
        <img className="max-xlx:h-[0px]" src={verizon} alt=""/>
        </div>
      </div>
    </div>
    </>
  );
};


export default TechnoGroup;

