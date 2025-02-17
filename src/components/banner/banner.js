import React from "react";
import Images from "./image";
const Banner = () => {
  return (
    <>
      <div className="flex mx-4 mt-4">
        <div className="flex-1 text-center mx-4 h-96">
          <img
            src={Images.icon2}
            alt="Ảnh thương hiệu"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};
export default Banner;
