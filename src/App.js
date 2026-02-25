import { BrowserRouter, Routes, Route } from "react-router-dom";
import KefjoyAcademy from "./kefjoyAcademy";
import Academics from "./academics";
import Contact from "./contact";
import Admission from "./admission";
import About from "./about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<KefjoyAcademy />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contact"   element={<Contact />} />
        <Route path="/admission"   element={<Admission />} />
        <Route path="/about"        element={<About />} /> 


        {/* <Route path="/programs"     element={<Programs />} />    */}
        {/* <Route path="/admission"    element={<Admission />} />   */}
        {/* <Route path="/student-life" element={<StudentLife />} /> */}
        {/* <Route path="/media"        element={<Media />} />       */}
             
      </Routes>
    </BrowserRouter>
  );
}

export default App;