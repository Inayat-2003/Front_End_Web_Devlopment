import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Page/Home";
import About from "./Page/About";
import Catalogue from "./Page/Catalogue";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/catalogue" element={<Catalogue />} />
     </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
