import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomerLayout from "./layouts/customer/CustomerLayout";
import AppRoutes from "./route/index";
function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
