import React from "react";

class Sum extends React.Component{
    constructor(props){
        super(props);
        this.state = { };
    }
    doSum(){
        if (!this.state.no1){
            alert("Enter no1")
        }
        else if (!this.state.no2){
            alert("Enter no2")
        }
        else{
            var c = parseInt(this.state.no1) + parseInt(this.state.no2)
            this.setState({msg:c})
        }
    }
    render(){
        return(
            <>
                <h1>Sum</h1>
                No1: <input type="text" onChange={(e) => this.setState( {no1: e.target.value }) }/>
                No2: <input type="text" onChange={(e) => this.setState( {no2: e.target.value }) }/>
                
                <input type = "button" onClick={this.doSum.bind(this)} />
                <br />
                The sum is :{this.state.msg}
            </>
        )
    }
}

export default Sum;