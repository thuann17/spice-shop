import React from "react";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import "./index.css";

const Contact = () => {
  return (
    <div className="mt-16 px-4 max-w-5xl mx-auto py-6">
      <div className="bg-background flex flex-col md:flex-row justify-center items-center gap-12 shadow-lg p-10">
        <div className="flex flex-col  items-center md:items-start text-center md:text-left w-full max-w-md">

          {/*  */}
          <div className="space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800">
              Cửa hàng gia vị & thực phẩm
            </h2>
            <p className="text-lg">
              Chuyên cung cấp các loại gia vị và thực phẩm chất lượng cao, đảm
              bảo an toàn và vệ sinh thực phẩm.
            </p>
            <hr />
            <p className="flex items-center gap-3 text-lg">
              <EnvironmentOutlined className="text-blue-500 text-2xl" />
              <span>TP. Cần Thơ</span>
            </p>
            <p className="flex items-center gap-3 text-lg">
              <PhoneOutlined className="text-green-500 text-2xl" />
              <a
                href="tel:02923817878"
                className="hover:text-green-600 transition"
              >
                Hỗ trợ: (029) 2381 7878
              </a>
            </p>
            <p className="flex items-center gap-3 text-lg">
              <MailOutlined className="text-red-500 text-2xl" />
              <a
                href="mailto:info@phuongngahotel.vn"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                info@phuongngahotel.vn
              </a>
            </p>
            <hr />
            {/* Giờ  */}
            <div className=" ">
              <div className="flex items-center gap-3">
                <ClockCircleOutlined className="text-blue-500 text-2xl" />
                <h3 className="font-semibold text-gray-800 text-lg">
                  Giờ mở cửa
                </h3>
              </div>
              <div className="mt-2 space-y-1 text-gray-600">
                <p className="flex justify-between border-b pb-1">
                  <span>Thứ 2 - Thứ 7:</span>
                  <span className="font-medium text-gray-800">
                    8:00 - 20:00
                  </span>
                </p>
                <p className="flex justify-between">
                  <span>Chủ nhật:</span>
                  <span className="font-medium text-gray-800">
                    9:00 - 18:00
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form  */}
        <div className="bg-white shadow-lg p-8 border border-gray-200 w-full max-w-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Liên hệ với chúng tôi
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Tên của bạn"
                className="border p-3 w-full rounded-lg focus:ring-1 focus:ring-border focus:border-border outline-none"
              />
              <input
                type="email"
                placeholder="Email của bạn"
                className="border p-3 w-full rounded-lg focus:ring-1 focus:ring-border focus:border-border outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Số điện thoại"
              className="border p-3 w-full rounded-lg focus:ring-1 focus:ring-border focus:border-border outline-none"
            />

            <textarea
              placeholder="Nội dung tin nhắn"
              className="border p-3 w-full rounded-lg h-32 focus:ring-1 focus:ring-border focus:border-border outline-none"
            ></textarea>
            <button className="w-full bg-gradient-to-r from-[#8B5E3B] to-button text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition">
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>

      {/* Bản đồ */}
      <div className="mt-4">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.688366387808!2d106.76744377481461!3d10.835620889314076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752748d1c49521%3A0x328f5e07b87b61c6!2zMzYgUC4gU8ahIDgsIFBoxrDhu51uZyBMaW5oIENoaeG7g3UsIFF14bqjbmcgVGjGsOG7o25nLCBUUC5IQ00!5e0!3m2!1svi!2s!4v1710077805437"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          className=" shadow-md border border-gray-300"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
