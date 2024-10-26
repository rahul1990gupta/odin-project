let stack = []
const buttons = document.querySelectorAll('button');



for (let i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        let cl = buttons[i].classList;
        let value = buttons[i].value;
        
        if( cl.contains("operand")){
            processOperand(value);
        }
        else if(cl.contains("operator")) {
            processOperator(value);
        }
        else if(cl.contains("clear")){
            clear();
        }
        else if (cl.contains("sign")){
            sign();
        }
        else if (cl.contains("equals")){
            equals();
        }
        else if (cl.contains("decimal")){
            decimal();
        }
        console.log(stack);
    })
}

function updateDisplay(result){
    document.querySelector(".result").innerText = result;
}

function processOperand(value){
    if (stack.length == 0){
        stack.push(value);
        updateDisplay(value);

    }
    else if(stack.length == 2){
        stack.push(value);
        updateDisplay(value);
    }
    else {
        stack[stack.length -1] += value
    }
}

function processOperator(value){
    if (stack.length ==1){
        stack.push(value);
    }
    else if (stack.length ==3){
        secondOperand = parseFloat(stack.pop());
        op = stack.pop();
        firstOperand = parseFloat(stack.pop());
        finalResult = computeOp(firstOperand, secondOperand, op);
        updateDisplay(finalResult);

        stack.push(finalResult);
        stack.push(value);
    }
}

function computeOp(first, second, op){
    if (op === "+"){
        return first + second;
    }
    else if (op==="-") {
        return first -second;
    }
    else if (op=== "*"){
        return first * second;
    }
    else if (op === "/"){
        return first/second;
    }
}


function clear(){
    stack = [];
    updateDisplay("0.0")
}

function sign(){
    stack[stack.length -1] *= -1;
    updateDisplay(stack[stack.lengh-1]);
}

function equals(){
    if (stack.length ==3){
        secondOperand = parseFloat(stack.pop());
        op = stack.pop();
        firstOperand = parseFloat(stack.pop());
        finalResult = computeOp(firstOperand, secondOperand, op);
        updateDisplay(finalResult);
    }

}

function decimal(){
    let lastValue = stack[stack.length -1];
    if(stack.length ==0){
        stack[0] = "0."
    }
    if(!lastValue.includes(".")){
        stack[stack.length-1] +="."
    }
    
}
