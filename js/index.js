let container_card = document.querySelector('.envelope');

document.addEventListener("DOMContentLoaded", () => {
    if(!container_card.classList.contains('open')){
        container_card.addEventListener("click", () => {
            container_card.classList.remove('new');
            container_card.classList.add('open');
        });
    }
});
