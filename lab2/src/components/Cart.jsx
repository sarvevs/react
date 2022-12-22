import React, {useState} from 'react';
import Count from "./count";

const  CartComponent = () => {
    const arr = [
        {
           name: 'qqqq',
           price: 111,
           min:1,
           max: 10
        },
        {
            name: 'wwww',
            price: 222,
            min:5,
            max: 10
        },
        {
            name: 'eeee',
            price: 4444,
            min:1,
            max: 2
        },
    ]
    const [allQuantity, setAllQuantity] = useState(0)
    const [allPrice, setAllPrice] = useState(0)
    return (
        <table>
            <tbody>
            <tr>
                <th>Назва</th>
                <th>Ціна</th>
                <th>Кількість</th>
                <th>Всього</th>
            </tr>
            {arr.map(item =>
            <tr key={item.name}>
                <Count props={item} setAllPrice={setAllPrice} setAllQuantity={setAllQuantity} />
            </tr>
            )}
            <tr>
                <th colSpan={2}>Всього</th>
                <th>{allQuantity}</th>
                <th>{allPrice}</th>
            </tr>
            </tbody>
        </table>
    );
};

export default CartComponent;