let left = document.querySelector('.bi-caret-left-fill');
let right = document.querySelector('.bi-caret-right-fill');
let cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click', ()=> {
    cards.scrollLeft -= 140;
})

right.addEventListener('click', ()=> {
    cards.scrollLeft += 140;
})

const descripciones = [
    "Hola como estas", 
    "sabe a coco",
    "sabe muy rica jajaja",
    "esta es de nuestras favoritas"
]

let poster = document.getElementById('poster');
let title = document.getElementById('title');
let price = document.getElementById('price_cont');
let info = document.getElementById('description');

Array.from(document.getElementsByClassName('card')).forEach((ele, i) => {
    ele.addEventListener('click', () => {
        poster.src = ele.getElementsByTagName('img')[0].src;
        title.src = ele.getElementsByTagName('h5')[0].src;
        price.src = ele.getElementsByTagName('h4')[0].src;
        info.src = ele.getElementsByTagName('h1')[0].src;
    })
})


