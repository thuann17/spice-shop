import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menus1 from "../pages/Customer/Menu/MenuList";
import Menus2 from "../pages/Customer/Menu/MenuList copy";
import Menus3 from "../pages/Customer/Menu/MenuList copy 2";
import CustomerLayout from "../layouts/customer/CustomerLayout";
import HomePage from "../pages/Customer/Home/HomePage";
import Service from "../pages/Customer/DichVuLuuDong/DichVu";
import ManagerLayout from "../layouts/manager/ManagerLayout";
import Contact from "../pages/Customer/Contact";
import About from "../pages/Customer/About";
import Dashboard from "../pages/Manager/Dashboard/index";
import ProductManager from "../pages/Manager/Product/index";
import ProductManager2 from "../pages/Manager/Product/test";
import ChiTietSanPham from "../pages/Customer/ChiTietSanPham";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="detail/:id" element={<ChiTietSanPham />} />
        </Route>
        <Route path="/manager" element={<ManagerLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="product" element={<ProductManager />} />
          <Route path="product2" element={<ProductManager2 />} />
          <Route path="menu" element={<Dashboard />} />
        </Route>
        <Route path="menu-list1" element={<Menus1 />} />
        <Route path="menu-list2" element={<Menus2 />} />
        <Route path="menu-list3" element={<Menus3 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
