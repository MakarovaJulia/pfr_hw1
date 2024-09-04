const form = document.getElementById('filter_form');
const numberInput = document.getElementById('number');
const senderInput = document.getElementById('sender');
const recieverInput = document.getElementById('reciever');
const dateInput = document.getElementById('date');
const labelIcons = document.querySelectorAll('.icon-check');


labelIcons.forEach(labelIcon => labelIcon.style.display = 'none')

function isPositiveInteger(value) {
    const regex = /^[0-9]+$/;
    return regex.test(value);
}

function isValidString(value) {
    return typeof value === 'string' && value.trim() !== '' && !/^\d+$/.test(value);
}

function isValidDateRange(value) {
    const regex = /^(\d{2})\.(\d{2})\.(\d{4}) - (\d{2})\.(\d{2})\.(\d{4})$/;
    const matches = value.match(regex);
  
    if (!matches) {
      return false;
    }
  
    const [, day1, month1, year1, day2, month2, year2] = matches;
    const date1 = new Date(`${year1}-${month1}-${day1}`);
    const date2 = new Date(`${year2}-${month2}-${day2}`);
  
    return date1 <= date2;
}

function validateInput(input, maxLength, validator, labelIcon) {
    input.style.borderColor = '';
    labelIcon.style.display = 'none';
    
    if (input.value.length > maxLength || !validator(input.value)) {
        input.style.borderColor = 'red';
        return false;
    } else {
        input.style.borderColor = 'green';
        labelIcon.style.display = 'inline';
    }
    
    return true;
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let isError = false;
    
    isError = !validateInput(numberInput, 20, isPositiveInteger, labelIcons[0]) || isError;
    isError = !validateInput(senderInput, 50, isValidString, labelIcons[1]) || isError;
    isError = !validateInput(recieverInput, 50, isValidString, labelIcons[2]) || isError;
    isError = !validateInput(dateInput, 100, isValidDateRange, labelIcons[3]) || isError;
    
    if (isError) {
        return;
    }

    setTimeout(() => {
        alert('Форма отправлена!');
        window.location.href = "list.html"
      }, 1000);
    
});