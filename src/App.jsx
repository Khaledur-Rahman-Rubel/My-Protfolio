import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Certificate from "./Certificate";
import CV from "./CV";
import Navbar from "./Navbar";
import Project from "./Project";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<CV />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/certificates" element={<Certificate />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
