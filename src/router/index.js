import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menus from "../pages/Menu/MenuList";
import CustomerLayout from "../layouts/customer/CustomerLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerLayout/>} />
        <Route path="/menu-list" element={<Menus />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
