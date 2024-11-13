import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Page1';
import Profile from './pages/Page2';
import Settings from './pages/Page3';
import Feedback from './pages/Page4';
import Gallery1 from './Gallerys/Gallery1';
import Gallery2 from './Gallerys/Gallery2';
import Gallery3 from './Gallerys/Gallery3';
import Gallery4 from './Gallerys/Gallery4';
import Gallery5 from './Gallerys/Gallery5';
import Gallery6 from './Gallerys/Gallery6';
import Gallery7 from './Gallerys/Gallery7';
import Gallery8 from './Gallerys/Gallery8';
import Gallery9 from './Gallerys/Gallery9';
import Gallery10 from './Gallerys/Gallery10';
import './App.css';

const App: React.FC = () => (
  <Router>
    <NavMenu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallery1" element={<Gallery1 />} />
      <Route path="/gallery2" element={<Gallery2 />} />
      <Route path="/gallery3" element={<Gallery3 />} />
      <Route path="/gallery4" element={<Gallery4 />} />
      <Route path="/gallery5" element={<Gallery5 />} />
      <Route path="/gallery6" element={<Gallery6 />} />
      <Route path="/gallery7" element={<Gallery7 />} />
      <Route path="/gallery8" element={<Gallery8 />} />
      <Route path="/gallery9" element={<Gallery9 />} />
      <Route path="/gallery10" element={<Gallery10 />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  </Router>
);

const NavMenu: React.FC = () => {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    navigate('/gallery');
  };

  return (
    <nav>
      <div className='botton'>
        <ul>
          <li><Link to="/" className='nav-button'>首頁</Link></li>
          <li className="dropdown">
            <button className="nav-button dropbtn" onClick={handleGalleryClick}>圖鑑</button>
            <div className="dropdown-content">
              <Link to="/gallery1">超系卡組</Link>
              <Link to="/gallery2">電系卡組</Link>
              <Link to="/gallery3">電系卡組</Link>
              <Link to="/gallery4">電系卡組</Link>
              <Link to="/gallery5">電系卡組</Link>
              <Link to="/gallery6">電系卡組</Link>
              <Link to="/gallery7">電系卡組</Link>
              <Link to="/gallery8">電系卡組</Link>
              <Link to="/gallery9">電系卡組</Link>
              <Link to="/gallery10">電系卡組</Link>
            </div>
          </li>
          <li><Link to="/profile" className='nav-button'>卡包資訊</Link></li>
          <li><Link to="/settings" className='nav-button'>卡組T表</Link></li>
          <li><Link to="/feedback" className='nav-button'>問題回報</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default App;
