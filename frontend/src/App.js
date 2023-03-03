import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Header from "./components/Header"
import SongList from "./pages/SongList";
function App() {
  return (
    <div className="App">
  <Router>
        <Routes>
          <Route path="/" element={<SongList/> } />
          <Route path="/h3" element={<h2> Manage song </h2>} />
          <Route path="/h4" element={<h3>  Home  3</h3>} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
