document.addEventListener('DOMContentLoaded', function(){

    const buttons = document.querySelectorAll('[data-tab-button]');
    

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(button){
            const tabAlvo = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabAlvo}]`);
            escondeTodasAsAbas();
            tab.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            button.target.classList.add('shows__tabs__button--is-active');
            
        })
    }


})

function removeBotaoAtivo (){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAsAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }

}