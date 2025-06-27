import React from "react";
import CollageMask from "./Collage";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";

const CollageBackground = () => {
  return (
    <div className="relative pt-20 pb-20">
      <CustomContainer className="!max-w-4xl min-h-[30vh] ">
        <CollageMask />
      </CustomContainer>

      <h2 className="text-white fill-color-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase scale-y-120 z-20 text-11xl font-bold text-center pointer-events-none">
        Siembra
      </h2>
    </div>
  );
};

export default CollageBackground;
