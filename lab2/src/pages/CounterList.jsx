import React from 'react';
import CounterListComponent from "../components/CounterList";

const CounterList = () => {
    const counters = [
        { id:1 ,def: 6, min: -5, max: 10 },
        { id:2 ,def: 5 },
        { id:3 },
    ]

    return <CounterListComponent prop={counters}/>
};

export default CounterList;