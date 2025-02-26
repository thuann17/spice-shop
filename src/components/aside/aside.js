import React from "react";
import videoFile from "../../assets/images/6336741841146.mp4";

const categories = ["Sốt và nước chấm", "Món ăn", "Dịch vụ lưu động"];

const Aside = () => {
  return (
    <>
      <aside className="mt-10 bg-button p-2 h-[400px] overflow-y-auto rounded-lg mx-4">
        <video
          controls
          loop
          autoPlay
          muted
          className="w-full h-full rounded-lg shadow-lg"
        >
          <source src={videoFile} type="video/mp4" />
        </video>
      </aside>
    </>
  );
};
export default Aside;
