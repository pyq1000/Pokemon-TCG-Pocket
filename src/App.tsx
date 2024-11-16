import React from 'react';
import { HashRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Gallery from './Page1';
import Profile from './Page2';
import Settings from './Page3';
import Gallery1 from './Gallery1';
import Gallery2 from './Gallery2';
import Gallery3 from './Gallery3';
import Gallery4 from './Gallery4';
import Gallery5 from './Gallery5';
import Gallery6 from './Gallery6';
import Gallery7 from './Gallery7';
import Gallery8 from './Gallery8';
import Gallery9 from './Gallery9';
import Gallery10 from './Gallery10';
import './App.css';
import Property1 from './assets/pokemon tcg/圖示/屬性/屬性表.png'

import Testpage from './Testpage';

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
      <Route path="/test" element={<Testpage />}/>
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
      <div className='button'>
        <ul>
          <li><Link to="/" className='nav-button'>首頁</Link></li>
          <li className="dropdown">
            <button className="nav-button dropbtn" onClick={handleGalleryClick}>圖鑑</button>
            <div className="dropdown-content">
              <Link to="/gallery1">超系卡組</Link>
              <Link to="/gallery2"><image></image>電系卡組</Link>
              <Link to="/gallery3"><image></image>火系卡組</Link>
              <Link to="/gallery4"><image></image>鬥系卡組</Link>
              <Link to="/gallery5"><image></image>草系卡組</Link>
              <Link to="/gallery6"><image></image>水系卡組</Link>
              <Link to="/gallery7"><image></image>惡系卡組</Link>
              <Link to="/gallery8"><image></image>鋼鐵卡組</Link>
              <Link to="/gallery9"><image></image>龍系卡組</Link>
              <Link to="/gallery10"><image></image>無屬系卡組</Link>
            </div>
          </li>
          <li><Link to="/profile" className='nav-button'>卡包資訊</Link></li>
          <li><Link to="/settings" className='nav-button'>卡組T表</Link></li>
          <li><Link to="/test" className='nav-button'>test</Link></li>
        </ul>
      </div>
    </nav>
  );
};
const Home: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <div className='home'>

      <div className='cover'>
        <h1>Pokemon TCG Pocket</h1>
        <button className='scroll-button' onClick={() => handleScrollTo('rule')}>規則</button>
        <button className='scroll-button' onClick={() => handleScrollTo('properties')}>屬性</button>
      </div>
      <div id="rule">
        <h1>規則</h1>
        <div className='rules'>
          <h2>遊戲規則</h2>
          <p>
            <ul>
              <p>每組卡組一定要放滿20張卡和最少1張基礎寶可夢</p>
              <p>每組卡組最多選擇2種不同屬性能量</p>
              <p>若是雙能量，每回合系統會隨機給你1種屬性能量和告知你下個屬性能量</p>
              <p>卡組抽完不會判輸，比賽繼續</p>
              <p>每回合只能使用1張訓練家卡</p>
              <p>寶可夢無法在當回合進階，下個回合才可以</p>
              <p>與玩家對戰，每回合有時間限制(防止掛機拖太久)</p>
              <p>寶可夢血量值為0時，會判定昏厥離場</p>
              <p>昏厥Ex寶可夢可以獲得2分其餘的1分</p>
            </ul>
          </p>
        </div>
        <div className='status'>
          <h2>狀態</h2>
          <p>
            <p>*進化和撤退或使用物品卡都可以解除狀態(目前沒有此物品卡)</p>
            <p>「中毒」	每回合都 -10血量</p>
            <p>「灼傷」	每回合都 -20血量，投硬幣正面解除反面繼續燒</p>
            <p>「睡眠」	無法使用招式和撤退，投硬幣正面解除反面繼續睡</p>
            <p>「麻痺」	無法使用招式和撤退，度過一個自己回合結束即可解除</p>
            <p>「混亂」	使用招式時，投硬幣正面成功使用招式，反面打自己 -30血量(這條還沒看過不確定)</p>
          </p>
        </div>
        <div className='win'>
          <h2>獲勝條件</h2>
          <p>
            <p>優先獲得3分</p>
            <p>對方場上沒有寶可夢</p>
            <p>對方投降</p>
            <p>對方掉線超時</p>
          </p>
        </div>
      </div >
      <div id="properties">
        <h1>屬性相剋</h1>
          <img src={Property1} alt='屬性表' className='Property1'/>
      </div>
    </div >

  );
}

export default App;
