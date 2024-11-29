import React, {useState} from "react";

export default function Counter (){

    const [count, setCount] = useState(0);

    const decrease = () => {
        setCount(prevCount => prevCount - 1);
    }
    const reset = () => {
        setCount(0);
    }
    const increase = () => {
        setCount(prevCount => prevCount + 1);
    }

    return(
        <div className="counterContainer">
            <span className = "countSpan"> {count} </span>
            <button onClick={decrease}>decrease</button>
            <button onClick={reset}>reset</button>
            <button onClick={increase}>increase</button>
        </div>
    );
}