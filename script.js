const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators = ["%","+","-","*","/","="]
let history = document.querySelector(".history");
let output = ""

const calculate = (catchValue) => {
    if(catchValue === "=" && output !== ""){
        history.innerHTML = output;
        output = eval(output.replace("%","/100"));
    }else if (catchValue === "AC"){
        output = "";
        history.innerHTML = "";
    }else if(catchValue === "DEL"){
        output = output.toString().slice(0, -1);
    }else{
        if (output === "" && operators.includes(catchValue)) return;
        output += catchValue;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
})