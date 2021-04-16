// форма

function incr() {
    let totalPrice = document.querySelector('.tour__price-value');
    let numGuests = document.querySelector('.price__input');
    let startPrice = totalPrice.value;
    let x = numGuests.value;
    if (x >= 1) {
        let pluseGuests = Number(x) + Number(1);
        numGuests.value = pluseGuests;
        let totalResult = Number(startPrice) + Number(2000);
        totalPrice.value = totalResult;
    }
}

function decr() {
    let totalPrice = document.querySelector('.tour__price-value');
    let numGuests = document.querySelector('.price__input');
    let startPrice = totalPrice.value;
    let x = numGuests.value;
    if (x > 1) {
        let pluseGuests = Number(x) - Number(1);
        numGuests.value = pluseGuests;
        let totalResult = Number(startPrice) - Number(2000);
        totalPrice.value = totalResult;
    }
}


let totalPrice = document.querySelector('.tour__price-value');
let startPrice = totalPrice.value;
function totalPriceandCount() {
    let numGuests = document.querySelector('.price__input');
        let totalResult = Number(startPrice) * numGuests.value;
        totalPrice.value = totalResult;
}

function tourdate() {
    let dateIllusion = document.querySelector('.input__date-illusion');
    let dateInput = document.querySelector('.input__date');
    dateIllusion.innerHTML = dateInput.value;
}

//маска для номера тел
let phoneInput = document.querySelector('.input__tel');
phoneInput.addEventListener('keydown', function (event) {
    if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
        event.preventDefault()
    }
    var mask = '+7 (111) 111-11-11'; // Задаем маску

    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        // Здесь начинаем сравнивать this.value и mask
        // к примеру опять же
        var currentString = this.value;
        var currentLength = currentString.length;
        if (/[0-9]/.test(event.key)) {
            if (mask[currentLength] == '1') {
                this.value = currentString + event.key;
            } else {
                for (var i = currentLength; i < mask.length; i++) {
                    if (mask[i] == '1') {
                        this.value = currentString + event.key;
                        break;
                    }
                    currentString += mask[i];
                }
            }
        }
    }
});
