import React from 'react';

const HomeComponent = () => {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <a href="/Counter">Counter</a>
            <a href="/CounterList">CounterList</a>
            <a href="/Cart">Cart</a>
            <a href="/Game">Game</a>

        </div>
    );
};

export default HomeComponent;