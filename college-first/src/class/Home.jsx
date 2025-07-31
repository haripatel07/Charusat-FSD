import React from 'react';
import '../styles/Home.css';
import EventDemo from '../functions/EventDemo';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {  };
    }
    render() {
        var a = 10;
        var b = 20;
        var myColor = { color: 'white', backgroundColor: 'green'};
        return (
            <>
                <h1>
                    Home
                </h1>
                A value is {a} <br />
                B value is {b}
                <p style = {{ color : 'red', backgroundColor: 'black' }}>Hello I am P Tag</p>
                <p style = {myColor}>I am P again</p>

                <EventDemo/>
            </>
        )   
    }
}

export default Home;