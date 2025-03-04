import React from "react";

const About = () => {
  return (
    <div className="bg-background mt-20 mb-4 max-w-5xl mx-auto p-8 rounded-lg shadow-xl">
      {/*  */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        GIỚI THIỆU
      </h1>
      <p className="text-center text-lg text-gray-600 mt-3 italic">
        "Chúng tôi mang đến hương vị trọn vẹn và dịch vụ tiệc đẳng cấp"
      </p>

      {/* Video  */}
      <div className="my-8 flex justify-center">
        <video
          className="w-full md:w-4/5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          controls
          poster="/images/video-thumbnail.jpg"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
      </div>

      <hr />

      {/* */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          🌿 Cửa hàng gia vị & thực phẩm
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed text-lg">
          Chúng tôi chuyên cung cấp các loại gia vị và thực phẩm tươi ngon, giúp
          bữa ăn của bạn trở nên đậm đà hơn. Cam kết chất lượng và an toàn thực
          phẩm.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="https://nld.mediacdn.vn/thumb_w/698/291774122806476800/2022/4/17/11-chot-11-16501986621932313597.jpg"
            alt="Mặt tiền cửa hàng"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
          <img
            src="https://nld.mediacdn.vn/thumb_w/698/291774122806476800/2022/4/17/11-chot-11-16501986621932313597.jpg"
            alt="Bên trong cửa hàng"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
        </div>
      </section>
<hr/>
      {/*  */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          🍽️ Dịch vụ tiệc lưu động
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed text-lg">
          Cung cấp dịch vụ tiệc tận nơi từ gia đình đến sự kiện lớn. Món ăn tinh
          tế, phục vụ chuyên nghiệp.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="https://nld.mediacdn.vn/thumb_w/698/291774122806476800/2022/4/17/11-chot-11-16501986621932313597.jpg"
            alt="Tiệc ngoài trời"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
          <img
            src="https://nld.mediacdn.vn/thumb_w/698/291774122806476800/2022/4/17/11-chot-11-16501986621932313597.jpg"
            alt="Tiệc buffet"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
        </div>
      </section>
      <hr />
      {/*  liên hệ */}
      <section className="mt-14 text-center bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
        <h2 className="text-xl font-bold text-gray-800">📞 Liên hệ ngay</h2>
        <p className="text-gray-600 mt-2">
          Đặt hàng & Đặt tiệc ngay để có trải nghiệm tuyệt vời!
        </p>
        <p className="text-lg font-medium text-gray-700 mt-4">
          📍 Địa chỉ: TP. Cần Thơ <br />
          📞 Hotline: (029) 2381 7878 <br />
          ✉️ Email:{" "}
          <a
            href="mailto:info@phuongngahotel.vn"
            className="text-blue-500 hover:underline"
          >
            info@phuongngahotel.vn
          </a>
        </p>
      </section>
    </div>
  );
};

export default About;
