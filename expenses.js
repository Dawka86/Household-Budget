const inputRent = document.getElementById("rent");
const inputWater = document.getElementById("water");
const inputElectricity = document.getElementById("electricity");
const inputGas = document.getElementById("gas");
const inputInternet = document.getElementById("internet");
const inputTv = document.getElementById("tv");
const inputLoan = document.getElementById("loan");
const inputInsurance = document.getElementById("insurance");
const inputFuel = document.getElementById("fuel");
const inputTransport = document.getElementById("transport");
const inputTotal = document.getElementById("totalexpenses");

function calculateCompoundE(rent, water, electricity, gas, internet, tv, loan, insurance, fuel, transport, ) {
    return (rent / 1) + (water / 1) + (electricity / 1) + (gas / 1) + (internet / 1) + (tv / 1) + (loan / 1) + (insurance / 1) + (fuel / 1) + (transport / 1);

}

document.getElementById("inputGroup").addEventListener("click", function() {
    let rent = inputRent.value;
    let water = inputWater.value;
    let electricity = inputElectricity.value;
    let gas = inputGas.value;
    let internet = inputInternet.value;
    let tv = inputTv.value;
    let loan = inputLoan.value;
    let insurance = inputInsurance.value;
    let fuel = inputFuel.value;
    let transport = inputTransport.value;
    let result = calculateCompoundE(rent, water, electricity, gas, internet, tv, loan, insurance, fuel, transport, );
    inputTotal.value = result;

})
const inputFood = document.getElementById("food");
const inputGifs = document.getElementById("gifts");
const inputMedicine = document.getElementById("medicine");
const inputDoc = document.getElementById("visit");
const inputHolliday = document.getElementById("holidays");
const inputRen = document.getElementById("renovation");
const inputClot = document.getElementById("clothes");
const inputMot = document.getElementById("mot");
const inputO = document.getElementById("other");
const inputTravel = document.getElementById("travel");
const totalOneOff = document.getElementById("totalexp");

function totalSumOff(food, gifts, medicine, visit, holidays, renovation, clothes, mot, travel, other) {
    return (food / 1)+ (gifts / 1) + (medicine / 1) + (visit / 1) + (holidays / 1) + (renovation / 1) + (clothes / 1) + (mot / 1) + (travel/1)+ (other / 1);

}
document.getElementById("inputGrou").addEventListener("click", function() {
    let food = inputFood.value;
    let gifts = inputGifs.value;
    let medicine = inputMedicine.value;
    let visit = inputDoc.value;
    let holidays = inputHolliday.value;
    let renovation = inputRen.value;
    let clothes = inputClot.value;
    let travel = inputTravel.value;
    let mot = inputMot.value;
    let other = inputO.value;
    let result = totalSumOff(food, gifts, medicine, visit, holidays, renovation, clothes, mot, travel, other, );
    totalOneOff.value = result;
})