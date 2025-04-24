const display = document.querySelector("#display");
display.placeholder="0";


let variableone,operator,variabletwo;
    function operate(variableone,operator,variabletwo){     
        variableone = parseInt(variableone);
        variabletwo = parseInt(variabletwo);
        if(operator==='+')
            return display.textContent=variableone+variabletwo;
        
        else if(operator==='-')
            return display.textContent=variableone-variabletwo;
        
        else if(operator==='*')
            return display.textContent=variableone*variabletwo;
        
        else if(operator==='/')
            return display.textContent=variableone/variabletwo;
        else if(operator==='%')
            return display.textContent=variableone%variabletwo;     
    }

    function clearscreen(){
        display.textContent="0";
        variableone='';
        variabletwo='';
        operator='';
        // console.log(variableone,operator,variabletwo)
    
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
        if(display.textContent.length>13){
            return;}
        for(i=0;i<display.textContent.length;i++){
            if(display.textContent[i]=='.')
                return;}
        display.textContent +=dot;
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

    function addition(){
        variableone = display.textContent
        display.textContent = 0;
        operator ="+"
        // console.log(variableone,operator)
    }
    function subtraction(){
        variableone = display.textContent
        display.textContent = 0;
        operator ="-"
        // console.log(variableone,operator)
    }
    function multiplication(){
        variableone = display.textContent
        display.textContent = 0;
        operator ="*"
        // console.log(variableone,operator)
    }
    function divition(){
        variableone = display.textContent
        display.textContent = 0;
        operator ="/"
        // console.log(variableone,operator)
    }
    function modulas(){
        variableone = display.textContent
        display.textContent = 0;
        operator ="%"
        // console.log(variableone,operator)
    }

    function equals(){
        variabletwo = display.textContent;
        operate(variableone,operator,variabletwo); 

    }

  