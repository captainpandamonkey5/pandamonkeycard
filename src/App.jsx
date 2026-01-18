import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./Card.jsx";
import MoreAboutMe from "./MoreAboutMe.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/about" element={<MoreAboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
