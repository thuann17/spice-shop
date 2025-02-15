
// import "./App.css";
import IMG from "./IMG";
function Body() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}

      

      <div className="flex mx-4 mt-4">
        {/* Sidebar */}
        <aside className="w-1/6 bg-gray-200 p-4 h-64 overflow-y-auto">
          <ul className="space-y-2">
            <li className="p-2 bg-white shadow-md rounded">Gia vị</li>
            <li className="p-2 bg-white shadow-md rounded">Đóng chai</li>
            <li className="p-2 bg-white shadow-md rounded">Nước dùng</li>
            <li className="p-2 bg-white shadow-md rounded">Tươi sống</li>
            <li className="p-2 bg-white shadow-md rounded">Đóng chai</li>
            <li className="p-2 bg-white shadow-md rounded">Đóng chai</li>
          </ul>
        </aside>
        {/* Brand Image */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md text-center mx-4 h-35">
          <img src={IMG.icon2} alt="Ảnh thương hiệu" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Product Tabs */}
      {/* <div className="bg-red-200 mx-4 mt-4 p-3 rounded-lg">
        <ul className="flex space-x-6 text-white font-semibold">
          <li className="cursor-pointer">Sản phẩm nổi bật</li>
          <li className="cursor-pointer">Sản phẩm bán chạy</li>
          <li className="cursor-pointer">Khuyến mãi</li>
        </ul>
      </div> */}

      {/* Product Grid */}
      <main className="grid grid-cols-4 gap-4 mx-4 mt-4 p-6 bg-white shadow-md rounded-lg">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-300 h-40 flex items-center justify-center"
          >
            Sản phẩm {index + 1}
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white text-center py-4 mt-4 rounded-lg mx-4">
        Footer
      </footer>
    </div>
  );
}

export default Body;
