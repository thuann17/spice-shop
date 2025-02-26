import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menus from "../pages/Menu/MenuList";
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
        <Route path="menu-list" element={<Menus />} />

        {/*  */}
        <Route path="services" element={<CardList />} />
        <Route path="services2" element={<CardList2 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
