import React from "react";
import videoFile from "../../assets/images/6336741841146.mp4";

const categories = ["Sốt và nước chấm", "Món ăn", "Dịch vụ lưu động"];

const Aside = ({ onSelectCategory }) => {
  return (
    <>
      <div className="col-span-3">

        <aside className="bg-button p-4 h-[400px] overflow-y-auto rounded-lg scrollbar scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-300 mt-5 mx-4">
          <video
            controls
            loop
            autoPlay
            muteds
            className="w-full h-full rounded-lg shadow-lg"
          >
            <source src={videoFile} type="video/mp4" />
          </video>

        </aside>
      </div>
    </>
  );
};
export default Aside;
