import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menus1 from "../pages/Menu/MenuList";
import Menus2 from "../pages/Menu/MenuList copy";
import Menus3 from "../pages/Menu/MenuList copy 2";
import CustomerLayout from "../layouts/customer/CustomerLayout";
import HomePage from "../pages/Home/HomePage";
import CardList from "../pages/DichVuLuuDong/CardList";
import CardList2 from "../pages/DichVuLuuDong/CardList2";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="menu-list1" element={<Menus1 />} />
        <Route path="menu-list2" element={<Menus2 />} />
        <Route path="menu-list3" element={<Menus3 />} />

        <Route path="services" element={<CardList />} />
        <Route path="services2" element={<CardList2 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
