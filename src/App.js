import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home      from "./home";
import Academics from "./Academics";
import Contact   from "./contact";
import Admission from "./admission";
import About     from "./about";
import StudentLife from "./StudentLife";
import Media from "./Media";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contact"   element={<Contact />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/about"     element={<About />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/media"        element={<Media />} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;