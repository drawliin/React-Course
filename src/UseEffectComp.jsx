import React, {useState, useEffect} from 'react';

function UseEffectComp(){
    
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `You clicked ${count} ${color} times`;
    }, [count, color]);

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>Add</button>
            <button onClick={() => setCount(c => c - 1)}>Substract</button>
            <button onClick={() => setColor((c) => c === 'green' ? 'red' : 'green')}>Change Color</button>
        </>
    )
}

export default UseEffectComp;