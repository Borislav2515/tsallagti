const accordionItemHeaders = document.querySelectorAll('.accordion__item-header');

accordionItemHeaders.forEach(accordionItemHeaders => {
    accordionItemHeaders.addEventListener('click', () => {
        accordionItemHeaders.classList.toggle('active');
        const accordionItemBody = accordionItemHeaders.nextElementSibling;
        if (accordionItemHeaders.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
});
