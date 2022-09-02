import { Routes, Route } from "react-router-dom";
import PopUp from "./components/pop-up/PopUp";
import DataList from "./pages/data-list/DataList";
import EmployeeFormPage from "./pages/employee-form/EmployeeFormPage";
import Homepage from "../src/pages/homapage/Homepage";
import LaptopInfo from "./pages/laptop-info/LaptopInfo";
import LaptopFormPage from "./pages/laptop-form/LaptopFormPage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/employees" element={<EmployeeFormPage />} />
      <Route path="/laptops" element={<LaptopFormPage />} />
      <Route path="/success" element={<PopUp />} />
      <Route path="/data-list" element={<DataList />} />
      <Route path="/laptop-info" element={<LaptopInfo />} />
    </Routes>
  );
};

export default App;
