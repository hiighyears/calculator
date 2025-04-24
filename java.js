const display = document.querySelector("#display");
display.placeholder="0";


let variableone,operator,variabletwo;
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

    function clearscreen(){
        display.textContent="0";
    }

    function changesign(){
        if(display.textContent[0]==="-"){
            display.textContent=display.textContent.slice(1) ;
            return;
        }else{
        // display.prepend("-");
            if(display.textContent!=0)
                display.textContent = "-" + display.textContent;}
    }

    function decimaloperator(dot){
        for(i=0;i<display.length;i++){
            if(display[i]=='.')
                return;
            else
            display.textContent +=dot;

        }
    }

    function backspace(){
        if(display.textContent.length===2 && display.textContent[0]==='-'||display.textContent.length===1)
            display.textContent=0;
        else
        display.textContent=display.textContent.slice(0,display.textContent.length-1) ;
    }

    function operanddisplay(operand){
    if(display.textContent.length>13){
        return;
    }
    if(display.textContent==="0"){
        display.textContent=operand;   
    }else {
    // display.append(operand);
    display.textContent +=operand;

    }}

    // operate(variableone,operator,variabletwo); 
  