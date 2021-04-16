let checMenuMobile = document.getElementById('check-menu-mobile');
let overflowBlock = document.querySelector('.overflow');

checMenuMobile.onclick = function () {
    overflowBlock.classList.toggle("display-block");
    document.body.classList.toggle("body-overflow");

};

overflowBlock.addEventListener('click', () => {
    checMenuMobile.checked = false;
    overflowBlock.classList.toggle("display-block");
    document.body.classList.toggle("body-overflow");
});


