import React from 'react';
import MyCounter from "../components/Counter";

const Counter = () => {
    const counter = {
        def: 0,
        min: -10,
        max: 10
    }
    return <MyCounter data={counter}/>
};

export default Counter;