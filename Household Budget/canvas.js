const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['rent', 'water', 'electricity', 'gas', 'internet', 'tv', "loan", "insurance", "fuel", "transport"],
        datasets: [{
            label: 'Constantly expenses',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    

});
const push = document.getElementById("inputGroup");
push.addEventListener("click", pushSumEx);

function pushSumEx() {
    const [
  inputRent,
  inputWater,
  inputElectricity,
  inputGas,
  inputInternet,
  inputTv,
  inputLoan,
  inputInsurance,
  inputFuel,
  inputTransport,
] = document.querySelectorAll('#rent, #water, #electricity, #gas, #internet, #tv, #loan, #insurance, #fuel, #transport');


    myChart.data.datasets[0].data.push(inputRent.value);
    myChart.data.datasets[0].data.push(inputWater.value);
    myChart.data.datasets[0].data.push(inputElectricity.value);
    myChart.data.datasets[0].data.push(inputGas.value);
    myChart.data.datasets[0].data.push(inputInternet.value);
    myChart.data.datasets[0].data.push(inputTv.value);
    myChart.data.datasets[0].data.push(inputLoan.value);
    myChart.data.datasets[0].data.push(inputInsurance.value);
    myChart.data.datasets[0].data.push(inputFuel.value);
    myChart.data.datasets[0].data.push(inputTransport.value);
    myChart.update();
    myChart.data.datasets[0].data.splice(0, myChart.data.datasets[0].data.length);
}

const ctxx = document.getElementById('mych').getContext('2d');
const mych = new Chart(ctxx, {
    type: 'bar',
    data: {
        labels: ["gifts", "medicine", "visit", "holidays", "renovation", "clothes", "mot", "other", ],
        datasets: [{
            label: 'One-off expenses',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

});



const pusch = document.getElementById("inputGrou");
pusch.addEventListener("click", puschSum);

function puschSum() {

    const inputGifs = document.getElementById("gifts");
    const inputMedicine = document.getElementById("medicine");
    const inputDoc = document.getElementById("visit");
    const inputHolliday = document.getElementById("holidays");
    const inputRen = document.getElementById("renovation");
    const inputClot = document.getElementById("clothes");
    const inputMot = document.getElementById("mot");
    const inputO = document.getElementById("other");


    mych.data.datasets[0].data.push(inputGifs.value);
    mych.data.datasets[0].data.push(inputMedicine.value);
    mych.data.datasets[0].data.push(inputDoc.value);
    mych.data.datasets[0].data.push(inputHolliday.value);
    mych.data.datasets[0].data.push(inputRen.value);
    mych.data.datasets[0].data.push(inputClot.value);
    mych.data.datasets[0].data.push(inputMot.value);
    mych.data.datasets[0].data.push(inputO.value);

    mych.update();
    mych.data.datasets[0].data.splice(0, mych.data.datasets[0].data.length);

}


const ctxxx = document.getElementById('myConsumentIncome').getContext('2d');
const myConsumentIncome = new Chart(ctxxx, {
      type: 'pie',
      data: {
        labels: ['pay', 'bonus'],
        datasets: [{
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: "Total Income"
          }
        }
      }
    });
  const pushIncome = document.getElementById("calculate");
  pushIncome.addEventListener("click", pushInco);


  function pushInco(){
    const inputPay = document.getElementById("pay");
    const inputBonus = document.getElementById("bonus");
    
    myConsumentIncome.data.datasets[0].data.push(inputPay.value);
    myConsumentIncome.data.datasets[0].data.push(inputBonus.value);
    myConsumentIncome.update();
    myConsumentIncome.data.datasets[0].data.splice(0, myConsumentIncome.data.datasets[0].data.length);
  }
