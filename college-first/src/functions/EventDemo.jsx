function EventDemo(){
    function demo(){
        alert("Normal Function")
    }

    const demoArrow = () => {
        alert("Arrow Function")
    }
    
    const printData = (event) => {
        console.log("Type of Event: ", event.type);
        console.log("Name: ", event.target.name);
        console.log("Value: ", event.target.value);
    }
    return(
        <>
            <input type='button' onClick = {demo} value="Function" />
            <input type = "button" onClick = {demoArrow} value = "Arrow Function" />
            <input type = "button" onClick = {() => alert("Inline Function")} value = "Inline Function" />
            <input type = "button" onClick = {printData} value = "Print Data" />
            Text1<input type = "text" name = "txt1" onChange = {printData} />
            Text2<input type = "text" name = "txt2" onChange = {printData} />

        </>
    )
}
export default EventDemo;