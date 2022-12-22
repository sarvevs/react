import React from 'react';

const Task3Component = ({name, name1}) => {
    return (
        <div>
            <p>   hello, my name is <span>{name}</span></p>
            <p>       hello, my name is {name1}</p>
        </div>
    );
};

export default Task3Component;