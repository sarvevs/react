import React from 'react';

const Task4Component = () => {
    const cards = [
        {
            p: "qqqqqqqqqqq.",
            h3: "111111",
            status: {color: 'green'}
        },
        {
            p: "wwwwwwwwwww.",
            h3: "222222",
            status: {color: 'blue'}
        },
    ]
    return (
        <div className='container'>
            {cards.map((card, index = 0) =>
                <div key={index++} className='cont'>
                    <div className='cards'>
                        <div className="img">
                            ваше зображення
                        </div>
                        <p>{card.p}</p>
                        <h3 className='price' style={card.status}>{card.h3} ₴</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Task4Component;