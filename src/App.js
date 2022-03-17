import { Route, Routes } from 'react-router-dom'

import Nav from './components/nav';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';

import './App.scss';

function App() {
  return (
    <div className="home">
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
