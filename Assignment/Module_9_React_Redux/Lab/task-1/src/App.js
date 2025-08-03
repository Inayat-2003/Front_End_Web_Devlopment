import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Nav";
import Create from "./Component/Create";
import Read from "./Component/Read";
import Edit from "./Component/Edit";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/newcar" element={<Create />} />

          <Route path="/" element={<Read />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
          </BrowserRouter>
      );

}

export default App;
