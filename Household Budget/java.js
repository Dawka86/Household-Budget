const payInput = document.getElementById("pay");
const bonusInput = document.getElementById("bonus");
const totalInput = document.getElementById("total-value");

function calculateCompound(pay, bonus) {
    return pay + bonus;
}

document.getElementById("calculate").addEventListener("click", function() {
    let pay = parseFloat(payInput.value);
    let bonus = parseFloat(bonusInput.value);

    if (isNaN(pay) || isNaN(bonus)) {
        alert("Wprowadzono nieprawidłowe dane!");
        return;
    }

    let total = calculateCompound(pay, bonus);
    totalInput.value = total;
});

const txt1 = document.getElementById("total-value");
const txt2 = document.getElementById("totalexpenses");
const txt3 = document.getElementById("totalexp")
const btn1 = document.getElementById("press");
const out1 = document.getElementById("output");
const inc1 = document.getElementById("przy");
const wyd1 = document.getElementById("wyda");

function fun1 (){
    inc1.innerHTML = txt1.value;
    wyd1.innerHTML= Number(txt2.value) + Number(txt3.value);
    out1.innerHTML = Number(txt1.value - wyd1.innerHTML);
    
    if (out1.innerHTML > 0) {
        document.getElementById("ChangeBack").style.backgroundColor = "green";
      } else {
        document.getElementById("ChangeBack").style.backgroundColor = "red";
      }  
}
btn1.addEventListener("click", fun1);

