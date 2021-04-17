
const form = document.getElementById('form');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    let formData = {
        name: document.querySelector(".tour__price-input[name='name'").value,
        email: document.querySelector(".tour__price-input[name='email'").value,
    };

    let request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        consile.log(request).response;
        alert('Ваша заявка успешно отправлена');
        form.innerHTML = '<h2>Спасибо за заявку</h2>';
    });

    request.open('POST', '/sendmail.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded', 'charset=UTF-8');
    request.send('name=' + encodeURIComponent(formData.name) + '&email=' + encodeURIComponent(formData.email));
});



