import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Work from './Pages/Work';
import Experince from './Pages/Experience';
import Worktwo from './Pages/Worktwo';
import WorkTree from './Pages/WorkTree';

import './App.css';
import Navbarr from './Components/Navbarr';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        <Navbarr />

        <div className="content">
          <br />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/worktwo" element={<Worktwo />} />
            <Route path='/workthree' element={<WorkTree/>} />
            <Route path="/experience" element={<Experince />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
