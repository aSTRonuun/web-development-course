import handleTransaction from "./handleTransaction.js";
import handleHistory from "./handleHistory.js";

function handleBalance(value) {
    var balance = document.getElementById("balance");
    balance.innerHTML = `Saldo atual: ${value}`;
}

function handleTravelUpdate(totalTravel, totalTravelValue) {
    var totalTravelFormat = document.getElementById("totalTravels");
    totalTravelFormat.innerHTML = `${totalTravel} - ${totalTravelValue} pontos gastos`;
}


function travelFunction() {

    let balanceMax = 20000;
    let currentBalance = balanceMax;
    let totalTravels = 0;
    let totalTravelsValue = 0;
    handleBalance(currentBalance);

    document.addEventListener('submit', function(event) {
        event.preventDefault();

        let transport = event.target.transport.value;
        let modality = event.target.modality.value;
        let roundTrip = event.target.roundTrip.checked;

        let transactionValue = handleTransaction(transport, modality, roundTrip);

        if(transactionValue != null) {
            if(currentBalance - transactionValue >= 0) {
                currentBalance -= transactionValue;
                totalTravels++;
                totalTravelsValue += transactionValue;
                handleBalance(currentBalance);
                handleHistory(transport, modality, roundTrip, transactionValue);
                handleTravelUpdate(totalTravels, totalTravelsValue);
            } else {
                alert("Saldo insuficiente");
            }
        } else {
            alert("Opção inválida");
        }
    })
}

travelFunction();