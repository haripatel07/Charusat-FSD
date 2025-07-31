import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = { counter : 1 };
    }
    incrementData(){
        if (this.state.counter >= 3){
            this.setState({msg: "Sorry value cannot exceed 3"});
        }
        else{
            this.setState({ counter: this.state.counter + 1, msg:'' })
        }
    }
    decrementData(){
        if (this.state.counter <= 1){
            this.setState({msg: "Sorry value cannot go under 1"});
        }
        else{
            this.setState({ counter: this.state.counter - 1, msg:'' })
        }
    }
    resetData(){
        this.setState({ counter : 1, msg: ''});
    }
    
    render(){
        return(
            <>
                <h1>Counter App</h1>
                Counter value : {this.state.counter}
                <br />
                <input type = "button" onClick = {this.incrementData.bind(this)} value = "+" />
                <input type = "button" onClick = {this.decrementData.bind(this)} value = "-" />
                <input type = "button" onClick = {this.resetData.bind(this)} value = "Reset" />
                <p style = {{ color : 'red'}}>{this.state.msg}</p>
            </>
        )
    }
}

export default Counter;