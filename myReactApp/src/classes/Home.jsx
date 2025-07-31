import React from 'react';
import { useState } from 'react';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = { };
    }
    render(){
        const [count, setCount] = useState(0);
        
        return (
            <>
                <h1>Home Counter</h1>
                <p>Count : {count}</p>
                <button onClick = {() => setCount(count + 1)}>Increment</button>
                <button onClick = {() => setCount(count - 1)}>Decrement</button>
            </>
        )

    }
}

export default Home;