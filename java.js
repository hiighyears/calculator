let variableone,operator,variabletwo;
    variableone =  prompt("enter a number");
    operator =  prompt("enter a operator");
    variabletwo =  prompt("enter a number");
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
    console.log(operate(variableone,operator,variabletwo))    