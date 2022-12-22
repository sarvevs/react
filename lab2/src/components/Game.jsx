import React, {useState} from 'react';

const GameComponent = () => {
    const [dis, setBlock] = useState(false)
    const [checkGame, setCheckGame] = useState(true)
    const [num, setNum] = useState()
    const [result, setRes] = useState('')
    const [count, setCount] = useState(0)
    const [arr, setArr] = useState([])

    const start = () => {
        setBlock(true)
        setCheckGame(false)
        setNum(Math.floor(Math.random() * (1000 - 1) + 1))
    }

    const check = () => {
        const a = document.getElementById('field').value
        if (a == num) {
            setCount(0)
            setRes('Good Job!')
            setArr([])
            setCheckGame(true)
            setBlock(false)
        }
       else if (a > num) {
            setArr(oldArray => [...oldArray, `N < ${a}`])
            setCount(count => count + 1)
        }
        else if (a < num) {
            setArr(oldArray => [...oldArray, `N > ${a}`])
            setCount(count => count + 1)

        }
        if (count === 10) {
            setArr([])
            setRes('Game Over!')
            setBlock(false)
            setCheckGame(true)
            setCount(0)
        }

    }

    return (
        <div className='game'>
            <button disabled={dis} onClick={start}>New Game</button>
            <input disabled={checkGame} type="number" id='field'/>
            <button disabled={checkGame} onClick={check}>Check</button>
            <p>Information:</p>
            <div className='info'>
                {arr.map(item =>
                    <p>{item}</p>
                )}
            </div>
            <p>Attempts: {count}</p>
            <p>Result: {result}</p>
        </div>
    );
};

export default GameComponent;