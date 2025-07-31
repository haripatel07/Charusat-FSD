import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = { counter : 1 };
    }
    render(){
        return(
            <>
                <h1>Counter App</h1>
                
            </>
        )
    }
}