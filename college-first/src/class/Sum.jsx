import React from "react";

class Sum extends React.Component{
    constructor(props){
        super(props);
        this.state = { temp : {} };
    }
    doValidation(){
        const { no1, no2 } = this.state
        var temp = {}
        var isValid = true
        // Check Condition for TextBox1
        if(!no1){
            temp.txt1 = "Enter No1"
            isValid = false
        }
        if (isNaN(no1)){
            temp.txt1 = "Enter only digits in no1"
            isValid = false
        }
        if(!no2){
            temp.txt2 = "Enter No2"
            isValid = false
        }
        this.setState({ errmsg : temp })
        return isValid;
    }
    doSum(){
        const ans = this.doValidation();
        
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