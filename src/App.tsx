import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact/ContactPage';
import Gardening from './Pages/Gardening/Gardening';
import Paving from './Pages/Paving/Paving';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gardening" element={<Gardening />} />
        <Route path="/paving" element={<Paving />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
