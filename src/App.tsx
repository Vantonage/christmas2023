import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { NavBar } from "./components/Navbar"


function App() {
  return (
    <>
      <NavBar/>
        <div className="container mx-auto mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
    </>

  );
}

export default App
