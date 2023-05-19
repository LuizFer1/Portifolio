const control = document.querySelectorAll('.control')
let currentItem = 0
let itens = document.querySelectorAll('.card')
const maxItems = itens.length

control.forEach( control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('Arrow-left')
        if(isLeft){
            currentItem -= 1
        }else{
            currentItem += 1
        }
        if(currentItem >= maxItems){
            currentItem = 0
        }if(currentItem < 0){
            currentItem = maxItems - 1
        }

        itens.forEach( itens => itens.classList.remove('current-card'));

        itens[currentItem].scrollIntoView({
            inline:'center',
            behavior: 'smooth',
        })
        itens[currentItem].classList.add('current-card')
})})