import React from 'react';
import T from './assets/bg/T表.png';
const Settings: React.FC = () => {
  return (
    <div className='home'>
    <div className='page1'>
      <h1>卡組T表</h1>
      <img src={T} alt=''className='T'/>
    </div>
    </div>
  );
}

export default Settings;
