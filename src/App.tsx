
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import About from "./pages/About";
import Impact from "./pages/Impact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
