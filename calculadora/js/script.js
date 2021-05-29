function insert(num) {
    if(SyntaxError) { 
        return
    }
    
    if(display.value.length < 20) {
      
        if(isNaN(num)) {
            display.value += num
        }
        else if(display.value.length == 1 && display.value[0] == 0) {
            display.value = num
        }
        else {
            display.value += num
        }
    }
    else {
        return
    }
}

function clean() {
    SyntaxError = false
    display.value = "0";

}

function equal() {
    var exp = display.value
    var flag = false  

    for(i = 0; i < exp.length; i++) {
        if(isNaN(exp[i]) && isNaN(exp[i+1])) {
            if(exp[i] != "+" && exp[i] != "-") {
                display.value = "Syntax Error"
                SyntaxError = true
            }

        }
    }

    if(flag == false) {
        var answer = eval(exp)

        if(isFinite(answer)) {
            display.value = answer
        }
        else {
            display.value = "Math Error" 
            SyntaxError = true
        }
    }
   
    
}

function back() {
    if(SyntaxError) {
        return
    }

    display.value = display.value.substring(0,display.value.length-1)
    
    if(display.value == "") {
        display.value = "0"
    }

}


const display = document.querySelector('.display')

const numbers = document.querySelectorAll('.number')

numbers.forEach( (button) => {
    button.addEventListener('click', calculate)
})

const operators = document.querySelectorAll('.operator')

operators.forEach( (button) => {
    button.addEventListener('click', calculate)
})

window.addEventListener('keypress', check)
function check(key) {
    let keyValue = key.key
    if (key.keyCode) {
        if(!isNaN(keyValue)) {
            insert(keyValue)
        } else { 
            if(display.value.length == 1 && display.value[0] == 0) {
                return
            } else {
                for(i = 0; i < operators.length; i++) {
                    if(keyValue == operators[i].value) {
                        if (keyValue == "c") {
                            clean()
                        } else if (keyValue == "<") {
                            back()
                        } else if (keyValue == "=") {
                            equal()
                        } else {
                            display.value += keyValue
                        }
                    }
                }
            } 
        }
    }
}


var SyntaxError = false

function calculate(event) {
    var buttonValue = event.target.value


    if (!isNaN(buttonValue) || (isNaN(buttonValue) && buttonValue != "=" && buttonValue != "<" && buttonValue != "c")) {
        if(buttonValue == "x") {
            buttonValue = "*"
        }


        insert(buttonValue) 

    }
    else if (buttonValue == '=') {
        equal()
    }
    else if (buttonValue == "<") {
        back()
    }
    else if (buttonValue == "c") {
        clean()
    }
    
}
