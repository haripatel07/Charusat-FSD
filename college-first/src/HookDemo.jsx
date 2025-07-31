import React from 'react';

function HookDemo(){
    const [counter, setCounter] = React.useState(0);
    const [msg, setMessage] = React.useState("");

    const incrementData = () => {
        if (counter >= 5) setMessage("Sorry, value is greater than 5");
        else{
            setCounter(counter + 1);
            setMessage("");
        }
    }
    const decrementData = () => {
        if (counter <= 0) setMessage("Sorry, value is less than 0");
        else{
            setCounter(counter - 1);
            setMessage("");
        }
    }
    
    const resetData = () => {
        setCounter(0);
    }
    return(
        <>
            <h1>This is a demo of Reacts Hooks</h1>
            <h1>Counter {counter}</h1>
            <input type="button" value = "+" onClick = {incrementData} />
            <input type = "button" value = "-" onClick={decrementData} />
            <input type = "button" value = "X" onClick={resetData} />
            {msg && <h2>{msg}</h2>}
        </>
    )
}

export default HookDemo;