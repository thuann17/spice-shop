import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menus1 from "../pages/Menu/MenuList";
import Menus2 from "../pages/Menu/MenuList copy";
import Menus3 from "../pages/Menu/MenuList copy 2";
import CustomerLayout from "../layouts/customer/CustomerLayout";
import HomePage from "../pages/Home/HomePage";
import Service from "../pages/DichVuLuuDong/DichVu";
import ManagerLayout from "../layouts/manager/ManagerLayout";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Dashboard from "../pages/Manager/Dashboard/index";
import ProductManager from "../pages/Manager/Product/index";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/manager" element={<ManagerLayout />}>
          {" "}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<ProductManager />} />
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
