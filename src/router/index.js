import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menus from "../pages/Menu/MenuList";
import CustomerLayout from "../layouts/customer/CustomerLayout";
import HomePage from "../pages/Home/HomePage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="menu-list" element={<Menus />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
