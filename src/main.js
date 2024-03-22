document.addEventListener('DOMContentLoaded', function(){

    //seção de atrações
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

    //seção de FAQ
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < questions.length; i++) {
        questions[i]. addEventListener('click', abreOuFechaResposta)
        
    }

    //programação do cabeçalho
    const heroSection = document.querySelector('.hero');
    const alturaHero =  heroSection.clientHeight;
    
    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY

        if(posicaoAtual < alturaHero){
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

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

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe)
}

const header = document.querySelector('header')

function ocultaElementosDoHeader() {
    header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader() {
    header.classList.remove('header--is-hidden')
}