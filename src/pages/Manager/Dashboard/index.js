import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [orderCount, setOrderCount] = useState(null);
  const [topCustomer, setTopCustomer] = useState(null);
  const [popularProducts, setPopularProducts] = useState([]);
  const [isLoading, setIsLoading] = useState({
    orders: true,
    topCustomer: true,
    popularProducts: true,
  });

  const [selectedMonths, setSelectedMonths] = useState({
    orders: { month: "Tất Cả", year: "2025" },
    customers: { month: "Tất Cả", year: "2025" },
    products: { month: "Tất Cả", year: "2025" },
  });

  const months = [
    "Tất Cả",
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const currentYear = new Date().getFullYear();
  const years = ["Tất Cả"];
  for (let year = currentYear; year >= 2020; year--) {
    years.push(year);
  }

  const handleMonthChange = (section, month) => {
    setSelectedMonths((prevState) => ({
      ...prevState,
      [section]: { ...prevState[section], month: month },
    }));
  };

  const handleYearChange = (section, year) => {
    setSelectedMonths((prevState) => ({
      ...prevState,
      [section]: { ...prevState[section], year: year === "Tất Cả" ? "" : year },
    }));
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-r from-green-100 to-green-300 shadow rounded-lg p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Tổng quan đơn hàng</h2>
            <div className="flex items-center space-x-2">
              <select
                className="border rounded-lg p-2 text-gray-700 text-sm"
                value={selectedMonths.orders.month}
                onChange={(e) => handleMonthChange("orders", e.target.value)}
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                className="border rounded-lg p-2 text-gray-700 text-sm"
                value={selectedMonths.orders.year}
                onChange={(e) => handleYearChange("orders", e.target.value)}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-white text-center rounded-lg">
              <p className="text-xl font-semibold">
                {orderCount?.totalOrders || 0}
              </p>
              <p className="text-sm">Tổng số đơn hàng</p>
            </div>
            <div className="p-4 bg-white  text-center rounded-lg">
              <p className="text-xl font-semibold">
                {orderCount?.completedOrders || 0}
              </p>
              <p className="text-sm">Đơn hàng đã hoàn thành</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-orange-300 shadow rounded-lg p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Khách hàng mua nhiều nhất</h2>
          </div>
          <div className="mt-4">
            {topCustomer ? (
              <div className="h-32 bg-white rounded-lg flex justify-center items-center">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold">{topCustomer.name}</h2>
                  <p className="text-gray-500">
                    Số đơn hàng: {topCustomer.orderCount}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-500">
                Chưa có khách hàng nổi bật
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-purple-300 shadow rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Sản phẩm phổ biến</h2>
        </div>
        <table className="w-full mt-4 text-left">
          <thead>
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Tên sản phẩm</th>
              <th className="py-2 px-4">Số lần mua</th>
            </tr>
          </thead>
          <tbody>
            {popularProducts.map((product, index) => (
              <tr key={product.id}>
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.purchaseCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
