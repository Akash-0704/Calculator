window.onload = function(){

    let one = document.getElementById("1");
    let two = document.getElementById("2");
    let three = document.getElementById("3");
    let four = document.getElementById("4");
    let five = document.getElementById("5");
    let six = document.getElementById("6");
    let seven = document.getElementById("7");
    let eight = document.getElementById("8");
    let nine = document.getElementById("9");
    let zero = document.getElementById("0");
    let plus = document.getElementById("+");
    let minus = document.getElementById("-");
    let divide = document.getElementById("/");
    let multiply = document.getElementById("*");
    let equalTo = document.getElementById("=");
    let clear = document.getElementById("ac");
    let display = document.getElementById("display");
    let number = "";
    let operator = "";
    let result = 0;

    function toPerform(n){
        if (operator == "+"){
            result = result + n;
        }else if (operator == "-"){
            result = result - n;
        }else if (operator == "*"){
            result = result*n;
        }else if (operator == "/"){
            result = result/n;
        }else if (result != 0){
            result = n;
        }else{
            result = result + n;
        };
    };

    one.onclick = function(){
        display.innerHTML = display.innerHTML + 1;
        number = number + "1";
    };

    two.onclick = function(){
        display.innerHTML = display.innerHTML + 2;
        number = number + "2";
         
    };

    three.onclick = function(){
        display.innerHTML = display.innerHTML + 3;
        number = number + "3";
    };

    four.onclick = function(){
        display.innerHTML = display.innerHTML + 4;
        number = number + "4";
    };

    five.onclick = function(){
        display.innerHTML = display.innerHTML + 5;
        number = number + "5";
    };

    six.onclick = function(){
        display.innerHTML = display.innerHTML + 6;  
        number = number + "6";
    };

    seven.onclick = function(){
        display.innerHTML = display.innerHTML + 7; 
        number = number + "7";
    };

    eight.onclick = function(){
        display.innerHTML = display.innerHTML + 8;
        number = number + "8";
    };

    nine.onclick = function(){
        display.innerHTML = display.innerHTML + 9;
        number = number + "9";
    };

    zero.onclick = function(){
        display.innerHTML = display.innerHTML + 0;
        number = number + "0";
    };

    clear.onclick = function(){
        display.innerHTML = "";
        number = "";
        operator = "";
        result = 0;
    };

    minus.onclick = function(){
        display.innerHTML = display.innerHTML + '-'
        let intNumber = parseInt(number);
        number = "";
        toPerform(intNumber);
        operator = "-";
    };

    plus.onclick = function(){
        display.innerHTML = display.innerHTML + '+'
        let intNumber = parseInt(number);
        number = "";
        toPerform(intNumber);
        operator = "+";
    };

    multiply.onclick = function(){
        display.innerHTML = display.innerHTML + '*';
        let intNumber = parseInt(number);
        number = "";
        toPerform(intNumber);
        operator = "*";
    };

    divide.onclick = function(){
        display.innerHTML = display.innerHTML + '/';
        let intNumber = parseInt(number);
        number = "";
        toPerform(intNumber);
        operator = "/";
    };

    equalTo.onclick = function(){
        let intNumber = parseInt(number);
        toPerform(intNumber);
        display.innerHTML = result;
        number = result.toString();
        console.log(number);
        operator = "";
    };

};