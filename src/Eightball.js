
import React, { useState } from 'react';
import './Eightball.css';

function Eightball (props) {
    const [text, setText] = useState('Think of a Question ...');
    const [color, setColor] = useState('teal');

    function random(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return randomIndex;
    }

    function changeDisplay () {
        const index = random(props.data);

        setText(props.data[index].msg);
        setColor(props.data[index].color);
    }

    function reset () {
        setText('Think of a Question ... (again)');
        setColor('black');
    }

    return (
        <React.Fragment>
            <div 
                className="Eightball" 
                style={{ backgroundColor : color }}
                onClick={changeDisplay}
            >
                <p>{text}</p>
    
    
            </div>
    
            <button className="Eightball-button" onClick={reset}>Reset Game</button>

        </React.Fragment>

    )
}

{/* <ul>
    {props.data.map((x, i) => <li key={i}> {x.msg} </li>)}
</ul> */}

export default Eightball;