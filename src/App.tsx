import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddClient from "./Pages/AddClient";
import AddFunctionalArea from "./Pages/AddFunctionalArea";
import AddRole from "./Pages/AddRole";
import AddPermission from "./Pages/AddPermission";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddClient />}></Route>
          <Route
            path="/AddFunctionalArea"
            element={<AddFunctionalArea />}
          ></Route>
          <Route path="/AddRole" element={<AddRole />}></Route>
          <Route path="/AddPermission" element={<AddPermission />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
