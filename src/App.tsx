import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Preloader from "./components/Preloader";

import Home from "./pages/Home";
import About from "./pages/About";
import Impact from "./pages/Impact";

function App() {
  return (
    <BrowserRouter>
      <Header cart={0} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;