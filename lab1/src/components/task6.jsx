import React, {useState} from 'react';

const Task6Component = () => {
    const [color, setColor] = useState('red')

    const colors = [
        {color:"red"},
        {color:"orange"},
        {color:"black"},
        {color:"purple"},
    ]

    return (
        <div>
            <h1 style={{color:color}}>I'm a {color} Product!</h1>
            <select onChange={(e) => setColor(e.target.value)}>
                {colors.map(res => <option key={res.color} value={res.color}>{res.color}</option>)}
            </select>
        </div>
    );
};

export default Task6Component;