import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Banner from "components/Banner";


function AppRoutes() {
  return (
    <BrowserRouter>
    <Banner/>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
