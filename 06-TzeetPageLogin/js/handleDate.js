const monthSelect = document.getElementById('month');
const daySelect = document.getElementById('day');
const yearSelect = document.getElementById('year');

(function handleMonth() {

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    for (month of months) {
        const option = document.createElement('option');
        option.textContent = month;
        monthSelect.appendChild(option);
    }
})();

function handleDay(month) {

    while(daySelect.firstChild) {
        daySelect.removeChild(daySelect.firstChild);
    }

    let TotalDays;
    let year = yearSelect.value;

    if(month === 'Janeiro' || month === 'Março' || month === 'Maio' || month === 'Julho' || month === 'Agosto' || month === 'Outubro' || month === 'Dezembro') {
        TotalDays = 31;
    } else if(month === 'Abril' || month === 'Junho' || month === 'Setembro' || month === 'Novembro') {
        TotalDays = 30;
    } else {
        if (year % 4 === 0) {
            TotalDays = 29;
        } else {
            TotalDays = 28;
        }
    }

    for (let i = 1; i <= TotalDays; i++) {
        const option = document.createElement('option');
        option.textContent = i;
        daySelect.appendChild(option);
    }
}

function handleYear() {
    let year = new Date().getFullYear();
    for (let i = year; i >= year - 100; i--) {
        const option = document.createElement('option');
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

handleDay(monthSelect.value);
handleYear();

monthSelect.value = '';
daySelect.value = '';
yearSelect.value = '';

monthSelect.onchange = function() {
    handleDay(monthSelect.value);
}

yearSelect.onchange = function() {
    handleDay(monthSelect.value);
}