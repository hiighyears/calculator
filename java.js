const display = document.querySelector("#display");
display.placeholder="0";


let variableone,operator,variabletwo;
    // variableone =  prompt("enter a number");
    // operator =  prompt("enter a operator");
    // variabletwo =  prompt("enter a number");
    function operate(variableone,operator,variabletwo){
        variableone = parseInt(variableone);
        variabletwo = parseInt(variabletwo);
        if(operator==='+')
            return variableone+variabletwo;
        
        else if(operator==='-')
            return variableone-variabletwo;
        
        else if(operator==='*')
            return variableone*variabletwo;
        
        else if(operator==='/')
            return variableone/variabletwo;
        
    }
    function operanddisplay(operand){
    if(display.textContent.length>19){
        return;
    }
    if(display.textContent==="0"){
        display.textContent=operand;   
    }else {
    display.append(operand);
    }
    // operate(variableone,operator,variabletwo); 
  }