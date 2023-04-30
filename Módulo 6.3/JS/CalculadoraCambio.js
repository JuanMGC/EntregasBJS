
const billsAndCoins = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
var change = new Array(billsAndCoins.length).fill(0);

const inputTotal = document.getElementById('total');
const inputAmount = document.getElementById('amount');
const totalPayBack = document.getElementById('payBack');
const btnCalculate = document.getElementById('btnCalculate');
const divChange = document.getElementById('divChange');

const giveChange = (amount) => {
    for (var i = 0; i < billsAndCoins.length; i++) {
        if (amount >= billsAndCoins[i]) {
            change[i]++;
            amount -= billsAndCoins[i];
            i--;
        }
    }
}

const printChange = () => {
    var output = '';
    for (var i = 0; i < billsAndCoins.length; i++) {
        if (change[i] > 0) {
            if (i <= 5) {
                output += change[i] + " billete de " + billsAndCoins[i] +  " euros<br>";
            } else if (i <= 7) {
                output += change[i] + " moneda de " + billsAndCoins[i] + " euros<br>";
            } else {
                output += change[i] + " moneda de " + billsAndCoins[i] * 100 + " céntimos<br>";
            }
        }
    }
    divChange.innerHTML = output;
}

btnCalculate.addEventListener('click', function() {
    var total = Number(inputTotal.value);
    var money = Number(inputAmount.value);
    var refund = money - total;
        if (refund >= 0) {
            totalPayBack.innerHTML = refund.toFixed(2) + ' €';
                if (refund > 0) {
                    giveChange(refund);
                    printChange();
                    change = new Array(billsAndCoins.length).fill(0);
                }
        }else {
        totalPayBack.innerHTML = 'El importe entregado es insuficiente. ';
        }
});