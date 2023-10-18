import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from "./components/Welcome"
import Board from "./components/board"


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/play/:difficulty" element={<Board />} />
        
      </Routes>
    </Router>
  );
};


