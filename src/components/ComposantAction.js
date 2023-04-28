import React from "react";

const ComposantAction = () => {
  return (
    <div className="w-[500px] h-[400px] bg-orange-400 flex justify-between">
      <div className="w-[200px] h-[200px] bg-lime-500 rounded-md mt-20">
        <p>{descriptif}</p>
      </div>
      <div className="w-[200px] h-[300px] bg-sky-300 rounded-md mt-10">
        <img className="mx-auto mt-10" src={icone} alt="" />
        <p className="relative top-[50px]">{details}</p>
      </div>
    </div>
  );
};

export default ComposantAction;
