import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hosts from "./pages/Hosts";
import Flows from "./pages/Flows";
import Stats from "./pages/Stats";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hosts />} />
        <Route path="/flows" element={<Flows />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;