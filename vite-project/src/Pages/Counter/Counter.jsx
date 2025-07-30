import { useEffect, useState } from "react";


function Counter()
{
    const [number, setNumber]=useState(0);

    function handleIncrement(){
        setNumber(n=>n+1);
    }

    function handleDecrement(){
        setNumber(n=>n-1);
    }

    function handleReset(){
        setNumber(0);
    }

    useEffect(
        ()=>{document.title=`The number is ${number}`},
        [number]
    );

    return(
        <>
            <div>
                <h1>{number}</h1> <br/>

                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </>
    );
}

export default Counter;