import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


const Count = ({props, setAllPrice, setAllQuantity}) => {
    const {min, max, price, name} = props
    const [quantity, setQuantity] = useState(min)
    let allPrice = price * quantity
    const inc = async () => {
        if (quantity >= max) {
            return false
        }
        setQuantity(count => count + 1)
        setAllPrice(count => count + price)
        setAllQuantity(count => count + 1)
    }

    const dec = () => {
        if (quantity <= min) {
            return false
        }
        setQuantity(count => count - 1)
        setAllPrice(count => count - price)
        setAllQuantity(count => count - 1)
    }

    useEffect(() => {
            setAllPrice(count => count + (allPrice / 2))
        setAllQuantity(count => count + (quantity / 2));
    },[1])

    return (
        <>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <Button style={{marginLeft: "5px"}} onClick={inc} variant="outlined" startIcon={<AddIcon/>}/>
                {quantity}
                <Button style={{marginLeft: "5px"}} onClick={dec} variant="outlined" startIcon={<RemoveIcon/>}/>
            </td>
            <td>
                {allPrice}
            </td>
        </>
    );
};

export default Count;