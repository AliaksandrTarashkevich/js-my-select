let showDrop = function () {
    const select = document.querySelectorAll('#select');
    const selectItem = document.querySelectorAll('.select__item');

    select.forEach(item => {
        item.addEventListener('click', selectToggle);
    })

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    })

    function selectChoose() {
        let text = this.innerText,
        selectCur = document.querySelector('.select__current');
        selectCur.innerText = text;
    }

    function selectToggle() {
        this.classList.toggle('active');
    }
};

showDrop();