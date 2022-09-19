

let $buttons = document.querySelectorAll("button");
let ui = document.querySelector(".userentry");
let finalcals =document.querySelector(".finalcals");
let opPressed =false;

let valOne =[];
let valTwo =[];
var oprator =[];
let finalAnswer = 0;

[ ...$buttons].map(x => {
    x.addEventListener("click", function (e) {
        switch (this.innerHTML) {
            case "AC":
                clearDisplay();
                break;
            case "DEL":
                removeNumber();
                break;
            case "+/-":
                makeNegative();
                break;
            case "=":
                makeCalculation();
                break;
            case "+":
                oprator.splice(0, 1, this.innerHTML)
                console.log(oprator);

                storeValue();
                break;
            case "*":
                oprator.splice(0, 1, this.innerHTML)
                console.log(oprator);

                storeValue();
                break;
            case "/":
                oprator.splice(0,1, this.innerHTML)
                console.log(oprator);

                storeValue();
                break;
            case "-":
                oprator.splice(0, 1, this.innerHTML);
                console.log(oprator);
                storeValue();
                break;
            default :
            if (valOne.length>11) {
                alert("ntidak ada lagi nilai lebih dari 8");
            }

            else {
                valOne.push(this.innerText);
                ui.textContent = valOne.join("");
                console.log(valOne);
            }
            break;
        case ".":
            if (valOne.includes(".")) {
                alert("Anda tidak dapat menggunakan desimal lagi");
            } else {
                valOne.push(this.innerText);
                ui.textContent = valOne.join("");
            }
            break;
        }
    })
})


function clearDisplay() {

    ui.textContent = "";
    finalcals.textContent = ""
    valOne = [];
    valTwo = [];
    oprator = [];
}

function removeNumber(e) {

    valOne.pop();
    ui.textContent = valOne.join("");
}


function makeNegative() {

    if (valOne.length < 1) {
        return false;
    }else if(valOne[0] == "-") {
        valOne.shift()

    } else {
        valOne.unshift("-")

    }
    ui.textContent = valOne.join("");
}

function makeCalculation() {

    if (valTwo.length > 0 && oprator.length!==0) {
       
        finalAnswer = eval(valTwo + oprator + valOne.join(""));
        finalcals.textContent = "";
        finalcals.textContent = eval(finalAnswer).toFixed(2);
        ui.textContent = "";
        valTwo = eval(finalAnswer);
        valOne = [];
      

    } else if (oprator.length == 0) {

        alert("perhitungan tidak valid, tidak ada operator");
        
    }

    else {
        
        finalAnswer = finalAnswer = eval(valTwo + oprator + valOne.join(""));

        console.log("final answer");
        console.log(finalAnswer);
        finalcals.textContent = "";
        ui.textContent = "";
        finalcals.textContent = eval(finalAnswer).toFixed(2);
        //operator = [];
        valTwo = eval(finalAnswer);
        valOne = [];



    }


 

    
}

function storeValue() {




        if (valOne.length == 0 && valTwo.length==0) {
            return false;
        } else if (valTwo.length > 0) {
            finalcals.textContent = valTwo + " " + oprator;
          

            
        }else if(valTwo.length==0) {
            valTwo.push(valOne.join(""));
            valOne = [];
            ui.textContent = "";
            finalcals.textContent = "";
            finalcals.textContent = valTwo + " " + oprator

            
    }
        finalcals.textContent = valTwo + " " + oprator;

       
        
}





