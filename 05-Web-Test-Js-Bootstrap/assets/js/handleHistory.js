export default function handleHistory(transport, modality, roundTrip, transactionValue) {
    var historyTable = document.getElementById("historyTable");
    var row = historyTable.insertRow(1);
    
    if(transport == 1 && modality == 1 && roundTrip == true) {
        row.insertCell(0).innerHTML = "Avião";
        row.insertCell(1).innerHTML = "Iternacional";
        row.insertCell(2).innerHTML = "Sim";
    } else if (transport == 1 && modality == 1 && roundTrip == false) {
        row.insertCell(0).innerHTML = "Avião";
        row.insertCell(1).innerHTML = "Internacional";
        row.insertCell(2).innerHTML = "Não";
    } else if (transport == 1 && modality == 2 && roundTrip == true) {
        row.insertCell(0).innerHTML = "Avião";
        row.insertCell(1).innerHTML = "Nacional";
        row.insertCell(2).innerHTML = "Sim";
    } else if (transport == 1 && modality == 2 && roundTrip == false) {
        row.insertCell(0).innerHTML = "Avião";
        row.insertCell(1).innerHTML = "Nacional";
        row.insertCell(2).innerHTML = "Não";
    } else if (transport == 2 && modality == 3 && roundTrip == true) {
        row.insertCell(0).innerHTML = "Ônibus";
        row.insertCell(1).innerHTML = "Interestadual";
        row.insertCell(2).innerHTML = "Sim";
    } else if (transport == 2 && modality == 3 && roundTrip == false) {
        row.insertCell(0).innerHTML = "Ônibus";
        row.insertCell(1).innerHTML = "Interestadual";
        row.insertCell(2).innerHTML = "Não";
    } else if (transport == 2 && modality == 4 && roundTrip == true) {
        row.insertCell(0).innerHTML = "Ônibus";
        row.insertCell(1).innerHTML = "Intermunicipal";
        row.insertCell(2).innerHTML = "Sim";
    } else if (transport == 2 && modality == 4 && roundTrip == false) {
        row.insertCell(0).innerHTML = "Ônibus";
        row.insertCell(1).innerHTML = "Intermunicipal";
        row.insertCell(2).innerHTML = "Não";
    } else if (transport == 2 && modality == 5 && roundTrip == true) {
        row.insertCell(0).innerHTML = "Ônibus";
        row.insertCell(1).innerHTML = "Municipal";
        row.insertCell(2).innerHTML = "Sim";
    } else if (transport == 2 && modality == 5 && roundTrip == false) {
        row.insertCell(0).innerHTML = "Ônibus";
        row.insertCell(1).innerHTML = "Municipal";
        row.insertCell(2).innerHTML = "Não";
    }
    row.insertCell(3).innerHTML = transactionValue;
}