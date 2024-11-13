import React from 'react';


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
                <h1>封面</h1>
                <button onClick={() => handleScrollTo('rule1')}>規則</button>
                <button onClick={() => handleScrollTo('properties')}>屬性</button>
            </div>
            <div id="rule1">
                <h1>規則</h1>
                <h2>遊戲規則</h2>
                <p>

                </p>
            </div>
            <div id="rule2">
                <h1>規則</h1>
                <h2>狀態</h2>
                <p>

                </p>
                <h2>獲勝條件</h2>
            </div>
            <div id="properties">
                <h1>屬性</h1>
                <h2>屬性相剋</h2>
                <p>這裡是屬性部分的內容。</p>
            </div>
        </div>
    );
}

export default Home;

