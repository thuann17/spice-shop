import MenuCard from "./MenuCard/MenuCard";

const menuItems = [
  {
    id: 1,
    name: "Thực đơn 1",
    price: 50000,
    image:
      "https://giadinh.mediacdn.vn/296230595582509056/2023/8/7/edit-z4557883676821a4f90e787de265d8c4c25437e1a72451-1691375977197776037183.png",
  },
  {
    id: 2,
    name: "Thực đơn 2",
    price: 60000,
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
  },
  {
    id: 3,
    name: "Thực đơn 3",
    price: 30000,
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
  },
  {
    id: 4,
    name: "Thực đơn 4",
    price: 40000,
    image:
      "https://giadinh.mediacdn.vn/296230595582509056/2023/8/7/edit-z4557883676821a4f90e787de265d8c4c25437e1a72451-1691375977197776037183.png",
  },
  {
    id: 5,
    name: "Thực đơn 5",
    price: 55000,
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
  },
  {
    id: 6,
    name: "Thực đơn 6",
    price: 55000,
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
  },
  {
    id: 7,
    name: "Thực đơn 7",
    price: 55000,
    image:
      "https://giadinh.mediacdn.vn/296230595582509056/2023/8/7/edit-z4557883676821a4f90e787de265d8c4c25437e1a72451-1691375977197776037183.png",
  },
  {
    id: 8,
    name: "Thực đơn 8",
    price: 55000,
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
  },
  {
    id: 9,
    name: "Thực đơn 9",
    price: 55000,
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
  },
  {
    id: 10,
    name: "Thực đơn 10",
    price: 55000,
    image:
      "https://giadinh.mediacdn.vn/296230595582509056/2023/8/7/edit-z4557883676821a4f90e787de265d8c4c25437e1a72451-1691375977197776037183.png",
  },
];

const MenuList = () => {
  return (
    <div className="min-h-screen bg-background p-6 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-[#8B5E3B] mb-8">
        Thực Đơn 🍽️
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-4 xl:mx-56">
        {menuItems.map((item, index) => (
          <MenuCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
