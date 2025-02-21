import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menus from "../pages/Menu/Menus";
import CustomerLayout from "../layouts/customer/CustomerLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerLayout/>} />
        <Route path="/menus" element={<Menus />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
