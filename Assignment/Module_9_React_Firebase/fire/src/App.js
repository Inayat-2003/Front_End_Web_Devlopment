import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mystate from "./Context/data/Mystate";
import Home from "./Page/Home";
import Add from "./Page/Add";
import Update from "./Page/Update";


function App() {
  return (
    <Mystate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<Add />} />
          <Route path="/updatecar" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </Mystate>
  );
}

export default App;