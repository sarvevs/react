import React from 'react';

const Task2Component = () => {
    const obj = {
        "First Name": 'John',
        "Last Name": 'Silver',
        "Occupation": 'Pirate Captain'
    }
    const key = Object.keys(obj)
    const values = Object.values(obj)
    return (
        <div>
            <table >
                <tr><th>{key[0]}</th><td>{values[0]}</td></tr>
                <tr><th>{key[1]}</th><td>{values[1]}</td></tr>
                <tr><th>{key[2]}</th><td>{values[2]}</td></tr>
            </table>
        </div>
    );
};




export default Task2Component;