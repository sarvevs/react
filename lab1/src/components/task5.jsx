import React from 'react';

const Task5Component = () => {
    const cities = [
        { id: 1, name: "Chicago"},
        { id: 2, name: "Los Angeles"},
        { id: 3, name: "New York"},
    ];

    return (
        <div>
            <select>
                {cities.map(city => <option value={city.name}>{city.name}</option>)}
            </select>
        </div>
    )
};

export default Task5Component;