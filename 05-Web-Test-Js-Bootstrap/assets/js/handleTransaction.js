export default function handleTransaction(transport, modality, roundTrip) {
    
    let internationalPlanePackageValue = 5000;
    let nationalPlanePackageValue = 500;
    let interstateBusPackageValue = 150;
    let intercityBusPackageValue = 50;
    let localBusPackageValue = 25;

    if(transport == 1 && modality == 1 && roundTrip == true) {
        return internationalPlanePackageValue * 2;
    } else if (transport == 1 && modality == 1 && roundTrip == false) {
        return internationalPlanePackageValue;
    } else if (transport == 1 && modality == 2 && roundTrip == true) {
        return nationalPlanePackageValue * 2;
    } else if (transport == 1 && modality == 2 && roundTrip == false) {
        return nationalPlanePackageValue;
    } else if (transport == 2 && modality == 3 && roundTrip == true) {
        return interstateBusPackageValue * 2;
    } else if (transport == 2 && modality == 3 && roundTrip == false) {
        return interstateBusPackageValue;
    } else if (transport == 2 && modality == 4 && roundTrip == true) {
        return intercityBusPackageValue * 2;
    } else if (transport == 2 && modality == 4 && roundTrip == false) {
        return intercityBusPackageValue;
    } else if (transport == 2 && modality == 5 && roundTrip == true) {
        return localBusPackageValue * 2;
    } else if (transport == 2 && modality == 5 && roundTrip == false) {
        return localBusPackageValue;
    } else {
        return null;
    }
}