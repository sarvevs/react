import React, {useState} from 'react';
import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const MyCounter = (props) => {

    let {def = 0, min = -10, max = 10} = props.data

    const [err, setErr] = useState('');
    const [count, setCount] = useState(def);


    const inc = () => {
        if (count >= max) {
            setErr('максимальне число')
            setTimeout(() => setErr(''), 4000)
            return false
        }
        setCount(count => count + 1)
    }

    const dec = () => {
        if (count <= min) {
            setErr('мінімальне число')
            setTimeout(() => setErr(''), 4000)
            return false
        }
        setCount(count => count - 1)
    }

    const res = () => {
        setErr('')
        setCount(def)

    };
    return (
        <div>
            <p>Лічильник: {count}      </p>

            <Button style={{marginLeft: "5px"}} onClick={inc} variant="outlined" startIcon={<AddIcon/>}/>
            <Button style={{marginLeft: "5px"}} onClick={dec} variant="outlined" startIcon={<RemoveIcon/>}/>
            <Button style={{marginLeft: "5px"}} onClick={res} variant="outlined" startIcon={<RestartAltIcon/>}
                    text="Reset"/>

            <p>{err}</p>
        </div>

    );
};

export default MyCounter;