import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 mt-4 rounded-lg mx-4">
      <div className="container mx-auto flex flex-wrap justify-center items-start space-x-8">
        {/* Phần 1: Giới thiệu chung về website */}
        <div className="max-w-xs">
          <h3 className="text-xl font-bold mb-3 text-center">Giới Thiệu</h3>
          <p className="text-sm text-center">
            Website của chúng tôi cung cấp các sản phẩm gia dụng chất lượng cao, 
            phục vụ nhu cầu hàng ngày của bạn với dịch vụ tận tâm.
          </p>
        </div>

        {/* Phần 2: Những giá trị hữu ích */}
        <div className="max-w-xs">
          <h3 className="text-xl font-bold mb-3 text-center">Những Giá Trị Hữu Ích</h3>
          <ul className="list-disc pl-5 text-sm">
            <li>Chất lượng sản phẩm đảm bảo</li>
            <li>Dịch vụ khách hàng chu đáo</li>
            <li>Đảm bảo giao hàng đúng hẹn</li>
            <li>Giá cả cạnh tranh</li>
          </ul>
        </div>

        {/* Phần 3: Thông tin liên hệ */}
        <div className="max-w-xs">
          <h3 className="text-xl font-bold mb-3 text-center">Thông Tin Liên Hệ</h3>
          <p className="text-sm text-center">📍 CanTho City, Việt Nam</p>
          <p className="text-sm text-center">📞 0123-456-789</p>
          <p className="text-sm text-center">✉️ contact@example.com</p>

          {/* Mạng xã hội */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Phần 4: Ảnh Logo */}
        <div className="flex justify-center items-center">
          <img
            src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/469958385_122145095708364878_5365666422166783867_n.jpg?stp=dst-jpg_p130x130_tt6&_nc_cat=111&ccb=1-7&_nc_sid=4cb600&_nc_ohc=mk2jnp90DWoQ7kNvgGJWRMm&_nc_oc=AdgKTNbrY65XgUnwwOVvQ6Aa7k2wrMgKSqE3zdNi7Gd_5CTDsMcIcPQ4EpI_jfockw4&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&edm=AHhUBXQEAAAA&_nc_gid=AsUc0KuBaH37OlRQXNzF_r4&oh=00_AYALd5UlG644l6LmhD_OEpoZhm9RPjsgCRv9XrMPsxuJmQ&oe=67B8EF88"
            alt="Logo"
            className="w-60 h-20 object-contain"
          />
        </div>
      </div>

      {/* Footer CopyRight */}
      <div className="text-center text-sm opacity-75 mt-6">
        © 2025 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
