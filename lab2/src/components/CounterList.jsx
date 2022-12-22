import React from 'react';
import MyCounter from "./Counter";

const CounterListComponent = (props) => {

    return (
    props.prop.map(item =>
        <MyCounter key={item.id} data={item} />
    )
    );
};

export default CounterListComponent;