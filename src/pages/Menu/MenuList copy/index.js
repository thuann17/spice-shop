import MenuCard from "./MenuCard/MenuCard";

const menuItems = [
  {
    id: 1,
    name: "Thực đơn 1",
    price: 50000,
    status: "Còn hàng",
    image:
      "https://giadinh.mediacdn.vn/296230595582509056/2023/8/7/edit-z4557883676821a4f90e787de265d8c4c25437e1a72451-1691375977197776037183.png",
    discount: 41,
  },
  {
    id: 2,
    name: "Thực đơn 2",
    status: "Còn hàng",
    price: 60000,
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    discount: 41,
  },
  {
    id: 3,
    name: "Thực đơn 3",
    status: "Còn hàng",
    price: 30000,
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    discount: 41,
  },
  {
    id: 4,
    name: "Thực đơn 4",
    status: "Còn hàng",
    price: 40000,
    image:
      "https://giadinh.mediacdn.vn/296230595582509056/2023/8/7/edit-z4557883676821a4f90e787de265d8c4c25437e1a72451-1691375977197776037183.png",
    discount: 41,
  },
  {
    id: 5,
    name: "Thực đơn 5",
    status: "Còn hàng",
    price: 55000,
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    discount: 41,
  },
  {
    id: 6,
    name: "Thực đơn 6",
    status: "Còn hàng",
    price: 55000,
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    discount: 11,
  },
  {
    id: 7,
    name: "Thực đơn 7",
    status: "Còn hàng",
    price: 55000,
    image:
      "https://giadinh.mediacdn.vn/296230595582509056/2023/8/7/edit-z4557883676821a4f90e787de265d8c4c25437e1a72451-1691375977197776037183.png",
    status: "Còn hàng",
    discount: 15,
  },
  {
    id: 8,
    name: "Thực đơn 8",
    price: 55000,
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    status: "Còn hàng",
    discount: 23,
  },
  {
    id: 9,
    name: "Thực đơn 9",
    price: 55000,
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    status: "Còn hàng",
    discount: 20,
  },
  {
    id: 10,
    name: "Thực đơn 10",
    price: 55000,
    image:
      "https://giadinh.mediacdn.vn/296230595582509056/2023/8/7/edit-z4557883676821a4f90e787de265d8c4c25437e1a72451-1691375977197776037183.png",
    status: "Hết hàng",
    discount: 10,
  },
];

const MenuList = () => {
  return (
    <div className="min-h-screen bg-background p-6 sm:p-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {menuItems.map((item, index) => (
          <MenuCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
