import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddClient from "./Pages/AddClient";
import AddFunctionalArea from "./Pages/AddFunctionalArea";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
