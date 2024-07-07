const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators = ["%","+","-","*","/","="]
let history = document.querySelector(".history");
let output = ""

const calculate = (catchValue) => {
    if(catchValue === "=" && output !== ""){
        if(output.includes('/0')){
            display.value = "Error";
            return;
        }
        history.innerHTML = output;
        output = eval(output.replace("%","/100"));
    }else if (catchValue === "AC"){
        output = "";
        history.innerHTML = "";
    }else if(catchValue === "DEL"){
        output = output.toString().slice(0, -1);
    }else{
        if(operators.includes(catchValue)){
            if (output === "" || operators.includes(output.slice(-1))) {
                output = output.slice(0, -1) + catchValue;
            }else{
                output += catchValue;
            }
        }else{
            output += catchValue;
        }   
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
})
