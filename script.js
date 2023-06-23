function calculate() {
    //Ambil data dari input HTML
    let initalBalance = document.getElementById("initial-balance").value;
    let risk = document.getElementById("risk").value;
    let openPrice = document.getElementById("open-price").value;
    let stopLoss = document.getElementById("stop-loss").value;

    //Variabel Menyimpan perhitungan
    let rpt = Number(initalBalance) * Number(risk/100); //100 * 0.1 = 10
    let pips = 0;

    if(openPrice > stopLoss) {
        pips = (Number(openPrice) - Number(stopLoss)) * 1000; //1.07983 - 1.07963 = 0.00020 * 1000 = 0.2
    }
    else if (openPrice < stopLoss) {
        pips = (Number(stopLoss) - Number(openPrice)) * 1000;
    }
    else {
        pips = 0;
    }

    let lot = ((rpt / pips)/ 100).toFixed(2);

    document.getElementById('lot').innerHTML = lot;
    return false;
} 

function sliderValue() {
    let slider = document.getElementById("risk").value;
    document.getElementById("sliderLabel").innerHTML = slider + " %";
}