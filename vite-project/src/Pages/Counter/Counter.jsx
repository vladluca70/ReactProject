import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Counter.css"; 

function Counter() {
    const [number, setNumber] = useState(0);

    function handleIncrement() {
        setNumber(n => n + 1);
    }

    function handleDecrement() {
        setNumber(n => n - 1);
    }

    function handleReset() {
        setNumber(0);
    }

    useEffect(() => {
        document.title = `The number is ${number}`;
    }, [number]);

    return (
        <div className="counter-container">
            <h1 className="counter-value">{number}</h1>

            <div className="button-group">
                <button className="btn increment" onClick={handleIncrement}>Increment</button>
                <button className="btn reset" onClick={handleReset}>Reset</button>
                <button className="btn decrement" onClick={handleDecrement}>Decrement</button>
            </div>

            <Link className="home-link" to={'/'}>Go back home</Link>
        </div>
    );
}

export default Counter;
